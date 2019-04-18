#### [DOM0和DOM2事件的区别]



##### DOM0

原理：在元素的事件属性上绑定事件（例如,onclick,onmouseover等）

- 只能绑定一个事件函数
- 添加：`element.onclick = function(){}`
- 移除：通过null清空事件

常见的举例：

- `window.onload`（attachment时触发，html和css都加载完成）
- `element.onclick`



##### DOM2

原理：在事件池中给元素绑定事件函数（元素+事件类型+事件函数+阶段）

- 同一个元素的相同事件类型可以绑定多个不同的事件函数（以下任意一个不同）
  - 元素
  - 事件类型
  - 事假函数
  - 阶段（冒泡）
- 添加
  - `addEventListener('click',handleClick,false)`:没有on的事件类型，不用使用匿名函数
  - `attachEventListener('onclike',handleclick)`
- 移除
  - `removeEventListener('click',handleChick)`
  - `detachEventListener()`



常用举例：

- `window.addEventListner('load',fn)`:可以绑定多个事件
- DOMContentLoaded:DOM2中的事件类型，DOM0中没有

