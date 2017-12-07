/**
 * Created by 都大爽 on 2017/11/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import admin from './modules/admin'
import site from './modules/site'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    /**
     * 页面标题
     */
    title: '',
    /**
     * 当前页
     */
    currentPage: {
      name: 'home_index',
      title: '首页',
      path: '/index'
    },
    /**
     * 面包屑
     */
    breadcrumbs: [],
    /**
     * 缓存页
     */
    cachePage: []
  },

  mutations: {
    /**
     * 变更标题
     * @param state
     * @param title
     */
    setTitle (state, title = '') {
      state.title = title
      document.title = '崇光科技-' + state.title
    },
    /**
     * 设置当前页
     * @param state
     * @param route
     */
    setCurrentPage (state, route) {
      state.currentPage.name = route.name
      state.currentPage.path = route.fullPath
      state.currentPage.title = route.meta.title
    },
    /**
     * 设置面包屑
     * @param state
     * @param breadcrumbs
     */
    setBreadcrumbs (state, breadcrumbs) {
      state.breadcrumbs = breadcrumbs
    },
    /**
     * 根据路由设置面包屑
     * @param state
     * @param route
     */
    setBreadcrumbsByRoute (state, route) {
      if (route.meta.breadcrumbs) {
        state.breadcrumbs = route.meta.breadcrumbs;
      }
    },
  },
  actions: {},
  modules: {admin},
  strict: debug
})