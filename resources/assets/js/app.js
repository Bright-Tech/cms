/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import router from './router/router'
import store from './store'
import iView from 'iview'
import Util from './libs/util'

Vue.use(iView)

//阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

/**
 * 自定义组件
 */
window.ModelDataSource = require('./libs/ModelDataSource');
Vue.use(ModelDataSource);
window.ListDataSource = require('./libs/ListDataSource');
Vue.use(ListDataSource);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('pagination', require('./components/Pagination.vue'));
Vue.component('vue-table', require('./components/Table.vue'));
Vue.component('vue-img-table', require('./components/ImageTable.vue'));
Vue.component('bs4-card', require('./components/card.vue'));
Vue.component('app', require('./app.vue'));

const app = new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<app/>',
  mounted () {
    let user = Util.user()
    if (user) {
      this.$store.commit('setUser', user)
    } else {
      Util.fetchUser(user => {
        console.log(user)
      })
    }
  }
})

/**
* Handling Errors
*/
window.axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  let response = error.response;
  console.log('Error', response);
  if (response){
    switch (response.status) {
      case 401:
        Util.logout()
        break;
      case 422:
        if (response.data.errors){
          _.forOwn(response.data.errors, (item, key) => {
            app.$Notice.error({
              title: '数据不合法',
              desc: item[0]
            })
          })
        } else {
          _.forOwn(response.data, (item, key) => {
            app.$Notice.error({
              title: '数据不合法',
              desc: item
            })
          })
        }
        break;
      case 500:
        app.$Notice.error({
          title: '程序错误',
          desc: '请联系技术人员'
        });
        break;
      default:
        break;
    }
  } else {
    app.$Notice.error({
      title: '数据加载超时',
      desc: '请尝试刷新页面，并仔细检查网络链接状况或联系技术人员！'
    });
  }

  return Promise.reject(error);
});



