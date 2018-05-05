<template>
  <div class="kzjr-pagination-component" v-if="totalPage > 1">
    <div class="core">
      <a class="start" :class="startClass" @click="pageClick(1)">首页</a>
      <a class="prev" :class="startClass" @click="pageClick(current - 1)">上一页</a>
      <span class="gap" v-if="current >= 4 && totalPage >= 5">...</span>
      <a v-for="(n,index) in pageGap" :key="index" :class="n | currentClass(current)" @click="pageClick(n)">{{n}}</a>
      <span class="gap" v-if="current <= totalPage - 3 && totalPage >= 5">...</span>
      <a class="next" :class="endClass" @click="pageClick(current + 1)">下一页</a>
      <a class="end" :class="endClass" @click="pageClick(totalPage)">尾页</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "KzjrPagination",
    props: {
      current: {
        type: [Number, String],
        default: 1
      },
      total: {
        type: [Number, String],
        default: 0
      },
      limit: {
        type: [Number, String],
        default: 10
      }
    },
    computed: {
      totalPage () {
        return Math.ceil(this.total / this.limit)
      },
      startClass () {
        return {
          'gap': this.current == 1
        }
      },
      endClass () {
        return {
          'gap': this.current == this.totalPage
        }
      },
      pageGap () {
        var arr = [];
        if (this.totalPage >= 5) {
          for (var i = this.current - 2; i <= this.current + 2; i++) {
            if (i > 0 && i <= this.totalPage) {
              arr.push(i)
            }
          }
        } else {
          arr = this.totalPage
        }
        return arr
      }
    },
    filters: {
      currentClass (n, current) {
        return {
          'current': n == current
        }
      }
    },
    methods: {
      pageClick (n) {
        n = n < 1 ? 1 : n
        n = n > this.totalPage ? this.totalPage : n
        if (this.current != n) {
          this.$emit('page-change', n)
        }
      }
    }
  }
</script>
