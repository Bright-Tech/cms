<template>
    <div id="create-edit-container">
        <!-- use the modal component, pass in the prop -->
        <Modal v-model="stateManager.editDialogVisible"
               :title="modalTitle"
               width="60%"
               label-position="top"
               @on-cancel="closeDialog"
               :styles="{top: '60px'}"
               :mask-closable="false">

            <i-form ref="model" :model="model" :rules="ruleValidate">
                <Row>
                    <i-col span="24">
                        <Form-item label="上传素材图" prop="intro_img">
                            <Upload type="drag" action="/api/admin/asset"
                                    ref="upload"
                                    :headers="uploadHeaders"
                                    :on-success="uploadSuccessCallback"
                                    :on-error="uploadFailedCallback"
                                    :show-upload-list="false"
                                    :max-size="10240"
                                    :data="{name: model.title ? model.title : ''}"
                                    :format="['jpg', 'jpeg', 'png']"
                                    style="margin-top: 40px">
                                <div style="padding: 20px 0" v-if="model.intro_img === ''">
                                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                                    <p>点击或将文件拖拽到这里上传</p>
                                </div>
                                <div v-else>
                                    <img :src="imgBaseUrl + model.intro_img" style="max-width: 100%">
                                </div>
                            </Upload>
                            <i-input type="text" v-model="model.intro_img" hidden></i-input>
                        </Form-item>
                    </i-col>
                </Row>

            </i-form>

            <template slot="footer">
                <Row type="flex">
                    <i-col span="24">
                        <div class="pull-right">
                            <i-button type="primary" @click="closeDialog">关闭</i-button>
                            <!--<i-button type="primary" @click="saveModel" :loading="isLoading">确定</i-button>-->
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
        components: {},
        data: function () {
            return {
                model: this.$modelDataSource({
                    url: '/api/admin/asset',
                    dataKey: 'model',
                    attributes: {
                        id: 0,
                        title: '',
                        sub_title: '',
                        intro_img: '',
                        content: '',
                        categories: [],
                        keywords: ''
                    }
                }),
                isLoading: false,
                ruleValidate: {
                    intro_img: [
                        {required: true, message: '图片不能为空', trigger: 'blur'}
                    ]
                },
                uploadHeaders: window.uploadHeaders
            };
        },
        methods: {
            closeDialog: function () {
                this.stateManager.editDialogVisible = false;
                this.model.reset();
                this.$refs['model'].resetFields();
                this.stateManager.editModelId = 0;
            },
            uploadSuccessCallback: function (response, file) {
                //上传成功回调
                console.log(file);
                console.log(response);
                this.model.intro_img = response.data.path;
                this.$Notice.success({
                    title: '上传成功',
                    desc: ''
                });
                this.isLoading = false;
                this.stateManager.refreshList = true;
            },
            uploadFailedCallback: function (error, file) {
                //上传失败回调
                console.log(error);
                console.log(file);
                this.$Notice.error({
                    title: '上传失败',
                    desc: error
                });
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
                if (this.model.id === 0) {
                    return '添加素材';
                } else {
                    return '修改素材';
                }
            },
            imgBaseUrl(){
                return window.Laravel.imgBaseUrl;
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