<template>
    <div id="delete-edit-container">
        <!-- use the modal component, pass in the prop -->
        <Modal v-model="stateManager.deleteImgDialogVisible"
               :title="modalTitle"
               width="60%"
               label-position="top"
               @on-cancel="closeDialog"
               :styles="{top: '60px', bottom:'60px'}"
               :mask-closable="false" ref="model" :model="model">

            <Row>
                <img :src="imgBaseUrl + model.path" class="img-content-container">
            </Row>

            <template slot="footer">
                <Row type="flex">
                    <i-col span="24">
                        <div class="pull-right">
                            <i-button type="error" @click="deleteModel(model.id)" :loading="isLoading">删除</i-button>
                            <i-button type="primary" @click="closeDialog">关闭</i-button>
                        </div>
                    </i-col>
                </Row>
            </template>
        </Modal>
    </div>
</template>

<style>
    .img-content-container {
        width: 100%;
        text-align: center;
    }
</style>

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
                        path: ''
                    }
                }),
                isLoading: false,
                uploadHeaders: window.uploadHeaders
            };
        },
        methods: {
            closeDialog: function () {
                this.stateManager.deleteImgDialogVisible = false;
                this.model.reset();
                this.stateManager.delModelId = 0;
            },

            deleteModel: function (modelId) {
                console.log(modelId);
                let self = this;
                this.$Modal.confirm({
                    title: '删除确认',
                    content: '确认删除吗，删除后无法恢复',
                    loading: true,
                    onOk: function () {
                        self.model.reset();
                        self.model.uuid = modelId;
                        self.model.destroy(function () {
                            self.$Modal.remove();
                            self.stateManager.refreshList = true;
                            self.stateManager.deleteImgDialogVisible = false;
                            self.$Notice.success({
                                title: '删除成功',
                                desc: '已删除'
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
            modalTitle: function () {
                return '查看素材';
            },
            imgBaseUrl(){
                return window.Laravel.imgBaseUrl;
            }
        },
        watch: {
            'stateManager.delModelId': function (newValue) {
                console.log(newValue)
                let self = this;
                this.model.fetch(newValue, {}, function () {
                    self.stateManager.buttonLoading = false;
                    self.stateManager.deleteImgDialogVisible = true;
                }, function () {
                    self.stateManager.buttonLoading = false;
                });
            }
        }
    }
</script>