webpackJsonp([2],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(182)
/* template */
var __vue_template__ = __webpack_require__(194)
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
Component.options.__file = "resources\\assets\\js\\views\\admin\\assets_manager\\assets_manager.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6a21eb12", Component.options)
  } else {
    hotAPI.reload("data-v-6a21eb12", Component.options)
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

var _dialog2 = __webpack_require__(183);

var _dialog3 = _interopRequireDefault(_dialog2);

var _table2 = __webpack_require__(186);

var _table3 = _interopRequireDefault(_table2);

var _del_dialog2 = __webpack_require__(189);

var _del_dialog3 = _interopRequireDefault(_del_dialog2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'assetsManager',
    components: {
        'el-list': _table3.default,
        'el-del-dialog': _del_dialog3.default
    },

    data: function data() {
        return {
            stateManager: {
                refreshList: true,
                editDialogVisible: false,
                editModelId: 0,
                delModelId: 0,
                buttonLoading: false,
                deleteImgDialogVisible: false
            },
            uploadHeaders: window.uploadHeaders,
            showUploadList: false,
            percentage: 0
        };
    },
    created: function created() {},

    methods: {
        showEditDialog: function showEditDialog(id) {
            this.stateManager.editDialogVisible = true;
            this.stateManager.editModelId = id;
        },
        uploadSuccessCallback: function uploadSuccessCallback(response, file) {
            var self = this;
            //上传成功回调
            console.log(file);
            console.log(response);
            this.$Notice.success({
                title: '上传成功',
                desc: ''
            });
            this.stateManager.refreshList = true;
            setTimeout(function () {

                self.showUploadList = false;
                self.$refs.upload.fileList = [];
            }, 1000);
        },
        uploadFailedCallback: function uploadFailedCallback(error, file) {
            //上传失败回调
            console.log(error);
            console.log(file);
            this.showUploadList = false;
            this.$Notice.error({
                title: '上传失败',
                desc: error
            });
        },

        handleBeforeUpload: function handleBeforeUpload() {
            this.$refs.upload.fileList = [];
            this.showUploadList = true;
            return true;
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

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(184)
/* template */
var __vue_template__ = __webpack_require__(185)
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
Component.options.__file = "resources\\assets\\js\\views\\admin\\assets_manager\\_dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e4c770d4", Component.options)
  } else {
    hotAPI.reload("data-v-e4c770d4", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 184:
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
//
//
//
//
//
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
    components: {},
    data: function data() {
        return {
            model: this.$modelDataSource({
                url: '/api/admin/asset',
                dataKey: 'model',
                attributes: {
                    id: 0,
                    title: '',
                    sub_title: '',
                    intro_img: '',
                    content: '',
                    categories: [],
                    keywords: ''
                }
            }),
            isLoading: false,
            ruleValidate: {
                intro_img: [{ required: true, message: '图片不能为空', trigger: 'blur' }]
            },
            uploadHeaders: window.uploadHeaders
        };
    },
    methods: {
        closeDialog: function closeDialog() {
            this.stateManager.editDialogVisible = false;
            this.model.reset();
            this.$refs['model'].resetFields();
            this.stateManager.editModelId = 0;
        },
        uploadSuccessCallback: function uploadSuccessCallback(response, file) {
            //上传成功回调
            console.log(file);
            console.log(response);
            this.model.intro_img = response.data.path;
            this.$Notice.success({
                title: '上传成功',
                desc: ''
            });
            this.isLoading = false;
            this.stateManager.refreshList = true;
        },
        uploadFailedCallback: function uploadFailedCallback(error, file) {
            //上传失败回调
            console.log(error);
            console.log(file);
            this.$Notice.error({
                title: '上传失败',
                desc: error
            });
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
                            desc: self.model.name
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
                return '添加素材';
            } else {
                return '修改素材';
            }
        },
        imgBaseUrl: function imgBaseUrl() {
            return window.Laravel.imgBaseUrl;
        }
    },
    watch: {
        'stateManager.editModelId': function stateManagerEditModelId(newValue) {
            var self = this;
            this.model.fetch(newValue, {}, function () {
                self.stateManager.buttonLoading = false;
                self.stateManager.editDialogVisible = true;
            }, function () {
                self.stateManager.buttonLoading = false;
            });
        }
    }
};

/***/ }),

/***/ 185:
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
            styles: { top: "60px" },
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
                [
                  _c(
                    "i-col",
                    { attrs: { span: "24" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "上传素材图", prop: "intro_img" } },
                        [
                          _c(
                            "Upload",
                            {
                              ref: "upload",
                              staticStyle: { "margin-top": "40px" },
                              attrs: {
                                type: "drag",
                                action: "/api/admin/asset",
                                headers: _vm.uploadHeaders,
                                "on-success": _vm.uploadSuccessCallback,
                                "on-error": _vm.uploadFailedCallback,
                                "show-upload-list": false,
                                "max-size": 10240,
                                data: {
                                  name: _vm.model.title ? _vm.model.title : ""
                                },
                                format: ["jpg", "jpeg", "png"]
                              }
                            },
                            [
                              _vm.model.intro_img === ""
                                ? _c(
                                    "div",
                                    { staticStyle: { padding: "20px 0" } },
                                    [
                                      _c("Icon", {
                                        staticStyle: { color: "#3399ff" },
                                        attrs: {
                                          type: "ios-cloud-upload",
                                          size: "52"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("p", [
                                        _vm._v("点击或将文件拖拽到这里上传")
                                      ])
                                    ],
                                    1
                                  )
                                : _c("div", [
                                    _c("img", {
                                      staticStyle: { "max-width": "100%" },
                                      attrs: {
                                        src:
                                          _vm.imgBaseUrl + _vm.model.intro_img
                                      }
                                    })
                                  ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("i-input", {
                            attrs: { type: "text", hidden: "" },
                            model: {
                              value: _vm.model.intro_img,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "intro_img", $$v)
                              },
                              expression: "model.intro_img"
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
                            attrs: { type: "primary" },
                            on: { click: _vm.closeDialog }
                          },
                          [_vm._v("关闭")]
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
    require("vue-hot-reload-api")      .rerender("data-v-e4c770d4", module.exports)
  }
}

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(187)
/* template */
var __vue_template__ = __webpack_require__(188)
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
Component.options.__file = "resources\\assets\\js\\views\\admin\\assets_manager\\_table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e938cf0", Component.options)
  } else {
    hotAPI.reload("data-v-4e938cf0", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 187:
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

exports.default = {
    props: {
        stateManager: {
            type: Object
        }
    },
    data: function data() {
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
        showDelImgDialog: function showDelImgDialog(id) {
            this.stateManager.delModelId = id;
            this.stateManager.deleteImgDialogVisible = true;
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
        imgBaseUrl: function imgBaseUrl() {
            return window.Laravel.imgBaseUrl;
        },
        user: function user() {
            return this.$store.state.admin.user;
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
};

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vue-img-table", {
    attrs: { "data-source": _vm.tableList, "search-config": _vm.searchConfig },
    on: { "on-query": _vm.changeQuery },
    scopedSlots: _vm._u([
      {
        key: "ibody",
        fn: function(props) {
          return [
            _c(
              "div",
              {
                staticClass: "card border border-primary",
                staticStyle: { "margin-top": "15px", "margin-right": "15px" },
                on: {
                  click: function($event) {
                    _vm.showDelImgDialog(props.item.id)
                  }
                }
              },
              [
                _c("img", {
                  staticClass: "card-img-top",
                  staticStyle: { width: "160px", height: "110px" },
                  attrs: { src: _vm.imgBaseUrl + props.item.path }
                })
              ]
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4e938cf0", module.exports)
  }
}

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(190)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(192)
/* template */
var __vue_template__ = __webpack_require__(193)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources\\assets\\js\\views\\admin\\assets_manager\\_del_dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c8e02d6c", Component.options)
  } else {
    hotAPI.reload("data-v-c8e02d6c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(191);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("78cd5060", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8e02d6c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./_del_dialog.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c8e02d6c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./_del_dialog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.img-content-container {\n    width: 100%;\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 192:
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

exports.default = {
    props: {
        stateManager: {
            type: Object
        }
    },
    components: {},
    data: function data() {
        return {
            model: this.$modelDataSource({
                url: '/api/admin/asset',
                dataKey: 'model',
                attributes: {
                    id: 0,
                    path: ''
                }
            }),
            isLoading: false,
            uploadHeaders: window.uploadHeaders
        };
    },
    methods: {
        closeDialog: function closeDialog() {
            this.stateManager.deleteImgDialogVisible = false;
            this.model.reset();
            this.stateManager.delModelId = 0;
        },

        deleteModel: function deleteModel(modelId) {
            console.log(modelId);
            var self = this;
            this.$Modal.confirm({
                title: '删除确认',
                content: '确认删除吗，删除后无法恢复',
                loading: true,
                onOk: function onOk() {
                    self.model.reset();
                    self.model.uuid = modelId;
                    self.model.destroy(function () {
                        self.$Modal.remove();
                        self.stateManager.refreshList = true;
                        self.stateManager.deleteImgDialogVisible = false;
                        self.$Notice.success({
                            title: '删除成功',
                            desc: '已删除'
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
        modalTitle: function modalTitle() {
            return '查看素材';
        },
        imgBaseUrl: function imgBaseUrl() {
            return window.Laravel.imgBaseUrl;
        }
    },
    watch: {
        'stateManager.delModelId': function stateManagerDelModelId(newValue) {
            console.log(newValue);
            var self = this;
            this.model.fetch(newValue, {}, function () {
                self.stateManager.buttonLoading = false;
                self.stateManager.deleteImgDialogVisible = true;
            }, function () {
                self.stateManager.buttonLoading = false;
            });
        }
    }
};

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "delete-edit-container" } },
    [
      _c(
        "Modal",
        {
          ref: "model",
          attrs: {
            title: _vm.modalTitle,
            width: "60%",
            "label-position": "top",
            styles: { top: "60px", bottom: "60px" },
            "mask-closable": false,
            model: _vm.model
          },
          on: { "on-cancel": _vm.closeDialog },
          model: {
            value: _vm.stateManager.deleteImgDialogVisible,
            callback: function($$v) {
              _vm.$set(_vm.stateManager, "deleteImgDialogVisible", $$v)
            },
            expression: "stateManager.deleteImgDialogVisible"
          }
        },
        [
          _c("Row", [
            _c("img", {
              staticClass: "img-content-container",
              attrs: { src: _vm.imgBaseUrl + _vm.model.path }
            })
          ]),
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
                            attrs: { type: "error", loading: _vm.isLoading },
                            on: {
                              click: function($event) {
                                _vm.deleteModel(_vm.model.id)
                              }
                            }
                          },
                          [_vm._v("删除")]
                        ),
                        _vm._v(" "),
                        _c(
                          "i-button",
                          {
                            attrs: { type: "primary" },
                            on: { click: _vm.closeDialog }
                          },
                          [_vm._v("关闭")]
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
    require("vue-hot-reload-api")      .rerender("data-v-c8e02d6c", module.exports)
  }
}

/***/ }),

/***/ 194:
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
                _vm._v("素材管理")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-auto" },
                [
                  _c(
                    "Upload",
                    {
                      ref: "upload",
                      attrs: {
                        multiple: "",
                        action: "/api/admin/asset",
                        "show-upload-list": _vm.showUploadList,
                        headers: _vm.uploadHeaders,
                        "on-error": _vm.uploadFailedCallback,
                        "before-upload": _vm.handleBeforeUpload,
                        "on-success": _vm.uploadSuccessCallback,
                        "max-size": 10240,
                        format: ["jpg", "jpeg", "png"]
                      }
                    },
                    [
                      _c(
                        "Button",
                        { attrs: { type: "primary", size: "small" } },
                        [_vm._v("添加素材\n                    ")]
                      )
                    ],
                    1
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
              _c("el-del-dialog", { attrs: { stateManager: _vm.stateManager } })
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
    require("vue-hot-reload-api")      .rerender("data-v-6a21eb12", module.exports)
  }
}

/***/ })

});