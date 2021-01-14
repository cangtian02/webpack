/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-01-11 14:42:44
 * @Description: ...
 */
// import _ from 'lodash';
import './style.css';
// import printMe from './print.js';
import { cube } from './math.js';

// 预加载
import(/* webpackPrefetch: true */ './print.js');

let btn = null

function component() {
  btn = document.createElement('div');

  // btn.innerHTML = _.join(['Hello', 'cangtian', cube(5)], ' ');
  btn.innerHTML = 'fsfs'

  return btn;
}

document.body.appendChild(component());

// btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
//   let print = module.default;
//   btn.innerHTML = btn.innerHTML + print();
// });

btn.onclick = e => {
  // 异步加载
  import('./print').then(({ default: print }) => {
    btn.innerHTML = btn.innerHTML + print();
  }).catch((error) => 'An error occurred while loading the component');
}
