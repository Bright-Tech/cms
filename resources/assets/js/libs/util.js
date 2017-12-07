/**
 * Created by 都大爽 on 2017/11/18.
 */
import Cookies from 'js-cookie'
import store from '../store/index'
import authApi from '../api/auth/auth'

let util = {
  /**
   * 获取当前登录用户
   * @returns {*}
   */
  user () {
    try {
      return Cookies.getJSON('user')
    } catch (err) {
      console.log('Get User Failed', err)
      return false
    }
  },
  /**
   * 设置登录后回跳地址
   * @param url
   */
  setAuthRedirect (url = '/admin/index') {
    Cookies.set('authRedirect', url)
  },
  /**
   * 获取登录后回跳地址
   * @returns {*|string}
   */
  getAuthRedirect () {
    return Cookies.get('authRedirect') || '/admin/index'
  },
  /**
   * 登录
   */
  login (user) {
    Cookies.set('user', user, 1/12)
    store.commit('setUser', user)
  },
  /**
   * 登出
   */
  logout () {
    Cookies.remove('user')
    window.location.reload()
  },
  /**
   * 检查登录用户是否拥有该权限
   * @param permission
   */
  hasPermission (permission) {
    let user = this.user()
    return user.permissions.find(item => {
      return item === permission
    })
  },
  fetchUser (cb) {
    let self = this
    authApi.fetchUser(user => {
      self.login(user)
      cb(user)
    })
  }
}

export default util