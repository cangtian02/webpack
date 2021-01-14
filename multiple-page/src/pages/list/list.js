/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-01-12 15:10:14
 * @Description: ...
 */
import 'assets/css/reset.css'
import './list.css'
import { log, test } from 'common/utils'

var dom = document.createElement('h5')
dom.innerHTML = log('二') + '----' + test(3)
document.body.appendChild(dom)