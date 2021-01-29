<!--
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-01-27 11:03:57
 * @Description: ...
-->
<template>
  <div class="box" :class="ani">
    <div class="item" v-for="(item, idx) in arr" :key="idx" :class="'item_' + (idx + 1)">{{item}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ani: '',
      step: 0,
      arr: [],
      list: [1, 2, 3, 4, 5]
    }
  },
  mounted() {
    this.arr = this.list.slice(this.step, this.step + 4)
    this.aniGo()
  },
  destroyed() {
    if (this.setTimeoutFun) {
      clearTimeout(this.setTimeoutFun)
    }
  },
  methods: {
    aniGo() {
      this.setTimeoutFun = setTimeout(() => {
        this.ani = 'ani'
        this.step++
        setTimeout(() => {
          if (this.step === this.list.length - 3) {
            this.list = [...this.list, ...this.list]
          } else if (this.step === this.list.length / 2) {
            this.list = this.list.slice(0, this.list.length / 2)
            this.step = 0
          }
          this.arr = this.list.slice(this.step, this.step + 4)
          this.ani = ''
          this.aniGo()
        }, 1000)
      }, 600)
    }
  },
}
</script>

<style scoped>
.box{width: 300px;height: 100px;overflow: hidden;position: relative;}
.item{width: 100px;height: 100px;background: green;border-radius: 50%;position: absolute;top: 0;transition-property: transform opacity;}
.item_1{opacity: 1;}
.item_2{left: 100px;}
.item_3{left: 200px;}
.item_4{left: 300px;}
.ani .item{transition-duration: 1000ms;}
.ani .item_1{opacity: 0;}
.ani .item_2, .ani .item_3, .ani .item_4{transform: translate3d(-100px, 0, 0);}
</style>
