/**
 * Created by 都大爽 on 2017/11/18.
 */
import AdminMain from '../layout/admin/main.vue'
import SiteMain from '../layout/site/main.vue'
import Util from '../libs/util'

export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录'
  },
  component: () => import('../views/auth/login.vue'),
  beforeEnter: (to, from, next) => {
    if (Util.user()) {
      next({
        name: 'admin_index'
      })
    } else {
      next()
    }
  }
}

export const page404 = {
  path: '/*',
  name: 'error_404',
  meta: {
    title: '404-页面不存在'
  },
  component: () => import('../views/error_pages/404.vue')
}

export const page403 = {
  path: '/403',
  name: 'error_403',
  meta: {
    title: '403-权限不足'
  },
  component: () => import('../views/error_pages/403.vue')
}

export const siteRouter = {
  path: '/',
  name: 'home',
  component: SiteMain,
  children: [
    {
      path: 'index',
      name: 'home_index',
      meta: {
        title: '首页'
      },
      component: () => import('../views/site/index.vue')
    }
  ]
}

export const adminMenuRouter = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminMain,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'index',
        name: 'admin_index',
        meta: {
          icon: 'ios-speedometer',
          title: '首页'
        },
        component: () => import('../views/admin/dashboard.vue')
      }
    ]
  },


  {
    path: '/admin',
    name: 'navigation-manager',
    component: AdminMain,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'navigation-manager',
        name: 'navigation_manager',
        meta: {
          title: '导航管理',
          icon: 'ios-navigate',
          requirePermission: 'edit-user',
          breadcrumbs: [{routerName: 'navigation_manager', title: '导航管理', active: true}]
        },
        component: () => import('../views/admin/navigation_manager/navigation.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'content',
    component: AdminMain,
    meta: {
      requireAuth: true,
      icon: 'cube',
      title: '内容'
    },
    children: [
      {
        path: 'content-blog',
        name: 'content_blog',
        meta: {
          icon: 'social-wordpress',
          title: '博文',
          requirePermission: 'create-post',
          breadcrumbs: [{routerName: 'content_blog', title: '博客内容', active: true}]
        },
        component: () => import('../views/admin/content_blog/contentBlog.vue')
      },
      {
        path: 'content-picture',
        name: 'content_picture',
        meta: {
          icon: 'image',
          title: '图片',
          requirePermission: 'create-post',
          breadcrumbs: [{routerName: 'content_picture', title: '图片内容', active: true}]
        },
        component: () => import('../views/admin/content_picture/contentPicture.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'assets-manager',
    component: AdminMain,
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'assets_manager',
        name: 'assets-manager',
        meta: {
          icon: 'social-wordpress',
          title: '素材',
          requirePermission: '',
          breadcrumbs: [{routerName: 'assets-manager', title: '素材管理', active: true}]
        },
        component: () => import('../views/admin/assets_manager/assets_manager.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'setting',
    component: AdminMain,
    meta: {
      requireAuth: true,
      icon: 'ios-gear',
      title: '设置'
    },
    children: [
      {
        path: 'category',
        name: 'setting_category',
        meta: {
          title: '分类设置',
          icon: 'grid',
          requirePermission: 'edit-user',
          breadcrumbs: [{routerName: 'setting_category', title: '分类设置', active: true}]
        },
        component: () => import('../views/admin/category/category_num.vue')
      },
      {
        path: 'property',
        name: 'setting_property',
        meta: {
          title: '参数设置',
          icon: 'wrench',
          requirePermission: 'edit-user',
          breadcrumbs: [{routerName: 'setting_property', title: '参数设置', active: true}]
        },
        component: () => import('../views/admin/property/property.vue')
      },
      {
        path: 'site-settings',
        name: 'site_settings',
        meta: {
          title: '网站设置',
          icon: 'xbox',
          requirePermission: '',
          breadcrumbs: [{routerName: 'site_settings', title: '网站设置', active: true}]
        },
        component: () => import('../views/admin/site_setting/site_settings.vue')
      },
      {
        path: 'admin-manager',
        name: 'admin_manager',
        meta: {
          title: '管理员设置',
          icon: 'ios-people',
          requirePermission: 'edit-user',
          breadcrumbs: [{routerName: 'admin_manager', title: '管理员设置', active: true}]
        },
        component: () => import('../views/admin/admin_manager/manager.vue')
      }
    ]
  }
]

export const adminOtherRouter = {
  path: '/admin',
  name: 'admin_other',
  component: AdminMain,
  meta: {
    requireAuth: true
  },
  children: [
    {
      path: 'content_detail/:contentId',
      name: 'content_detail',
      meta: {
        title: '文章详情',
        requirePermission: 'edit-content'
      }
    }
  ]
}

export const routers = [
  loginRouter,
  siteRouter,
  ...adminMenuRouter,
  adminOtherRouter,
  page403,
  page404
]