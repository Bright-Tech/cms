<template>
    <vue-table :data-source="tableList" :search-config="searchConfig" @on-query="changeQuery">
        <template slot="search" slot-scope="props">
            <i-input v-model="props.items.keyword" placeholder="请输入关键字"></i-input>
        </template>
        <template slot="header">
            <tr>
                <th>ID</th>
                <th>名称</th>
                <th>关键字</th>
                <th>值</th>
                <th>操作</th>
            </tr>
        </template>
        <template slot="tbody" slot-scope="props">
            <tr>
                <td>{{props.item.id}}</td>
                <td>{{props.item.label}}</td>
                <td>{{props.item.key}}</td>
                <td>{{props.item.value}}</td>
                <td class="col-xs-3">
                    <Tooltip content="编辑" placement="top">
                        <i-button type="text" v-on:click="updateSet(props.item.id)"
                                  :disabled="stateManager.buttonLoading">
                            <Icon type="edit" size="16"></Icon>
                        </i-button>
                    </Tooltip>
                    <Tooltip content="删除" placement="top">
                        <i-button type="text" v-on:click="deleteModel(props.item.id, props.item.label)"
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
          url: '/api/admin/property'
        }),
        searchConfig: {
          items: {
            keyword: '',
          },
          status: true,
          complex: false
        },
        model: this.$modelDataSource({
          url: '/api/admin/property',
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
//      showEditDialog: function (id) {
//        this.stateManager.editModelId = id;
//        this.stateManager.buttonLoading = true;
//      },
      changeQuery: function (query) {
        this.query = query;
        this.stateManager.refreshList = true;
      },
        updateSet: function (id) {
          this.stateManager.editDialogVisible = true;
          this.stateManager.editModelId =id;
      },
      deleteModel: function (modelId, modelName) {
        console.log(modelId);
        let self = this;
        this.$Modal.confirm({
          title: '删除确认',
          content: '确认删除' + modelName + '吗，删除后无法恢复',
          loading: true,
          onOk: function () {
            self.model.reset();
            self.model.uuid = modelId;
            self.model.destroy(function () {
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
//        console.log(this.list);
        return this.list;
      },
    }
  }
</script>
