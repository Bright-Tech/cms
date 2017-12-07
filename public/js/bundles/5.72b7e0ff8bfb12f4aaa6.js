webpackJsonp([5],{

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(197)
/* template */
var __vue_template__ = __webpack_require__(204)
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
Component.options.__file = "resources/assets/js/views/admin/category/category_num.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61063513", Component.options)
  } else {
    hotAPI.reload("data-v-61063513", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dialog2 = __webpack_require__(198);

var _dialog3 = _interopRequireDefault(_dialog2);

var _table2 = __webpack_require__(201);

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

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(199)
/* template */
var __vue_template__ = __webpack_require__(200)
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
Component.options.__file = "resources/assets/js/views/admin/category/_dialog.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7e3f58ee", Component.options)
  } else {
    hotAPI.reload("data-v-7e3f58ee", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 199:
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

exports.default = {
    props: {
        stateManager: {
            type: Object
        },
        list: {}
    },
    data: function data() {
        return {
            categoryList: [],
            model: this.$modelDataSource({
                url: '/api/admin/category',
                dataKey: 'model',
                attributes: {
                    id: 0,
                    name: '',
                    parent_id: 0
                }
            }),
            isLoading: false,
            ruleValidate: {
                name: [{ required: true, message: '分类名称不能为空', trigger: 'blur' }]
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
        addCategoryList: function addCategoryList() {
            var self = this;
            axios.get('/api/admin/category-select-data').then(function (res) {
                self.categoryList = res.data.data;
                console.log(self.categoryList);
            }).catch(function (res) {});
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
            return '添加分类';
        }
    },
    created: function created() {
        this.addCategoryList();
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

/***/ 200:
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
                        { attrs: { label: "分类名称", prop: "name" } },
                        [
                          _c("i-input", {
                            attrs: { placeholder: "请输入分类名称" },
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
                        { attrs: { label: "上级分类", prop: "parent_id" } },
                        [
                          _c(
                            "i-select",
                            {
                              attrs: { clearable: true },
                              model: {
                                value: _vm.model.parent_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.model, "parent_id", $$v)
                                },
                                expression: "model.parent_id"
                              }
                            },
                            _vm._l(_vm.categoryList, function(item) {
                              return _c(
                                "i-option",
                                {
                                  key: item.value,
                                  attrs: { value: item.value }
                                },
                                [_vm._v(_vm._s(item.label))]
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
    require("vue-hot-reload-api")      .rerender("data-v-7e3f58ee", module.exports)
  }
}

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(202)
/* template */
var __vue_template__ = __webpack_require__(203)
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
Component.options.__file = "resources/assets/js/views/admin/category/_table.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3774b69d", Component.options)
  } else {
    hotAPI.reload("data-v-3774b69d", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 202:
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

exports.default = {
  props: {
    stateManager: {
      type: Object
    }
  },
  data: function data() {
    return {
      list: this.$listDataSource({
        url: '/api/admin/category'
      }),
      searchConfig: {
        items: {
          keyword: ''
        },
        status: true,
        complex: false
      },
      model: this.$modelDataSource({
        url: '/api/admin/category',
        dataKey: 'model',
        attributes: {
          id: 0
        }
      }),
      query: {},
      newPassword: ''
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
    updateModel: function updateModel(userId) {
      this.stateManager.editDialogVisible = true;
      this.stateManager.editModelId = userId;
    },
    deleteModel: function deleteModel(modelId, modelName) {
      console.log(modelId);
      var self = this;
      axios.get('/api/admin/category/check-content/' + modelId).then(function (response) {
        var str = '确认删除' + modelName + '吗，删除后无法恢复';
        if (response.data.state === '该分类下有内容，是否继续删除') {
          str = '该分类下有内容，是否继续删除';
        }
        self.$Modal.confirm({
          title: '删除确认',
          content: str,
          loading: true,
          onOk: function onOk() {
            self.model.reset();
            self.model.uuid = modelId;
            self.model.destroy(function (response) {
              console.log();
              //                if(response.data.state === '该分类下有内容，是否继续删除？'){
              //                    self.$Notice.warning({
              //                        title: '删除成功',
              //                        desc: modelName + '已删除'
              //                    });
              //                }else{
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
};

/***/ }),

/***/ 203:
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
                _c("td", [_vm._v(_vm._s(props.item.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(props.item.parent_name))]),
                _vm._v(" "),
                _c(
                  "td",
                  { staticClass: "col-xs-3" },
                  [
                    _c(
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
                                _vm.updateModel(props.item.id)
                              }
                            }
                          },
                          [_c("Icon", { attrs: { type: "edit", size: "16" } })],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
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
                                _vm.deleteModel(props.item.id, props.item.name)
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
          _c("th", [_vm._v("名称")]),
          _vm._v(" "),
          _c("th", [_vm._v("上级")]),
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
    require("vue-hot-reload-api")      .rerender("data-v-3774b69d", module.exports)
  }
}

/***/ }),

/***/ 204:
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
                _vm._v("分类管理")
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
                    [_vm._v("添加新分类")]
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
    require("vue-hot-reload-api")      .rerender("data-v-61063513", module.exports)
  }
}

/***/ })

});