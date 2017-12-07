<template>
    <vue-table :data-source="tableList" :search-config="searchConfig" @on-query="changeQuery">
        <template slot="search" slot-scope="props">
            <i-input v-model="props.items.keyword" placeholder="请输入关键字"></i-input>
        </template>
        <template slot="header">
            <tr>
                <th>ID</th>
                <th>姓名</th>
                <th>用户名</th>
                <th>邮箱</th>
                <th>操作</th>
            </tr>
        </template>
        <template slot="tbody" slot-scope="props">
            <tr>
                <td>{{props.item.id}}</td>
                <td>{{props.item.name}}</td>
                <td>{{props.item.username}}</td>
                <td>{{props.item.email}}</td>
                <td class="col-xs-3">
                    <Tooltip content="密码重置" placement="top">
                        <i-button type="text" v-on:click="resetPassword(props.item.id, props.item.name)"
                                  :disabled="stateManager.buttonLoading">
                            <Icon type="key" size="16"></Icon>
                        </i-button>
                    </Tooltip>
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
  import resetPassword from '../../../components/resetPassword.vue'
  export default {
    props: {
      stateManager: {
        type: Object
      }
    },
    components: {
      resetPassword
    },
    data: function () {
      const validatePassword = (rule, value, callback) => {
        console.log(value)
        if (value.length < 6 || value.length > 25) {
          callback(new Error('密码长度应为6-25个字符！'))
        } else {
          callback()
        }
      }
      return {
        list: this.$listDataSource({
          url: '/api/admin/admin'
        }),
        ruleValidate: {
          newPassword: [
            {required:true, validator: validatePassword, trigger: 'blur'}
          ]
        },
        searchConfig: {
          items: {
            keyword: ''
          },
          status: true,
          complex: false
        },
        model: this.$modelDataSource({
          url: '/api/admin/manager',
          dataKey: 'model',
          attributes: {
            id: 0
          }
        }),
        query: {},
        newModel: {
          newPassword: ''
        },
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
      resetPassword: function (userId, userName) {
        let self = this;
        self.$Modal.confirm({
          title: '重置登录密码',
          render: (h) => {
            return h('div', [
              h('h4', userName),
               h('Form', {
                   props: {
                       ref: 'model',
                       model: self.newModel,
                       rules: self.ruleValidate,
                   }
               }, [
                   h('FormItem', {
                       props: {
                           prop: 'newPassword',
                       }
                   }, [
                       h('Input', {
                           props: {
                               type: 'password',
                               value: self.newModel.newPassword,
                               autofocus: true,
                               placeholder: '请输入新密码！',
                           },
                           on: {
                               input: (val) => {
                                   self.newModel.newPassword = val;
                               }
                           }
                       })
                   ])

               ])
            ]);
          },
          loading: true,
          onOk: function () {
            if (self.newModel.newPassword.length < 6 || self.newModel.newPassword.length > 25) {
              self.$Modal.remove();
              self.newModel.newPassword = '';
              self.$Notice.error({
                title: '错误',
                desc: '密码长度应该为6-25个字符'
              });
            } else {
              axios.post('/api/admin/reset-password/' + userId, {
                password: self.newModel.newPassword
              }).then(function (response) {
                self.$Modal.remove();
                self.$Notice.success({
                  title: '重置成功',
                  desc: userName + '已重置密码'
                });
                self.newModel.newPassword = '';
              }).catch(function (error) {
                console.log(error);
                self.newModel.newPassword = '';
              })
            }
          },
          onCancel: function () {
            console.log('取消重置');
            self.newModel.newPassword = '';
          }
        });
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
        return this.list;
      }
    }
  }
</script>