/**
 * Created by 都大爽 on 2017/11/18.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { routers } from './index'
import iView from 'iview'
import store from '../store'
import Util from '../libs/util'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()

    if(to.name==='admin'){
      router.replace({
          name:'admin_index'
      })
    }

  if (to.matched.some(record => record.meta && record.meta.requireAuth)) {
    if (!Util.user()){
      Util.setAuthRedirect(to.fullPath)
      next({
        name: 'login'
      })
    } else {
      if (to.meta.requirePermission) {
        if (Util.hasPermission(to.meta.requirePermission)) {
          next()
        } else {
          next(new Error('403'))
        }
      } else {
        next()
      }
    }
  } else {
    next()
  }

  iView.LoadingBar.finish()
})

router.afterEach((to, from) => {
  store.commit('setTitle', to.meta.title)
  store.commit('setBreadcrumbsByRoute', to)
  store.commit('setCurrentPage', to)
  window.scrollTo(0, 0)
})

router.onError((error) => {
  switch (error.message) {
    case '404':
      router.push({name: '404'})
      break
    case '403':
      router.push({name: '403'})
      break
  }
  console.log(error)
})

export default router