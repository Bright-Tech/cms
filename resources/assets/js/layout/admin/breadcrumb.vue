<!--
-->
<template>
    <nav aria-label="breadcrumb" role="navigation">
        <ol class="breadcrumb" :class="breadcrumbClass">
            <li class="breadcrumb-item" :class="items ?'active':''" aria-current="page">
                <span v-if="items"><router-link :to="{name: 'admin_index'}">首页</router-link></span>
                <span v-else><strong>首页</strong></span>
            </li>
            <li class="breadcrumb-item" :class="item.active?'active':''" aria-current="page"
                v-for="item in items">
                <span v-if="item.active"><strong>{{item.title}}</strong></span>
                <span v-else><router-link :to="{name:item.routeName}">{{item.title}}</router-link></span>
            </li>
        </ol>
    </nav>
</template>
<script>
  export default {
    props: {
      /**
       * 参数格式
       *  items:[
       *    {
       *        routeName: 'route-name',
       *        title: '',
       *        active: true
       *    }
       *  ]
       */
      items: {
        default: function () {
          return []
        },
        type: Array,
        required: true
      },
      breadcrumbClass: {
        default: ''
      }
    }
  }
</script>