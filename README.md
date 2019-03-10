## HTML相关

#### html语义化

> 涉及面试题:什么是html语义化？意义？那些新增标签

- 意义：

  - 根据内容的结构化（内容语义化），选择合适的标签（代码语义化），让开发者更容易阅读，让机器（浏览器，爬虫）更容易解析

- 语义化

  - 少使用无语义的标签div和span
  - 语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；
  - 不使用纯样式标签，如：b、font、u等，（用css设置）
  - strong加粗（不要用b），em斜体（不用i）
  - 使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td；
  - 表单域要用fieldset标签包起来，并用legend标签说明表单的用途
  - 每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，在lable标签中设置for=someld来让说明文本和相对应的input关联起来

- html5新增语义标签

  |                                                         标签 | 描述                                   |
  | -----------------------------------------------------------: | -------------------------------------- |
  | [`article`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/article) | 表示文档、页面、应用或网站中的独立结构 |
  | [`aside`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/aside) | 定义页面内容之外的内容                 |
  | [`details`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/details) | 定义用户可查看或隐藏的额外细节         |
  | [`footer`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/footer) | 定义 section 或 page 的页脚            |
  | [`header`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/header) | 定义 section 或 page 的页眉            |
  | [`main`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/main) | 定义文档的主内容                       |
  | [`nav`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/nav) | 定义导航链接                           |
  | [`section`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/section) | 定义文档中的节                         |
  | [`summary`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/summary) | 定义 details 元素的标题                |
  | [`time`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/time) | 定义日期/时间                          |
  | [`figcaption`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figcaption) | 定义<figure>元素标题                   |
  | [`figure`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/figure) | 定义自包含内容（图标，代码等）         |
  | [`mark`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/mark) | 定义有记号的文本                       |

  


参考

- https://developer.mozilla.org/zh-CN/docs/Glossary/%E8%AF%AD%E4%B9%89
- http://www.w3school.com.cn/html/html5_semantic_elements.asp

 ####**meta viewport相关**

> 相关面试题：

```html
<!DOCTYPE html>  H5标准声明，使用 HTML5 doctype，不区分大小写
<head lang=”en”> 标准的 lang 属性写法
<meta charset=’utf-8′>    声明文档使用的字符编码
<meta http-equiv=”X-UA-Compatible” content=”IE=edge,chrome=1″/>   优先使用 IE 最新版本和 Chrome
<meta name=”description” content=”不超过150个字符”/>       页面描述
<meta name=”keywords” content=””/>      页面关键词
<meta name=”author” content=”name, email@gmail.com”/>    网页作者
<meta name=”robots” content=”index,follow”/>      搜索引擎抓取
<meta name=”viewport” content=”initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no”> 为移动设备添加 viewport
<meta name=”apple-mobile-web-app-title” content=”标题”> iOS 设备 begin
<meta name=”apple-mobile-web-app-capable” content=”yes”/>  添加到主屏后的标题（iOS 6 新增）
是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏
<meta name=”apple-itunes-app” content=”app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL”>
添加智能 App 广告条 Smart App Banner（iOS 6+ Safari）
<meta name=”apple-mobile-web-app-status-bar-style” content=”black”/>
<meta name=”format-detection” content=”telphone=no, email=no”/>  设置苹果工具栏颜色
<meta name=”renderer” content=”webkit”>  启用360浏览器的极速模式(webkit)
<meta http-equiv=”X-UA-Compatible” content=”IE=edge”>     避免IE使用兼容模式
<meta http-equiv=”Cache-Control” content=”no-siteapp” />    不让百度转码
<meta name=”HandheldFriendly” content=”true”>     针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓
<meta name=”MobileOptimized” content=”320″>   微软的老式浏览器
<meta name=”screen-orientation” content=”portrait”>   uc强制竖屏
<meta name=”x5-orientation” content=”portrait”>    QQ强制竖屏
<meta name=”full-screen” content=”yes”>              UC强制全屏
<meta name=”x5-fullscreen” content=”true”>       QQ强制全屏
<meta name=”browsermode” content=”application”>   UC应用模式
<meta name=”x5-page-mode” content=”app”>    QQ应用模式
<meta name=”msapplication-tap-highlight” content=”no”>    windows phone 点击无高光
设置页面不缓存
<meta http-equiv=”pragma” content=”no-cache”>
<meta http-equiv=”cache-control” content=”no-cache”>
<meta http-equiv=”expires” content=”0″>

```

参考：

- https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta

####**canvas 相关**

> 相关面试题：



参考；

- https://developer.mozilla.org/zh-CN/docs/Glossary/Canvas



####**新标签兼容低版本**

> 相关面试题：

- e9之前版本通过createElement创建html5新标签

- 引入html5shiv.js



## CSS相关

#### 盒模型

> 相关面试题：什么是盒模型？ie盒模型和标准盒模型的区别？

- 区别

  ```css
  /* 标准模型 */
  box-sizing:content-box;
   /*IE模型*/
  box-sizing:border-box;
  
  ```


参考

- 

#### 几种获得宽高的方式

> 相关面试题：

- dom.style.width/height   
  - 只能取到dom元素内联样式所设置的宽高
  - 无法获取style标签中或外联的CSS文件的宽高

- dom.currentStyle.width/height   
  - 获取在页面渲染完成后的结果，不管是哪种方式设置的样式，都能获取到
  - 只有IE浏览器支持。

- window.getComputedStyle(dom).width/height   
  - 获取在页面渲染完成后的结果，不管是哪种方式设置的样式，都能获取到
  - 可以兼容更多的浏览器，通用性好一些

- dom.getBoundingClientRect().width/height   
  - 根据元素在视窗中的绝对位置来获取宽高
- dom.offsetWidth/offsetHeight   
  - 最常用的，也是兼容最好的

参考:

- 

拓展：各种获得宽高的方式

- 获取屏幕的高度和宽度（屏幕分辨率）： window.screen.height/width

- 获取屏幕工作区域的高度和宽度（去掉状态栏）： window.screen.availHeight/availWidth

- 网页全文的高度和宽度： document.body.scrollHeight/Width

- 滚动条卷上去的高度和向右卷的宽度： document.body.scrollTop/scrollLeft

- 网页可见区域的高度和宽度（不加边线）： document.body.clientHeight/clientWidth

- 网页可见区域的高度和宽度（加边线）： document.body.offsetHeight/offsetWidth

#### **块格式化上下文（Block Formatting Context，BFC）**

> 相关面试题： `BFC `， `IFC`,  `GFC `和 `FFC`各式什么？

- BFC 定义
  - 是一个独立的渲染区域，只有Block-level box参与
  - 规定了内部的Block-level Box如何布局，并且与外部毫不相干
- BFC布局规则：
  - 内部的Box会在垂直方向，一个接一个地放置
  - Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
  - 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此
  - BFC的区域不会与float box重叠
  - BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
  - 计算BFC的高度时，浮动元素也参与计算
- 哪些元素会生成BFC
  - 根元素或包含根元素的元素
  - 浮动元素（元素的 [`float`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float) 不是 `none`）
  - 绝对定位元素（元素的 [`position`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 为 `absolute` 或 `fixed`）
  - 行内块元素（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `inline-block`）
  - 表格单元格（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 `table-cell`，HTML表格单元格默认为该值）
  - 表格标题（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 为 `table-caption`，HTML表格标题默认为该值）
  - 匿名表格单元格元素（元素的 [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 `table、``table-row`、 `table-row-group、``table-header-group、``table-footer-group`（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 `inline-table`）
  - [`overflow`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow) 值不为 `visible` 的块元素
  - [`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display) 值为 `flow-root` 的元素
  - [`contain`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/contain) 值为 `layout`、`content`或 `strict` 的元素
  - 弹性元素（[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 `flex` 或 `inline-flex`元素的直接子元素）
  - 网格元素（[`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)为 `grid` 或 `inline-grid` 元素的直接子元素）
  - 多列容器（元素的 [`column-count`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-count) 或 [`column-width`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/column-width) 不为 `auto，包括 ``column-count` 为 `1`）
  - `column-span` 为 `all` 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（[标准变更](https://github.com/w3c/csswg-drafts/commit/a8634b96900279916bd6c505fda88dda71d8ec51)，[Chrome bug](https://bugs.chromium.org/p/chromium/issues/detail?id=709362)）。

参考：

- http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html
- https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context

#### css reset 和 normalize.css 有什么区别

> 面试题：

- 相同点：重置样式，保持跨浏览器一致性
- `Normalize.css`是一种`CSS reset`的替代方案

- Reset 相对「暴力」
  - 统统重置成一样的效果

- Normalize 相对「平和」
  - 保护了有价值的默认值
  - 修复了浏览器的bug
  - 是模块化的
  - 拥有详细的文档

参考：

- https://yuilibrary.com/yui/docs/cssreset/cssreset-basic-example.html
- http://necolas.github.io/normalize.css/2.0.1/test.html
- https://stackoverflow.com/questions/6887336/what-is-the-difference-between-normalize-css-and-reset-css
- http://jerryzou.com/posts/aboutNormalizeCss/

#### css布局

> 面试题：水平居中？垂直居中？水平垂直居中？

- 水平居中

  - `text-align:center`

    - 针对
    - **inline**, 
    - 内联块**inline-block**, 
    - 内联表**inline-table**, 
    - **inline-flex**元素
    - **img**,
    - span**,**button等元素

  - `magin:0 auto`

    - 不定宽块状元素居中

  - `float+position:relative`

    ```css
    .wrap{
        float:left;
        position:relative;
        left:50%;
        clear:both;
    }
    .wrap-center{
        left:-50%;
    }
    ```

    

- 垂直居中

  - `line-height:height`

    - 单行内联(**inline-**)元素垂直居中 

  - 表格布局

    ```css
    .father {
        display: table;
    }
    .children {
        display: table-cell;
        vertical-align: middle;
        text-align: center; 
    }
    ```

  - flex布局

    ```css
    .center-flex {
        display: flex;
        flex-direction: column;//上下排列
        justify-content: center;
    }
    ```

  - 绝对布局

    ```css
    已知高度
    .parent {
      position: relative;
    }
    .child {
      position: absolute;
      top: 50%;
      height: 100px;
      margin-top: -50px; 
    }
    未知高度
    .parent {
        position: relative;
    }
    .child {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    ```

    

- 水平垂直居中

  - flex布局

    ```css
    .parent {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ```

    

  - grid布局

    ```css
    .parent {
      height: 140px;
      display: grid;
    }
    .child { 
      margin: auto;
    }
    ```

参考：

#### css优先级

> 面试题：

- 每个选择器都有权值，权值越大越优先
- 继承的样式优先级低于自身指定样式
- ！important优先级最高 js也无法修改
- 权值相同时，靠近元素的样式优先级高 顺序为内联样式表（标签内部）> 内部样式表（当前文件中）> 外部样式表（外部文件中）

参考：

#### 清除浮动

> 面试题：为什么/如何清除浮动？

- why
  - 高度塌陷：浮动元素父元素高度自适应（父元素不写高度时，子元素写了浮动后，父元素会发生高度塌陷）
- 方式：
  - clear清除浮动（添加空div法）在浮动元素下方添加空div,并给该元素写css样式：   {clear:both;height:0;overflow:hidden;}
  - 给浮动元素父级设置高度
  - 父级同时浮动（需要给父级同级元素添加浮动）
  - 父级设置成inline-block，其margin: 0 auto居中方式失效
  - 给父级添加overflow:hidden 清除浮动方法
  - 万能清除法 after伪类 清浮动（现在主流方法，推荐使用）

参考：

#### 自适应布局

> 面试题

思路：

1. 左侧浮动或者绝对定位，然后右侧margin撑开
2. 使用div包含，然后靠负margin形成bfc
3. 使用flex

#### 画三角形

```css
#item {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-top: 50px solid transparent;
	border-bottom: 50px solid blue;
	background: white;
}
```

#### link @import导入css

> 

#### animation

> 

#### 长宽比方案

- 使用padding方式结合calc实现

- 长宽一项设置百分比另一项aspect-ratio实现（需借助插件实现）

#### display相关

1. block:div等容器类型
2. inline:img span等行内类型
3. table系列：将样式变成table类型
4. flex:重点把握，非常强大
5. grid:同上
6. inline-block:可设置宽度，两者间有一点间隙
7. inherit:继承父级

## JavaScript相关

#### Array.prototype.map()

> 面试题：
>
> ["1", "2", "3"].map(parseInt)

- Array.pototype.map()

  ```html
  var new_array = arr.map(function callback(currentValue[, index[, array]]) {
   // Return element for new_array }[, 
  thisArg])
  ```

- 参数

  - **callback**

    生成新数组元素的函数，使用三个参数：

    - `currentValue`
    - `index`|可选
    - `array`|可选

  - `thisArg`可选

    - 执行 `callback` 函数时使用的`this` 值

- 返回值

  - 返回一个新数组：数组中的每个元素都调用一个提供的函数后返回的结果

> 面试题解答

```js
// 下面的语句返回什么呢:
["1", "2", "3"].map(parseInt);
// 你可能觉的会是[1, 2, 3]
// 但实际的结果是 [1, NaN, NaN]

// 通常使用parseInt时,只需要传递一个参数.
// 但实际上,parseInt可以有两个参数.第二个参数是进制数.
// 可以通过语句"alert(parseInt.length)===2"来验证.
// map方法在调用callback函数时,会给它传递三个参数:当前正在遍历的元素, 
// 元素索引, 原数组本身.
// 第三个参数parseInt会忽视, 但第二个参数不会,也就是说,
// parseInt把传过来的索引值当成进制数来使用.从而返回了NaN.

function returnInt(element) {
  return parseInt(element, 10);
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// 意料之中的结果

// 也可以使用简单的箭头函数，结果同上
['1', '2', '3'].map( str => parseInt(str) );

// 一个更简单的方式:
['1', '2', '3'].map(Number); // [1, 2, 3]
// 与`parseInt` 不同，下面的结果会返回浮点数或指数:
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]
```

参考：

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map

#### Array.prototype.reduce()

> 面试题：
>
> [[3,2,1].reduce(Math.pow), 
>
> [].reduce(Math.pow)]

- Array.prototype.reduce()

  ```html
  arr.reduce(callback[, initialValue])
  ```

- 参数

  - callback

    执行数组中每个值的函数，包含四个参数：

    - **accumulator**:累计器,累计上一次调用回调时返回的累积值
    - **currentValue**
    - `currentIndex`|可选
    - `array`|可选:调用`reduce()`的数组

  - `initialValue`|可选
    - 作为第一次调用 `callback函数时`的第一个参数的值
    -  如果调用`reduce()`时提供了`initialValue`，`accumulator`取值为`initialValue`，`currentValue`取数组中的第一个值；
    - 如果没有提供 `initialValue`，那么`accumulator`取数组中的第一个值，`currentValue`取数组中的第二个值
    - 如果数组为空且没有提供`initialValue`，会抛出[`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

- 返回值

  - 函数累计处理的结果

> 面试题解析：
>
>  [].reduce(Math.pow)]，报错
>
>  [3,2,1].reduce(Math.pow) 	等价于 Math.pow(3, 2) => 9; Math.pow(9, 1) =>9

参考：

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

#### array的一个坑

```js
var ary = [0,1,2];
ary[10] = 10;
ary.filter(function(x) { return x === undefined;});
我们看到在迭代这个数组的时候, 首先检查了这个索引值是不是数组的一个属性, 那么我们测试一下.

0 in ary; => true
3 in ary; => false
10 in ary; => true
也就是说 从 3 - 9 都是没有初始化的bug !, 这些索引并不存在与数组中. 在 array 的函数调用的时候是会跳过这些坑的.

```

#### typeof	    instanceof

> 面试题：
>
> [typeof null, null instanceof Object]

- `typeof`

  ```js
  typeof operand
  or
  typeof (operand)
  ```

- 返回值

  - 返回一个字符串，表示未经计算的操作数的类型

  | 类型                                        | 结果                       |
  | ------------------------------------------- | -------------------------- |
  | Undefined                                   | `"undefined"`              |
  | Null                                        | `"object"`（见下文）       |
  | Boolean                                     | `"boolean"`                |
  | Number                                      | `"number"`                 |
  | String                                      | `"string"`                 |
  | Symbol （ECMAScript 6 新增）                | `"symbol"`                 |
  | 宿主对象（由JS环境提供）                    | *Implementation-dependent* |
  | 函数对象（[[Call]] 在ECMA-262条款中实现了） | `"function"`               |
  | 任何其他对象                                | `"object"`                 |

- instanceof

  ```
  object instanceof constructor
  ```

- 描述

  - 检测 `constructor.prototype `是否存在于参数 `object` 的原型链

参考：

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof

#### JavaScript的数据类型

> 面试题：

- Six data types that are 

  primitives（a **primitive** (primitive value) is data that is not an [object](https://developer.mozilla.org/en-US/docs/Glossary/object) and has no [methods](https://developer.mozilla.org/en-US/docs/Glossary/method)）:

  - [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
  - [Null](https://developer.mozilla.org/en-US/docs/Glossary/Null)
  - [Undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)
  - [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number)
  - [String](https://developer.mozilla.org/en-US/docs/Glossary/String)
  - [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) (new in ECMAScript 6)

- and [Object](https://developer.mozilla.org/en-US/docs/Glossary/Object)

参考：

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
- https://developer.mozilla.org/en-US/docs/Glossary/Primitive

#### promise

> 面试题：
>
> 什么是promise？
>
> 手写promise？

**Promise** 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值

- 本质

  - Promise 本质上是一个绑定了回调的对象，而不是将回调传进函数内部

- 背景

  - 多重的异步操作,导致回调地域

    ```js
    doSomething(function(result) {
      doSomethingElse(result, function(newResult) {
        doThirdThing(newResult, function(finalResult) {
          console.log('Got the final result: ' + finalResult);
        }, failureCallback);
      }, failureCallback);
    }, failureCallback);
    ```

  - promise链式调用

    ```js
    doSomething().then(function(result) {
      return doSomethingElse(result);
    })
    .then(function(newResult) {
      return doThirdThing(newResult);
    })
    .then(function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    })
    .catch(failureCallback);
    ```

  - `async/await`语法糖

- 语法

  ```js
  new Promise( function(resolve, reject) {...} /* executor */  );
  ```

- 参数：

  - executor：

    Promise构造函数执行时立即调用`executor` 函数（executor 函数在Promise构造函数返回新建对象前被调用）

    executor 内部异步操作，一旦完成，promise的状态改变（不可逆）：

    - `resolve` :pending （初始状态）----->fulfilled（完成）
    - `reject`:pending （初始状态）----->rejected（失败）

    如果executor函数中抛出一个错误，那么该promise 状态为rejected，executor函数的返回值被忽略

- 创建Promise

  ```js
  const myFirstPromise = new Promise((resolve, reject) => {
    // 做一些异步操作，最终会调用下面两者之一:
    //
    //   resolve(someValue); // fulfilled
    // 或
    //   reject("failure reason"); // rejected
  });
  ```

- 想要某个函数?拥有promise功能，只需让其返回一个promise即可

  ```js
  function myAsyncFunction(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => resolve(xhr.responseText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  };
  ```

参考：

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise

#### Ajax

> 面试题：
>
> 手写Ajax？
>
> promise ajax？

- XMLHttpRequest对象

  - 实现

    ```js
    XMLHttp_Object = new XMLHttpRequest();
    ```

  - 属性

    - `readyState`:描述一个HTTP请求的状态

      | readyState属性值 | 描述                                                         |
      | ---------------- | ------------------------------------------------------------ |
      | 0                | 未初始化状态：已创建XMLHttpRequest对象，但未初始化（未调用XMLHttpRequest open（）方法） |
      | 1                | 准备发送状态：已经调用XMLHttpRequest open（）方法，准备向服务器发送请求 |
      | 2                | 已发送，未接收：send()调用                                   |
      | 3                | 正在接收：已经接收到响应头部信息，消息体还未完全接收         |
      | 4                | 已加载状态：响应完全接受                                     |

      `readyState`变化会激发一个`ReadystateChange`事件

    - `responseText`

      - 包含客户端接收到HTTP响应的文本内容
      - 返回字符串
      - 只读

    - `responseXML`

      - 用于接收到完整HTTP响应（readyState=4）描述XML响应
      - 返回XML Document对象
      - 只读

    - `Status`

      - 描述HTTP状态码
      - `readyState`==3|4时，可用

    - `statusText`

      - 描述HTTP状态码文本信息
      - `readyState`==3|4时，可用
      - 返回字符串
      - 只读

  - 方法

    - `abort()`

      - 将一个XMLHttpRequest对象复位到未初始化状态

      ```js
      XMLHttp_Object.abort();
      ```

    - `open()`

      - 初始化一个XMLHttpRequest对象

      ```js
      XMLHttp_Object.open(string method,string url,boolean asynch,string username,string password);
      ```

      - `method`：指定HTTP请求方法
      - `url`：目标url地址
      - `asynch`|可选：同步or异步（默认为true，异步）
      - `usernae|password`|可选

    - `send()`

      - 向服务器发送一个具体请求
      - `readyState==1`时可调用
      - 调用后，`readyState==2`

      ```js
      XMLHttp_object.send(content);
      ```

      - `content`|可选：表示需要发送到服务器的内容

    - `setRequestHeader()`

      - 指定某个HTTP头
      - 必须在`open()`后调用

      ```js
      XMLHttp_object.setRequestHeader(string head,sting value);
      ```

    - `getRequestHeader(string header)`

      - 检索响应的头部值
      - `readyState=3|4`才可以调用
      - 返回字符串

    - `getAllResponeHeaders()`

- 发送请求

  - `get`请求

  ```js
  //创建XMLHttpRequest对象，不同浏览器使用的方式不同
  XMLHttp_Object = new XMLHttpRequest();
  
  //设置服务器地址
  var url = "http://xxx";
  
  //初始化请求
  XMLHttp_object.open("GET",url,ture);
  
  //发送请求
  XMLHttp_object.send(null);
  ```

  - `post`请求

  ```js
  //创建XMLHttpRequest对象，不同浏览器使用的方式不同
  XMLHttp_Object = new XMLHttpRequest();
  
  //设置服务器地址
  var url = "http://xxx";
  
  //初始化请求
  XMLHttp_object.open("POST",url,ture);
  
  //设置HTTP头部信息
  XMLHttp_Object.setRequestHeader("Content_Type","application/x-www-form-urlencoded");
  
  //发送请求
  var para = "name="+name;
  XMLHtttp_Object.send(para);
  ```

  

- 处理响应：利用`onreadystatechange`来完成

  ```js
  //调用响应函数
  XMLHttp_Object.onreadystatechange=ResponseReq;
  
  //根据HTTP处理状态才去措施
  function ResponseReq(){
      if(XMLHttp_Object.readyState == 4){
          //处理返回信息
          ...
          
          //返回状态码
          if(XMLHttp_Object,status == 200）{
             //处理返回信息
             ...
             }else{
              //错误处理
              ...
          }
      }
  }
  ```

  

- Ajax通信范例

  - promise实现ajax

  ```js
  //定义
  const myHttpClient = url => {
    return new Promise((resolve, reject) => {
      let client = new XMLHttpRequest();
      client.open("GET", url);
      client.onreadystatechange = handler;
      client.responseType = "json";
      client.setRequestHeader("Accept", "application/json");
      client.send();
      function handler() {
        if (this.readyState !== 4) {
          return;
        }
        if (this.status === 200) {
          resolve(this.response);
        } else {
          reject(new Error(this.statusText));
        }
      }
    });
  };
  
  //使用
  myHttpClient('https://www.baidu.com').then(res => {
    console.log(res);
  }).catch(error => {
    console.log(error);
  });
  
  ```


#### 闭包（Closure)

> 面试题：
>
> 什么是闭包？
>
> 闭包的作用？

从变量的作用域说起：全局作用域和局部作用域（函数作用域）

- 函数内部可以直接读取全局变量
- 函数外部无法读取函数内的局部变量

**如何从外部读取局部变量？**

- 在函数内部再定义一个函数，并返回

**闭包的概念**

- 简单的理解：定义在一个函数内部的函数（函数内部的子函数才能读取局部变量）
- 本质上：闭包就是连接函数内部和函数外部的一座桥梁

闭包的用途：

- 读取函数内部的局部变量
- 局部变量始终保存在内存中
  - IE中可能导致内存泄漏

举例：

```js
var name = "The Window";

　　var object = {
　　　　name : "My Object",

　　　　getNameFunc : function(){
　　　　　　return function(){
　　　　　　　　return this.name;
　　　　　　};

　　　　}

　　};

　　alert(object.getNameFunc()());//object.getNameFunc()是个闭包

//The Window

　var name = "The Window";

　　var object = {
　　　　name : "My Object",

　　　　getNameFunc : function(){
　　　　　　var that = this;
　　　　　　return function(){
　　　　　　　　return that.name;
　　　　　　};

　　　　}

　　};

　　alert(object.getNameFunc()());

//My Object

function foo(x) {
    var tmp = 3;
    return function (y) {
        alert(x + y + (++tmp));
    }
}
var bar = foo(2); // bar 现在是一个闭包
bar(10);

//16
```



参考：

- http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures

#### 立即执行函数（IIFE，**Immediately-Invoked Function Expression**）

> 面试题：
>
> 什么是立即执行函数？
>
> 使用立即执行函数的目的是什么？

常见的两种方式：

```js
(function(){
    ...
})()

            
(function(){
    ...
}())

```

作用：

- 不破坏污染全局的命名空间

参考：

- http://www.cnblogs.com/TomXu/archive/2011/12/31/2289423.html

#### 深浅拷贝

> 面试题：
>
> 深浅拷贝实现方法有那些？

```js
let d = JSON.parse(JSON.stringify(a));//深复制包含子对象
let c = {...a};//拷贝一层但不包含子对象
```

参考：

#### 数组去重

> 面试题：
>
> 数组去重有哪些方法？

思路：

- 定义一个新数组，并存放原数组的第一个元素，然后将元素组一一和新数组的元素对比，若不同则存放在新数组中 
- 先将原数组排序，在与相邻的进行比较，如果不同则存入新数组
- 利用对象属性存在的特性，如果没有该属性则存入新数组。
- （最常用）：使用es6 set

参考：

#### 正则实现trim()功能

> 面试题：

```js
//封装兼容的trim方法
function trim(str){
	var aaa = str.replace(/(^\s+)|(\s+$)/g,"");  
    //以空格开头或者以空格结尾 g表示全局替换	
    return aaa;
}
```

参考：

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace

#### 原型

> 面试题：

每个对象都有 `__proto__` 属性，但只有函数对象才有 `prototype` 属性

参考：

- https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes

#### 继承

> 面试题：



参考：

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

#### call    apply    bind

> 面试题：

参考：

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

#### sort

> 面试题：

V8 引擎 sort 函数只给出了两种排序 InsertionSort 和 QuickSort，

- 数量小于10的数组使用 插入
- 比10大的数组则使用 快排

#### 事件流向

> 面试题

流向

- 冒泡：子节点一层层冒泡到根节点

- 捕获顺序与冒泡相反

- addEventListener最后个参数true代表捕获反之代表冒泡

- 阻止冒泡不停止父节点捕获

参考：

- https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Building_blocks/Events

#### 并发模型与事件循环

> 面试题

参考：

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop

#### 原生操作class

> 面试题：

```js
//判断有无
function hasClass(ele, cls) {
	return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

//添加
function addClass(ele, cls) {
	if (!this.hasClass(ele, cls)) ele.className += " " + cls;
}

//删除
function removeClass(ele, cls) {
	if (hasClass(ele, cls)) {
		let reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
		ele.className = ele.className.replace(reg, " ");
	}
}

//有则删，无则加
function toggleClass(obj,cls){
	if(hasClass(obj,cls)){
		removeClass(obj, cls);
	}else{
		addClass(obj, cls);
}

```

#### js自定义事件

> 面试题

三要素：document.createEvent() event.initEvent() element.dispatchEvent()

```js
demo:
(en:自定义事件名称，fn:事件处理函数，addEvent:为DOM元素添加自定义事件，triggerEvent:触发自定义事件)
window.onload = function(){
    var demo = document.getElementById("demo");
    demo.addEvent("test",function(){console.log("handler1")});
    demo.addEvent("test",function(){console.log("handler2")});
    demo.onclick = function(){
        this.triggerEvent("test");
    }
}
Element.prototype.addEvent = function(en,fn){
    this.pools = this.pools || {};
    if(en in this.pools){
        this.pools[en].push(fn);
    }else{
        this.pools[en] = [];
        this.pools[en].push(fn);
    }
}
Element.prototype.triggerEvent  = function(en){
    if(en in this.pools){
        var fns = this.pools[en];
        for(var i=0,il=fns.length;i<il;i++){
            fns[i]();
        }
    }else{
        return;
    }
}

```



## DOM相关

#### dom事件模型

> 面试题：

```html

<body>
    <!--行内绑定：脚本模型-->
    <button onclick="javascrpt:alert('Hello')">Hello1</button>
    <!--内联模型-->
    <button onclick="showHello()">Hello2</button>
    <!--动态绑定-->
    <button id="btn3">Hello3</button>
</body>

<script>
    
/*DOM0：同一个元素，同类事件只能添加一个，如果添加多个， 后面添加的会覆盖之前添加的*/
function showHello() {
	alert("Hello");
}
var btn3 = document.getElementById("btn3");
    btn3.onclick = function () {
    alert("Hello");
}
    
/*DOM2:可以给同一个元素添加多个同类事件*/
btn3.addEventListener("click",function () {
    alert("hello1");
});
btn3.addEventListener("click",function () {
    alert("hello2");
})
if (btn3.attachEvent){
    /*IE*/
    btn3.attachEvent("onclick",function () {
    	alert("IE Hello1");
    })
}else {
    /*W3C*/
    btn3.addEventListener("click",function () {
    	alert("W3C Hello");
    })
}
</script>
```



## HTTP相关

#### 常见状态码

> 面试题：



**2开头 （请求成功）**

|      |      |
| ---- | ---- |
| 200  |      |
| 201  |      |
| 202  |      |

**3开头 （请求被重定向）**

|      |      |
| ---- | ---- |
| 300  |      |
| 301  |      |
| 302  |      |

**4开头 （请求错误）**

|      |      |
| ---- | ---- |
| 400  |      |
| 401  |      |
| 404  |      |

**5开头（服务器错误）**

|      |      |
| ---- | ---- |
| 500  |      |
| 501  |      |
| 502  |      |

#### 缓存

Cache-control

CDN

参考：

- https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control

#### Cache-Control 和 Etag 的区别

> 面试题：
>
> 

|                | Cache-Control | Etag |
| -------------- | :-----------: | :--: |
| 地址栏回车     |     有效      | 有效 |
| 页面链接跳转   |     有效      | 有效 |
| 新开窗口       |     有效      | 有效 |
| 前进后退       |     有效      | 有效 |
| F5刷新         |     无效      | 有效 |
| Ctrl+F强制刷新 |     五效      | 无效 |

#### Cookie sessionStorage localStorage

共同点：

- 都是保存在浏览器端，且同源的

区别：

- 方式
  - cookie数据始终在同源的http请求中携带，即cookie在浏览器和服务器间来回传递
  - 而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存
- 大小
  - cookie数据不能超过4k(适合保存小数据)
  - sessionStorage和localStorage容量较大
- 数据有效期不同
  - sessionStorage：仅在当前浏览器窗口关闭前有效
  - localStorage：始终有效，窗口或浏览器关闭也一直保存，需手动清楚
  - cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭
- 作用域不同
  - sessionStorage不在不同的浏览器窗口中共享
  - localStorage 在所有同源窗口中都是共享的
  - cookie也是在所有同源窗口中都是共享的
- 应用场景：
  - localStorage：常用于长期登录（+判断用户是否已登录），适合长期保存在本地的数据。
  - sessionStorage ：敏感账号一次性登录
  -  cookies与服务器交互

#### GET POST区别

> 面试题

| 操作             | GET                                 | POST                                                    |
| ---------------- | ----------------------------------- | ------------------------------------------------------- |
| 后退\|刷新       | 无害                                | 重新提交                                                |
| 缓存             | 能                                  | 不能                                                    |
| 编码类型         | `application/x-www-form-urlencoded` | `application/x-www-from-urlencoded|multipart/form-data` |
| 历史             | 参数保存在浏览器历史中              | 参数不会保存在浏览器历史中                              |
| 对数据长度的限制 | 最大长度是2048个字符                | 没有限制，允许二进制数据                                |
| 安全性           | 较差，（数据是URL的一部分）         | 更安全（参数不会被保存在浏览器历史或服务器中）          |
| 可见性           | 对所有人可见（数据在URL中）         | 数据不会显示在URL中                                     |



#### 跨域、JSONP 、CORS、postMessage

> 面试题

跨域概念：若协议 + 域名 + 端口号均相同，那么就是同域，否则就是跨域

jsonp实现:

- 只能实现get请求

```html

原生
<script>
    var script = document.createElement('script');
    script.type = 'text/javascript';
 
    // 传参并指定回调执行函数为onBack
  	script.src='http://www.domain2.com:8080/loginuser=admin&callback=onBack';
    document.head.appendChild(script);
 
    // 回调执行函数
    function onBack(res) {
        alert(JSON.stringify(res));
    }
 </script>
```

CORS：跨源资源共享 Cross-Origin Resource Sharing(CORS)

## webpack相关

#### 打包体积 优化思路

1. 提取第三方库或通过引用外部文件的方式引入第三方库
2. 代码压缩插件UglifyJsPlugin
3. 服务器启用gzip压缩
4. 按需加载资源文件 require.ensure
5. 优化devtool中的source-map
6. 剥离css文件，单独打包
7. 去除不必要插件，通常就是开发环境与生产环境用同一套配置文件导致 

#### 打包效率

1. 开发环境采用增量构建，启用热更新
2. 开发环境不做无意义的工作如提取css计算文件hash等
3. 配置devtool
4. 选择合适的loader
5. 个别loader开启cache 如babel-loader
6. 第三方库采用引入方式
7. 提取公共代码
8. 优化构建时的搜索路径 指明需要构建目录及不需要构建目录
9. 模块化引入需要的部分



## 网络安全相关

#### XSS CSRF

XSS(跨站脚本攻击)，恶意的注入html代码，其他用户访问时，会被执行 

特点：

- 能注入恶意的HTML/JavaScript代码到用户浏览的网页上，从而达到Cookie资料窃取、会话劫持、钓鱼欺骗等攻击

 防御手段：

- 浏览器禁止页面的JS访问带有HttpOnly属性的Cookie
- 两端进行输入格式检查
- 通过编码转义的方式进行输出检查 CSRF(攻击跨站请求伪造) 特点：重要操作的所有参数都是可以被攻击者猜测到的。攻击者预测出URL的所有参数与参数值，才能成功地构造一个伪造的请求。 防御手段：
- token验证机制，比如请求数据字段中添加一个token，响应请求时校验其有效性
- 用户操作限制，比如验证码（繁琐，用户体验差）
- 请求来源限制，比如限制HTTP Referer才能完成操作（防御效果相比较差） 实践中常用第一种

## react相关

## 算法相关



## 其他



#### 前后端路由差别

区别

- 后端每次路由请求都是重新访问服务器
- 前端路由实际上只是JS根据URL来操作DOM元素，根据每个页面需要的去服务端请求数据，返回数据后和模板进行组合

#### es6模块 commonjs  amd cmd

比较：

- CommonJS 的规范中，每个 JavaScript 文件就是一个独立的模块上下文（module context），在这个上下文中默认创建的属性都是私有的。也就是说，在一个文件定义的变量（还包括函数和类），都是私有的，对其他文件是不可见的。

- CommonJS是同步加载模块,在浏览器中会出现堵塞情况，所以不适用

- AMD 异步，需要定义回调define方式

- es6 一个模块就是一个独立的文件，该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。es6还可以导出类、方法，自动适用严格模式

#### babel原理

ES6、7代码输入 -> babylon进行解析 -> 得到AST（抽象语法树）-> plugin用babel-traverse对AST树进行遍历转译 ->得到新的AST树->用babel-generator通过AST树生成ES5代码

#### 内存泄漏

> 面试题

定义：

- 程序中己动态分配的堆内存由于某种原因程序未释放或无法释放引发的各种问题 js中可能出现的内存泄漏情况 结果：变慢，崩溃，延迟大等

原因：

- 全局变量
- dom清空时还存在引用
- ie中使用闭包
- 定时器为清理
- 子元素引起的内存泄漏

避免策略：

- 减少不必要的全局变量，生命周期较长的对象，及时对无用数据进行垃圾回收
- 注意程序逻辑，避免死循环
- 减少层级过多的引用

#### css与js动画差异

差异：

- css动画
  - 性能更好
  - 相对简单
- js动画
  - 更好控制
  - 兼容性更好
  - 实现强大
  - 添加事件

#### JS异步加载

#### 组件封装

目的：

- 为了重用，提高开发效率和代码质量 
- 注意：
  - 低耦合，
  - 单一职责，
  - 可复用性，
  - 可维护性 

常用操作：

- 分析布局
- 初步开发
- 化繁为简
- 组件抽象

#### URL到界面显示发生了什么

1. DNS解析 

   - 先本地缓存找，在一层层找 将常见的地址解析成唯一对应的ip地址基本顺序为：本地域名服务器->根域名服务器->com顶级域名服务器依次类推下去,找到后记录并缓存下来如www.google.com为
     **. -> .com -> google.com. -> www.google.com.**

2. TCP连接 三次握手，只要没收到确认消息就要重新发 

   1. 主机向服务器发送一个建立连接的请求（您好，我想认识您）；
   2. 服务器接到请求后发送同意连接的信号（好的，很高兴认识您）；
   3. 主机接到同意连接的信号后，再次向服务器发送了确认信号（我也很高兴认识您），自此，主机与服务器两者建立了连接。

3. 发送HTTP请求 浏览器会分析这个url，并设置好请求报文发出。请求报文中包括请求行、请求头、空行、请求主体。https默认请求端口443， http默认80。 常见的http请求如下

   ```js
   POST / HTTP1.1
   Host:www.wrox.com
   User-Agent:Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 2.0.50727; .NET CLR 3.0.04506.648; .NET CLR 3.5.21022)
   Content-Type:application/x-www-form-urlencoded
   Content-Length:40
   Connection: Keep-Alive
   
   name=Professional%20Ajax&publisher=Wiley
   -----------------------------------------------------
   //第一部分：请求行，第一行说明是post请求，以及http1.1版本
   //第二部分：请求头部，第二行至第六行
   //第三部分：空行，第七行的空行
   //第四部分：请求数据，第八行
   ```

4. 服务器处理请求并返回HTTP报文

  ```js
  HTTP/1.1 200 OK
  Date: Fri, 22 May 2009 06:07:21 GMT
  Content-Type: text/html; charset=UTF-8
  
  <html>
        <head></head>
        <body>
              <!--body goes here-->
        </body>
  </html>
  -----------------------------------------------------
  //第一行为状态行，（HTTP/1.1）表明HTTP版本为1.1版本，状态码为200，状态消息为（ok）
  //第二行和第三行为消息报头，Date:生成响应的日期和时间；Content-Type:指定了MIME类型的HTML(text/html),编码类型是UTF-8
  //第三部分：空行，消息报头后面的空行是必须的
  //第四部分：响应正文，服务器返回给客户端的文本信息。空行后面的html部分为响应正文。
  ```

5. 浏览器解析渲染页面

- 通过HTML解析器解析HTML文档，构建一个DOM Tree，同时通过CSS解析器解析HTML中存在的CSS，构建Style Rules，两者结合形成一个Attachment。
- 通过Attachment构造出一个呈现树（Render Tree）
- Render Tree构建完毕，进入到布局阶段（layout/reflow），将会为每个阶段分配一个应出现在屏幕上的确切坐标。
- 最后将全部的节点遍历绘制出来后，一个页面就展现出来了。 遇到script会停下来执行，所以通常把script放在底部

6. 连接结束