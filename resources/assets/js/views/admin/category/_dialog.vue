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
                        <Form-item label="分类名称" prop="name">
                            <i-input v-model="model.name" placeholder="请输入分类名称"></i-input>
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
            },
            list:{}
        },
        data: function () {
            return {
                categoryList:[],
                model: this.$modelDataSource({
                    url: '/api/admin/category',
                    dataKey: 'model',
                    attributes: {
                        id: 0,
                        name: '',
                        parent_id:0
                    }
                }),
                isLoading: false,
                ruleValidate: {
                    name: [
                        {required: true, message: '分类名称不能为空', trigger: 'blur'}
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
            addCategoryList:function () {
                let self = this;
                axios.get('/api/admin/category-select-data').then(function (res) {
                    self.categoryList = res.data.data;
                    console.log(self.categoryList);
                }).catch(function (res) {
                })
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
                                desc: self.model.name
                            });
                            self.isLoading = false;
                            self.closeDialog();
                            self.stateManager.refreshList = true;
                        }, function () {
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
                return '添加分类'
            }
        },
        created() {
            this.addCategoryList();
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