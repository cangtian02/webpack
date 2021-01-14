/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-01-13 16:38:44
 * @Description: ...
 */
import 'assets/css/reset.css';
import 'assets/css/style.css';
// import printMe from './print.js';
import { cube } from './math.js';
import tpng from 'assets/img/2.png';
import dom from './test.jsx';
import ReactDOM from 'react-dom';

// 异步预加载
// import(/* webpackPrefetch: true */ './print.js');

let btn = null;

function component() {
  btn = document.createElement('h5');
  btn.innerHTML = 'hello webpack  ' + cube(5);
  return btn;
}

document.body.appendChild(component());

// let img1= document.createElement('img')
// img1.src = tpng
// document.body.appendChild(img1)

// let img2 = document.createElement('div')
// img2.setAttribute('class', 'img')
// document.body.appendChild(img2)

btn.onclick = e => {
  // 异步加载
  import('./print').then(({ default: print }) => {
    btn.innerHTML = btn.innerHTML + print();
  }).catch((error) => {
    console.error(error);
  });
}

const api = location.hostname === 'localhost' ? 'http://' + location.host + '/api' : 'http://localhost:3000'
const options = {
  method: 'GET'
}
fetch(api + '/search?keywords="海阔天空"', options).then(res => res.json()).then(data => {
  console.log(data)
}).catch(err => {
  console.error(err)
})

// jsx
let box = document.createElement('div');
box.id = 'box'
document.body.appendChild(box);

console.log(dom())

function test() {
  return <div>
    <h4>我是test组件</h4>
    {dom('props：子组件你好')}
  </div>
}

ReactDOM.render(test(), document.getElementById('box'));
