webpackJsonp([7],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(127)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(130)
/* template */
var __vue_template__ = __webpack_require__(131)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7296653c"
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
Component.options.__file = "resources\\assets\\js\\views\\auth\\login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7296653c", Component.options)
  } else {
    hotAPI.reload("data-v-7296653c", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(128);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3ee31819", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7296653c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7296653c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "/*#particles {*/\n/*position: absolute;*/\n/*width: 100%;*/\n/*height: 100%;*/\n/*}*/\n.login[data-v-7296653c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n  background-image: url(" + __webpack_require__(129) + ");\n  background-size: cover;\n  background-position: center;\n}\n.login .header[data-v-7296653c] {\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 1px solid #ccc;\n}\n.login .header img[data-v-7296653c] {\n  margin-left: 15px;\n  height: 34px;\n}\n.login .header a[data-v-7296653c] {\n  font-size: 14px;\n  margin-right: 25px;\n  color: #fff;\n  text-decoration: none;\n}\n.login .content[data-v-7296653c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  /*min-height: 580px;*/\n  height: 100%;\n}\n.login .content .content-name[data-v-7296653c] {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: #fff;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  top: -30px;\n}\n.login .content .content-name .content-title[data-v-7296653c] {\n  font-size: 45px;\n}\n.login .content .content-name .content-p[data-v-7296653c] {\n  font-size: 20px;\n}\n.login .content .login-content[data-v-7296653c] {\n  position: relative;\n  z-index: 2;\n  bottom: -203px;\n  -webkit-transform: translateY(-60%);\n          transform: translateY(-60%);\n  width: 380px;\n}\n.login .content .login-content .login-header[data-v-7296653c] {\n  font-size: 16px;\n  font-weight: 300;\n  padding: 30px 0;\n}\n.login .content .login-content .form-con[data-v-7296653c] {\n  padding: 10px 0 0;\n}\n.login .content .login-content .form-con .extra-a[data-v-7296653c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.login .content .login-content .form-con .extra-a a[data-v-7296653c] {\n  text-decoration: none;\n  margin: 0.75rem 0.5rem 0.5rem 0.5rem ;\n}\n.login .footer[data-v-7296653c] {\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 1rem 0;\n  font-size: 14px;\n  color: #fff;\n  text-align: center;\n}\n.login-card[data-v-7296653c] {\n  border-radius: 0;\n  border-top: 5px solid #1ab394;\n}\n.login-card[data-v-7296653c]:hover {\n  border-top: 5px solid #1ab394;\n}\n.login-card[data-v-7296653c] > :first-child {\n  padding: 20px 25px 0 25px;\n  border: none;\n}\n.login-card > :first-child P[data-v-7296653c] {\n  font-weight: 500;\n  font-size: 20px;\n  color: black;\n  margin-top: 0.25rem;\n  margin-bottom: 0;\n  height: 21px;\n}\n.login-card > :first-child P[data-v-7296653c]:last-child {\n  font-size: 16px;\n  color: #7f7f7f;\n  margin-top: 1.25rem;\n  margin-bottom: 0;\n}\n.login-card[data-v-7296653c] > :last-child {\n  padding: 16px 25px;\n}\n.login-card > :last-child input[data-v-7296653c] {\n  border-radius: 0px;\n  color: #b2b2b2;\n  border: 1px solid #dfdfdf;\n  height: 40px;\n  width: 330px;\n}\n.login-card > :last-child button[data-v-7296653c] {\n  font-size: 15px;\n  color: #fff;\n  height: 40px;\n  border: none;\n  padding: 0;\n  border-radius: 0;\n  background: #1ab394;\n}\n.login-card > :last-child button[data-v-7296653c]:hover {\n  background: #08977a;\n  border: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 129:
/***/ (function(module, exports) {

module.exports = "/images/login-bg.jpg?ddeaefb0d25014dde738cc4bc61b247e";

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(5);

var _util2 = _interopRequireDefault(_util);

var _auth = __webpack_require__(13);

var _auth2 = _interopRequireDefault(_auth);

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

exports.default = {
  data: function data() {
    return {
      dialogVisible: true,
      isLoading: false,
      model: {
        username: '',
        password: ''
      },
      ruleValidate: {
        username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
      }
    };
  },
  methods: {
    login: function login() {
      var self = this;
      self.$refs['model'].validate(function (valid) {
        if (valid) {
          console.log('表单验证通过');
          self.isLoading = true;
          _auth2.default.login({
            username: self.model.username,
            password: self.model.password
          }, function () {
            _auth2.default.fetchUser(function (user) {
              var authRedirectUrl = _util2.default.getAuthRedirect();
              self.isLoading = false;
              _util2.default.login(user);
              self.$router.push({
                path: authRedirectUrl
              });
            });
          });
        } else {
          console.log('表单验证失败');
        }
      });
    }
  }
};

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "login" }, [
    _vm._m(0, false, false),
    _vm._v(" "),
    _c("div", { staticClass: "content mt-auto container mb-auto mt-auto" }, [
      _vm._m(1, false, false),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "login-content" },
        [
          _c(
            "Card",
            { staticClass: "login-card", attrs: { bordered: false } },
            [
              _c("p", { attrs: { slot: "title" }, slot: "title" }, [
                _vm._v("\n                    欢迎登录\n                ")
              ]),
              _vm._v(" "),
              _c("p", { attrs: { slot: "title" }, slot: "title" }, [
                _vm._v(
                  "\n                    输入任意用户名和密码即可登录\n                "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-con" },
                [
                  _c(
                    "i-form",
                    {
                      ref: "model",
                      attrs: { model: _vm.model, rules: _vm.ruleValidate }
                    },
                    [
                      _c(
                        "Form-item",
                        { attrs: { prop: "username" } },
                        [
                          _c("i-input", {
                            attrs: {
                              type: "text",
                              placeholder: "请输入用户名"
                            },
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
                      ),
                      _vm._v(" "),
                      _c(
                        "Form-item",
                        { attrs: { prop: "password" } },
                        [
                          _c("i-input", {
                            attrs: {
                              type: "password",
                              placeholder: "请输入密码"
                            },
                            on: { "on-enter": _vm.login },
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
                      ),
                      _vm._v(" "),
                      _c(
                        "i-button",
                        {
                          attrs: {
                            type: "ghost",
                            long: "",
                            loading: _vm.isLoading
                          },
                          on: { click: _vm.login }
                        },
                        [_vm._v("登录")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "extra-a" }, [
                    _c("a", { attrs: { href: "" } }, [_vm._v("忘记密码")]),
                    _vm._v(" "),
                    _c("a", { attrs: { href: "" } }, [_vm._v("免费注册")])
                  ])
                ],
                1
              )
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _vm._m(2, false, false)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header container-fluid" }, [
      _c("img", {
        staticClass: "align-self-center",
        attrs: { src: __webpack_require__(24), alt: "logo" }
      }),
      _vm._v(" "),
      _c("a", { staticClass: "align-self-center", attrs: { href: "" } }, [
        _vm._v("首页")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-name" }, [
      _c("div", { staticClass: "content-title" }, [_vm._v("崇光科技")]),
      _vm._v(" "),
      _c("div", { staticClass: "content-p pt-2" }, [_vm._v("内容管理系统")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer  container-fluid" }, [
      _c("span", { staticClass: " container" }, [
        _vm._v(
          "\n            Copyright 天津崇光科技有限公司 © 2014-2017\n        "
        )
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7296653c", module.exports)
  }
}

/***/ })

});