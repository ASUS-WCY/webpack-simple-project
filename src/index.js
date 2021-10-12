import _ from 'lodash';
import printMe from './print'

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button')

  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'click me and check the console!'
  btn.onclick = printMe

  element.appendChild(btn)

  return element;
}

document.body.appendChild(component());