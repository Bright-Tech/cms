<template>
    <div>
        <bs4-card>
            <div slot="header" class="row">
                <div class="col-auto mr-auto">分类管理</div>
                <div class="col-auto">
                    <i-button type="primary" size="small" slot="extra" v-on:click="showEditDialog(0)"
                              :disabled="stateManager.buttonLoading">添加新分类</i-button>
                </div>
            </div>
            <Row type="flex">
                <i-col span="24">
                    <div class="demo-spin-article">
                        <el-list :stateManager="stateManager"></el-list>
                        <Spin fix size="large" v-if="stateManager.refreshList"></Spin>
                    </div>
                </i-col>
                <el-dialog :stateManager="stateManager"></el-dialog>
            </Row>
        </bs4-card>
    </div>
</template>

<script>
    import _dialog from './_dialog.vue';
    import _table from './_table.vue';
    export default {
        name: 'admin',
        components: {
            'el-dialog': _dialog,
            'el-list': _table
        },
        data: function () {
            return {
                stateManager: {
                    refreshList: true,
                    editDialogVisible: false,
                    editModelId: 0,
                    buttonLoading: false
                }
            };
        },
        methods: {
            showEditDialog: function (id) {
                this.stateManager.editDialogVisible = true;
                this.stateManager.editModelId = id;
            }
        }
    }
</script>