<template>
    <transition name="fade">
        <div class="container-fluid main-header-container">
            <nav class="navbar  align-items-center p-0 py-1 border-bottom">
                <div class="navbar-toggler"
                     :style="{transform: 'rotateZ(' + (this.hideMenuText ? '-90' : '0') + 'deg)'}" type="text"
                     @click="toggleClick">
                    <Icon type="navicon" size="32"></Icon>
                </div>

                <ul class="navbar-nav flex-row align-items-center ml-md-auto">

                    <li class="nav-item ml-2 d-flex align-items-center">
                        <Dropdown trigger="click" @on-click="handleClickUserDropdown">
                            <a href="javascript:void(0)">
                                <span class="main-user-name">{{ user.name }}</span>
                                <Icon type="arrow-down-b"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem name="ownSpace">个人中心</DropdownItem>
                                <DropdownItem name="logout" divided>退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Avatar :src="user.avator" style="line-height: inherit; margin-left: 10px;"></Avatar>
                    </li>
                </ul>
            </nav>
            <div class="row header-title-container py-3 align-items-center border-bottom">
                <div class="col">
                    <span class="h5">{{currentPageName}}</span>
                </div>
                <div class="col">
                    <bs4-breadcrumb :items="breadcrumbItems"
                                    breadcrumbClass="d-flex align-items-end float-right m-0 p-0"></bs4-breadcrumb>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  import Bs4Breadcrumb from './breadcrumb.vue'
  import Util from '../../libs/util.js'
  import authApi from '../../api/auth/auth'
  import {mapState} from 'vuex'
  export default {
    name: 'AdminLayoutHeader',
    components: {
      Bs4Breadcrumb
    },
    data () {
      return {
        messageCount: 0
      }
    },
    computed: {
      ...mapState({
        hideMenuText: state => state.admin.systemHideMenuText,
        currentPageName: state => state.currentPage.title,
        breadcrumbItems: state => state.breadcrumbs,
        user: state => state.admin.user,
        categoryList: state => state.admin.categoryList
      })
    },
    methods: {
      toggleClick () {
        this.$store.commit('toggleMenuTextVisible')
      },
      handleClickUserDropdown (name) {
        if (name === 'ownSpace') {
          this.$router.push({
            name: 'ownspace_index'
          })
        } else if (name === 'logout') {
          authApi.logout(() => {
            Util.logout()
          })
        }
      }
    }
  }
</script>

<style lang="scss">
    @import "../../../sass/header";
</style>