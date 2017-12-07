webpackJsonp([1],{

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(173)
/* template */
var __vue_template__ = __webpack_require__(181)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\admin\\content_picture\\contentPicture.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61af13fa", Component.options)
  } else {
    hotAPI.reload("data-v-61af13fa", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(122)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(124)
/* template */
var __vue_template__ = __webpack_require__(125)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7391e7c2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\imagePicker.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7391e7c2", Component.options)
  } else {
    hotAPI.reload("data-v-7391e7c2", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("53c407bd", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7391e7c2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./imagePicker.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7391e7c2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./imagePicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.pic-div[data-v-7391e7c2] {\n  max-height: 130px;\n  overflow: hidden;\n}\n.pic-div figure[data-v-7391e7c2] {\n  height: 100%;\n  width: 100%;\n  text-align: justify;\n  overflow: hidden;\n  /*&:before {*/\n  /*content: \"\\2713\";*/\n  /*display: block;*/\n  /*position: absolute;*/\n  /*top: 10px;*/\n  /*right: 10px;*/\n  /*width: 20px;*/\n  /*height: 20px;*/\n  /*background: rgba(0, 0, 0, 0.08);*/\n  /*border:1px solid #fff;*/\n  /*-webkit-border-radius: 10px;*/\n  /*-moz-border-radius: 10px;*/\n  /*border-radius: 10px;*/\n  /*color: #fff;*/\n  /*text-align: center;*/\n  /*font-size: 10px;*/\n  /*z-index: 10;*/\n  /*}*/\n}\n.pic-div figure img[data-v-7391e7c2] {\n  height: 85%;\n  width: 100%;\n  border: 1px solid #ddd;\n  margin-bottom: 0rem;\n}\n.pic-div figure figcaption[data-v-7391e7c2] {\n  line-height: normal;\n  font-size: 90%;\n  color: #868e96;\n  background: #ddd;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pic-div figure div[data-v-7391e7c2] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  height: 20px;\n  width: 20px;\n  background: rgba(0, 0, 0, 0.08);\n  border: 1px solid #fff;\n  border-radius: 10px;\n  color: #fff;\n  text-align: center;\n  font-size: 8px;\n}\n.picActiveClass[data-v-7391e7c2] {\n  color: #00c09e!important;\n  border: 1px solid #00c09e!important;\n  /*&:after {*/\n  /*原生方式解决*/\n  /*content: \"\\2713\";*/\n  /*display: block;*/\n  /*position: absolute;*/\n  /*top: 10px;*/\n  /*right: 10px;*/\n  /*width: 20px;*/\n  /*height: 20px;*/\n  /*border:1px solid #00c09e;*/\n  /*-webkit-border-radius: 10px;*/\n  /*-moz-border-radius: 10px;*/\n  /*border-radius: 10px;*/\n  /*color: #fff;*/\n  /*text-align: center;*/\n  /*background: #00c09e;*/\n  /*font-size: 10px;*/\n  /*z-index: 10;*/\n  /*}*/\n  /*&:before{*/\n  /*content:''!important;*/\n  /*border: none!important;*/\n  /*background: rgba(0,0,0,0)!important;*/\n  /*}*/\n}\n", ""]);

// exports


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    imageList: {
      type: Array,
      default: []
    },
    imageName: {
      type: [String, Number],
      default: '未命名'
    }
  },
  data: function data() {
    return {
      keywords: '',
      uploadHeaders: window.uploadHeaders,
      currentImageList: [],
      currentUrl: '',
      currentName: '',
      currentId: 0
    };
  },
  created: function created() {
    this.currentImageList = Array.from(this.imageList);
  },

  methods: {
    doSearch: function doSearch() {},
    chosePicture: function chosePicture(url, id, name) {
      //          if (this.currentId !== 0) {
      //            $('#picture_' + this.currentId).css('background-color', '#fff')
      //          }
      this.currentUrl = url;
      this.currentId = id;
      this.currentName = name;
      //          this.$nextTick(() => {
      //            $('#picture_' + this.currentId).css('border-color', '#48C2A9')
      //          });
      this.$emit('on-selected', { currentUrl: this.currentUrl, currentName: this.currentName, currentId: this.currentId });
    },

    uploadSuccessCallback: function uploadSuccessCallback(response, file) {
      //上传成功回调
      console.log(file);
      console.log(response);
      this.currentImageList.push(response.data);
      this.$emit('upload-new-image', response.data);
    },
    uploadFailedCallback: function uploadFailedCallback(error, file) {
      //上传失败回调
      console.log(error);
      console.log(file);
    }
  },
  computed: {
    imgBaseUrl: function imgBaseUrl() {
      return window.Laravel.imgBaseUrl;
    }
  }
};

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "chose-picture-container" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col" },
          [
            _c("i-input", {
              attrs: { type: "text", placeholder: "请输入关键字" },
              model: {
                value: _vm.keywords,
                callback: function($$v) {
                  _vm.keywords = $$v
                },
                expression: "keywords"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-auto" },
          [
            _c(
              "i-button",
              { attrs: { type: "primary" }, on: { click: _vm.doSearch } },
              [_vm._v("检索")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-auto" },
          [
            _c(
              "Upload",
              {
                ref: "localUpload",
                attrs: {
                  action: "/api/admin/asset",
                  "max-size": 10240,
                  format: ["jpg", "jpeg", "png"],
                  headers: _vm.uploadHeaders,
                  "on-success": _vm.uploadSuccessCallback,
                  "on-error": _vm.uploadFailedCallback,
                  data: { name: _vm.imageName }
                }
              },
              [
                _c(
                  "i-button",
                  {
                    attrs: { type: "ghost", icon: "ios-cloud-upload-outline" }
                  },
                  [_vm._v("上传本地文件")]
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        [
          _vm._l(_vm.currentImageList, function(item) {
            return [
              _c("div", { staticClass: "col-3 p-1 pic-div" }, [
                _c(
                  "a",
                  {
                    key: item.path,
                    on: {
                      click: function($event) {
                        _vm.chosePicture(item.path, item.id, item.name)
                      }
                    }
                  },
                  [
                    _c(
                      "figure",
                      {
                        staticClass: "figure p-1",
                        attrs: { id: "picture_" + item.id }
                      },
                      [
                        _c("img", {
                          staticClass: "figure-img img-fluid",
                          attrs: {
                            src: _vm.imgBaseUrl + item.thumb,
                            alt: item.name
                          }
                        }),
                        _vm._v(" "),
                        _c("figcaption", [_vm._v(_vm._s(item.name))]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            class: { picActiveClass: item.id === _vm.currentId }
                          },
                          [_c("Icon", { attrs: { type: "checkmark" } })],
                          1
                        )
                      ]
                    )
                  ]
                )
              ])
            ]
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7391e7c2", module.exports)
  }
}

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialog2 = __webpack_require__(174);

var _dialog3 = _interopRequireDefault(_dialog2);

var _table2 = __webpack_require__(177);

var _table3 = _interopRequireDefault(_table2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'contentPicture',
  components: {
    'el-dialog': _dialog3.default,
    'el-list': _table3.default
  },
  data: function data() {
    return {
      stateManager: {
        refreshList: true,
        editDialogVisible: false,
        editModelId: 0,
        buttonLoading: false
      }
    };
  },
  created: function created() {
    this.$store.dispatch('fetchCategories');
  },

  methods: {
    showEditDialog: function showEditDialog(id) {
      this.stateManager.editDialogVisible = true;
      this.stateManager.editModelId = id;
    }
  }
};

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(175)
/* template */
var __vue_template__ = __webpack_require__(176)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\admin\\content_picture\\_dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-491ed899", Component.options)
  } else {
    hotAPI.reload("data-v-491ed899", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imagePicker = __webpack_require__(120);

var _imagePicker2 = _interopRequireDefault(_imagePicker);

var _getSelectList = __webpack_require__(22);

var _getSelectList2 = _interopRequireDefault(_getSelectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: {
    stateManager: {
      type: Object
    }
  },
  components: {
    ImagePicker: _imagePicker2.default
  },
  data: function data() {
    var _this = this;

    var validatePointCategoryId = function validatePointCategoryId(rule, value, callback) {
      if (_this.model.point_type === 1 || _this.model.point_type === 2) {
        if (value === 0) {
          callback(new Error('请选择指向分类！'));
        }
      }
      callback();
    };
    var validatePointContentId = function validatePointContentId(rule, value, callback) {
      if (_this.model.point_type === 2 && value === 0) {
        callback(new Error('请选择指向内容'));
      } else {
        callback();
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
          point_category_id: 0,
          point_content_id: 0,
          description: '',
          category_id: [],
          keywords: ''
        }
      }),
      currentUrl: '',
      contentList: [],
      isLoading: false,
      ruleValidate: {
        title: [{ required: true, message: '标题不能为空', trigger: 'blur' }],
        point_type: [{ required: true, type: 'integer', message: '指向类型必填', trigger: 'change' }],
        assets_url: [{ required: true, message: '未选择图片', trigger: 'blur' }],
        category_id: [{ required: true, type: 'array', message: '分类不能为空', trigger: 'change' }],
        point_category_id: [{ required: true, validator: validatePointCategoryId, trigger: 'change' }],
        point_content_id: [{ required: true, validator: validatePointContentId, trigger: 'change' }]
      }
    };
  },
  created: function created() {
    this.$store.dispatch('fetchAssets');
  },

  methods: {
    closeDialog: function closeDialog() {
      this.stateManager.editDialogVisible = false;
      this.model.reset();
      this.$refs['model'].resetFields();
      this.stateManager.editModelId = 0;
    },
    getContentList: function getContentList() {
      var self = this;
      _getSelectList2.default.getContentsByCategoryId(this.model.point_category_id, function (response) {
        self.contentList = response;
      });
    },
    selectPicture: function selectPicture() {
      var self = this;
      self.$Modal.confirm({
        title: '请选择图片',
        width: '700px',
        render: function render(h) {
          return h('div', [h('hr'), h(_imagePicker2.default, {
            props: {
              imageList: self.imageList
            },
            on: {
              'on-selected': self.chosePicture,
              'upload-new-image': self.uploadNewImage
            }
          })]);
        },
        onOk: function onOk() {
          if (self.currentUrl !== '') {
            self.insertImage(self.currentUrl);
          } else {
            self.$Notice.error({
              title: '未选择图片'
            });
          }
        },
        onCancel: function onCancel() {
          self.currentUrl = '';
        }
      });
    },
    uploadNewImage: function uploadNewImage(assets) {
      this.$store.commit('addNewImage', assets);
      this.insertImage(assets.path);
      this.$Modal.remove();
    },
    chosePicture: function chosePicture(_ref) {
      var currentUrl = _ref.currentUrl,
          currentName = _ref.currentName,
          currentId = _ref.currentId;

      console.log(currentUrl);
      this.currentUrl = currentUrl;
    },
    insertImage: function insertImage(url) {
      this.model.assets_url = url;
      this.currentUrl = '';
    },

    saveModel: function saveModel() {
      var self = this;
      self.$refs['model'].validate(function (valid) {
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
    modalTitle: function modalTitle() {
      if (this.model.id === 0) {
        return '添加图片';
      } else {
        return '修改图片';
      }
    },
    imgBaseUrl: function imgBaseUrl() {
      return window.Laravel.imgBaseUrl;
    },
    categoryList: function categoryList() {
      return this.$store.state.admin.categories;
    },
    imageList: function imageList() {
      return this.$store.state.admin.imageList;
    }
  },
  watch: {
    'stateManager.editModelId': function stateManagerEditModelId(newValue) {
      var self = this;
      this.model.fetch(newValue, { include: 'category_id' }, function () {
        self.stateManager.buttonLoading = false;
        self.stateManager.editDialogVisible = true;
      }, function () {
        self.stateManager.buttonLoading = false;
      });
    }
  }
};

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "create-edit-container" } },
    [
      _c(
        "Modal",
        {
          attrs: {
            title: _vm.modalTitle,
            width: "60%",
            "label-position": "top",
            styles: { top: "20px" },
            "mask-closable": false
          },
          on: { "on-cancel": _vm.closeDialog },
          model: {
            value: _vm.stateManager.editDialogVisible,
            callback: function($$v) {
              _vm.$set(_vm.stateManager, "editDialogVisible", $$v)
            },
            expression: "stateManager.editDialogVisible"
          }
        },
        [
          _c(
            "i-form",
            {
              ref: "model",
              attrs: { model: _vm.model, rules: _vm.ruleValidate }
            },
            [
              _c(
                "Row",
                { attrs: { type: "flex" } },
                [
                  _c(
                    "i-col",
                    { attrs: { span: "11" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "标题", prop: "title" } },
                        [
                          _c("i-input", {
                            attrs: { placeholder: "请输入标题" },
                            model: {
                              value: _vm.model.title,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "title", $$v)
                              },
                              expression: "model.title"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "i-col",
                    { attrs: { span: "11", offset: "2" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "关键字" } },
                        [
                          _c("i-input", {
                            attrs: { placeholder: "请输入关键字" },
                            model: {
                              value: _vm.model.keywords,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "keywords", $$v)
                              },
                              expression: "model.keywords"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Row",
                { attrs: { type: "flex" } },
                [
                  _c(
                    "i-col",
                    { attrs: { span: "11" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "指向类型", prop: "point_type" } },
                        [
                          _c(
                            "Radio-group",
                            {
                              staticStyle: { width: "100%" },
                              model: {
                                value: _vm.model.point_type,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "point_type", $$v)
                                },
                                expression: "model.point_type"
                              }
                            },
                            [
                              _c("Radio", { attrs: { label: 0 } }, [
                                _vm._v("无")
                              ]),
                              _vm._v(" "),
                              _c("Radio", { attrs: { label: 1 } }, [
                                _vm._v("单页")
                              ]),
                              _vm._v(" "),
                              _c("Radio", { attrs: { label: 2 } }, [
                                _vm._v("列表")
                              ]),
                              _vm._v(" "),
                              _c("Radio", { attrs: { label: 3 } }, [
                                _vm._v("外链")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "i-col",
                    { attrs: { span: "11", offset: "2" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "分类", prop: "category_id" } },
                        [
                          _c(
                            "i-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: {
                                clearable: true,
                                multiple: "",
                                placeholder: "请选择分类"
                              },
                              model: {
                                value: _vm.model.category_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "category_id", $$v)
                                },
                                expression: "model.category_id"
                              }
                            },
                            _vm._l(_vm.categoryList, function(item) {
                              return _c(
                                "i-option",
                                {
                                  key: item.value,
                                  attrs: { value: item.value }
                                },
                                [
                                  _vm._v(
                                    _vm._s(item.label) +
                                      "\n                            "
                                  )
                                ]
                              )
                            })
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.model.point_type === 1
                ? _c(
                    "Row",
                    { attrs: { type: "flex" } },
                    [
                      _c(
                        "i-col",
                        { attrs: { span: "11" } },
                        [
                          _c(
                            "Form-item",
                            {
                              attrs: {
                                label: "指向分类",
                                prop: "point_category_id"
                              }
                            },
                            [
                              _c(
                                "i-select",
                                {
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    clearable: true,
                                    placeholder: "请选择分类"
                                  },
                                  on: { "on-change": _vm.getContentList },
                                  model: {
                                    value: _vm.model.point_category_id,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.model,
                                        "point_category_id",
                                        $$v
                                      )
                                    },
                                    expression: "model.point_category_id"
                                  }
                                },
                                _vm._l(_vm.categoryList, function(item) {
                                  return _c(
                                    "i-option",
                                    {
                                      key: item.value,
                                      attrs: { value: item.value }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(item.label) +
                                          "\n                            "
                                      )
                                    ]
                                  )
                                })
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "i-col",
                        { attrs: { span: "11", offset: "2" } },
                        [
                          _c(
                            "Form-item",
                            {
                              attrs: {
                                label: "指向内容",
                                prop: "point_content_id"
                              }
                            },
                            [
                              _c(
                                "i-select",
                                {
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    clearable: true,
                                    placeholder: "请选择"
                                  },
                                  model: {
                                    value: _vm.model.point_content_id,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.model,
                                        "point_content_id",
                                        $$v
                                      )
                                    },
                                    expression: "model.point_content_id"
                                  }
                                },
                                _vm._l(_vm.contentList, function(item) {
                                  return _c(
                                    "i-option",
                                    {
                                      key: item.value,
                                      attrs: { value: item.value }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(item.label) +
                                          "\n                            "
                                      )
                                    ]
                                  )
                                })
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                : _vm.model.point_type === 2
                  ? _c(
                      "Row",
                      { attrs: { type: "flex" } },
                      [
                        _c(
                          "i-col",
                          { attrs: { span: "24" } },
                          [
                            _c(
                              "Form-item",
                              {
                                attrs: {
                                  label: "指向分类",
                                  prop: "point_category_id"
                                }
                              },
                              [
                                _c(
                                  "i-select",
                                  {
                                    staticStyle: { width: "100%" },
                                    attrs: {
                                      clearable: true,
                                      placeholder: "请选择分类"
                                    },
                                    model: {
                                      value: _vm.model.point_category_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.model,
                                          "point_category_id",
                                          $$v
                                        )
                                      },
                                      expression: "model.point_category_id"
                                    }
                                  },
                                  _vm._l(_vm.categoryList, function(item) {
                                    return _c(
                                      "i-option",
                                      {
                                        key: item.value,
                                        attrs: { value: item.value }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(item.label) +
                                            "\n                            "
                                        )
                                      ]
                                    )
                                  })
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  : _vm.model.point_type === 3
                    ? _c(
                        "Row",
                        { attrs: { type: "flex" } },
                        [
                          _c(
                            "i-col",
                            { attrs: { span: "24" } },
                            [
                              _c(
                                "Form-item",
                                { attrs: { label: "Url" } },
                                [
                                  _c("i-input", {
                                    attrs: {
                                      type: "text",
                                      placeholder: "请输入链接"
                                    },
                                    model: {
                                      value: _vm.model.point_url,
                                      callback: function($$v) {
                                        _vm.$set(_vm.model, "point_url", $$v)
                                      },
                                      expression: "model.point_url"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e(),
              _vm._v(" "),
              _c(
                "Row",
                { attrs: { type: "flex" } },
                [
                  _c(
                    "i-col",
                    { attrs: { span: "24" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "描述" } },
                        [
                          _c("i-input", {
                            attrs: {
                              type: "textarea",
                              placeholder: "请添加描述"
                            },
                            model: {
                              value: _vm.model.description,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "description", $$v)
                              },
                              expression: "model.description"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "Row",
                { attrs: { type: "flex" } },
                [
                  _c(
                    "i-col",
                    { attrs: { span: "24" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "选择图片", prop: "assets_url" } },
                        [
                          _vm.model.assets_url === ""
                            ? _c(
                                "i-button",
                                {
                                  attrs: { type: "primary" },
                                  on: { click: _vm.selectPicture }
                                },
                                [_vm._v("添加")]
                              )
                            : _c("img", {
                                staticClass: "img-fluid rounded",
                                attrs: {
                                  src: _vm.imgBaseUrl + _vm.model.assets_url
                                },
                                on: { click: _vm.selectPicture }
                              }),
                          _vm._v(" "),
                          _c("i-input", {
                            attrs: { type: "text", hidden: "" },
                            model: {
                              value: _vm.model.assets_url,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "assets_url", $$v)
                              },
                              expression: "model.assets_url"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "footer" },
            [
              _c(
                "Row",
                { attrs: { type: "flex" } },
                [
                  _c("i-col", { attrs: { span: "24" } }, [
                    _c(
                      "div",
                      { staticClass: "pull-right" },
                      [
                        _c(
                          "i-button",
                          {
                            attrs: { type: "ghost" },
                            on: { click: _vm.closeDialog }
                          },
                          [_vm._v("取消")]
                        ),
                        _vm._v(" "),
                        _c(
                          "i-button",
                          {
                            attrs: { type: "primary", loading: _vm.isLoading },
                            on: { click: _vm.saveModel }
                          },
                          [_vm._v("确定")]
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-491ed899", module.exports)
  }
}

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(178)
/* template */
var __vue_template__ = __webpack_require__(180)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\admin\\content_picture\\_table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c6d60e6", Component.options)
  } else {
    hotAPI.reload("data-v-0c6d60e6", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _trans = __webpack_require__(179);

var _trans2 = _interopRequireDefault(_trans);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    stateManager: {
      type: Object
    }
  },
  data: function data() {
    return {
      list: this.$listDataSource({
        url: '/api/admin/content-picture'
      }),
      searchConfig: {
        items: {
          keyword: ''
        },
        status: true,
        complex: false
      },
      model: this.$modelDataSource({
        url: '/api/admin/content-picture',
        dataKey: 'model',
        attributes: {
          id: 0
        }
      }),
      query: {
        include: ['author', 'category_name']
      },
      defaultQuery: {
        include: ['author', 'category_name']
      }
    };
  },
  methods: {
    trans: function trans(type, index) {
      return _trans2.default.trans(type, index);
    },

    showEditDialog: function showEditDialog(id) {
      this.stateManager.editModelId = id;
      this.stateManager.buttonLoading = true;
    },
    changeQuery: function changeQuery(query) {
      this.query = _.merge(this.defaultQuery, query);
      this.stateManager.refreshList = true;
    },
    deleteModel: function deleteModel(modelId, modelName) {
      console.log(modelId);
      var self = this;
      this.$Modal.confirm({
        title: '删除确认',
        content: '确认删除' + modelName + '吗，删除后无法恢复',
        loading: true,
        onOk: function onOk() {
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
        onCancel: function onCancel() {
          console.log('取消删除');
        }
      });
    }
  },
  computed: {
    user: function user() {
      return this.$store.state.admin.user;
    },
    imgBaseUrl: function imgBaseUrl() {
      return window.Laravel.imgBaseUrl;
    },
    tableList: function tableList() {
      var self = this;
      if (this.stateManager.refreshList) {
        this.list.fetch(self.query, function () {
          self.stateManager.refreshList = false;
        });
      }
      return this.list;
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by 都大爽 on 2017/11/28.
 */
exports.default = {
  trans: function trans(type, index) {
    return _.get(this, type + '.' + index);
  },

  content_picture: {
    point_type: {
      0: '无',
      1: '单页',
      2: '列表',
      3: '外链'
    }
  }
};

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vue-table",
    {
      attrs: {
        "data-source": _vm.tableList,
        "search-config": _vm.searchConfig
      },
      on: { "on-query": _vm.changeQuery },
      scopedSlots: _vm._u([
        {
          key: "search",
          fn: function(props) {
            return [
              _c("i-input", {
                attrs: { placeholder: "请输入关键字" },
                model: {
                  value: props.items.keyword,
                  callback: function($$v) {
                    _vm.$set(props.items, "keyword", $$v)
                  },
                  expression: "props.items.keyword"
                }
              })
            ]
          }
        },
        {
          key: "tbody",
          fn: function(props) {
            return [
              _c("tr", [
                _c("td", [_vm._v(_vm._s(props.item.id))]),
                _vm._v(" "),
                _c("td", [
                  _c("img", {
                    staticClass: "figure-img img-fluid rounded",
                    staticStyle: { width: "150px" },
                    attrs: {
                      src: _vm.imgBaseUrl + props.item.assets_url,
                      alt: "图片丢失"
                    }
                  })
                ]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _vm._l(props.item.category_name, function(category) {
                      return [
                        _vm._v(
                          "\n                    " +
                            _vm._s(category) +
                            "\n                "
                        )
                      ]
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(props.item.title))]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(
                    _vm._s(
                      _vm.trans(
                        "content_picture.point_type",
                        props.item.point_type
                      )
                    )
                  )
                ]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(props.item.keywords))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(props.item.author.name))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _vm.user.can("create-post") &&
                    props.item.author.id === _vm.user.id
                      ? _c(
                          "Tooltip",
                          { attrs: { content: "编辑", placement: "top" } },
                          [
                            _c(
                              "i-button",
                              {
                                attrs: {
                                  type: "text",
                                  disabled: _vm.stateManager.buttonLoading
                                },
                                on: {
                                  click: function($event) {
                                    _vm.showEditDialog(props.item.id)
                                  }
                                }
                              },
                              [
                                _c("Icon", {
                                  attrs: { type: "edit", size: "16" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user.can("create-post") &&
                    props.item.author.id === _vm.user.id
                      ? _c(
                          "Tooltip",
                          { attrs: { content: "删除", placement: "top" } },
                          [
                            _c(
                              "i-button",
                              {
                                attrs: {
                                  type: "text",
                                  disabled: _vm.stateManager.buttonLoading
                                },
                                on: {
                                  click: function($event) {
                                    _vm.deleteModel(
                                      props.item.id,
                                      props.item.title
                                    )
                                  }
                                }
                              },
                              [
                                _c("Icon", {
                                  attrs: { type: "trash-a", size: "16" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  1
                )
              ])
            ]
          }
        }
      ])
    },
    [
      _c("template", { slot: "header" }, [
        _c("tr", [
          _c("th", [_vm._v("ID")]),
          _vm._v(" "),
          _c("th", [_vm._v("缩略图")]),
          _vm._v(" "),
          _c("th", [_vm._v("分类")]),
          _vm._v(" "),
          _c("th", [_vm._v("标题")]),
          _vm._v(" "),
          _c("th", [_vm._v("指向类型")]),
          _vm._v(" "),
          _c("th", [_vm._v("关键字")]),
          _vm._v(" "),
          _c("th", [_vm._v("发布人")]),
          _vm._v(" "),
          _c("th", [_vm._v("操作")])
        ])
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0c6d60e6", module.exports)
  }
}

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "bs4-card",
        [
          _c(
            "div",
            { staticClass: "row", attrs: { slot: "header" }, slot: "header" },
            [
              _c("div", { staticClass: "col-auto mr-auto" }, [
                _vm._v("图片管理")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-auto" },
                [
                  _c(
                    "i-button",
                    {
                      attrs: {
                        slot: "extra",
                        type: "primary",
                        size: "small",
                        disabled: _vm.stateManager.buttonLoading
                      },
                      on: {
                        click: function($event) {
                          _vm.showEditDialog(0)
                        }
                      },
                      slot: "extra"
                    },
                    [_vm._v("添加图片")]
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "Row",
            { attrs: { type: "flex" } },
            [
              _c("i-col", { attrs: { span: "24" } }, [
                _c(
                  "div",
                  { staticClass: "demo-spin-article" },
                  [
                    _c("el-list", {
                      attrs: { stateManager: _vm.stateManager }
                    }),
                    _vm._v(" "),
                    _vm.stateManager.refreshList
                      ? _c("Spin", { attrs: { fix: "", size: "large" } })
                      : _vm._e()
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("el-dialog", { attrs: { stateManager: _vm.stateManager } })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-61af13fa", module.exports)
  }
}

/***/ })

});