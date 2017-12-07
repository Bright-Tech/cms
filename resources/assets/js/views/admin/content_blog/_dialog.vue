<template>
    <div id="create-edit-container">
        <!-- use the modal component, pass in the prop -->
        <Modal v-model="stateManager.editDialogVisible"
               :title="modalTitle"
               width="60%"
               label-position="top"
               @on-cancel="closeDialog"
               :styles="{top: '20px'}"
               :mask-closable="false">

            <i-form ref="model" :model="model" :rules="ruleValidate">
                <Row type="flex">
                    <i-col span="11">
                        <Form-item label="标题" prop="title">
                            <i-input v-model="model.title" placeholder="请输入标题"></i-input>
                        </Form-item>
                    </i-col>
                    <i-col span="11" offset="2">
                        <Form-item label="副标题">
                            <i-input v-model="model.sub_title" placeholder="请输入副标题"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="11">
                        <Form-item label="关键字">
                            <i-input v-model="model.keywords" placeholder="请输入关键字"></i-input>
                        </Form-item>
                    </i-col>
                    <i-col span="11" offset="2">
                        <Form-item label="分类" prop="category_id">
                            <i-select v-model="model.category_id" style="width: 100%"
                                      :clearable="true"
                                      multiple
                                      placeholder="请选择分类">
                                <i-option v-for="item in categoryList" :value="item.value"
                                          :key="item.value">{{item.label}}
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="上传介绍图">
                            <i-button type="primary" @click="selectPicture">添加</i-button>
                            <i-button type="error" icon="ios-trash" @click="model.intro_image = ''">删除</i-button>
                            <div class="img-container" v-if="model.intro_image !== ''">
                                <img class="img-fluid rounded" :src="imgBaseUrl + model.intro_image" alt="图片丢失" >
                            </div>
                            <i-input type="text" v-model="model.intro_image" hidden></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="内容" prop="content">
                            <text-editor v-model="model.content" style="margin-top: 40px" :key="model.id"></text-editor>
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
  import textEditor from '../../../components/text-editor.vue'
  import ImagePicker from '../../../components/imagePicker.vue'
  export default {
    props: {
      stateManager: {
        type: Object
      }
    },
    components: {
      textEditor,
      ImagePicker
    },
    data: function () {
      return {
        model: this.$modelDataSource({
          url: '/api/admin/content-blog',
          dataKey: 'model',
          attributes: {
            id: 0,
            title: '',
            sub_title: '',
            intro_image: '',
            content: '',
            category_id: [],
            keywords: ''
          }
        }),
        isLoading: false,
        currentUrl: '',
        ruleValidate: {
          title: [
            {required: true, message: '标题不能为空', trigger: 'blur'}
          ],
          category_id: [
            {required: true, type: 'array', message: '分类不能为空', trigger: 'change'}
          ],
          content: [
            {required: true, message: '文章内容不能为空', trigger: 'blur'}
          ]
        },
        uploadHeaders: window.uploadHeaders
      };
    },
    methods: {
      selectPicture () {
        let self = this;
        self.$Modal.confirm({
          title: '请选择图片',
          width: '700px',
          render: (h) => {
            return h(
              'div',
              [
                h('hr'),
                h(ImagePicker, {
                  on: {
                    'on-selected': self.chosePicture,
                    'upload-new-image': self.uploadNewImage
                  }
                })
              ]
            )
          },
          onOk: () => {
            if (self.currentUrl !== '') {
              self.insertImage(self.currentUrl);
            } else {
              self.$Notice.error({
                title: '未选择图片'
              })
            }
          },
          onCancel: () => {
            self.currentUrl = '';
          }
        })
      },
      uploadNewImage (assets) {
        this.insertImage(assets.path);
        this.$Modal.remove();
      },
      chosePicture ({currentUrl, currentName, currentId}) {
        console.log(currentUrl);
        this.currentUrl = currentUrl;
      },
      insertImage (url) {
        this.model.intro_image = url;
        this.currentUrl = '';
      },
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
                desc: self.model.title
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
          return '添加文章';
        } else {
          return '修改文章';
        }
      },
      imgBaseUrl(){
        return window.Laravel.imgBaseUrl;
      },
      categoryList () {
        return this.$store.state.admin.categories
      }
    },
    watch: {
      'stateManager.editModelId': function (newValue) {
        let self = this;
        this.model.fetch(newValue, {include: 'category_id'}, function () {
          self.stateManager.buttonLoading = false;
          self.stateManager.editDialogVisible = true;
        }, function () {
          self.stateManager.buttonLoading = false;
        });
      }
    }
  }
</script>
