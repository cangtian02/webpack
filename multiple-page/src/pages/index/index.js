/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-01-12 16:18:22
 * @Description: ...
 */
import 'assets/css/reset.css'
import './index.css'
import { log, test } from 'common/utils'

var dom = document.createElement('h5')
dom.innerHTML = log('一') + '----' + test(2)
document.body.appendChild(dom)


