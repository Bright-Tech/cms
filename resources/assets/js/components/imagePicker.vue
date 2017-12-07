<template>
    <div class="chose-picture-container">
        <div class="container">
            <div class="row">
                <div class="col">
                    <i-input type="text" v-model="keywords" placeholder="请输入关键字"></i-input>
                </div>
                <div class="col-auto">
                    <i-button type="primary" @click="doSearch">检索</i-button>
                </div>
                <div class="col-auto">
                    <Upload action="/api/admin/asset"
                            ref="localUpload"
                            :max-size="10240"
                            :format="['jpg', 'jpeg', 'png']"
                            :headers="uploadHeaders"
                            :on-success="uploadSuccessCallback"
                            :on-error="uploadFailedCallback"
                            :data="{name: imageName}">
                        <i-button type="ghost" icon="ios-cloud-upload-outline">上传本地文件</i-button>
                    </Upload>
                </div>
            </div>
            <div class="row">
                <template v-for="item in imageList">
                    <div class="col-3 p-1 pic-div">
                        <a :key="item.path" @click="chosePicture(item.path, item.id, item.name)">
                            <figure class="figure p-1" :id="'picture_' + item.id">
                                <img :src="imgBaseUrl + item.thumb" :alt="item.name" class="figure-img img-fluid">
                                <figcaption >{{item.name}}</figcaption>
                                <div  :class="{picActiveClass: item.id === currentId}"><Icon type="checkmark"></Icon></div>
                            </figure>
                        </a>
                    </div>
                </template>
            </div>
            <div class="widget-toolbox padding-10 clearfix">
                <pagination :page-count="pageMeta.last_page"
                            :total="pageMeta.total"
                            :current-page="pageMeta.current_page" @goPage="goPage"></pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import assetsApi from '../api/admin/assets'
    export default {
      data () {
        return {
          keywords: '',
          imageName: '',
          uploadHeaders: window.uploadHeaders,
          imageList: [],
          pageMeta: {
            last_page: 0,
            total: 0,
            current_page: 0
          },
          currentUrl: '',
          currentName: '',
          currentId: 0,
          query: {},
          defaultQuery: {}
        }
      },
      created () {
        this.getAssetsList()
      },
      methods: {
        getAssetsList () {
          let self = this
          assetsApi.getAssetsList(this.query, response => {
            self.imageList = response.data
            self.pageMeta = response.meta
          })
        },
        goPage: function (event) {
          this.query = _.assign({page: event.page}, this.defaultQuery);
          this.getAssetsList()
        },
        doSearch () {
        },
        chosePicture (url, id, name) {
          this.currentUrl = url;
          this.currentId = id;
          this.currentName = name;
          this.$emit('on-selected', {currentUrl:this.currentUrl, currentName: this.currentName, currentId: this.currentId})
        },
        uploadSuccessCallback: function (response, file) {
          //上传成功回调
          console.log(file);
          console.log(response);
          this.$emit('upload-new-image', response.data)
        },
        uploadFailedCallback: function (error, file) {
          //上传失败回调
          console.log(error);
          console.log(file);
        }
      },
      computed: {
        imgBaseUrl(){
          return window.Laravel.imgBaseUrl;
        }
      },
    }
</script>
<style lang="less" scoped>
    .pic-div {
        max-height: 130px;
        overflow: hidden;
        figure {
            height: 100%;
            width: 100%;
            text-align: justify;
            overflow: hidden;
            img {
                height: 85%;
                width: 100%;
                border:1px solid #ddd;
                margin-bottom: 0rem;
            }
            figcaption{
                line-height: normal;
                font-size: 90%;
                color: #868e96;
                background: #ddd;
                white-space:nowrap;
                overflow: hidden;
                text-overflow:ellipsis;
            }
            div{
                position: absolute;
                top: 10px;
                right: 10px;
                height: 20px;
                width: 20px;
                background: rgba(0, 0, 0, 0.08);
                border:1px solid #fff;
                -webkit-border-radius: 10px;
                -moz-border-radius: 10px;
                border-radius: 10px;
                color: #fff;
                text-align: center;
                font-size: 8px;
            }
            /*&:before {*/
                /*content: "\2713";*/
                /*display: block;*/
                /*position: absolute;*/
                /*top: 10px;*/
                /*right: 10px;*/
                /*width: 20px;*/
                /*height: 20px;*/
                /*background: rgba(0, 0, 0, 0.08);*/
                /*border:1px solid #fff;*/
                /*-webkit-border-radius: 10px;*/
                /*-moz-border-radius: 10px;*/
                /*border-radius: 10px;*/
                /*color: #fff;*/
                /*text-align: center;*/
                /*font-size: 10px;*/
                /*z-index: 10;*/
            /*}*/
        }
    }
    .picActiveClass{
        color: #fff!important;
        border:1px solid #00c09e!important;
        background: #00c09e!important;



        /*&:after {*/           /*原生方式解决*/
            /*content: "\2713";*/
            /*display: block;*/
            /*position: absolute;*/
            /*top: 10px;*/
            /*right: 10px;*/
            /*width: 20px;*/
            /*height: 20px;*/
            /*border:1px solid #00c09e;*/
            /*-webkit-border-radius: 10px;*/
            /*-moz-border-radius: 10px;*/
            /*border-radius: 10px;*/
            /*color: #fff;*/
            /*text-align: center;*/
            /*background: #00c09e;*/
            /*font-size: 10px;*/
            /*z-index: 10;*/
        /*}*/
        /*&:before{*/
            /*content:''!important;*/
            /*border: none!important;*/
            /*background: rgba(0,0,0,0)!important;*/
        /*}*/
    }
</style>