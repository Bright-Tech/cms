<template>
    <div>
        <bs4-card>
            <div slot="header" class="row">
                <div class="col-auto mr-auto">网站设置</div>
            </div>
            <div type="flex" class="d-flex flex-column">

                <div v-for="(item,index) in siteData">
                    <div type="flex" class="d-flex t_item_textarea align-items-center"
                         v-if="item.key == 'description' ">
                        <div class="title_name">{{item.label}}</div>
                        <Input type="textarea" v-model="item.value" size="large" :autosize="{minRows: 6,maxRows: 10}"
                               :placeholder="item.description" class="col-8 textarea.ivu-input"/>
                    </div>
                    <div type="flex" class="d-flex t_item align-items-center" v-else>
                        <div class="title_name">{{item.label}}</div>
                        <Input v-model="item.value" size="large" :placeholder="item.description"
                               class="col-8 ivu-input-large"/>
                    </div>
                </div>

                <div type="flex" class="d-flex t_item align-items-center">
                    <div class="title_name">&nbsp;</div>

                    <i-button type="primary" @click="saveSetting()" :loading="isLoading" class="col-6 ive-btn_confirm"
                              style="margin-left: 65px;">确定
                    </i-button>
                </div>

                <i-col span="24">
                    <div class="demo-spin-article">
                        <Spin fix size="large" v-if="refreshList"></Spin>
                    </div>
                </i-col>

            </div>

        </bs4-card>
    </div>
</template>

<script>
    export default {
        name: 'siteSettings',
        components: {},
        data: function () {
            return {
                value: '',
                isLoading: false,
                refreshList: true,
                siteData: []
            };
        },
        created() {
            this.initData();
        },
        methods: {
            initData: function () {
                var self = this;
                axios({
                    method: 'get',
                    url: self.apiBaseUrl + '/api/admin/option',
                }).then(function (response) {
                    self.refreshList = false
                    if (response.data.data) {
                        console.log(response.data.data);
                        self.siteData = response.data.data;
                    } else {
                        self.$Notice.success({
                            title: response.data,
                            desc: response.data
                        });
                    }
                }).catch(function (error) {
                    console.log('Error', error.message);
                });
            },
            saveSetting: function () {
                let self = this
                if (self.siteData != null) {
                    self.isLoading = true;

                    let tempPushData = []
                    for (var k = 0, length = self.siteData.length; k < length; k++) {
                        tempPushData[self.siteData[k].key] = self.siteData[k].value;

                    }
                    console.log(tempPushData)
                    axios.post(self.apiBaseUrl + '/api/admin/option', {
                        'title': tempPushData['title'],
                        'logo': tempPushData['logo'],
                        'description': tempPushData['description'],
                        'icp': tempPushData['icp'],
                        'web_analytics_code': tempPushData['web_analytics_code'],
                        'keywords': tempPushData['keywords'],
                        'domain': tempPushData['domain'],
                    }).then(function (response) {
                        self.isLoading = false;
                        self.$Notice.success({
                            title: response.data,
                            desc: response.data
                        });
                    }).catch(function (error) {
                        self.isLoading = false;
                        self.$Notice.success({
                            title: '失败了',
                            desc: error
                        });
                    });
                }

            }
        },
        computed: {
            apiBaseUrl() {
                return window.Laravel.baseUrl;
            }
        },
    }
</script>

<style>
    .t_item {
        margin-top: 15px;
        height: 50px;
    }

    .t_item_textarea {
        margin-top: 15px;
    }

    .title_name {
        width: 150px;
        color: #676a6c;
        font-size: 13px;
        font-weight: bold;
    }

    .ivu-input-large {
        font-size: 13px;
        height: 42px;
    }

    .ive-btn_confirm {
        height: 42px;
        font-size: 15px;
    }

    textarea.ivu-input {
        font-size: 13px;
    }

</style>