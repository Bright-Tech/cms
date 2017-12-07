<template>
    <vue-table :data-source="tableList" :search-config="searchConfig" @on-query="changeQuery">
        <template slot="search" slot-scope="props">
            <i-input v-model="props.items.keyword" placeholder="请输入关键字"></i-input>
        </template>
        <template slot="header">
            <tr>
                <th>ID</th>
                <th>名称</th>
                <th>分类名称</th>
                <th>指向类型</th>
                <th>父级导航</th>
                <th>内容名称</th>
                <th>操作</th>
            </tr>
        </template>
        <template slot="tbody" slot-scope="props">
            <tr>
                <td>{{props.item.id}}</td>
                <td>{{props.item.name}}</td>
                <td>{{props.item.point_category_name}}</td>
                <td>{{trans('content_picture.point_type', props.item.point_type)}}</td>
                <td>{{props.item.parent_navigation_name}}</td>
                <td>{{props.item.point_content_name}}</td>
                <td>
                    <Tooltip content="编辑" placement="top">
                        <i-button type="text" v-on:click="showEditDialog(props.item.id)"
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
  import Trans from '../../../libs/trans'
  export default {
    props: {
      stateManager: {
        type: Object
      }
    },
    data: function () {
      return {
        list: this.$listDataSource({
          url: '/api/admin/navigation'
        }),
        searchConfig: {
          items: {
            keyword: ''
          },
          status: true,
          complex: false
        },
        model: this.$modelDataSource({
          url: '/api/admin/navigation',
          dataKey: 'model',
          attributes: {
            id: 0
          }
        }),
        query: {include: ['point_content_name', 'parent_navigation_name', 'point_category_name']},
        defaultQuery: {include: ['point_content_name', 'parent_navigation_name', 'point_category_name']},
      };
    },
    methods: {
      trans (type, index) {
        return Trans.trans(type, index);
      },
      changeQuery: function (query) {
        this.query = _.merge(this.defaultQuery, query);
        this.stateManager.refreshList = true;
      },
      showEditDialog: function (id) {
        this.stateManager.editModelId = id;
        this.stateManager.buttonLoading = true;
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
        return this.$store.state.admin.user;
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