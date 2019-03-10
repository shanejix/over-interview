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

  

## DOM相关

## HTTP相关

## webpack相关

## react相关

## 算法相关

