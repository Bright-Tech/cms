<template>
    <div id="create-edit-container">
        <!-- use the modal component, pass in the prop -->
        <Modal v-model="stateManager.editDialogVisible"
               :title="modalTitle"
               width="60%"
               @on-cancel="closeDialog"
               :styles="{top: '20px'}"
               :mask-closable="false">

            <i-form ref="model" :model="model" :rules="ruleValidate">
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="名称" prop="label">
                            <i-input v-model="model.label" placeholder="请输入名称"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="关键字" prop="key">
                            <i-input v-model="model.key" placeholder="请输入关键字"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="值" prop="value">
                            <i-input v-model="model.value" placeholder="请输入值"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

            </i-form>

            <template slot="footer">
                <Row type="flex">
                    <i-col span="24">
                        <div class="pull-right">
                            <i-button type="ghost" @click="closeDialog">取消</i-button>
                            <i-button type="primary" @click="saveModel" :loading="isLoading">确定</i-button>
                        </div>
                    </i-col>
                </Row>
            </template>
        </Modal>
    </div>
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
        model: this.$modelDataSource({
          url: '/api/admin/property',
          dataKey: 'model',
          attributes: {
            id: 0,
            name:'',
            key: '',
            value: ''
          }
        }),
        isLoading: false,
        ruleValidate: {
            label: [
                {required: true, message: '名称不能为空', trigger: 'blur'}
            ],
            key: [
            {required: true, message: '关键字不能为空', trigger: 'blur'}
          ],
            value: [
            {required: true, message: '值不能为空', trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      closeDialog: function () {
        this.stateManager.editDialogVisible = false;
        this.model.reset();
        this.$refs['model'].resetFields();
        this.stateManager.editModelId = 0;
      },
      saveModel: function () {
        let self = this;
        self.$refs['model'].validate((valid) => {
          if (valid) {
            console.log('表单验证通过');
            self.isLoading = true;
             self.model.save(function () {
              self.$Notice.success({
                title: '保存成功',
              });
              self.isLoading = false;
              self.closeDialog();
              self.stateManager.refreshList = true;
            }, function () {
                console.log("保存失败");
                self.isLoading = false;
            });
          } else {
            console.log('表单验证失败');
          }
        });
      }
    },
    computed: {
      modalTitle: function () {
        return '添加参数'
      }
    },
    watch: {
      'stateManager.editModelId': function (newValue) {
        let self = this;
        this.model.fetch(newValue, {}, function () {
          self.stateManager.buttonLoading = false;
          self.stateManager.editDialogVisible = true;
        }, function () {
          self.stateManager.buttonLoading = false;
        });
      }
    }
  }
</script>