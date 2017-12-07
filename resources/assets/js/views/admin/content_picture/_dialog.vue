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
                        <Form-item label="关键字">
                            <i-input v-model="model.keywords" placeholder="请输入关键字"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="11">
                        <Form-item label="指向类型" prop="point_type">
                            <Radio-group v-model="model.point_type" style="width: 100%">
                                <Radio :label="0">无</Radio>
                                <Radio :label="1">单页</Radio>
                                <Radio :label="2">列表</Radio>
                                <Radio :label="3">外链</Radio>
                            </Radio-group>
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

                <Row type="flex" v-show="model.point_type === 1">
                    <i-col span="11">
                        <Form-item label="指向分类" prop="point_category_id">
                            <i-select v-model="model.point_category_id" style="width: 100%"
                                      :clearable="true"
                                      @on-change="getContentList"
                                      placeholder="请选择分类">
                                <i-option v-for="item in categoryList" :value="item.value"
                                          :key="item.value">{{item.label}}
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                    <i-col span="11" offset="2">
                        <Form-item label="指向内容" prop="point_content_id">
                            <i-select v-model="model.point_content_id" style="width: 100%"
                                      :clearable="true"
                                      placeholder="请选择">
                                <i-option v-for="item in contentList" :value="item.value"
                                          :key="item.value">{{item.label}}
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex" v-show="model.point_type === 2">
                    <i-col span="24">
                        <Form-item label="指向分类" prop="point_category_id">
                            <i-select v-model="model.point_category_id" style="width: 100%"
                                      :clearable="true"
                                      placeholder="请选择分类">
                                <i-option v-for="item in categoryList" :value="item.value"
                                          :key="item.value">{{item.label}}
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex" v-show="model.point_type === 3">
                    <i-col span="24">
                        <Form-item label="Url" prop="point_url">
                            <i-input type="text" v-model="model.point_url" placeholder="请输入链接"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="描述">
                            <i-input type="textarea" v-model="model.description" placeholder="请添加描述"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="选择图片" prop="assets_url">
                            <i-button type="primary" @click="selectPicture" >添加</i-button>
                            <div class="img-container" v-if="model.assets_url !== ''">
                                <img class="img-fluid rounded" :src="imgBaseUrl + model.assets_url"
                                      @click="selectPicture">
                            </div>
                            <i-input type="text" v-model="model.assets_url" hidden></i-input>
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
  import ImagePicker from '../../../components/imagePicker.vue'
  import selectApi from '../../../api/admin/getSelectList'
  export default {
    props: {
      stateManager: {
        type: Object
      }
    },
    components: {
      ImagePicker
    },
    data: function () {
      const validatePointCategoryId = (rule, value, callback) => {
        if (this.model.point_type === 1 || this.model.point_type === 2) {
          if (value === 0) {
            callback(new Error('请选择指向分类！'))
          }
        }
        callback()
      };
      const validatePointContentId = (rule, value, callback) => {
        if (this.model.point_type === 2 && value === 0) {
          callback(new Error('请选择指向内容'))
        } else {
          callback()
        }
      };
      return {
        model: this.$modelDataSource({
          url: '/api/admin/content-picture',
          dataKey: 'model',
          attributes: {
            id: 0,
            title: '',
            point_url: '',
            assets_url: '',
            point_type: 0,
            point_category_id: null,
            point_content_id: null,
            description: '',
            category_id: [],
            keywords: ''
          }
        }),
        currentUrl: '',
        contentList: [],
        isLoading: false,
        ruleValidate: {
          title: [
            {required: true, message: '标题不能为空', trigger: 'blur'}
          ],
          point_type: [
            {required: true, type: 'integer', message: '指向类型必填', trigger: 'change'}
          ],
          assets_url: [
            {required: true, message: '未选择图片', trigger: 'blur'}
          ],
          category_id: [
            {required: true, type: 'array', message: '分类不能为空', trigger: 'change'}
          ],
          point_category_id: [
            {required: true, type:'integer', message:'指向分类必填', trigger: 'change'}
          ],
          point_content_id: [
            {required: true, type:'integer', message:'指向内容必填', trigger: 'change'}
          ],
          point_url: [
//            {required: true, message:'url必填', trigger: 'blur'}
          ],
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
      getContentList (categoryId) {
        let self = this;
        selectApi.getContentsByCategoryId(categoryId, response => {
          self.contentList = response
        })
      },
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
        this.model.assets_url = url;
        this.currentUrl = '';
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
          return '添加图片';
        } else {
          return '修改图片';
        }
      },
      imgBaseUrl(){
        return window.Laravel.imgBaseUrl;
      },
      categoryList(){
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