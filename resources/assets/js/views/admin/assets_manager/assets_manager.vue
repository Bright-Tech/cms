<template>
    <div>
        <bs4-card>
            <div slot="header" class="row">
                <div class="col-auto mr-auto">素材管理</div>
                <div class="col-auto">
                    <Upload multiple action="/api/admin/asset"
                            ref="upload"
                            :show-upload-list="showUploadList"
                            :headers="uploadHeaders"
                            :on-error="uploadFailedCallback"
                            :before-upload="handleBeforeUpload"
                            :on-success="uploadSuccessCallback"
                            :max-size="10240"
                            :format="['jpg', 'jpeg', 'png']">

                        <Button type="primary" size="small" >添加素材
                        </Button>
                    </Upload>
                </div>
            </div>
            <Row type="flex">
                <i-col span="24">
                    <div class="demo-spin-article">
                        <el-list :stateManager="stateManager"></el-list>
                        <Spin fix size="large" v-if="stateManager.refreshList"></Spin>
                    </div>
                </i-col>
                <el-del-dialog :stateManager="stateManager"></el-del-dialog>
            </Row>
        </bs4-card>
    </div>
</template>

<script>
    import _dialog from './_dialog.vue';
    import _table from './_table.vue';
    import _del_dialog from './_del_dialog.vue';
    export default {
        name: 'assetsManager',
        components: {
            'el-list': _table,
            'el-del-dialog': _del_dialog
        },

        data: function () {
            return {
                stateManager: {
                    refreshList: true,
                    editDialogVisible: false,
                    editModelId: 0,
                    delModelId: 0,
                    buttonLoading: false,
                    deleteImgDialogVisible: false
                },
                uploadHeaders: window.uploadHeaders,
                showUploadList: false,
                percentage: 0
            };
        },
        created () {
        },
        methods: {
            showEditDialog: function (id) {
                this.stateManager.editDialogVisible = true;
                this.stateManager.editModelId = id;
            },
            uploadSuccessCallback: function (response, file) {
                let self = this
                //上传成功回调
                console.log(file);
                console.log(response);
                this.$Notice.success({
                    title: '上传成功',
                    desc: ''
                });
                this.stateManager.refreshList = true;
                setTimeout(function (){

                    self.showUploadList = false;
                    self.$refs.upload.fileList = []
                }, 1000);

            },
            uploadFailedCallback: function (error, file) {
                //上传失败回调
                console.log(error);
                console.log(file);
                this.showUploadList = false;
                this.$Notice.error({
                    title: '上传失败',
                    desc: error
                });
            },

            handleBeforeUpload () {
                this.$refs.upload.fileList = []
                this.showUploadList = true
                return true
            }
        }
    }
</script>