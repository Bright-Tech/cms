<template>
    <div class="main-container" :class="{'main-hide-text': hideMenuText}">
        <side-bar :menuList="menuList" :iconSize="14"></side-bar>
        <div class="body-container" :style="{'margin-left': !hideMenuText ?  '12.5rem' : 0}">
            <layout-header></layout-header>
            <!--<tab-bar></tab-bar>-->
            <div class="page-container container-fluid mt-3">
                <keep-alive :include="cachePage">
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
</template>
<script>
  import header from './header.vue'
  import SideBar from './sidebar.vue'
  import { mapState } from 'vuex'
  import { adminMenuRouter } from '../../router/index'

  export default {
    components: {
      'layout-header': header,
      SideBar
    },
    computed: {
      ...mapState({
        hideMenuText: state => state.admin.systemHideMenuText,
        cachePage: 'cachePage'
      }),
      menuList () {
        return adminMenuRouter;
      }
    }
  }
</script>
<style lang="scss">
    @import "../../../sass/main.scss";
</style>