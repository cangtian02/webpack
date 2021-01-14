/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-01-14 19:52:58
 * @Description: ...
 */
import Vue from 'vue'
import Test from './test.vue'

const Header = Vue.component('com-header', {
  data: function () {
    return {
      name: '头部'
    }
  },
  template: '<div>舒服舒服</div>'
})

const Template = (data) => {
  console.log(data)
  return (
    <div id="app">
      <Header />
      <Test />
      <p>{data.props.info}</p>
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