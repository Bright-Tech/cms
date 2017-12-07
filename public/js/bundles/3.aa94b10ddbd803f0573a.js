webpackJsonp([3],{

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(221)
/* template */
var __vue_template__ = __webpack_require__(231)
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
Component.options.__file = "resources\\assets\\js\\views\\admin\\admin_manager\\manager.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a1a5e64", Component.options)
  } else {
    hotAPI.reload("data-v-4a1a5e64", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dialog2 = __webpack_require__(222);

var _dialog3 = _interopRequireDefault(_dialog2);

var _table2 = __webpack_require__(225);

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
  name: 'admin',
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
  methods: {
    showEditDialog: function showEditDialog(id) {
      this.stateManager.editDialogVisible = true;
      this.stateManager.editModelId = id;
    }
  }
};

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(223)
/* template */
var __vue_template__ = __webpack_require__(224)
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
Component.options.__file = "resources\\assets\\js\\views\\admin\\admin_manager\\_dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-36135c1e", Component.options)
  } else {
    hotAPI.reload("data-v-36135c1e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 223:
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
//
//
//
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
        var validatePassword = function validatePassword(rule, value, callback) {
            if (value.length >= 6 && value.length < 25) {
                callback();
            } else {
                callback(new Error('密码长度应为6-25个字符！'));
            }
        };
        // const validateReset = (rule, value, callback) => {
        //     if (value.length >= 6 && value.length < 25) {
        //         callback();
        //     } else {
        //         callback(new Error('密码长度应为6-25个字符！'));
        //     }
        // };
        var validateMobile = function validateMobile(rule, value, callback) {
            if (value.length == 0) {
                callback(new Error('请填写电话号码'));
            } else if (!/^1[34578]\d{9}$/.test(value)) {
                callback(new Error('请填写正确的电话号码'));
            } else {
                callback();
            }
        };
        return {
            model: this.$modelDataSource({
                url: '/api/admin/manager',
                dataKey: 'model',
                attributes: {
                    id: 0,
                    name: '',
                    email: '',
                    mobile: '',
                    username: '',
                    password: ''
                }
            }),
            isLoading: false,
            ruleValidate: {
                name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
                mobile: [{ required: true, validator: validateMobile, trigger: 'blur' }],
                username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
                email: [{ required: true, type: 'email', message: '邮箱格式不正确', trigger: 'blur' }],
                // reset: [
                //     {required: true, validator: validateReset, trigger: 'blur'}
                // ],
                password: [{ required: true, validator: validatePassword, trigger: 'blur' }]
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
                        //                            console.log(error.data);
                        //                            self.$Notice.error({
                        //                                title: error.data.message,
                        //                                desc: self.model.name
                        //                            });
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
            return '添加管理员';
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

/***/ 224:
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
                    { attrs: { span: "24" } },
                    [
                      _c(
                        "Form-item",
                        { attrs: { label: "姓名", prop: "name" } },
                        [
                          _c("i-input", {
                            attrs: { placeholder: "请输入姓名" },
                            model: {
                              value: _vm.model.name,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "name", $$v)
                              },
                              expression: "model.name"
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
                        { attrs: { label: "邮箱", prop: "email" } },
                        [
                          _c("i-input", {
                            attrs: { placeholder: "请输入邮箱" },
                            model: {
                              value: _vm.model.email,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "email", $$v)
                              },
                              expression: "model.email"
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
                        { attrs: { label: "用户名", prop: "username" } },
                        [
                          _c("i-input", {
                            attrs: { placeholder: "请输入用户名" },
                            model: {
                              value: _vm.model.username,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "username", $$v)
                              },
                              expression: "model.username"
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
                        { attrs: { label: "电话号码", prop: "mobile" } },
                        [
                          _c("i-input", {
                            attrs: { placeholder: "请输入电话号码" },
                            model: {
                              value: _vm.model.mobile,
                              callback: function($$v) {
                                _vm.$set(_vm.model, "mobile", $$v)
                              },
                              expression: "model.mobile"
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
              _vm.model.id == 0
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
                            { attrs: { label: "密码", prop: "password" } },
                            [
                              _c("i-input", {
                                attrs: {
                                  type: "password",
                                  placeholder: "请输入密码"
                                },
                                model: {
                                  value: _vm.model.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.model, "password", $$v)
                                  },
                                  expression: "model.password"
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
                : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-36135c1e", module.exports)
  }
}

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(226)
/* template */
var __vue_template__ = __webpack_require__(230)
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
Component.options.__file = "resources\\assets\\js\\views\\admin\\admin_manager\\_table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fb87130", Component.options)
  } else {
    hotAPI.reload("data-v-4fb87130", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _resetPassword2 = __webpack_require__(227);

var _resetPassword3 = _interopRequireDefault(_resetPassword2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    stateManager: {
      type: Object
    }
  },
  components: {
    'reset-password': _resetPassword3.default
  },
  data: function data() {
    var regex = '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,25}$';
    var validatePassword = function validatePassword(rule, value, callback) {
      console.log(value);
      if (value.length < 6 || value.length > 25) {
        callback(new Error('changducuowu'));
      } else {
        callback();
      }
    };
    return {
      list: this.$listDataSource({
        url: '/api/admin/admin'
      }),
      ruleValidate: {
        password: [{ validator: validatePassword, trigger: 'blur' }]
      },
      searchConfig: {
        items: {
          keyword: ''
        },
        status: true,
        complex: false
      },
      model: this.$modelDataSource({
        url: '/api/admin/manager',
        dataKey: 'model',
        attributes: {
          id: 0
        }
      }),
      query: {},
      newModel: {
        newPassword: ''
      }

    };
  },
  methods: {
    showEditDialog: function showEditDialog(id) {
      this.stateManager.editModelId = id;
      this.stateManager.buttonLoading = true;
    },
    changeQuery: function changeQuery(query) {
      this.query = query;
      this.stateManager.refreshList = true;
    },
    resetPassword: function resetPassword(userId, userName) {
      var self = this;
      self.$Modal.confirm({
        title: '重置登录密码',
        render: function render(h) {
          return h('div', [h('h4', userName),
          // h('Form', {
          //     props: {
          //         ref: 'model',
          //         model: self.newModel,
          //         rules: self.ruleValidate,
          //     }
          // }, [
          //     h('FormItem', {
          //         props: {
          //             label: '密码',
          //             prop: 'password',
          //         }
          //     }, [
          //         h('Input', {
          //             props: {
          //                 type: 'password',
          //                 value: self.newModel.newPassword,
          //                 autofocus: true,
          //                 placeholder: '请输入新密码！',
          //             },
          //             on: {
          //                 input: (val) => {
          //                     self.newModel.newPassword = _.trim(val);
          //                 }
          //             }
          //         })
          //     ])

          // ])
          h(_resetPassword3.default, {})]);
        },
        loading: true,
        onOk: function onOk() {
          if (self.newPassword.length < 6 || self.newPassword.length > 25) {
            self.$Modal.remove();
            self.newPassword = '';
            self.$Notice.error({
              title: '错误',
              desc: '密码长度应该为6-25个字符'
            });
          } else {
            axios.post('/api/admin/reset-password/' + userId, {
              password: self.newPassword
            }).then(function (response) {
              self.$Modal.remove();
              self.$Notice.success({
                title: '重置成功',
                desc: userName + '已重置密码'
              });
              self.newPassword = '';
            }).catch(function (error) {
              console.log(error);
              self.newPassword = '';
            });
          }
        },
        onCancel: function onCancel() {
          console.log('取消重置');
          self.newPassword = '';
        }
      });
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
      return this.$store.state.user;
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

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(228)
/* template */
var __vue_template__ = __webpack_require__(229)
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
Component.options.__file = "resources\\assets\\js\\components\\resetPassword.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-edb90b7a", Component.options)
  } else {
    hotAPI.reload("data-v-edb90b7a", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 228:
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

exports.default = {
  props: {},
  data: function data() {
    var validatePassword = function validatePassword(rule, value, callback) {
      console.log(value);
      if (value.length < 6 || value.length > 25) {
        callback(new Error('changducuowu'));
      } else {
        callback();
      }
    };
    return {
      model: {
        newPassword: ''
      },
      validateRules: {
        password: [{ validator: validatePassword, trigger: 'blur' }]
      }
    };
  }
};

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "i-form",
    { ref: "model", attrs: { model: _vm.model, rules: _vm.validateRules } },
    [
      _c(
        "Form-item",
        { attrs: { label: "密码", prop: "password" } },
        [
          _c("i-input", {
            attrs: { placeholder: "请输入邮箱" },
            model: {
              value: _vm.model.newPassword,
              callback: function($$v) {
                _vm.$set(_vm.model, "newPassword", $$v)
              },
              expression: "model.newPassword"
            }
          })
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
    require("vue-hot-reload-api")      .rerender("data-v-edb90b7a", module.exports)
  }
}

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function(){},staticRenderFns:[]}
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4fb87130", module.exports)
  }
}

/***/ }),

/***/ 231:
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
                _vm._v("管理员管理")
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
                    [_vm._v("添加管理员")]
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
    require("vue-hot-reload-api")      .rerender("data-v-4a1a5e64", module.exports)
  }
}

/***/ })

});