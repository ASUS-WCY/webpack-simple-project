import _ from 'lodash';
import printMe from './print'
import './style.css'

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

if (module.hot) {
  module.hot.accept('./print.js',function() {
    console.log('Accepting the updated printMe module!');
    printMe()
  })
}
