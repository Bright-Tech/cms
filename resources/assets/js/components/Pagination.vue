<!-- template for the modal component -->
<template>
    <nav aria-label="Page navigation">
        <div class="row">
            <div class="col-auto mr-auto">
                <div class="total">总计：<span class="badge badge-primary">{{total}}</span></div>
            </div>
            <div class="col-auto">
                <ul class="pagination pagination-sm">
                    <li :class="{disabled: currentPage==1}" class="page-item">
                        <a @click.stop="goPage(1)" aria-label="Previous" class="page-link">
                            <span aria-hidden="true">首页</span>
                        </a>
                    </li>
                    <li :class="{disabled: currentPage==1}" class="page-item">
                        <a @click.stop="clickPrev" aria-label="Previous" class="page-link">
                            <span aria-hidden="true">上一页</span>
                        </a>
                    </li>

                    <li v-for="page in pages" :class="{active: currentPage==page}" class="page-item">
                        <span v-if="page == -1">...</span>
                        <a v-else @click.stop="goPage(page)" class="page-link">{{page}}</a>
                    </li>

                    <li :class="{disabled: currentPage==pageCount}" class="page-item">
                        <a @click.stop="clickNext" aria-label="Next" class="page-link">
                            <span aria-hidden="true">下一页</span>
                        </a>
                    </li>
                    <li :class="{disabled: currentPage==pageCount}" class="page-item">
                        <a @click.stop="goPage(pageCount)" aria-label="Next" class="page-link">
                            <span aria-hidden="true">末页</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
  module.exports = {
    props: {
      'pageCount': {type: Number, required: true},
      'total': {
        type: Number
      },
      'pageRange': {
        type: Number,
      },
      'marginPages': {type: Number, default: 1},
      'currentPage': {type: Number, default: 1}
    },
    data: function () {
      return {
        prevPage: 0,
        nextPage: 1,
        firstPage: 1,
        lastPage: this.pageCount
      };
    },
    methods: {
      clickPrev: function () {
        if (this.currentPage == 1) {
          return false;
        } else {
          this.$emit('goPage', {page: this.currentPage - 1});
        }
      },
      clickNext: function () {
        if (this.currentPage == this.pageCount) {
          return false;
        } else {
          this.$emit('goPage', {page: this.currentPage + 1});
        }
      },
      goPage: function (page) {
        if (page == 1 && this.currentPage == 1) {
          return false;
        } else if (page == this.pageCount && this.currentPage == this.pageCount) {
          return false;
        } else {
          this.$emit('goPage', {page: page});
        }
      },
      refresh: function () {


      }
    },
    computed: {
      pages: function () {
        let marginPages = 2;
        let pages = [];
        if (this.pageCount > 10) {
          if (this.currentPage <= marginPages + 1) {
            pages = [1, 2, 3, 4, 5, -1];
          } else if (this.currentPage >= this.pageCount - ( marginPages + 1)) {
            pages = [-1, this.pageCount - 4, this.pageCount - 3, this.pageCount - 2, this.pageCount - 1, this.pageCount];
          } else {
            for (let i = this.currentPage - marginPages; i <= this.currentPage + marginPages; i++) {
              pages.push(i);
            }
            pages.unshift(-1);
            pages.push(-1);
          }
        } else {
          for (let i = 1; i <= this.pageCount; i++) {
            pages.push(i);
          }
        }
        return pages;
      }
    }
  }
</script>

<style scoped lang="scss">
    .pagination > li > a, .pagination > li > span {
        line-height: 1;
    }
    .page-link {
         &:hover{
             /*background-color: #e9ecef !important;*/
             color: #19aa8d !important;
         }
    }
</style>