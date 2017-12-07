webpackJsonp([9],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(217)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(219)
/* template */
var __vue_template__ = __webpack_require__(220)
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
Component.options.__file = "resources\\assets\\js\\views\\admin\\site_setting\\site_settings.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8719f19e", Component.options)
  } else {
    hotAPI.reload("data-v-8719f19e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(218);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("bb11cde2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8719f19e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./site_settings.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8719f19e\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./site_settings.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "\n.t_item {\n    margin-top: 15px;\n    height: 50px;\n}\n.t_item_textarea {\n    margin-top: 15px;\n}\n.title_name {\n    width: 150px;\n    color: #676a6c;\n    font-size: 13px;\n    font-weight: bold;\n}\n.ivu-input-large {\n    font-size: 13px;\n    height: 42px;\n}\n.ive-btn_confirm {\n    height: 42px;\n    font-size: 15px;\n}\ntextarea.ivu-input {\n    font-size: 13px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 219:
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

exports.default = {
    name: 'siteSettings',
    components: {},
    data: function data() {
        return {
            value: '',
            isLoading: false,
            refreshList: true,
            siteData: []
        };
    },
    created: function created() {
        this.initData();
    },

    methods: {
        initData: function initData() {
            var self = this;
            axios({
                method: 'get',
                url: self.apiBaseUrl + '/api/admin/option'
            }).then(function (response) {
                self.refreshList = false;
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
        saveSetting: function saveSetting() {
            var self = this;
            if (self.siteData != null) {
                self.isLoading = true;

                var tempPushData = [];
                for (var k = 0, length = self.siteData.length; k < length; k++) {
                    tempPushData[self.siteData[k].key] = self.siteData[k].value;
                }
                console.log(tempPushData);
                axios.post(self.apiBaseUrl + '/api/admin/option', {
                    'title': tempPushData['title'],
                    'logo': tempPushData['logo'],
                    'description': tempPushData['description'],
                    'icp': tempPushData['icp'],
                    'web_analytics_code': tempPushData['web_analytics_code'],
                    'keywords': tempPushData['keywords'],
                    'domain': tempPushData['domain']
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
        apiBaseUrl: function apiBaseUrl() {
            return window.Laravel.baseUrl;
        }
    }
};

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("bs4-card", [
        _c(
          "div",
          { staticClass: "row", attrs: { slot: "header" }, slot: "header" },
          [_c("div", { staticClass: "col-auto mr-auto" }, [_vm._v("网站设置")])]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex flex-column", attrs: { type: "flex" } },
          [
            _vm._l(_vm.siteData, function(item, index) {
              return _c("div", [
                item.key == "description"
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "d-flex t_item_textarea align-items-center",
                        attrs: { type: "flex" }
                      },
                      [
                        _c("div", { staticClass: "title_name" }, [
                          _vm._v(_vm._s(item.label))
                        ]),
                        _vm._v(" "),
                        _c("Input", {
                          staticClass: "col-8 textarea.ivu-input",
                          attrs: {
                            type: "textarea",
                            size: "large",
                            autosize: { minRows: 6, maxRows: 10 },
                            placeholder: item.description
                          },
                          model: {
                            value: item.value,
                            callback: function($$v) {
                              _vm.$set(item, "value", $$v)
                            },
                            expression: "item.value"
                          }
                        })
                      ],
                      1
                    )
                  : _c(
                      "div",
                      {
                        staticClass: "d-flex t_item align-items-center",
                        attrs: { type: "flex" }
                      },
                      [
                        _c("div", { staticClass: "title_name" }, [
                          _vm._v(_vm._s(item.label))
                        ]),
                        _vm._v(" "),
                        _c("Input", {
                          staticClass: "col-8 ivu-input-large",
                          attrs: {
                            size: "large",
                            placeholder: item.description
                          },
                          model: {
                            value: item.value,
                            callback: function($$v) {
                              _vm.$set(item, "value", $$v)
                            },
                            expression: "item.value"
                          }
                        })
                      ],
                      1
                    )
              ])
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-flex t_item align-items-center",
                attrs: { type: "flex" }
              },
              [
                _c("div", { staticClass: "title_name" }, [_vm._v(" ")]),
                _vm._v(" "),
                _c(
                  "i-button",
                  {
                    staticClass: "col-6 ive-btn_confirm",
                    staticStyle: { "margin-left": "65px" },
                    attrs: { type: "primary", loading: _vm.isLoading },
                    on: {
                      click: function($event) {
                        _vm.saveSetting()
                      }
                    }
                  },
                  [_vm._v("确定\n                ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("i-col", { attrs: { span: "24" } }, [
              _c(
                "div",
                { staticClass: "demo-spin-article" },
                [
                  _vm.refreshList
                    ? _c("Spin", { attrs: { fix: "", size: "large" } })
                    : _vm._e()
                ],
                1
              )
            ])
          ],
          2
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-8719f19e", module.exports)
  }
}

/***/ })

});