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

<style lang="scss">
  .kzjr-pagination-component {
  	margin: 30px auto;
  	text-align: center;
  	.core {
  		display: inline-block;
  		a,
  		span {
  			margin-left: -1px;
  			padding: 7px 12px;
  			border: 1px solid #e1e4e8;
  			position: relative;
  			float: left;
  			font-size: 13px;
  			font-style: normal;
  			font-weight: 600;
  			white-space: nowrap;
  			vertical-align: middle;
  			cursor: pointer;
  			color: gray;
  			user-select: none;
  			background: #fff;
  			&:first-child {
  				margin-left: 0;
  				border-top-left-radius: 3px;
  				border-bottom-left-radius: 3px;
  			}
  			&:last-child {
  				border-top-right-radius: 3px;
  				border-bottom-right-radius: 3px;
  			}
  			&:hover,
  			&:focus {
  				border-color: #e8e4e1;
  				text-decoration: none;
  				background-color: #f3ece7;
  				z-index: 2;
  			}
  		}
  		.current {
  			&,
  			&:hover {
  				border-color: #e67e22;
  				color: #fff;
  				background-color: #e67e22;
  				z-index: 3;
  			}
  		}
  		.gap {
  			&,
  			&:hover {
  				color: #d1d5da;
  				cursor: default;
  				background-color: #fafbfc;
  			}
  		}
  	}
  }
</style>
