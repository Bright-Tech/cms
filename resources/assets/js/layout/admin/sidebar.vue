<template>
    <div class="sidebar-container " v-show="!hideMenuText">
        <div class="logo-container d-flex align-items-center">
            <img src="../../../images/logo.png" key="max-logo" class="m-auto"/>
        </div>
        <Menu ref="sideMenu" :active-name="currentPageName" :open-names="openedSubmenuArr" theme="dark" width="auto"
              @on-select="changeMenu" accordion>
            <template v-for="item in menuList">
                <MenuItem v-if="item.children.length <= 1 && checkPermission(item)" :name="item.children[0].name"
                          :key="item.path">
                    <Icon :type="item.children[0].meta.icon" :size="iconSize" :key="item.children[0].path"></Icon>
                    <span class="layout-text" :key="item.path">{{ item.children[0].meta.title }}</span>
                </MenuItem>

                <Submenu v-if="item.children.length > 1 && checkPermission(item)" :name="item.name"
                         :key="item.path">
                    <template slot="title">
                        <Icon :type="item.meta.icon" :size="iconSize"></Icon>
                        <span class="layout-text">{{ item.meta.title }}</span>
                    </template>
                    <template v-for="child in item.children">
                        <MenuItem :name="child.name" :key="child.name" v-if="checkPermission(child)">
                            <Icon :type="child.meta.icon" :size="iconSize" :key="child.name"></Icon>
                            <span class="layout-text" :key="child.name">{{ child.meta.title }}</span>
                        </MenuItem>
                    </template>
                </Submenu>
            </template>
        </Menu>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'Sidebar',
    data () {
      return {
        currentPageName: this.$route.name,
        openedSubmenuArr: [this.$route.matched[0].name]
      };
    },
    props: {
      slotTopClass: String,
      menuList: Array,
      iconSize: Number
    },
    methods: {
      changeMenu (active) {
        this.$router.push({
          name: active
        });
      },
      checkPermission (item) {
        let requirePermission = item.meta.requirePermission;
        if (requirePermission && this.user.permissions.findIndex(permission => permission === requirePermission) === -1) {
          return false;
        } else {
          return true;
        }
      }
    },
    computed: {
      ...mapState({
        user: state => state.admin.user,
        hideMenuText: state => state.admin.systemHideMenuText
      })
    },
    watch: {
      '$route' (to) {
        this.currentPageName = to.name;
      },
      currentPageName () {
        this.$nextTick(() => {
          this.$refs.sideMenu.updateOpened();
        });
      }
    },
    updated () {
      this.$nextTick(() => {
        this.$refs.sideMenu.updateOpened();
      });
    }
  }
</script>

<style lang="scss">
    @import "../../../sass/sidebar";
</style>