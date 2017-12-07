<template>
    <div class="vue-table-container">
        <Row v-if="searchConfig.status" className="search-box">
            <i-col span="20">
                <slot name="search" :items="searchConfig.items"></slot>
            </i-col>
            <i-col span="3" offset="1">
                <Tooltip content="高级检索" v-if="searchConfig.complex" placement="top">
                    <i-button type="text"  @click="openComplex">
                        <Icon :type="complexOpen ? 'chevron-up' : 'chevron-down'" size="18"></Icon>
                    </i-button>
                </Tooltip>
                <i-button type="ghost" icon="ios-search" @click="search">检索</i-button>
            </i-col>
        </Row>
        <div class="d-flex flex-row flex-wrap ">
            <slot name="ibody" v-for="item in dataSource.items" :item="item"></slot>
        </div>
        <div class="widget-toolbox padding-10 clearfix" style="margin-top: 15px;">
            <pagination :page-count="dataSource.pageCount"
                        :total="dataSource.total"
                        :current-page="dataSource.currentPage" @goPage="goPage"></pagination>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            dataSource: {
                type: Object,
                default: []
            },
            searchConfig: {
                type: Object,
                default: {
                    status: false,
                    items: {},
                    complex: false
                }
            }
        },
        data: function () {
            return {
                complexOpen: false
            }
        },
        methods: {
            search: function () {
                let self = this;
                this.$emit('on-query', self.searchConfig.items);
            },
            goPage: function (event) {
                let self = this;
                let query = _.assign({page: event.page}, self.searchConfig.items);
                this.$emit('on-query', query);
            },
            openComplex: function () {
                if (this.complexOpen){
                    this.complexOpen = false;
                }else{
                    this.complexOpen = true;
                }
                this.$emit('open-complex', this.complexOpen);
            }
        }
    }
</script>
<style scoped lang="scss">
    .search-box{
        /*width: 90%;*/
        height: auto;
        margin: 15px auto;
    }
    .table-container {
        text-align: center;
        font-size: 13px;
        .table {
            th,td {
                padding: 0.5rem;
                vertical-align: middle !important;
            }
        }
    }
</style>