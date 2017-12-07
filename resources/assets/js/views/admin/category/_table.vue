<template>
    <vue-table :data-source="tableList" :search-config="searchConfig" @on-query="changeQuery">
        <template slot="search" slot-scope="props">
            <i-input v-model="props.items.keyword" placeholder="请输入关键字"></i-input>
        </template>
        <template slot="header">
            <tr>
                <th>ID</th>
                <th>名称</th>
                <th>操作</th>
            </tr>
        </template>
        <template slot="tbody" slot-scope="props">
            <tr>
                <td>{{props.item.id}}</td>
                <td>{{props.item.name}}</td>
                <td class="col-xs-3">
                    <Tooltip content="编辑" placement="top">
                        <i-button type="text" v-on:click="updateModel(props.item.id)"
                                  :disabled="stateManager.buttonLoading">
                            <Icon type="edit" size="16"></Icon>
                        </i-button>
                    </Tooltip>
                    <Tooltip content="删除" placement="top">
                        <i-button type="text" v-on:click="deleteModel(props.item.id, props.item.name)"
                                  :disabled="stateManager.buttonLoading">
                            <Icon type="trash-a" size="16"></Icon>
                        </i-button>
                    </Tooltip>
                </td>
            </tr>
        </template>
    </vue-table>
</template>


<script>
  export default {
    props: {
      stateManager: {
        type: Object
      }
    },
    data: function () {
      return {
        list: this.$listDataSource({
          url: '/api/admin/category'
        }),
        searchConfig: {
          items: {
            keyword: ''
          },
          status: true,
          complex: false
        },
        model: this.$modelDataSource({
          url: '/api/admin/category',
          dataKey: 'model',
          attributes: {
            id: 0
          }
        }),
        query: {},
        newPassword: ''
      };
    },
    methods: {
      showEditDialog: function (id) {
        this.stateManager.editModelId = id;
        this.stateManager.buttonLoading = true;
      },
      changeQuery: function (query) {
        this.query = query;
        this.stateManager.refreshList = true;
      },
        updateModel: function (userId) {
          this.stateManager.editDialogVisible = true;
          this.stateManager.editModelId = userId;
      },
      deleteModel: function (modelId, modelName) {
        console.log(modelId);
        let self = this;
        axios.get('/api/admin/category/check-content/'+modelId).then(response => {
            console.log(response)
            let str = '确认删除' + modelName + '吗，删除后无法恢复'
            if(response.data.state ==='该分类下有内容，是否继续删除'){
                str='该分类下有内容，是否继续删除'
            }
            self.$Modal.confirm({
                title: '删除确认',
                content: str,
                loading: true,
                onOk: function () {
                    self.model.reset();
                    self.model.uuid = modelId;
                    self.model.destroy(function (response) {
                        console.log()
//                if(response.data.state === '该分类下有内容，是否继续删除？'){
//                    self.$Notice.warning({
//                        title: '删除成功',
//                        desc: modelName + '已删除'
//                    });
//                }else{
                        self.$Modal.remove();
                        self.stateManager.refreshList = true;
                        self.$Notice.success({
                            title: '删除成功',
                            desc: modelName + '已删除'
                        });

                    });
                },
                onCancel: function () {
                    console.log('取消删除');
                }
            });
        });

      },
    },
    computed: {
      user(){
        return this.$store.state.user;
      },
      tableList(){
        let self = this;
        if (this.stateManager.refreshList) {
          this.list.fetch(self.query, function () {
            self.stateManager.refreshList = false;
          });
        }
        return this.list;
      }
    }
  }
</script>