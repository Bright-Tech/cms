<template>
    <div id="create-edit-container">
        <!-- use the modal component, pass in the prop -->
        <Modal v-model="stateManager.editDialogVisible"
               :title="modalTitle"
               width="60%"
               @on-cancel="closeDialog"
               :styles="{top: '20px'}"
               :mask-closable="false">

            <i-form ref="model" :model="model" :rules="ruleValidate">
                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="名称" prop="name">
                            <i-input v-model="model.name" placeholder="请输入名称"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="指向类型" prop="point_type">
                            <RadioGroup v-model="model.point_type" style="width: 100%;">
                                <Radio :label="0">
                                    <span>无</span>
                                </Radio>
                                <Radio  :label="1">
                                    <span>单页</span>
                                </Radio>
                                <Radio  :label="2">
                                    <span>列表</span>
                                </Radio>
                                <Radio  :label="3">
                                    <span>外链</span>
                                </Radio>
                            </RadioGroup>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex" v-show="model.point_type === 1">
                    <i-col span="11">
                        <Form-item label="分类名称" prop="point_category_id">
                            <i-select v-model="model.point_category_id"
                                      @on-change="getContentBlogList"
                                      :clearable="true"
                                      placeholder="请选择分类">
                                <i-option v-for="item in categoryList" :key="item.value" :value="item.value">{{ item.label }}</i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                    <i-col span="11" offset="2">
                        <Form-item label="内容名称" prop="point_content_id">
                            <i-select v-model="model.point_content_id" :clearable="true" >
                                <i-option v-for="item in contentBlogList" :key="item.value" :value="item.value">
                                    {{ item.label }}
                                </i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex" v-show="model.point_type === 2">
                    <i-col span="24">
                        <Form-item label="分类名称" prop="point_category_id">
                            <i-select v-model="model.point_category_id"
                                      @on-change="getContentBlogList"
                                      :clearable="true"
                                      placeholder="请选择分类">
                                <i-option v-for="item in categoryList" :key="item.value" :value="item.value">{{ item.label }}</i-option>
                            </i-select>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex" v-show="model.point_type === 3">
                    <i-col span="24">
                        <Form-item label="指向url" prop="point_url">
                            <i-input v-model="model.point_url" placeholder="请输入指向url"></i-input>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="排序" prop="sorting">
                            <InputNumber v-model="model.sorting" placeholder="请输入排序" style="width: 100%;"></InputNumber>
                        </Form-item>
                    </i-col>
                </Row>

                <Row type="flex">
                    <i-col span="24">
                        <Form-item label="父级导航" prop="parent_id">
                            <i-select v-model="model.parent_id" :clearable="true">
                                <i-option v-for="item in navigationList"  :key="item.value" :value="item.value">{{ item.label }}</i-option>
                            </i-select>
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
    import { mapState } from 'vuex'
    import selectApi from '../../../api/admin/getSelectList'
    export default {
        props: {
            stateManager: {
                type: Object
            }
        },
        data: function () {
            return {
                model: this.$modelDataSource({
                    url: '/api/admin/navigation',
                    dataKey: 'model',
                    attributes: {
                        id: 0,
                        name: '',
                        point_category_id: null,
                        point_content_id: null,
                        point_type: 0,
                        sorting: 0,
                        point_url: '',
                        parent_id: ''
                    }
                }),
                isLoading: false,
                contentBlogList:[],
                ruleValidate: {
                    name: [
                        {required: true, message: '名称不能为空', trigger: 'blur'}
                    ],
                    point_type: [
                        {required: true, type:'integer', message: '指向类型必填', trigger: 'change'}
                    ],
                    sorting: [
                        {required: true, type:'integer', message:'排序必填', trigger: 'blur'}
                    ],
                    point_category_id: [
                        {required: true, type:'integer', message:'分类必填', trigger: 'change'}
                    ],
                    point_content_id: [
                        {required: true, type:'integer', message:'内容必填', trigger: 'change'}
                    ],
                    point_url: [
                        {required: true, message:'url必填', trigger: 'blur'}
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
            saveModel: function () {
                let self = this;
                self.$refs['model'].validate((valid) => {
                    if (valid) {
                        console.log('表单验证通过');
                        self.isLoading = true;
                        self.model.save(function () {
                            self.$Notice.success({
                                title: '保存成功',
                            });
                            self.isLoading = false;
                            self.closeDialog();
                            self.stateManager.refreshList = true;
                        }, function () {
                            console.log("保存失败");
                            self.isLoading = false;
                        });
                    } else {
                        console.log('表单验证失败');
                    }
                });
            },
            getContentBlogList: function (categoryId) {
              console.log(categoryId)
                let self = this;
                selectApi.getContentsByCategoryId(categoryId, response => {
                  self.contentBlogList = response
                })
            }
        },
        computed: {
          modalTitle: function () {
            if (this.model.id === 0) {
              return '添加导航';
            } else {
              return '修改导航';
            }
          },
          ...mapState({
            'categoryList': state => state.admin.categories,
            'navigationList': state => state.admin.navigationList
          })
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