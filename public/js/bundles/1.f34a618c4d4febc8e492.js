webpackJsonp([1],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(180)
/* template */
var __vue_template__ = __webpack_require__(187)
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

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(124)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(126)
/* template */
var __vue_template__ = __webpack_require__(127)
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

/***/ 123:
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

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
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

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.pic-div[data-v-7391e7c2] {\n  max-height: 130px;\n  overflow: hidden;\n}\n.pic-div figure[data-v-7391e7c2] {\n  height: 100%;\n  width: 100%;\n  text-align: justify;\n  overflow: hidden;\n  /*&:before {*/\n  /*content: \"\\2713\";*/\n  /*display: block;*/\n  /*position: absolute;*/\n  /*top: 10px;*/\n  /*right: 10px;*/\n  /*width: 20px;*/\n  /*height: 20px;*/\n  /*background: rgba(0, 0, 0, 0.08);*/\n  /*border:1px solid #fff;*/\n  /*-webkit-border-radius: 10px;*/\n  /*-moz-border-radius: 10px;*/\n  /*border-radius: 10px;*/\n  /*color: #fff;*/\n  /*text-align: center;*/\n  /*font-size: 10px;*/\n  /*z-index: 10;*/\n  /*}*/\n}\n.pic-div figure img[data-v-7391e7c2] {\n  height: 85%;\n  width: 100%;\n  border: 1px solid #ddd;\n  margin-bottom: 0rem;\n}\n.pic-div figure figcaption[data-v-7391e7c2] {\n  line-height: normal;\n  font-size: 90%;\n  color: #868e96;\n  background: #ddd;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pic-div figure div[data-v-7391e7c2] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  height: 20px;\n  width: 20px;\n  background: rgba(0, 0, 0, 0.08);\n  border: 1px solid #fff;\n  border-radius: 10px;\n  color: #fff;\n  text-align: center;\n  font-size: 8px;\n}\n.picActiveClass[data-v-7391e7c2] {\n  color: #fff!important;\n  border: 1px solid #00c09e!important;\n  background: #00c09e!important;\n  /*&:after {*/\n  /*原生方式解决*/\n  /*content: \"\\2713\";*/\n  /*display: block;*/\n  /*position: absolute;*/\n  /*top: 10px;*/\n  /*right: 10px;*/\n  /*width: 20px;*/\n  /*height: 20px;*/\n  /*border:1px solid #00c09e;*/\n  /*-webkit-border-radius: 10px;*/\n  /*-moz-border-radius: 10px;*/\n  /*border-radius: 10px;*/\n  /*color: #fff;*/\n  /*text-align: center;*/\n  /*background: #00c09e;*/\n  /*font-size: 10px;*/\n  /*z-index: 10;*/\n  /*}*/\n  /*&:before{*/\n  /*content:''!important;*/\n  /*border: none!important;*/\n  /*background: rgba(0,0,0,0)!important;*/\n  /*}*/\n}\n", ""]);

// exports


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assets = __webpack_require__(23);

var _assets2 = _interopRequireDefault(_assets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
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
    };
  },
  created: function created() {
    this.getAssetsList();
  },

  methods: {
    getAssetsList: function getAssetsList() {
      var self = this;
      _assets2.default.getAssetsList(this.query, function (response) {
        self.imageList = response.data;
        self.pageMeta = response.meta;
      });
    },

    goPage: function goPage(event) {
      this.query = _.assign({ page: event.page }, this.defaultQuery);
      this.getAssetsList();
    },
    doSearch: function doSearch() {},
    chosePicture: function chosePicture(url, id, name) {
      this.currentUrl = url;
      this.currentId = id;
      this.currentName = name;
      this.$emit('on-selected', { currentUrl: this.currentUrl, currentName: this.currentName, currentId: this.currentId });
    },

    uploadSuccessCallback: function uploadSuccessCallback(response, file) {
      //上传成功回调
      console.log(file);
      console.log(response);
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

/***/ }),

/***/ 127:
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
          _vm._l(_vm.imageList, function(item) {
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
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "widget-toolbox padding-10 clearfix" },
        [
          _c("pagination", {
            attrs: {
              "page-count": _vm.pageMeta.last_page,
              total: _vm.pageMeta.total,
              "current-page": _vm.pageMeta.current_page
            },
            on: { goPage: _vm.goPage }
          })
        ],
        1
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

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialog2 = __webpack_require__(181);

var _dialog3 = _interopRequireDefault(_dialog2);

var _table2 = __webpack_require__(184);

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

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(182)
/* template */
var __vue_template__ = __webpack_require__(183)
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

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _imagePicker = __webpack_require__(121);

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
        title: [{ required: true, message: '标题不能为空', trigger: 'blur' }],
        point_type: [{ required: true, type: 'integer', message: '指向类型必填', trigger: 'change' }],
        assets_url: [{ required: true, message: '未选择图片', trigger: 'blur' }],
        category_id: [{ required: true, type: 'array', message: '分类不能为空', trigger: 'change' }],
        point_category_id: [{ required: true, type: 'integer', message: '指向分类必填', trigger: 'change' }],
        point_content_id: [{ required: true, type: 'integer', message: '指向内容必填', trigger: 'change' }],
        point_url: [
          //            {required: true, message:'url必填', trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    closeDialog: function closeDialog() {
      this.stateManager.editDialogVisible = false;
      this.model.reset();
      this.$refs['model'].resetFields();
      this.stateManager.editModelId = 0;
    },
    getContentList: function getContentList(categoryId) {
      console.log(categoryId);
      var self = this;
      _getSelectList2.default.getContentsByCategoryId(categoryId, function (response) {
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

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function(){},staticRenderFns:[]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-491ed899", module.exports)
  }
}

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(185)
/* template */
var __vue_template__ = __webpack_require__(186)
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

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _trans = __webpack_require__(123);

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

/***/ 186:
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

/***/ 187:
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