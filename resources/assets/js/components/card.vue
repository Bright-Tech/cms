<template>
    <div class="card rounded-bottom">
        <div class="card-header" v-if="this.$slots.header">
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: '',
    props: {
//      cardClass: {
//        type: String,
//        default: ''
//      }
    },
    created () {
    }
  }
</script>
<style lang="scss" scoped>
    .card {
        border-radius: 0;

        .card-header {
            background-color: #fff;
            border-top: #d2d2d2 2px solid;

            &:first-child {
                border-radius: 0 !important;
            }
        }

        .card-body {
            padding-top: 0;
        }
    }
</style>