<template>
    <vue-img-table :data-source="tableList" :search-config="searchConfig" @on-query="changeQuery">
        <!--<template slot="search" slot-scope="props">-->
        <!--<i-input v-model="props.items.keyword" placeholder="请输入关键字"></i-input>-->
        <!--</template>-->
        <template slot="ibody" slot-scope="props">
            <div class="card border border-primary" style="margin-top: 15px;margin-right: 15px" v-on:click="showDelImgDialog(props.item.id)">
                <img class="card-img-top"  style=" width: 160px;  height: 110px;" :src="imgBaseUrl+ props.item.path">
            </div>
        </template>
    </vue-img-table>
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
                    url: '/api/admin/asset'
                }),
                searchConfig: {
                    items: {
                        keyword: ''
                    },
                    status: false,
                    complex: false
                },
                model: this.$modelDataSource({
                    url: '/api/admin/asset',
                    dataKey: 'model',
                    attributes: {
                        id: 0
                    }
                })
            };
        },
        methods: {
            showDelImgDialog: function (id) {
                this.stateManager.delModelId = id;
                this.stateManager.deleteImgDialogVisible = true;
            },
            changeQuery: function (query) {
                this.query = _.merge(this.defaultQuery, query);
                this.stateManager.refreshList = true;
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
            imgBaseUrl(){
                return window.Laravel.imgBaseUrl;
            },
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