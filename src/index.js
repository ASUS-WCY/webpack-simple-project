import _ from 'lodash';
import './style.css'
import icon from './static/vue.ico'


function component() {
  const element = document.createElement('div');

  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  // 将图像添加到我们已经存在的div中
  const myIcon = new Image()
  myIcon.src = icon

  element.appendChild(myIcon)

  return element;
}

document.body.appendChild(component());