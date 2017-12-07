/**
 * Created by 都大爽 on 2017/11/20.
 */
import selectApi from '../../api/admin/getSelectList'
import assetsApi from '../../api/admin/assets'

const debug = process.env.NODE_ENV !== 'production'

const state = {
  /**
   * 隐藏目录导航
   */
  systemHideMenuText: false,
  /**
   * 用户信息
   */
  user: {
    name: '',
    email: '',
    mobile: '',
    avatar: '../../../images/portrait.png',
    permissions: [], //权限列表
    can: function (permission) {
      return this.permissions.findIndex(item => item === permission) > -1
    }
  },
  /**
   * 分类下拉列表
   */
  categories: [],
  /**
   * 导航列表
   */
  navigationList: [],
  /**
   * 素材列表
   */
  // imageList: []
}

const getters = {}

const actions = {
  fetchCategories ({commit, state}) {
    if (state.categories.length < 1) {
      selectApi.getCategories(response => {
        commit('setCategories', response)
      })
    }
  },
  fetchNavigationList ({commit, state}) {
    if (state.navigationList.length < 1) {
      selectApi.getNavigations(response => {
        commit('setNavigationList', response)
      })
    }
  },
  // fetchAssets ({commit, state}) {
  //   if (state.imageList.length < 1) {
  //     assetsApi.getAssetsList(response => {
  //       commit('setImageList', response)
  //     })
  //   }
  //   return state.imageList;
  // }
}

const mutations = {
  /**
   * 设置当前用户
   * @param state
   * @param user
   */
  setUser(state, user) {
    debug && console.log(user)
    state.user.id = user.id
    state.user.name = user.name
    state.user.email = user.email
    state.user.mobile = user.mobile
    state.user.permissions = user.permissions
  },

  /**
   * 变更导航目录显示状态
   * @param state
   */
  toggleMenuTextVisible (state) {
    state.systemHideMenuText = !state.systemHideMenuText
  },
  setCategories (state, categories) {
    state.categories = categories
  },
  setNavigationList (state, navigationList) {
    state.navigationList = navigationList
  },
  // setImageList (state, imageList) {
  //   state.imageList = imageList
  // },
  // addNewImage (state, image) {
  //   state.imageList = Array.from([
  //     image,
  //     ...state.imageList
  //   ])
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}