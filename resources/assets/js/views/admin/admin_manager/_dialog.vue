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
                        <Form-item label="姓名" prop="name">
                            <i-input v-model="model.name" placeholder="请输入姓名"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="邮箱" prop="email">
                            <i-input v-model="model.email" placeholder="请输入邮箱"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="用户名" prop="username">
                            <i-input v-model="model.username" placeholder="请输入用户名"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="电话号码" prop="mobile">
                            <i-input v-model="model.mobile" placeholder="请输入电话号码"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex" v-if="model.id==0">
                    <i-col span="24">
                        <Form-item label="密码" prop="password">
                            <i-input type="password" v-model="model.password" placeholder="请输入密码"></i-input>
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
            const validatePassword = (rule, value, callback) => {
                if (value.length >= 6 && value.length < 25) {
                    callback();
                } else {
                    callback(new Error('密码长度应为6-25个字符！'));
                }
            };
            const validateMobile = (rule,value,callback)=>{
                if (value.length == 0) {
                    callback(new Error('请填写电话号码'));
                } else if(!(/^1[34578]\d{9}$/.test(value))){
                    callback(new Error('请填写正确的电话号码'));
                }else{
                    callback();
                }
            };
            return {
                model: this.$modelDataSource({
                    url: '/api/admin/manager',
                    dataKey: 'model',
                    attributes: {
                        id: 0,
                        name: '',
                        email: '',
                        mobile: '',
                        username: '',
                        password: ''
                    }
                }),
                isLoading: false,
                ruleValidate: {
                    name: [
                        {required: true, message: '姓名不能为空', trigger: 'blur'}
                    ],
                    mobile: [
                        {required: true, validator: validateMobile, trigger: 'blur'}
                    ],
                    username: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, validator: validatePassword, trigger: 'blur'}
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
                                desc: self.model.name
                            });
                            self.isLoading = false;
                            self.closeDialog();
                            self.stateManager.refreshList = true;
                        }, function () {
//                            console.log(error.data);
//                            self.$Notice.error({
//                                title: error.data.message,
//                                desc: self.model.name
//                            });
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
                return '添加管理员'
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