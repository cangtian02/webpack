/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-01-26 19:08:03
 * @Description: ...
 */
import Vue from 'vue'
import Test from './test.vue'

const HeaderTem = (data) => {
  return (
    <p>{data.props.name}</p>
  )
}

const Header = Vue.component('com-header', {
  data: function () {
    return {
      name: '头部'
    }
  },
  render: function(h) {
    return (
      <HeaderTem name={this.name} />
    )
  },
  // template: '<div>舒服舒服</div>'
})

const Template = (data) => {
  return (
    <div id="app">
      <Test />
    </div>
  )
}

new Vue({
  el: '#app',
  data() {
    return {
      info: '222'
    }
  },
  render: function(h) {
    return (
      <Template info={this.info} />
    )
  }
})