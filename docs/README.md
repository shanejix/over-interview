[有效回答]
​

有效回答是指：用两三句话对问题作出概括性回答，并引导面试官对回答中提到的关键词进一步深入提问。
​

1. 面试时间总是有限的围绕一道普通技术题目的时长一般在 1-3 分钟，一轮技术面试的时长一般控制在 30-60 分钟，面试题目通常涉及不同知识面。
1. 问题的回答一般是自顶向下的以一个概括性较强的回答进行反馈，面试官获得反馈后，通常会基于候选人回答中提到的关键点或面试官认为的其他关键点展开进一步提问。

学习知识点时通常尽可能查看具有权威性的文档、规范、源码等，进行从零到一的较全面的理解，耗时较长；而复习时更多的需要有侧重点，应当进行提炼和总结。候选人通常基于知识点去查找相关技术文章，希望从其他开发者的技术文章中获取“精华”，从而省去自己从零学习或是提炼总结的成本。
​

通过由浅入深的组织方式，以「相关问题」「回答关键点」「知识点深入」「参考资料」为内容基础大纲进行梳理。「回答关键点」作为高度概括的总结性语言，可用于第一时间回答面试官的问题；「知识点深入」以递进方式深入解析，可作为引导面试官进一步提问的方向。

## 零，面试相关

### 面试阶段 🔥🔥

#### 一面

- 基础知识，针对简历上点发问 - 基础知识扎实（30%）

#### 二面

- 根据个人项目由浅到深，挖掘技术难点 - （30%）

- 升入原理 - （10%）

- 算法 - （5%）

#### 三面

- ·项目难点，亮点

- 场景题 - 逻辑思维，技术积累，应变能力

#### HR 面

- 谈心技巧

### 个人介绍 🔥🔥🔥

#### 非常重要

- 最突出的技能

- JS 得心应手

- 哪方面的知识掌握是最全面的

- 前端工程化

- 性格上最大的优势

- 对技术的热情和对问题孜孜不倦的深挖实践

- 最擅长的事情

- 擅长从工作中分析总结，制定对某类问题的解决方法，编写效率工具

- 哪些成就和贡献

- Github xx 项目核心贡献者

#### 范例

- 面试官，你好，我叫 xx，毕业于 xx 大学 xx 专业，三年工作经验。在前一个公司主要负责 xx 平台官网的前端开发、基础设施的建设和通用打包脚本编写这些，也担任过物料平台开发的主要工作，负责项目搭建、架构优化等。

- 自己比较擅长从日常工作中分析总结，制定对某类问题的解决方法，编写效率工具。

- 在技术方面比较熟悉 React 开发，对 Node 也有涉猎，平时会更新技术博客和 Github 并且为大型开源项目提过 pr

## 壹，HTML 相关

## 贰，CSS 相关

### BFC 的形成和作用 🔥🔥🔥

#### 「相关问题」

- BFC 有什么用，如何触发

- 谈谈你对 BFC 的理解

#### 「回答关键点」

- `盒模型`

- `正常流`

BFC 是什么
​

BFC 全称为 `block formatting context`，中文为“块级格式化上下文”。它是一个只有块级盒子参与的独立块级渲染区域，它规定了内部的块级盒子如何布局，且与区域外部无关
​

触发 BFC 的常见条件
​

- 根元素，即 HTML 元素

- 浮动元素：float 值为 left、right

- overflow 值不为 visible，为 auto、scroll、hidden（除了根元素）

- position 的值不为 relative 或 static;为 absolute 或 fixed

- display 的值为`inline-block、inltable-cell、table-caption、table、inline-table、flex、inline-flex、grid、inline-grid`

BFC 有什么用
​

1. 修复浮动元素造成的高度塌陷问题

before

```html
<style>
  .par {
    border: 5px solid #fcc;
    width: 300px;
  }

  .child {
    border: 5px solid #f66;
    width: 100px;
    height: 100px;
    float: left;
  }
</style>
<body>
  <div class="par">
    <div class="child"></div>
    <div class="child"></div>
  </div>
</body>

// 浮动导致 par 高度塌陷
```

after

```html
<style>
  .par {
    overflow: hidden; // 触发 BFC
    border: 5px solid #fcc;
    width: 300px;
  }

  .child {
    border: 5px solid #f66;
    width: 100px;
    height: 100px;
    float: left;
  }
</style>
<body>
  <div class="par">
    <div class="child"></div>
    <div class="child"></div>
  </div>
</body>

// BFC在计算高度时，浮动元素也会参与 // 所以我们可以触发.par元素的
BFC，则内部浮动元素计算高度时候也会计算
```

2. 避免非期望的外边距折叠/防止 margin 重叠

before

```html
<style>
  p {
    color: #f55;
    background: #fcc;
    width: 200px;
    line-height: 100px;
    text-align: center;
    margin: 100px;
  }
</style>
<body>
  <p>Haha</p>
  <p>Hehe</p>
</body>

// 两个p元素之间的距离为100px，发生了margin重叠（塌陷），以最大的为准 // =>
同一个BFC的俩个相邻的盒子的margin会发生重叠
```

after

```html
<style>
  .wrap {
    overflow: hidden; // 新的BFC
  }
  p {
    color: #f55;
    background: #fcc;
    width: 200px;
    line-height: 100px;
    text-align: center;
    margin: 100px;
  }
</style>
<body>
  <p>Haha</p>
  <div class="wrap">
    <p>Hehe</p>
  </div>
</body>

// 在p外面包裹一层容器，并触发这个容器生成一个BFC， //
那么两个p就不属于同一个BFC，则不会出现margin重叠
```

3. 实现灵活健壮的自适应布局

before

```html
<style>
  body {
    width: 300px;
    position: relative;
  }

  .aside {
    width: 100px;
    height: 150px;
    float: left;
    background: #f66;
  }

  .main {
    height: 200px;
    background: #fcc;
  }
</style>
<body>
  <div class="aside"></div>
  <div class="main"></div>
</body>

// 每个元素的左外边距与包含块的左边界相接触 //
虽然.aslide为浮动元素，但是main的左边依然会与包含块的左边相接触
```

after

```html
<style>
  body {
    width: 300px;
    position: relative;
  }

  .aside {
    width: 100px;
    height: 150px;
    float: left;
    background: #f66;
  }

  .main {
    overflow: hidden; // 触发 BFC
    height: 200px;
    background: #fcc;
  }
</style>

<body>
  <div class="aside"></div>
  <div class="main"></div>
</body>

// 每个元素的左外边距与包含块的左边界相接触 //
虽然.aslide为浮动元素，但是main的左边依然会与包含块的左边相接触 //
而BFC的区域不会与浮动盒子重叠
```

#### 「知识点深入」

##### 盒模型（box model）

盒模型描述了一个由元素生成的矩形盒子，视觉格式化模型决定这些盒子的大小、位置以及属性（例如颜色、背景、边框尺寸等等）
​

![image.png](https://cdn.nlark.com/yuque/0/2022/png/377147/1646049503430-bbd02144-aee1-4eec-92a9-530cf0f0dc25.png#clientId=u6ddb5e62-9bae-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ud8bf4882&margin=%5Bobject%20Object%5D&name=image.png&originHeight=340&originWidth=455&originalType=url&ratio=1&rotation=0&showTitle=false&size=18922&status=done&style=none&taskId=u78ca05e6-686d-451c-840e-3c9d9dfedd3&title=)
术语解析
​

由于视觉格式化模型描述中，有许多相近的术语，在此先行列出解释：
​

- box（盒子）：一个抽象概念，在画布上占据一块空间，通常由元素（element）生成。一个元素可能生成多个盒子（如伪元素、list-item 元素）

- principal box（主要盒子）：元素生成的多个盒子中，用来包含它的后代盒子和它生成的内容的盒子，也是参与任何定位方案的盒子

- block-level box（块级盒子）：参与 BFC 布局的盒子，通常由块级元素生成

- block container box（块容器）：在 CSS2.2 中，除了 table box 或替换元素的主要盒子，一个块级盒子也是块容器，但不是所有的块容器都是块级盒子（如非替换内联块盒子）。块容器主要侧重于其子元素的定位、布局

- block box（块盒子）：如果一个块级盒子同时也是块容器，则可以称作块盒子

- block（块）：当没有歧义时，作为 block box, block-level box 或 block container box 的简写

（注：盒子有“块盒子”和“块级盒子”，元素只有“块级元素”，而没有“块元素”）
​

##### 视觉格式化模型（visual formatting model）

视觉格式化模型描述了用户代理（如浏览器）在可视化媒体（如显示器）上处理文档树（document tree）的过程
​

###### 包含块（containing block）

大部分情况下，包含块是一个由元素最近的祖先块容器的内容区域（content area）确定的矩形区域，包含块本身不是盒子，是一个矩形区域。元素的大小，位置，及偏移等布局信息根据包含块的尺寸进行计算
​

###### 正常流（normal flow）

正常流是浏览器的默认布局方式。在正常流中的盒子，属于 BFC，IFC，或其他格式化上下文之一
​

###### 格式化上下文（formatting context）

格式化上下文是一系列相关盒子进行布局的环境。不同的格式化上下文有不同的布局规则。目前常见的格式化上下文有以下这些：
​

- 块级格式化上下文（BFC，block formatting context）

- 内联格式化上下文（IFC，inline formatting context）

- 弹性格式化上下文（FFC，flex formatting context），在 CSS3 中定义

- 栅格格式化上下文（GFC，grid formatting context），在 CSS3 中定义

###### 独立格式化上下文（independent formatting context）

一个盒子要么建立一个新的独立格式化上下文，要么延续其包含块的格式化上下文。除了特殊说明，建立新的格式化上下文就是在建立一个独立格式化上下文。
​

当一个盒子建立一个独立格式化上下文时，它创建了一个新的独立布局环境。除了通过改变盒子本身的大小，盒子内部的后代不会影响格式化上下文外部的规则和内容，反之亦然
​

###### 块级格式化上下文规范及解析

1. 触发 BFC 的条件，都会为他们的内容创建 BFC

2. 在 BFC 中，盒子从包含块的顶部开始，在垂直方向上一个接一个的排列。相邻盒子之间的垂直间隙由它们的 margin （最大）值决定。在同一个 BFC 中，相邻块级盒子的垂直外边距会合并（注：参与 BFC 布局的都是块级元素）

3. 在 BFC 中，每一个盒子的左外边缘（margin-left）会触碰到包含块的左边缘。即使是存在浮动元素也是如此，除非该盒子建立了一个新的 BFC

结合规范第三点与独立格式化上下文的知识，我们可以有以下推论：
​

1. BFC 内外互不影响:

   1. BFC 包含内部的浮动（解决内部浮动元素导致的高度塌陷）

   2. BFC 排斥外部的浮动（触发 BFC 的元素不会和外部的浮动元素重叠）

   3. 外边距折叠的计算不能跨越 BFC 的边界

2. 各自创建了 BFC 的兄弟元素互不影响（注：在水平方向上多个浮动元素加一个或零个触发 BFC 的元素可以形成多列布局）

#### 「参考资料」

- [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
- [https://developer.mozilla.org/en-us/docs/web/css/containing_block](https://developer.mozilla.org/en-us/docs/web/css/containing_block)
- [https://www.w3.org/TR/CSS22/visudet.html#containing-block-details](https://www.w3.org/TR/CSS22/visudet.html#containing-block-details)
- [https://developer.mozilla.org/en-US/docs/web/css/visual_formatting_model](https://developer.mozilla.org/en-US/docs/web/css/visual_formatting_model)
- [https://www.w3.org/TR/CSS22/visuren.html](https://www.w3.org/TR/CSS22/visuren.html)
- [https://developer.mozilla.org/en-US/docs/web/css/css_box_model/introduction_to_the_css_box_model](https://developer.mozilla.org/en-US/docs/web/css/css_box_model/introduction_to_the_css_box_model)
- [https://www.w3.org/TR/CSS22/box.html](https://www.w3.org/TR/CSS22/box.html)

### 谈谈 CSS 预处理器 🔥🔥

#### 「相关问题」

- CSS 主要有哪些预处理器
- 为什么需要用预处理器
- 各预处理器优缺点

#### 「回答关键点」

- `Sass`
- `Less`
- `Stylus`
- `PostCSS`
- `工程化`
- `提升效率`

CSS 本身不属于可编程语言，当前端项目逐渐庞大之后 CSS 的维护也愈加困难。CSS 预处理器所做的本质上是为 CSS **增加一些可编程的特性**，通过**变量**、**嵌套**、**简单的程序逻辑**、**计算**、**函数**等特性，通过**工程化**的手段让 CSS 更易维护，提升开发效率
​

目前主流的 CSS 预处理器主要有 Sass、Less、Stylus、PostCSS
​

#### 「知识点深入」

##### PostCSS

PostCSS 是目前最为流行的 CSS 预/后处理器。PostCSS **本体功能比较单一**，它提供一种用 JavaScript 来处理 CSS 的方式。PostCSS 会把 CSS 解析成 **AST**（Abstract Syntax Tree 抽象语法树），之后由其他**插件**进行不同的处理
​

**功能**
**​**

PostCSS 本体功能比较单一，大多数的 CSS 处理功能都由插件提供，下面是一些常用的插件：
​

- [Autoprefixer](https://github.com/postcss/autoprefixer) 为 CSS 中的属性添加浏览器特定的前缀。
- [postcss-preset-env](https://github.com/csstools/postcss-preset-env) 根据 browserslist 指定的目标浏览器将一些 CSS 的新特性转换为目标浏览器所支持的语法。
- [cssnano](https://github.com/cssnano/cssnano) 提供 CSS 压缩功能。
- [postcss-nested](https://github.com/postcss/postcss-nested) 提供 CSS 嵌套功能。
- [postcss-px-to-viewport](https://github.com/evrone/postcss-px-to-viewport) 提供 px 转 vw 功能。
- [postcss-custom-properties](https://github.com/postcss/postcss-custom-properties) 支持 CSS 的自定义属性。

**优点**

- 插件系统完善，扩展性强。
- 配合插件功能齐全。
- 生态优秀。

**缺点**

- 配置相对复杂。

##### Sass

Sass 在**完全兼容 CSS 语法**的前提下，给 CSS 提供了变量、嵌套、混合、操作符、自定义函数等可编程能力
​

**功能**

Sass 常用的有几种功能：
​

- 变量：变量中可以存储颜色、字体或任何 CSS 值。
- 嵌套：可嵌套 CSS 选择器，提供清晰的层次结构。
- 混合：可以定义&重用代码块。
- 扩展/集成：可以在一个选择器内继承另一个选择器。
- 操作符：可以在 CSS 中使用操作符进行计算。
- 条件/循环语句：可以循环/条件生成 CSS。
- 自定义函数：可以自定义复杂操作的函数。

**优点**

- 使用广泛。
- 功能支持完善。
- 可编程能力强。

**缺点**
​

- CSS 的复杂度不可控。
- node-sass 国内安装不易（非 Sass 本身的缺点，dart-sass 可代替）。

##### Less

Less 和 Sass 类似，**完全兼容 CSS 语法**，并给 CSS 提供了变量、嵌套、混合、运算等可编程能力。Less 通过 JavaScript 实现，可在**浏览器端直接使用**。
​

**功能**
**​**

Less 常用的有几种功能：
​

- 变量：变量中可以存储颜色、字体或任何 CSS 值。
- 嵌套：可嵌套 CSS 选择器，提供清晰的层次结构。
- 混合：可以定义&重用的代码块。
- 扩展/集成：可以在一个选择器内继承另一个选择器。
- 运算：可以在 CSS 中进行计算。
- 条件/循环语句：可以循环/条件生成 CSS。

**优点**
**​**

- 使用广泛。
- 可以在浏览器中运行，容易实现主题定制功能

**缺点**
**​**

- 不支持自定义函数（可通过 mixins 实现简单逻辑）。
- 编程能力相对较弱。

##### Stylus

Stylus 基础功能和 Sass / Less 十分类似。Stylus 的特点是冒号、分号、逗号和括号都是可选项，所以可以写出非常简洁的 CSS，示例如下：

```javascript
body
  background-color: #000

body::after
  content: 'xxx'
  color: #fff
  font-size: 20px
```

#### 「扩展」

##### CSS Modules

CSS Modules 和前文介绍的预处理器不同，不是可编程化的 CSS，而仅是给 CSS 文件加入了**作用域**和**模块依赖**，主要是为了解决 **CSS 全局污染**的痛点以及为了解决全局污染而嵌套过深的问题。使用示例如下：

```css
/* style.css */
.title {
  color: #666;
  font-size: 20px;
}
```

```javascript
import style from './style.css'

document.body.innerHTML = `<h1 class="${style.title}">HZFEStudio</h1>`
```

##### CSS-in-JS

如名字所见，CSS-in-JS 是一种在 JavaScript 里写 CSS 的方式。利用 JS 的优势可实现非常灵活的可扩展的样式。CSS-in-JS 有很多实现，目前比较流行的是 [Styled-components](https://www.styled-components.com/)。
​

通过 Styled-components 写 CSS 的示例如下：

```javascript
import React from 'react'
import styled from 'styled-components'

function hzfe() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #666;
  `
  return <Title>HZFEStudio</Title>
}
```

##### Tailwind 和 Utility-first CSS

近几年随着 Tailwind 的流行，**功能类优先（Utility-first CSS）**的理念也再次流行起来。这里简单介绍一下 Tailwind CSS
​

**Tailwind**
**​**

Tailwind CSS 是一个功能类优先的 CSS 框架，通过组合不同的类名实现页面设计。Tailwind 主要优势如下：
​

1. 不用考虑 class 的命名。
1. CSS 文件大小增长可控，通过 purge 可生成非常小的 CSS 文件。
1. 统一设计系统下的样式与布局。
1. IDE 集成优秀。

#### 「参考资料」

1. [PostCSS - A tool for transforming CSS with JavaScript](https://postcss.org/)
1. [Sass - CSS with superpowers](https://sass-lang.com/)
1. [Less - It's CSS, with just a little more](https://lesscss.org/)
1. [Stylus - Foresight has never been so crucial](https://stylus-lang.com/)
1. [CSS Modules](https://github.com/css-modules/css-modules)
1. [Tailwind CSS](https://tailwindcss.com/)

### 水平垂直居中方案 🔥🔥🔥

#### 「相关问题」

#### 「回答关键点」

- `flex`
- `grid`
- `相对定位`
- `绝对定位`
- `table-cell`
- `line-height`

#### 「知识点深入」

基本布局和样式
​

```html
<style>
  #parent {
    background: red;
    height: 600px;
  }

  #children {
    background: blue;
  }
</style>

<div id="parent">
  <div id="children">HZFE</div>
</div>
```

##### flex

```javascript
#parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

// 适用场景：子元素宽高不固定、子元素宽高固定
```

##### grid

```css
#parent {
  display: grid;
  justify-content: center;
  align-items: center;
}

// 适用场景：子元素宽高不固定、子元素宽高固定
```

##### 相对定位

```css
#children {
  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// 适用场景:子元素宽高不固定、子元素宽高固定
```

```css
#children {
  width: 400px;
  height: 300px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-200px, -150px);
}

// 适用场景：子元素宽高固定
```

```css
#children {
  width: 400px;
  height: 300px;
  position: relative;
  top: calc(50% - 150px);
  left: calc(50% - 200px);
}

// 适用场景：子元素宽高固定
```

##### 绝对定位

```css
#parent {
  position: relative;
}

#children {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// 适用场景：子元素宽高不固定、子元素宽高固定
```

```javascript
#parent {
  position: relative;
}

#children {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-200px, -150px);
}

// 适用场景：子元素宽高固定
```

```css
#parent {
  position: relative;
}

#children {
  width: 400px;
  height: 300px;
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 200px);
}

// 适用场景：子元素宽高固定
```

```css
#parent {
  position: relative;
}

#children {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -200px;
}

// 适用场景：子元素宽高固定
```

```css
// 自动外边距

#parent {
  position: relative;
}

#children {
  width: 400px;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

// 适用场景：子元素宽高固定
```

##### table-cell

```css
#parent {
  width: 800px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

#children {
  display: inline-block;
}

// 适用场景：子元素宽高不固定、子元素宽高固定
```

##### line-height

```css
#parent {
  line-height: 600px;
  text-align: center;
}

#children {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
}

// 前提：父元素高度固定

// 适用场景：子元素宽高不固定、子元素宽高固定
```

#### 「参考资料」

### 移动端自适应的常见手段 🔥🔥🔥

#### 「相关问题」

- 介绍 meta 的 viewport 值
- rem 和 vw 的值是根据什么计算的
- 1px 显示问题
- 如何适配刘海屏

#### 「回答关键点」

- `viewport`

- `相对单位`

- `媒体查询`

- `响应式图片`

移动端开发的主要**痛点**是:如何让页面**适配各种不同的终端设备**，使不同的终端设备都拥有**基本一致的视觉效果和交互体验**。移动端常见的适配方案有以下几种，一般都是互相搭配使用。包括：

- 视口元信息配置
- 响应式布局
- 相对单位
- 媒体查询
- 响应式图片
- 安全区域适配

#### 「知识点深入」

##### 像素

**分辨率（Resolution）**

分辨率是指位图图像中细节的精细程度，以**每英寸像素（ppi）**衡量。每英寸的像素越多，分辨率就越高。

**物理像素（Physical pixels）**

物理像素是一个设备的实际像素数。

**逻辑像素（Logical pixels）**

是一种抽象概念。_在不同的设备下，一个逻辑像素代表的物理像素数不同_。**CSS 像素是逻辑像素**。

为了在不同尺寸和密度比的设备上表现出一致的视觉效果，使用逻辑像素描述一个相同尺寸的物理单位。在具有高密度比的屏幕下，一个逻辑像素对应多个物理像素。

**设备像素比（Device Pixel Ratio）**

当前显示设备的物理像素分辨率与 CSS 像素分辨率之比。

**相关问题：图片或 1px 边框显示模糊**

在移动端中，常见图片或者 1px 的边框在一些机型下显示模糊/变粗的问题。基于对像素相关的概念理解，可知 CSS 中的 1px 是指一个单位的逻辑像素。一个单位的逻辑像素映射到不同像素密度比的设备下，实际对应的物理像素不同。

因此，同样尺寸的图片在高密度比的设备下，由于一个位图像素需要应用到多个物理像素上，所以会比低密度比设备中的视觉效果模糊。

##### 视口（**viewport**）

**视口（viewport）**

视口一般是指用户访问页面时，**当前的可视区域范围**。通过滚动条滑动，视口可以显示页面的其他部分。在 PC 端上，`<html>` 元素的宽度被设置为 100% 时，等同于视口大小，等同于浏览器的窗口大小。通过 `document.documentElement.clientWidth` 或 `window.innerWidth` 可以获取视口宽度。CSS 布局基于视口大小进行计算。

由于移动设备尺寸较小，如果基于浏览器窗口大小的视口进行布局，会导致一些没有适配过移动设备样式的站点布局错乱，用户体验差。为了让移动端也能正常显示未适配移动设备的页面，从而引入布局视口和视觉视口的概念。

**布局视口（layout viewport）**

**布局视口的宽度默认为 980px**，通常比物理屏幕宽。CSS 布局会基于布局视口进行计算。移动设备的浏览器基于虚拟的布局视口去渲染网页，并将对应的渲染结果缩小以便适应设备实际宽度，从而可以完整的展示站点内容且不破坏布局结构。

**视觉视口（visual viewport）**

视觉视口是布局视口的**当前可见部分**。用户可以通过缩放来查看页面内容，从而改变视觉视口，但不影响布局视口

##### 使用 viewport 元标签配置视口

开发者可以通过 `<meta name="viewport">` 对移动端的布局视口进行设置。如果不进行 viewport 元标签的设置，可能会导致开发者设定的较小宽度的媒体查询永远不会被使用，因为默认的布局视口宽度为 980px。

```html
<!-- width 属性控制视口的大小。device-width 值指代设备屏幕宽度。 -->
<!-- initial-scale 属性控制页面首次加载时的缩放级别。-->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

##### 使用现代响应式布局方案

除了使用浮动布局和百分比布局外，目前比较常见的是使用 Flexbox 或 CSS Grid 来实现灵活的网格布局。可以根据以下条件来选择布局方案：

1. **需要一维还是二维布局**：Flexbox 基于一条主轴方向进行布局。CSS Grid 可划分为行和列进行布局。如果只需要按照行或列进行布局则使用 Flexbox；如果需要同时按照行和列控制布局则使用 CSS Grid。
2. **专注布局结构还是内容流**：Flexbox 专注于内容流。Flex Item 的宽度或高度由项目中的内容决定。Flex Item 根据其内部内容和可用空间进行增长和缩小。CSS Grid 专注于精确的内容布局结构规则。每个 Grid Item 都是一个网格单元，沿水平轴和垂直轴排列。如果允许内容灵活的分配空间则使用 Flexbox；如果需要准确控制布局中项目的位置则使用 CSS Grid。

![image](C:\Users\Administrator\Desktop\金三银四.assets\129393911-324a2f65-30c3-423d-9825-cc3b4d5e3d9e.png)

##### 使用媒体查询

媒体查询允许开发者根据设备类型和特征（如屏幕分辨率或浏览器视口宽度）来按需设置样式。

```css
/* 当浏览器宽度至少在 600px 及以上时 */
@media screen and (min-width: 600px) {
  .hzfe {
    /* 对 .xxx 应用某些样式  */
  }
}

/* 当设备 DPR 为2时的样式 */
@media screen and (-webkit-min-device-pixel-ratio: 2) {
  .border-1 {
    border-width: 0.5px;
  }
}
```

##### 使用相对单位

移动端开发需要面对十分繁杂的终端设备尺寸。除了使用响应式布局、媒体查询等方案之外，在对元素进行布局时，一般会使用相对单位来获得更多的灵活性。

**rem**

根据 W3C 规范可知，**1rem 等同于根元素 html 的 font-size 大小**。

由于早期 vw、vh 兼容性不佳，一个使用广泛的移动端适配方案 flexible 是借助 rem 来模拟 vw 特性实现移动端适配。在设计与开发时，通常会约定某一种尺寸为开发基准。开发者可以利用工具（如 px2rem）进行绝对单位 px 和其他 rem 单位的自动换算，然后利用 flexible 脚本动态设置 html 的字体大小和`<meta name="viewport">`。

**vw/vh**

由于目前 vw、vh 相关单位获得了更多浏览器的支持，可以直接使用 vw、vh 单位进行移动端开发。

同理于 flexible 方案，使用 vw、vh 也需要对设计稿中的尺寸进行换算，将 px 转换为 vw 值，常见的工具如 postcss-px-to-viewport 等可以满足需求。

##### 使用响应式图片

展示图片时，可以在 picture 元素中定义零或多个 source 元素和一个 img 元素，以便为不同的显示/设备场景提供图像的替代版本。从而使得图片内容能够灵活响应不同的设备，避免出现图片模糊或视觉效果差以及使用过大图片浪费带宽的问题。

source 元素可以按需配置 srcset、media、sizes 等属性，以便用户代理为不同媒体查询范围或像素密度比的设备配置对应的图片资源。如果没有找到匹配的图像或浏览器不支持 picture 元素，则使用 img 元素作为回退方案。

```html
<picture>
  <source
    srcset="hzfe-avatar-desktop.png, hzfe-avatar-desktop-2x.png 2x"
    media="(min-width: 990px)"
  />
  <source
    srcset="hzfe-avatar-tablet.png, hzfe-avatar-tablet-2x.png 2x"
    media="(min-width: 750px)"
  />
  <source
    srcset="hzfe-avatar-mobile.png, hzfe-avatar-mobile-2x.png 2x"
    media="(min-width: 375px)"
  />
  <img
    srcset="hzfe-avatar.png, hzfe-avatar-2x.png 2x"
    src="hzfe-avatar.png"
    alt="hzfe-default-avatar"
  />
</picture>
```

##### 适配安全区域

由于手机厂商各有特色，目前手机上常见有圆角（corners）、刘海（sensor housing）和小黑条（Home Indicator）等特征。为保证页面的显示效果不被这些特征遮盖，需要把页面限制在安全区域范围内。

```html
<meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
```

设置 `viewport-fit=cover` 后，按需借助以下预设的环境变量，对元素应用 padding，从而确保它们不会被一些以上特征遮盖：

- safe-area-inset-left
- safe-area-inset-right
- safe-area-inset-top
- safe-area-inset-bottom

```css
/* 例子：兼容刘海屏 */
body {
  /* constant 函数兼容 iOS 11.2 以下*/
  padding-top: constant(safe-area-inset-top);
  /* env 函数兼容 iOS 11.2 */
  padding-top: env(safe-area-inset-top);
}
```

#### 「参考资料」

1. [iOSRes](http://iosres.com/)
2. [Viewport concepts](https://developer.mozilla.org/en-US/docs/Web/CSS/Viewport_concepts)
3. [A tale of two viewports](https://www.quirksmode.org/mobile/viewports.html)
4. [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
5. [Relationship of grid layout to other layout methods](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
6. [Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)

## 叁，JavaScript 相关

### ES6+新特性 🔥🔥

#### 「相关问题」

- 说说 var、let、const 之间的区别
- ES6 中数组、对象、函数新增了哪些扩展？
- 如何理解 Set、Map 两种数据结构
- promise？理解？场景？作用？
- Generator？Proxy？Modular？Decorator？

#### 「回答关键点」

- `let`
- `const`
- `Set`
- `Map`
- `promise`
- `Generator`
- `Proxy`
- `modular`
- `Decorator`

#### 「知识点深入」

##### var、let、const 之间的区别?

`var`、`let`、`const`三者区别可以围绕下面五点展开：

- 变量提升
- 暂时性死区
- 块级作用域
- 重复声明
- 修改声明的变量
- 使用
- **变量提升**

```js
// var
console.log(a) // undefined
var a = 10

// let
console.log(b) // Cannot access 'b' before initialization
let b = 10

// const
console.log(c) // Cannot access 'c' before initialization
const c = 10

// var声明的变量存在变量提升，即变量可以在声明之前调用，值为`undefined

// `let`和`const`不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错
```

**暂时性死区**

`var`不存在暂时性死区

`let`和`const`存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量

**块级作用域**

`var`不存在块级作用域

`let`和`const`存在块级作用域

```js
// var
{
  var a = 20
}
console.log(a) // 20

// let
{
  let b = 20
}
console.log(b) // Uncaught ReferenceError: b is not defined

// const
{
  const c = 20
}
console.log(c) // Uncaught ReferenceError: c is not defined
```

**重复声明**

`var`允许重复声明变量

`let`和`const`在同一作用域不允许重复声明变量

```js
// var
var a = 10
var a = 20 // 20

// let
let b = 10
let b = 20 // Identifier 'b' has already been declared

// const
const c = 10
const c = 20 // Identifier 'c' has already been declared
```

**修改声明的变量**

`var`和`let`可以

`const`声明一个只读的常量。一旦声明并初始化，常量的值就不能改变

```js
// var
var a = 10
a = 20
console.log(a) // 20

//let
let b = 10
b = 20
console.log(b) // 20

// const
const c = 10
c = 20
console.log(c) // Uncaught TypeError: Assignment to constant variable
```

**使用**

能用`const`的情况尽量使用`const`，其他情况下大多数使用`let`，避免使用`var`

##### ES6 中 数组新增了哪些扩展？

- `...`：浅拷贝，剩余参数，
- `Array.from()` :将类似数组的对象和可迭代对象`（iterable）`（包括 `ES6` 新增的数据结构 `Set` 和 `Map`）转化为数组
- `Array.of()`：将一组值，转换为数组

```js
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]
```

- `arr.copyWithin(target,start?,end?)`
- `arr.find()、arr.findIndex()`
- `arr.fill()`
- `arr.entries()，arr.keys()，arr.values()`

```js
or (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
```

- `arr.includes()`
- `arr.flat()，arr.flatMap()`

```js
// 相当于 [[2, 4], [3, 6], [4, 8]].flat()
;[2, 3, 4].flatMap((x) => [x, x * 2])
// [2, 4, 3, 6, 4, 8]
```

##### ES6 中 对象新增了哪些扩展？

- 属性、方法简写
- 属性名表达式
- `super`
- `...` 扩展运算符
- 属性遍历

```js
// 1. 遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）
for( let x in obj ){}

// 2. 遍历对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名
Object.keys(obj)

// 3. 遍历对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名
Object.getOwnPropertyNames(obj)

// 4. 遍历对象自身的所有 Symbol 属性的键名
Object.getOwnPropertySymbols(obj)

// 5. 对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举
Reflect.ownKeys(obj)

上述遍历，都遵守同样的属性遍历的次序规则：

- 首先遍历所有数值键，按照数值升序排列
- 其次遍历所有字符串键，按照加入时间升序排列
- 最后遍历所有 Symbol 键，按照加入时间升序排
```

- `Object.is()` :与严格比较运算符（===）的行为基本一致，不同之处只有两个：一是`+0`不等于`-0`，二是`NaN`等于自身
- `Object.assign()`
- `Object.getOwnPropertyDescriptors()`
- `Object.setPrototypeOf()，Object.getPrototypeOf()`
- `Object.keys()，Object.values()，Object.entries()`
- `Object.fromEntries()`

##### ES6 中 函数新增了哪些扩展？

- 默认参数（尾部参数）
- `fun.length`
- `fun.name`
- 箭头函数

```js
// 1. this 对象指向上下文

// 2. 不能当作构造函数（new 操作)

// 3. 不能使用 arguments

// 4. 不能使用 yield
```

##### ES6 中的 set 和 map 数据结构？

**Set：无序，不重复的数据合集**

- add()
- delete()
- has()
- clear()

**去重**

```js
// 数组
let arr = [3, 5, 2, 2, 5, 5]
let unique = [...new Set(arr)] // [3, 5, 2]

// 字符串
let str = '352255'
let unique = [...new Set(str)].join('') // 352
```

**并集、交集、差集**

```js
let a = new Set([1, 2, 3])
let b = new Set([4, 3, 2])

// 并集
let union = new Set([...a, ...b])
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter((x) => b.has(x)))
// set {2, 3}

// （a 相对于 b 的）差集
let difference = new Set([...a].filter((x) => !b.has(x)))
// Set {1}
```

**`Map`类型是键值对的有序列表，而键和值都可以是任意类型**

- size 属性
- set()
- get()
- has()
- delete()
- clear()

**WeakSet/WeakMap**

- `WeackSet`成员只能是引用类型，而不能是其他类型的值
- `WeakSet`里面的引用只要在外部消失，它在 `WeakSet`里面的引用就会自动消失
- `WeakSet`没有遍历操作的`API`,没有`clear`清空方法
- `WeakMap`只接受对象作为键名（`null`除外），不接受其他类型的值作为键名
- `WeakMap`的键名所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用
- `WeakMap`没有遍历操作的`API`,没有`clear`清空方法

##### ES6 中 Promise 的理解？

`Promise`构造函数存在以下方法：

- all()

```js
const p = Promise.all([p1, p2, p3])

// 将多个 Promise实例，包装成一个新的 Promise实例

// 实例p的状态由p1、p2、p3决定，分为两种：

// 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数

// 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数

// 注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法
```

- race()

```js
const p = Promise.race([p1, p2, p3])

// 将多个 Promise 实例，包装成一个新的 Promise 实例

// 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变
```

- allSettled()

```js
const p = Promise.allSettled([p1, p2, p3])

// 将多个 Promise 实例，包装成一个新的 Promise 实例

// 只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束
```

- resolve()
- reject()

场景

```js
//请求某个图片资源
function requestImg() {
  var p = new Promise(function (resolve, reject) {
    var img = new Image()
    img.onload = function () {
      resolve(img)
    }
    //img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"; 正确的
    img.src = 'https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg1'
  })
  return p
}

//延时函数，用于给请求计时
function timeout() {
  var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject('图片请求超时')
    }, 5000)
  })
  return p
}

Promise.race([requestImg(), timeout()])
  .then(function (results) {
    console.log(results)
  })
  .catch(function (reason) {
    console.log(reason)
  })
```

##### ES6 中 Generator 的理解？

[现代 JavaScript 教程 —— JavaScript 编程语言篇 - shanejix - 博客园 (cnblogs.com)](https://www.cnblogs.com/shanejix/p/15220858.html#generator)

**场景**

1. 原生对象没有遍历接口，通过`Generator`函数为它加上这个接口，就能使用`for...of`进行遍历了

```javascript
function* objectEntries(obj) {
  let propKeys = Reflect.ownKeys(obj)

  for (let propKey of propKeys) {
    yield [propKey, obj[propKey]]
  }
}

let jane = { first: 'Jane', last: 'Doe' }

for (let [key, value] of objectEntries(jane)) {
  console.log(`${key}: ${value}`)
}
// first: Jane
// last: Doe
```

2. `Generator`是异步解决的一种方案

```js
function* loadUI() {
  showLoadingScreen()
  yield loadUIDataAsynchronously()
  hideLoadingScreen()
}
var loader = loadUI()
// 加载UI
loader.next()

// 卸载UI
loader.next()
```

##### ES6 中 Proxy 的理解？

`Proxy` 用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）

```js
// target表示所要拦截的目标对象 hander拦截属性
var proxy = new Proxy(target, handler)

// 取消代理
Proxy.revocable(target, handler)
```

关于`handler`拦截属性，有如下：

- get(target,propKey,receiver)：拦截对象属性的读取
- set(target,propKey,value,receiver)：拦截对象属性的设置
- has(target,propKey)：拦截`propKey in proxy`的操作，返回一个布尔值
- deleteProperty(target,propKey)：拦截`delete proxy[propKey]`的操作，返回一个布尔值
- ownKeys(target)：拦截`Object.keys(proxy)`、`for...in`等循环，返回一个数组
- getOwnPropertyDescriptor(target, propKey)：拦截`Object.getOwnPropertyDescriptor(proxy, propKey)`，返回属性的描述对象
- defineProperty(target, propKey, propDesc)：拦截`Object.defineProperty(proxy, propKey, propDesc）`，返回一个布尔值
- preventExtensions(target)：拦截`Object.preventExtensions(proxy)`，返回一个布尔值
- getPrototypeOf(target)：拦截`Object.getPrototypeOf(proxy)`，返回一个对象
- isExtensible(target)：拦截`Object.isExtensible(proxy)`，返回一个布尔值
- setPrototypeOf(target, proto)：拦截`Object.setPrototypeOf(proxy, proto)`，返回一个布尔值
- apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作
- construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作

**Reflect**

若需要在`Proxy`内部调用对象的默认行为，建议使用`Reflect`

**场景**

`Proxy`其功能非常类似于设计模式中的代理模式，常用功能如下：

- 拦截和监视外部对对象的访问
- 降低函数或类的复杂度
- 在复杂操作前对操作进行校验或对所需资源进行管理

1. 使用 `Proxy` 保障数据类型的准确性

```js
let numericDataStore = { count: 0, amount: 1234, total: 14 }
numericDataStore = new Proxy(numericDataStore, {
  set(target, key, value, proxy) {
    if (typeof value !== 'number') {
      throw Error('属性只能是number类型')
    }
    return Reflect.set(target, key, value, proxy)
  },
})

numericDataStore.count = 'foo'
// Error: 属性只能是number类型

numericDataStore.count = 333
// 赋值成功
```

2. 声明了一个私有的 `apiKey`，便于 `api` 这个对象内部的方法调用，但不希望从外部也能够访问 `api._apiKey`

```js
let api = {
  _apiKey: '123abc456def',
  getUsers: function () {},
  getUser: function (userId) {},
  setUser: function (userId, config) {},
}
const RESTRICTED = ['_apiKey']
api = new Proxy(api, {
  get(target, key, proxy) {
    if (RESTRICTED.indexOf(key) > -1) {
      throw Error(`${key} 不可访问.`)
    }
    return Reflect.get(target, key, proxy)
  },
  set(target, key, value, proxy) {
    if (RESTRICTED.indexOf(key) > -1) {
      throw Error(`${key} 不可修改`)
    }
    return Reflect.get(target, key, value, proxy)
  },
})

console.log(api._apiKey)
api._apiKey = '987654321'
// 上述都抛出错误
```

3. 实现观察者模式

```js
const queuedObservers = new Set()

const observe = (fn) => queuedObservers.add(fn)

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver)
  queuedObservers.forEach((observer) => observer())
  return result
}
```

##### ES6 中 Module 的理解？

模块，（Module），是能够单独命名并独立地完成一定功能的程序语句的**集合**

- 外部特征是指模块跟外部环境联系的接口（即其他模块或程序调用该模块的方式，包括有输入输出参数、引用的全局变量）和模块的功能
- 内部特征是指模块的内部环境具有的特点（即该模块的局部数据和程序代码）

###### 为什么需要模块化

- 代码抽象
- 代码封装
- 代码复用
- 依赖管理

如果没有模块化，代码会怎样？

- 变量和方法不容易维护，容易污染全局作用域
- 加载资源的方式通过 script 标签从上到下。
- 依赖的环境主观逻辑偏重，代码较多就会比较复杂。
- 大型项目资源难以维护，特别是多人合作的情况下，资源的引入会让人奔溃

[现代 JavaScript 教程 —— JavaScript 编程语言篇 - shanejix - 博客园 (cnblogs.com)](https://www.cnblogs.com/shanejix/p/15220858.html#模块-module)

##### ES6 中 Decorator 的理解？

Decorator，即装饰器，（联想到装饰者模式）

简单来讲，装饰者模式就是一种在不改变原类和使用继承的情况下，动态地**扩展对象功能**的设计理论

`Docorator`修饰对象为下面两种：

- 类的装饰

- 类属性的装饰

###### 类的装饰

当对类本身进行装饰的时候，能够接受一个参数，即类本身

```js
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A
```

如果想要传递参数，可以在装饰器外层再封装一层函数

```js
function testable(isTestable) {
  return function (target) {
    target.isTestable = isTestable
  }
}

@testable(true)
class MyTestableClass {}
MyTestableClass.isTestable // true

@testable(false)
class MyClass {}
MyClass.isTestable // false
```

###### 类属性的装饰

当对类属性进行装饰的时候，能够接受三个参数：

- 类的原型对象
- 需要装饰的属性名
- 装饰属性名的描述对象

例如：

```js
//定义一个readonly装饰器
function readonly(target, name, descriptor) {
  descriptor.writable = false // 将可写属性设为false
  return descriptor
}

// 使用readonly装饰类的name方法
class Person {
  @readonly
  name() {
    return `${this.first} ${this.last}`
  }
}

// 相当于
readonly(Person.prototype, 'name', descriptor)
```

一个方法有多个装饰器，先从外到内进入，再由内到外执行（洋葱模型）

```js
function dec(id) {
  console.log('evaluated', id)
  return (target, property, descriptor) => console.log('executed', id)
}

class Example {
  @dec(1)
  @dec(2)
  method() {}
}
// evaluated 1
// evaluated 2
// executed 2
// executed 1
```

**场景**

1. react-redux

```js
class MyReactComponent extends React.Component {}

export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent);

// 这种形式，既不雅观也很麻烦

@connect(mapStateToProps, mapDispatchToProps)
export default class MyReactComponent extends React.Component {}

// 通过装饰器就变得简洁
```

2. mixins

```js
function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

// 使用
const Foo = {
  foo() {
    console.log('foo')
  },
}

@mixins(Foo)
class MyClass {}

let obj = new MyClass()
obj.foo() // "foo"
```

#### 「参考资料」

### JavaScript 中的数据类型 🔥🔥

#### 「相关问题」

- JavaScript 中的数据类型有哪些？
- 怎么存储

- 怎么判断？typeof 和 instanceOf 的区别？

#### 「回答关键点」

- `7种基本类型`
- `复杂类型）`

基本类型主要为以下 6 种：

- Number
- String
- Boolean
- Undefined
- null
- symbol
- bigInt

复杂(引用）类型：

- object

复杂类型统称为`Object`，我们这里主要讲述下面三种：

- Object
- Array
- Function
- `Date`、
- `RegExp`、
- `Map`、
- `Set`等.....

存储区别

- 基本数据类型存储在栈中,存放的是对应的值

- 引用类型的对象存储于堆中,在栈中存放的是指向堆内存的地址

可以通过 typeof instanceof 等方法判断原始数据类型和引用数据类型

#### 「知识点深入」

##### `typeof`与`instanceof`

- `typeof`会返回一个变量的基本类型，`instanceof`返回的是一个布尔值
- `instanceof` 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型
- 而`typeof` 也存在弊端，它虽然可以判断基础数据类型（`null` 除外），但是引用数据类型中，除了`function` 类型以外，其他的也无法判断

上述两种方法都有弊端，并不能满足所有场景的需求

##### `Object.prototype.toString`

如果需要通用检测数据类型，可以采用`Object.prototype.toString`，调用该方法，统一返回格式`“[object Xxx]”`的字符串

```js
Object.prototype.toString({}) // "[object Object]"
Object.prototype.toString.call({}) // 同上结果，加上call也ok
Object.prototype.toString.call(1) // "[object Number]"
Object.prototype.toString.call('1') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(function () {}) // "[object Function]"
Object.prototype.toString.call(null) //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(/123/g) //"[object RegExp]"
Object.prototype.toString.call(new Date()) //"[object Date]"
Object.prototype.toString.call([]) //"[object Array]"
Object.prototype.toString.call(document) //"[object HTMLDocument]"
Object.prototype.toString.call(window) //"[object Window]"
```

实现一个全局通用的数据类型判断方法

```js
function getType(obj) {
  let type = typeof obj
  // 先进行typeof判断，如果是基础数据类型，直接返回
  if (type !== 'object') {
    return type
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1')
}

// 使用

getType([]) // "Array" typeof []是object，因此toString返回
getType('123') // "string" typeof 直接返回
getType(window) // "Window" toString返回
getType(null) // "Null"首字母大写，typeof null是object，需toString来判断
getType(undefined) // "undefined" typeof 直接返回
getType() // "undefined" typeof 直接返回
getType(function () {}) // "function" typeof能判断，因此首字母小写
getType(/123/g) //"RegExp" toString返回
```

#### 「参考资料」

### JavaScript 中的类型转换机制 🔥🔥

#### 「相关问题」

- == 和 ===区别

#### 「回答关键点」

- `显示转换`
- `隐式转换 `

JavaScript 是动态语言,只有到运行期间才会确定变量当前类型；运算子的类型与预期不符合，就会触发类型转换机制

#### 「知识点深入」

##### 显示转换

(很清楚可以看到这里发生了类型的转变)，常见的方法有：

- Number()
- parseInt()
- String()
- Boolean()

##### 隐式转换

在隐式转换中，最大的疑惑是 ：何时发生隐式转换？

生隐式转换的场景：

- 比较运算（`==`、`!=`、`>`、`<`）
- `if`、`while`需要布尔值的地方
- 算术运算（`+`、`-`、`*`、`/`、`%`）

> 还要求运算符两边的操作数不是同一类型

###### 自动转换为布尔值

在需要布尔值的地方，就会将非布尔值的参数自动转为布尔值，系统内部会调用`Boolean`函数

可以得出个小结：

- undefined
- null
- false
- +0
- -0
- NaN
- ""

除了上面几种会被转化成`false`，其他都换被转化成`true`

###### 自动转换成字符串

遇到预期为字符串的地方，就会将非字符串的值自动转为字符串

具体规则是：先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串

常发生在`+`运算中，一旦存在字符串，则会进行字符串拼接操作

```js
'5' + 1 // '51'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
'5' + [] // "5"
'5' + function () {} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"
```

###### 自动转换成数值

除了`+`有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值

```js
'5' - '2' // 3
'5' * '2' // 10
true - 1 // 0
false - 1 // -1
'1' - 1 // 0
'5' * [] // 0
false / '5' // 0
'abc' - 1 // NaN
null + 1 // 1
undefined + 1 // NaN

// `null`转为数值时，值为`0` 。`undefined`转为数值时，值为`NaN
```

##### == 和 ===区别

###### ==

- 两个都为简单类型，字符串和布尔值都会**转换成数值**，再比较
- 简单类型与引用类型比较，对象转化成其原始类型的值，再比较
- 两个都为引用类型，则比较它们是否指向同一个对象
- null 和 undefined 相等
- 存在 NaN 则返回 false

###### ===

类型相同，值也需相同

```js
let result1 = '55' === 55 // false，不相等，因为数据类型不同
let result2 = 55 === 55 // true，相等，因为数据类型相同值也相同

let result1 = null === null //true
let result2 = undefined === undefined //true
```

###### 区别

相等操作符（==）会做类型转换，再进行值的比较，全等运算符不会做类型转换

```js
let result1 = '55' === 55 // false，不相等，因为数据类型不同
let result2 = 55 === 55 // true，相等，因为数据类型相同值也相同
```

`null` 和 `undefined` 比较，相等操作符（==）为`true`，全等为`false

```js
let result1 = null == undefined // true
let result2 = null === undefined // false
```

#### 「参考资料」

### 如何实现深拷贝 🔥🔥🔥

#### 「相关问题」

- 深拷贝浅拷贝的区别？
- 如何实现一个深拷贝？

#### 「回答关键点」

- `引用类型`
- `堆`
- `栈`

基本类型数据保存在在栈内存中;引用类型数据保存在堆内存中，引用数据类型的变量是一个指向堆内存中实际对象的引用，存在栈中

深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性

#### 「知识点深入」

##### 浅拷贝

简单实现

```js
function shallowClone(obj) {
  const newObj = {}
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      newObj[prop] = obj[prop]
    }
  }
  return newObj
}
```

在`JavaScript`中，存在浅拷贝的现象有：

- `Object.assign`
- `Array.prototype.slice()`, `Array.prototype.concat()`
- 使用拓展运算符实现的复制

##### 深拷贝

常见的深拷贝方式有：

- `_.cloneDeep()`
- `jQuery.extend()`
- `JSON.stringify()`:弊端，会忽略`undefined`、`symbol`和`函数`
- 手写

```js
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== 'object') return obj
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj)
  let cloneObj = new obj.constructor()
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash)
    }
  }
  return cloneObj
}
```

#### 「参考资料」

### 如何理解 JavaScript 中的 this 🔥🔥🔥

#### 「相关问题」

#### 「回答关键点」

```
`this` 的值是在代码运行时计算出来的，它取决于`代码上下文
```

#### 「知识点深入」

##### 默认绑定

```js
var name = 'Jenny'
function person() {
  return this.name
}
console.log(person()) //Jenny

// 指向window，所以输出Jenny
```

> 严格模式下，不能将全局对象用于默认绑定，this 会绑定到`undefined`，只有函数运行在非严格模式下，默认绑定才能绑定到全局对象

##### 隐式绑定

```js
function test() {
  console.log(this.x)
}

var obj = {}
obj.x = 1
obj.m = test

obj.m() // 1

// 函数作为某个对象的方法调用
```

##### new 绑定

```js
function test() {
  this.x = 1
}

var obj = new test()
obj.x // 1

// 通过构建函数new关键字生成一个实例对象，此时this指向这个实例对象
```

##### 显示修改

```js
var x = 0
function test() {
  console.log(this.x)
}

var obj = {}
obj.x = 1
obj.m = test
obj.m.apply(obj) // 1

// apply()、call()、bind()作用是改变函数的调用对象
```

##### 箭头函数

箭头函数的 `this` 被设置为他被创建时的环境(上下文)

```js
var globalObject = this
var foo = () => this
console.log(foo() === globalObject) // true

// 作为对象的一个方法调用
var obj = { foo: foo }
console.log(obj.foo() === globalObject) // true

// 尝试使用call来设定this
console.log(foo.call(obj) === globalObject) // true

// 尝试使用bind来设定this
foo = foo.bind(obj)
console.log(foo() === globalObject) // true
```

再看个例子

```js
// 创建一个含有bar方法的obj对象，
// bar返回一个函数，
// 这个函数返回this，
// 这个返回的函数是以箭头函数创建的，
// 所以它的this被永久绑定到了它外层函数的this。
// bar的值可以在调用中设置，这反过来又设置了返回函数的值。
var obj = {
  bar: function () {
    var x = () => this
    return x
  },
}

// 作为obj对象的一个方法来调用bar，把它的this绑定到obj。
// 将返回的函数的引用赋值给fn。
var fn = obj.bar()

// 直接调用fn而不设置this，
// 通常(即不使用箭头函数的情况)默认为全局对象
// 若在严格模式则为undefined
console.log(fn() === obj) // true

// 但是注意，如果你只是引用obj的方法，
// 而没有调用它
var fn2 = obj.bar
// 那么调用箭头函数后，this指向window，因为它从 bar 继承了this。
console.log(fn2()() == window) // true
```

#### 「参考资料」

[this - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this#描述)

### 如何理解 JavaScript 中执行上下文 🔥🔥🔥

#### 「相关问题」

- 什么是执行上下文？
- 什么是执行栈？

#### 「回答关键点」

- `执行环境`

执行上下文是一种对`Javascript`代码执行环境的抽象概念，也就是说只要有`Javascript`代码运行，那么它就一定是运行在执行上下文中

执行上下文的类型分为三种：

- **全局执行上下文**：只有一个，浏览器中的全局对象就是 `window`对象，`this` 指向这个全局对象
- **函数执行上下文**：存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文
- **Eval 函数执行上下文**： 指的是运行在 `eval` 函数中的代码，很少用而且不建议使用

#### 「知识点深入」

##### 生命周期

###### 创建阶段：未执行任何内部代码之前

```js
ExecutionContext = {
  ThisBinding = <this value>,     // 确定this
  LexicalEnvironment = { ... },   // 词法环境
  VariableEnvironment = { ... },  // 变量环境
}
```

###### ThisBinding

`this`的值是在执行的时候才能确认，定义的时候不能确认

###### 词法环境

词法环境有两个组成部分：全局环境、函数环境

```js
GlobalExectionContext = {     // 全局执行上下文
  LexicalEnvironment: {       // 词法环境
    EnvironmentRecord: {      // 环境记录
      Type: "Object",         // 全局环境
      // 标识符绑定在这里
      outer: <null>           // 对外部环境的引用 全局环境是一个没有外部环境的词法环境
  }
}
```

```js
FunctionExectionContext = {   // 函数执行上下文
  LexicalEnvironment: {       // 词法环境
    EnvironmentRecord: {      // 环境记录
      Type: "Declarative",    // 函数环境
      // 用户在函数中定义的变量被存储在环境记录中
      Arguments: {},
      // 标识符绑定在这里        // 对外部环境的引用
      outer: <Global or outer function environment reference>
  }
}
```

###### 变量环境

```js
// 举个例子

let a = 20;
const b = 30;
var c;

function multiply(e, f) {
 var g = 20;
 return e * f * g;
}

c = multiply(20, 30);

// ...

// 执行上下文如下：
GlobalExectionContext = {

  ThisBinding: <Global Object>,

  LexicalEnvironment: {  // 词法环境
    EnvironmentRecord: {
      Type: "Object",
      // 标识符绑定在这里  // 词法环境用于存储函数声明和变量（ let 和 const ）绑定
      a: < uninitialized >,
      b: < uninitialized >,
      multiply: < func >
    }
    outer: <null>
  },

  VariableEnvironment: {  // 变量环境
    EnvironmentRecord: {
      Type: "Object",
      // 标识符绑定在这里  // 变量环境仅用于存储变量（ var ）绑定
      c: undefined,
    }
    outer: <null>
  }
}

FunctionExectionContext = {

  ThisBinding: <Global Object>,

  LexicalEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // 标识符绑定在这里
      Arguments: {0: 20, 1: 30, length: 2},
    },
    outer: <GlobalLexicalEnvironment>
  },

  VariableEnvironment: {
    EnvironmentRecord: {
      Type: "Declarative",
      // 标识符绑定在这里
      g: undefined
    },
    outer: <GlobalLexicalEnvironment>
  }
}
```

`let`和`const`定义的变量`a`和`b`在创建阶段没有被赋值，但`var`声明的变量从在创建阶段被赋值为`undefined`这是因为，创建阶段，会在代码中扫描变量和函数声明，然后将函数声明存储在环境中。但变量会被初始化为`undefined`(`var`声明的情况下)和保持`uninitialized`(未初始化状态)(使用`let`和`const`声明的情况下)——这就是**变量提升的实际原因**

###### 执行阶段

在这阶段，执行变量赋值、代码执行

如果 `Javascript` 引擎在源代码中声明的实际位置找不到变量的值，那么将为其分配 `undefined` 值

###### 回收阶段

执行上下文出栈等待虚拟机回收执行上下文

##### 执行栈

执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文

```js
let a = 'Hello World!'
function first() {
  console.log('Inside first function')
  second()
  console.log('Again inside first function')
}
function second() {
  console.log('Inside second function')
}
first()
console.log('Inside Global Execution Context')
```

简单分析一下流程：

- 创建全局上下文请压入执行栈
- `first`函数被调用，创建函数执行上下文并压入栈
- 执行`first`函数过程遇到`second`函数，再创建一个函数执行上下文并压入栈
- `second`函数执行完毕，对应的函数执行上下文被推出执行栈，执行下一个执行上下文`first`函数
- `first`函数执行完毕，对应的函数执行上下文也被推出栈中，然后执行全局上下文
- 所有代码执行完毕，全局上下文也会被推出栈中，程序结束

#### 「参考资料」

### JavaScript 中的事件模型 🔥

#### 「相关问题」

- 什么是事件流？事件模型？
- 事件代理？

#### 「回答关键点」

#### 「知识点深入」

##### 事件与事件流

由于`DOM`是一个树结构，如果在父子节点绑定事件时候，当触发子节点的时候，就存在一个顺序问题，这就涉及到了事件流的概念

事件流都会经历三个阶段：

- 事件捕获阶段(capture phase)
- 处于目标阶段(target phase)
- 事件冒泡阶段(bubbling phase)

##### 事件模型

事件模型可以分为三种：

- 原始事件模型（DOM0 级）
- 标准事件模型（DOM2 级）
- IE 事件模型（基本不用）

###### 原始事件模型

事件绑定监听函数比较简单, 有**两种方式**：

- HTML 代码中直接绑定

```js
<input type="button" onclick="fun()">
```

- 通过`JS`代码绑定

```js
var btn = document.getElementById('.btn')
btn.onclick = fun
```

**特性**

- 绑定速度快

`DOM0`级事件具有很好的跨浏览器优势，会以最快的速度绑定，但由于绑定速度太快，可能页面还未完全加载出来，以至于事件可能无法正常运行

- 只支持冒泡，不支持捕获
- 同一个类型的事件只能绑定一次

```js
<input type="button" id="btn" onclick="fun1()">

var btn = document.getElementById('.btn');
btn.onclick = fun2;

// 当希望为同一个元素绑定多个同类型事件的时候（上面的这个`btn`元素绑定2个点击事件），
// 是不被允许的，后绑定的事件会覆盖之前的事件
```

- 删除 `DOM0` 级事件处理程序只要将对应事件属性置为`null`即可

```js
btn.onclick = null
```

###### 标准事件模型

在该事件模型中，一次事件共有**三个过程:**

- 事件捕获阶段：事件从`document`一直向下传播到目标元素, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行
- 事件处理阶段：事件到达目标元素, 触发目标元素的监听函数
- 事件冒泡阶段：事件从目标元素冒泡到`document`, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行

事件绑定监听函数的方式如下:

```text
addEventListener(eventType, handler, useCapture)
```

事件移除监听函数的方式如下:

```text
removeEventListener(eventType, handler, useCapture)
```

```js
- `eventType`指定事件类型(不要加on)
- `handler`是事件处理函数
- `useCapture`是一个`boolean`用于指定是否在捕获阶段进行处理，一般设置为`false`与IE浏览器保持一致
```

**特性**

- 可以在一个`DOM`元素上绑定多个事件处理器，各自并不会冲突

```js
btn.addEventListener(‘click’, showMessage1, false);
btn.addEventListener(‘click’, showMessage2, false);
btn.addEventListener(‘click’, showMessage3, false);
```

- 执行时机：捕获和冒泡

###### IE 事件模型

IE 事件模型共有两个过程:

- 事件处理阶段：事件到达目标元素, 触发目标元素的监听函数。
- 事件冒泡阶段：事件从目标元素冒泡到`document`, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行

事件绑定监听函数的方式如下:

```text
attachEvent(eventType, handler)
```

事件移除监听函数的方式如下:

```text
detachEvent(eventType, handler)
```

##### **事件代理**

> 把一个元素响应事件（`click`、`keydown`......）的函数委托到另一个元素(父层或者更外层元素上)

事件流的都会经过三个阶段： 捕获阶段 -> 目标阶段 -> 冒泡阶段，而事件委托就是在冒泡阶段完成

适合事件委托的事件有：`click`，`mousedown`，`mouseup`，`keydown`，`keyup`，`keypress`

两大优点：

- 减少整个页面所需的内存，提升整体性能
- 动态绑定，减少重复工作

局限性：

- `focus`、`blur`这些事件没有事件冒泡机制，所以无法进行委托绑定事件
- `mousemove`、`mouseout`这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的

#### 「参考资料」

### Ajax 原理 🔥

#### 「相关问题」

#### 「回答关键点」

`AJAX`(Async Javascript and XML):可以在不重新加载整个网页的情况下，与服务器交换数据，并且更新部分网页。

`Ajax`的原理简单来说通过`XmlHttpRequest`对象来向服务器发异步请求，从服务器获得数据，然后用`JavaScript`来操作`DOM`而更新页面

#### 「知识点深入」

##### 实现过程

实现 `Ajax`异步交互需要服务器逻辑进行配合，需要完成以下步骤：

- 创建 `Ajax`的核心对象 `XMLHttpRequest`对象
- 通过 `XMLHttpRequest` 对象的 `open()` 方法与服务端**建立连接**
- 构建请求所需的数据内容，并通过`XMLHttpRequest` 对象的 `send()` 方法**发送**给服务器端
- 通过 `XMLHttpRequest` 对象提供的 `onreadystatechange` 事件**监听**服务器端你的通信状态
- 接受并处理服务端向客户端响应的数据结果
- 将处理结果更新到 `HTML`页面中

##### 封装

来封装一个简单的`ajax`请求

```js
/封装一个ajax请求
function ajax(options) {
    //1. 创建XMLHttpRequest对象
    const xhr = new XMLHttpRequest()


    // 初始化参数的内容
    options = options || {}
    options.type = (options.type || 'GET').toUpperCase()
    options.dataType = options.dataType || 'json'
    const params = options.data

    //2. 建立连接 并 发送请求
    if (options.type === 'GET') {
        xhr.open('GET', options.url + '?' + params, true)
        xhr.send(null)
    } else if (options.type === 'POST') {
        xhr.open('POST', options.url, true)
        xhr.send(params)
    }

    //3. 接收请求
    xhr.onreadystatechange = function () {
        // xhr.readyState === 0 UNSENT
        // xhr.readyState === 1 OPENED
        // xhr.readyState === 2 HEADRS_RECEIVED
        // xhr.readyState === 3 LOADING
        // xhr.readyState === 4 DONE
        if (xhr.readyState === 4) {
            let status = xhr.status
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML)
            } else {
                options.fail && options.fail(status)
            }
        }
    }
}
```

使用

```js
ajax({
  type: 'post',
  dataType: 'json',
  data: {},
  url: 'https://xxxx',
  success: function (text, xml) {
    // 请求成功后的回调函数
    console.log(text)
  },
  fail: function (status) {
    // 请求失败后的回调函数
    console.log(status)
  },
})
```

#### 「参考资料」

### 闭包的作用和原理 🔥🔥🔥

#### 「相关问题」

- 什么是闭包

- 闭包的应用

#### 「回答关键点」

- `函数`

- `作用域`

- `引用`

作用：能够在函数定义的作用域外，使用函数定义作用域内的局部变量，并且不会污染全局
​

原理：基于词法作用域链和垃圾回收机制，通过维持函数作用域的引用，让函数作用域可以在当前作用域外被访问到
​

#### 「知识点深入」

##### 作用域

- 作用域：用于确定在何处以及如何查找变量（标识符）的一套规则

- 词法作用域：词法作用域是定义在词法阶段的作用域。词法作用域是由写代码时将代码和块作用域写在哪里来决定的，因此当词法作用域处理代码是会保持作用域不变(大部分情况)

- 块作用域：指的是变量和函数不仅可以属于所处的作用域，也可以属于某个代码块（通常用`{}`包裹，常见的块级作用域有 `with，try/catch，let，const` 等）

- 函数作用域：属于这个函数的全部变量都可以在整个函数范围内使用及复用（包括嵌套作用域）

- 作用域链：查找变量时，先从当前作用域开始查找，如果没有找到，就会到父级(词法层面上的父级)作用域中查找，一直找到全局作用域；作用域链正是包含这些作用域的列表

##### 闭包

> 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使是函数在当前词法作用域外执行。 ——《你不知道的 JavaScript》

```javascript
function foo() {
  var a = 'xx'
  function bar() {
    console.log(a)
  }
  return bar
}

// 在函数 foo 执行后，通常会期待函数 foo 的整个内部作用域被引擎回收机制销毁
var baz = foo()

// 函数 bar 作为返回值返回后，在自己定义的词法作用域以外的地方执行
bar() // xx

// 而闭包可以阻止这件事情的发生
// 事实上内部作用域依然存在，因为函数 bar 本身在使用，所以并不会被回收
```

在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来
​

##### 闭包的应用

1. 无论何时何地，如果将函数作为返回值，就会看到闭包在这些函数中的应用 ​

2. 在定时器，事件监听器，ajax 请求，跨窗口通信，web workers 或者任何其他的异步/同步任务中，只要使用了回调函数，实际上就是使用闭包

#### 「参考资料」

- [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
- [https://github.com/getify/You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
- [https://zh.wikipedia.org/wiki/%E9%97%AD%E5%8C%85\_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)](<https://zh.wikipedia.org/wiki/%E9%97%AD%E5%8C%85_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6)>)
- [https://github.com/mqyqingfeng/Blog/issues/9](https://github.com/mqyqingfeng/Blog/issues/9)

### 实现 Promise 🔥🔥🔥

[https://www.shanejix.com/posts/Promises%20A+%20implementation%20with%20ES6%20class/](https://www.shanejix.com/posts/Promises%20A+%20implementation%20with%20ES6%20class/)
​

### ES5、ES6 如何实现继承 🔥🔥🔥

#### 「相关问题」

- 关于 ES5 和 ES6 的继承问题
- 原型链概念

#### 「回答关键点」

- `原型链继承`
- `构造函数继承`
- `ES6 类继承`

继承是指子类型具备父类型的属性和行为，使代码得以**复用**，做到设计上的分离。JavaScript 中的继承主要通过原型链和构造函数来实现。常见的继承方法有：ES6 中 class 的继承、原型链继承、寄生组合式继承等

#### 「知识点深入」

##### 原型链

原型链的本质是拓展**原型搜索机制**。每个实例对象都有一个私有属性 **proto**。该属性指向它的构造函数的原型对象 prototype。该原型对象的 **proto** 也可以指向其他构造函数的 prototype。依次层层向上，直到一个对象的 **proto** 指向 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。
​

当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次**层层向上搜索**，直到找到一个名字匹配的属性或直到这个**链表**结束（Object.prototype.**proto** === null）
​

##### 原型链继承

原型链继承的思想：**一个引用类型继承另一个引用类型的属性和方法**
​

```javascript
function SuperType() {
  this.b = [1, 2, 3]
}

function SubType() {}

SubType.prototype = new SuperType()
SubType.prototype.constructor = SubType

var sub1 = new SubType()
var sub2 = new SubType()

// 这里对引用类型的数据进行操作
sub1.b.push(4)

console.log(sub1.b) // [1,2,3,4]
console.log(sub2.b) // [1,2,3,4]
console.log(sub1 instanceof SuperType) // true
```

**优点：**
**​**

1. 父类新增原型方法/原型属性，子类都能访问到。
1. 简单、易于实现。

**缺点：**
**​**

1. 无法实现多继承。
1. 由于原型中的引用值被共享，导致实例上的修改会直接影响到原型。
1. 创建子类实例时，无法向父类构造函数传参。

##### 借用构造函数继承

构造函数继承的思想：**子类型构造函数中调用父类的构造函数，使所有需要继承的属性都定义在实例对象上**。
​

```javascript
function SuperType(name) {
  this.name = name
  this.b = [1, 2, 3]
}

SuperType.prototype.say = function () {
  console.log('xx')
}

function SubType(name) {
  SuperType.call(this, name)
}

var sub1 = new SubType()
var sub2 = new SubType()

// 传递参数
var sub3 = new SubType('foo')

sub1.say() // 使用构造函数继承并没有访问到原型链，say 方法不能调用

console.log(sub3.name) // foo

sub1.b.push(4)

// 解决了原型链继承中子类实例共享父类引用属性的问题
console.log(sub1.b) // [1,2,3,4]
console.log(sub2.b) // [1,2,3]
console.log(sub1 instanceof SuperType) // false
```

**优点：**
**​**

1. 解决了原型链继承中子类实例共享父类引用属性的问题。
1. 可以在子类型构造函数中向父类构造函数传递参数。
1. 可以实现多继承（call 多个父类对象）。

**缺点：**
**​**

1. 实例并不是父类的实例，只是子类的实例。
1. 只能继承父类的实例属性和方法，不能继承原型属性和方法。
1. 无法实现函数复用，每个子类都有父类实例函数的副本，影响性能

##### 组合继承（伪经典继承）

组合继承的思想：**使用原型链实现对原型属性和方法的继承，借用构造函数实现对实例属性的继承**
​

```javascript
function SuperType(name) {
  this.name = name
  this.a = 'foo'
  this.b = [1, 2, 3, 4]
}

SuperType.prototype.say = function () {
  console.log('foo')
}

function SubType(name) {
  SuperType.call(this, name) // 第二次调用 SuperType
}

SubType.prototype = new SuperType() // 第一次调用 SuperType
SubType.prototype.constructor = SubType
```

**优点：**
**​**

1. 可以继承实例属性/方法，也可以继承原型属性/方法。
1. 不存在引用属性共享问题。
1. 可传参
1. 函数可复用

**缺点：**
**​**

1. 调用了两次父类构造函数（耗内存），生成了两份实例

##### 寄生组合式继承

寄生组合式继承的思想：**借用构造函数来继承属性，使用混合式原型链继承方法**
​

```javascript
// 在函数内部
// 第一步创建父类原型的一个副本，
// 第二步是为创建的副本添加 constructor 属性，从而弥补因重写而失去的默认的 constructor 属性
// 最后一步，将新创建的对象（即副本）赋值给予类型的原型。
function inheritPrototype(subType, superType) {
  // 创建对象
  var prototype = Object.create(superType.prototype)
  // 增强对象
  prototype.constructor = subType
  // 指定对象
  subType.prototype = prototype
}

function SuperType(name) {
  this.name = name
}

SuperType.prototype.sayName = function () {
  console.log(this.name)
}

function SubType(name, num) {
  SuperType.call(this, name)
  this.num = num
}

inheritPrototype(SubType, SuperType)

SubType.prototype.sayNum = function () {
  console.log(this.num)
}
```

**优点：**
**​**

1. 只调用了一次 SuperType 构造函数，避免了在 SubType.prototype 上创建不必要的属性。
1. 能够正常使用 instanceof 和 isPrototypeOf()。

**缺点：**
**​**

1. 实现较为复杂

##### ES6 中 class 的继承

ES6 中引入了 class 关键字， class 可以通过 extends 关键字实现继承，还可以通过 static 关键字定义类的静态方法，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。 **需要注意的是：class 关键字只是原型的语法糖(不仅仅是）， JavaScript 继承仍然是基于原型实现的**

```javascript
class Pet {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  showName() {
    console.log('调用父类的方法')
    console.log(this.name, this.age)
  }
}

// 定义一个子类
class Dog extends Pet {
  constructor(name, age, color) {
    super(name, age) // 通过 super 调用父类的构造方法
    this.color = color
  }

  showName() {
    console.log('调用子类的方法')
    console.log(this.name, this.age, this.color)
  }
}
```

**优点：**
**​**

1. 清晰方便

**缺点：**
**​**

1. 不是所有的浏览器都支持 class

#### 「参考资料」

- [https://zh.javascript.info/prototypes](https://zh.javascript.info/prototypes)
- [https://zh.javascript.info/classes](https://zh.javascript.info/classes)
- [https://www.shanejix.com/posts/Vanilla%20JavaScript%20Inherited/](https://www.shanejix.com/posts/Vanilla%20JavaScript%20Inherited/)

### New 操作符的原理 🔥🔥🔥

#### 「相关问题」

- new 操作符做了什么
- new 操作符的模拟实现

#### 「回答关键点」

- `构造函数`
- `对象实例`

new 操作符通过执行自定义构造函数或内置对象构造函数，生成对应的对象实例
​

#### 「知识点深入」

##### new 操作符做了什么

1. 在内存中创建一个新对象
1. 将新对象内部的 **proto** 赋值为构造函数的 prototype 属性
1. 将构造函数内部的 this 被赋值为新对象（即 this 指向新对象）
1. 执行构造函数内部的代码（给新对象添加属性）
1. 如果构造函数返回非空对象，则返回该对象,否则返回 this

##### new 操作符的模拟实现

```javascript
function mynew(Func, ...args) {
  // 1.创建一个新对象
  const obj = {}
  // 2.新对象原型指向构造函数原型对象
  obj.__proto__ = Func.prototype
  // 3.将构建函数的this指向新对象
  let result = Func.apply(obj, args)
  // 4.根据返回值判断
  return result instanceof Object ? result : obj
}
```

#### 「参考资料」

1. [new 操作符 - MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
1. [The new Operator](https://262.ecma-international.org/5.1/#sec-11.2.2)

### 节流和防抖 🔥🔥🔥

#### 「相关问题」

- 防抖和节流解决什么问题？
- 如何实现防抖和节流？

#### 「回答关键点」

- `高频率`
- `性能`
- `体验`
- `防抖`
- `节流`

防抖和节流本质上是优化高频触发代码的一种手段；例如浏览器的`scroll`、`mousemove`等事件触发时，频繁的触发事件绑定的回调事件，极大的浪费资源，降低性能；为了优化体验，需要对这类事件的调用次数做限制。
​

对此，采用防抖和节流的方式来降低事件的触发频率。
​

#### 「知识点深入」

##### 定义

**节流**: n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效
​

**防抖**: n 秒后只运行一次，若在 n 秒内被重复触发，则重新计时
​

![image.png](https://cdn.nlark.com/yuque/0/2022/png/377147/1646299824477-cf2d756e-8b83-4ef7-8a96-6688a099154a.png#clientId=u7115af13-2b9e-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uebbc8cab&margin=%5Bobject%20Object%5D&name=image.png&originHeight=491&originWidth=750&originalType=url&ratio=1&rotation=0&showTitle=false&size=43551&status=done&style=none&taskId=u1f26fed8-73cd-47f7-aa72-b07fea0861f&title=)

##### 实现

**节流(throttle)**
**​**

```javascript
// method1：时间戳版

function throttle(fn, wait = 500) {
  let oldTime = +new Date()

  return function (...args) {
    const newTime = +new Date()

    if (newTime - oldTime >= wait) {
      fn.apply(args)
      oldTime = newTime // +new Date()
    }
  }
}
```

```javascript
// method2: 定时器版

function throttle(fn, wait = 500) {
  let timer = null

  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(null, args)
        timer = null
      }, wait)
    }
  }
}
```

```javascript
// method3: 时间戳 + 定时器 更精确的版本

function throttle(fn, wait = 500) {
  let timer = null
  const oldTime = +new Date()

  return function (...args) {
    let newTime = +new Date()
    const remainWaitTime = wait - (newTime - oldTime)

    clearTimeout(timer)

    if (remainWaitTime <= 0) {
      fn.apply(null, args)
      newTime = +new Date()
    } else {
      timer = setTimeout(() => {
        fn.apply(null, args)
      }, remainWaitTime)
    }
  }
}
```

**防抖（debunce）**

```javascript
// method1: 时间戳版

function debunce(fn, wait) {
  let oldTime = +new Date()

  return function (...args) {
    const newTime = +new Date()

    if (newTime - oldTime >= wait) {
      fn.apply(null, args)
      oldTime = newTime // + newDate()
    } else {
      oldTime = +new Date()
    }
  }
}
```

```javascript
// method2: 定时器版

function debunce(fn, wait) {
  let timer = null

  return function (...args) {
    clearTimeout(timer)

    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(null, args)
      }, wait)
    }
  }
}
```

#### 「参考资料」

### TypeScript 中的 Interface 和 Type Alias🔥🔥🔥

#### 「相关问题」

- Interface 和 Type Alias 的作用
- Interface 和 Type Alias 的相同点
- Interface 和 Type Alias 的区别

#### 「回答关键点」

- `类型约束`
- `扩展`
- `类型合并`

Interface 和 Type Alias（Type 别名，下文简称 Type）是 TypeScript 中两个非常重要且常用的概念。在程序设计中，Interface 和 Type 主要起到**类型的限制和规范的作用**，它们不关心实现细节，只规定和限制类或变量必须提供对应的属性和方法。

Interface 和 Type 核心的区别是 Type 不可在定义后重新添加内容，而 Interface 则总是可以扩展新内容。相比 Interface，Type 并没有实际创建一个新的类型，而是创建一个引用某个类型的名字。

#### 「知识点深入」

##### Interface 和 Type 的相同点

###### 可描述对象/函数

Interface 和 Type 都可以描述对象和函数。

```typescript
// Interface
interface IFoo {
  name: string
}
interface GetFoo {
  (): string
}

// Type
type TFoo = {
  name: string
}
type GetFoo = () => string
```

###### 可扩展

Interface 和 Type 都可以扩展类型。

```typescript
// Interface
interface IFoo {
  name: string
}
interface IBar extends IFoo {
  location: string
}

// Type
type TFoo = {
  name: string
}
type TBar = TFoo & { location: string }
```

另外，Interface 的 extends 和 Type 的交叉类型有一些细微区别：extends 中的同名字段的类型必须是兼容的。而交叉类型中出现了同名字段且类型不同时，则类型一般是 never。

###### class Implements

Interface 和 Type 描述的类型都可以被 class 实现。

```typescript
// Interface
interface IFoo {
  name: string
}

// Type
type TFoo = {
  name: string
}

class Foo1 implements IFoo {
  name = 'xxStudio'
}
class Hoo2 implements TFoo {
  name = 'xxStudio'
}
```

##### Interface 和 Type 的不同点

###### 基本类型别名、联合类型、元组

由于 Type 定义的实际是一个别名，所以 Type 可以描述一些基本类型、联合类型和元组的别名。

```typescript
// 基本类型
type XMember = number

// 联合类型
type XMemberTechStack = string | string[]

// 元组
type XMember = [number, string]
```

###### 声明合并

Interface 可以重复定义，并将合并所有声明的属性为单个接口。而 Type 不可重复定义。

```typescript
// Interface
interface IFoo {
  name: string
}
interface IFoo {
  member: number
}

const foo: IFoo = { name: 'foo', member: 17 }
```

###### 动态属性

Type 可以使用 in 关键字动态生成属性，而 Interface 的索引值必须是 string 或 number 类型，所以 Interface 并不支持动态生成属性。

```typescript
type XLanguage = 'JavaScript' | 'Go'
type XProjects = {
  [key in XLanguage]?: string[]
}

const XProjects: XProjects = {
  JavaScript: ['xx', 'xx'],
}
```

#### 「参考资料」

1. [TypScript - Typed JavaScript at Any Scale](https://www.typescriptlang.org/)

### JavaScript 异步编程 🔥🔥🔥

#### 「相关问题」

- JavaScript 异步编程方案有哪些
- JavaScript 异步编程方案各有什么优缺点

#### 「回答关键点」

- `阻塞`
- `事件循环`
- `回调函数`

JavaScript 是一种同步的、阻塞的、单线程的语言，一次只能执行一个任务。但浏览器定义了非同步的 Web APIs，将回调函数插入到事件循环，实现异步任务的非阻塞执行。常见的异步方案有异步回调、定时器、发布/订阅模式、Promise、生成器 Generator、async/await 以及 Web Worker。

#### 「知识点深入」

##### 异步回调

异步回调函数作为参数传递给在后台执行的其他函数。当后台运行的代码结束，就调用回调函数，通知工作已经完成。具体示例如下：

```js
// 第一个参数是监听的事件类型，第二个就是事件发生时调用的回调函数。
btn.addEventListener('click', () => {
  console.log('You clicked me!')

  const pElem = document.createElement('p')
  pElem.textContent = 'hello, xx.'
  document.body.appendChild(pElem)
})
```

异步回调是编写和处理 JavaScript 异步逻辑的最常用方式，也是最基础的异步模式。但是随着 JavaScript 的发展，异步回调的问题也不容忽视：

1. 回调表达异步流程的方式是非线性的，非顺序的，理解成本较高。
2. 回调会受到控制反转的影响。因为回调的控制权在第三方（如 Ajax），由第三方来调用回调函数，无法确定调用是否符合预期。
3. 多层嵌套回调会产生回调地狱（callback hell）。

##### 定时器：setTimeout/setInterval/requestAnimationFrame

这三个都可以用异步方式运行代码。主要特征如下：

1. setTimeout：经过任意时间后运行函数，**递归 setTimeout 在 JavaScript 线程不阻塞的情况下可保证执行间隔相同**。
2. setInterval：允许重复执行一个函数，并设置时间间隔，**不能保证执行间隔相同**。
3. requestAnimationFrame：以**当前浏览器/系统的最佳帧速率**重复且高效地运行函数的方法。一般用于处理动画效果。

setInterval 会按设定的时间间隔固定调用，其中 setInterval 里面的代码的执行时间也包含在内，所以**实际间隔小于设定的时间间隔**。而递归 setTimeout 是调用时才开始算时间，可以保证多次递归调用时的间隔相同。

如果当前 JavaScript 线程**阻塞**，轮到的 setInterval 无法执行，那么本次任务就会**被丢弃**。而 setTimeout 被阻塞后不会**被丢弃**，等到空闲时会继续执行，但无法保证执行间隔。

##### 发布/订阅模式（publish-subscribe pattern）

**发布/订阅模式是一种对象间一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到状态改变的通知。**

上面异步回调的例子也是一个发布/订阅模式（publish-subscribe pattern）的实现。订阅 btn 的 click 事件，当 btn 被点击时向订阅者发送这个消息，执行对应的操作。

```js
class PubSub {
  constructor() {
    // 存储所有订阅的事件类型及对应的订阅函数数组
    // key <eventType>: value <subscribeList>[]
    this.handlers = {}
  }
  // 订阅事件方法
  on(eventType, handler) {
    if (!(eventType in this.handlers)) this.handlers[eventType] = []
    this.handlers[eventType].push(handler)
  }
  // 消息发布方法
  emit(eventType, ...handlerArgs) {
    this.handlers[eventType].forEach((v) => {
      v(...handlerArgs)
    })
  }
  // 取消订阅
  remove(eventType, handler) {
    // 没有传入具体的事件处理函数，则移除该事件类型的所有订阅函数
    // 有则在订阅数组中移除对应的函数
    if (!handler) {
      this.handlers[eventType].length = 0
    } else {
      const key = this.handlers[eventType].findIndex((v) => v === handler)
      if (key !== -1) this.handlers[eventType].splice(key, 1)
    }
  }
}

const test1 = new PubSub()
const fn1 = (...data) => console.log(data)
test1.on('event1', fn1)
test1.on('event1', (...data) => console.log(`fn2: ${data}`))
test1.emit('event1')
test1.remove('event1', fn1)
```

发布/订阅模式可以更细致地了解到有多少种事件类型以及每种类型对应的订阅事件，方便进一步的监听与控制。

##### Promise

Promise 提供了完成和拒绝两个状态来标识异步操作结果，通过 then 和 catch 可以分别对着两个状态进行跟踪处理。和事件监听的主要差别在于：

1. 一个 Promise 只能成功或失败一次，一旦状态改变，就无法从成功切换到失败，反之亦然。
2. 如果 Promise 成功或失败，那么即使在事件发生之后添加成功/失败回调，也将调用正确的回调。

Promise 使用顺序的方式来表达异步，将回调的控制权转交给了可以信任的 Promise.resolve()，同时也能够使用链式流的方式避免回调地狱的产生，解决了异步回调的问题。但 Promise 也有缺陷：

1. 顺序错误处理：如果不设置回调函数，Promise 链中的错误很容易被忽略。
2. 单决议：Promise 只能被决议一次（完成或拒绝），不能很好地支持多次触发的事件及数据流（支持的[标准](https://streams.spec.whatwg.org/)正在制定中）。
3. 无法获取状态：处于 Pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
4. 无法取消：一旦创建了 Promise 并注册了完成/拒绝函数，不能取消执行。

##### 生成器 Generator

Generator 函数是 ES6 提供的一种异步编程解决方案，语法与传统函数完全不同，最大的特点就是可以控制函数的执行。简单示例如下：

```js
function* helloGenerator() {
  yield 'hello'
  yield 'xx'
  return 'ending'
}

var hello = helloGenerator()

hello.next()
// { value: 'hello', done: false }

hello.next()
// { value: 'xx', done: false }

hello.next()
// { value: 'ending', done: true }

hello.next()
// { value: undefined, done: true }
```

生成器 Generator 并不像普通函数那样总是运行到结束，可以在运行当中通过 yield 来暂停并完全保持其状态，再通过 next 恢复运行。yield/next 不只是控制机制，也是一种双向消息传递机制。yield 表达式本质上是暂停下来等待某个值，next 调用会向被暂停的 yield 表达式传回一个值（或者是隐式的 undefined）。

生成器 Generator 保持了顺序、同步、阻塞的代码模式，同样解决了异步回调的问题。

##### async/await

async/await 属于 [ECMAScript 2017 JavaScript 版](https://262.ecma-international.org/8.0/)的一部分，使异步代码更易于编写和阅读。通过使用它们，异步代码看起来更像是同步代码。具有如下特点：

1. async/await 不能用于普通的回调函数。
2. async/await 与 Promise 一样，是非阻塞的。
3. async/await 使得异步代码看起来像同步代码。

async/await 也存在问题：await 关键字会阻塞其后的代码，直到 Promise 完成，就像执行同步操作一样。它可以允许其他任务在此期间继续运行，但自己的代码会被阻塞。解决方案是将 Promise 对象存储在变量中来同时开始，然后等待它们全部执行完毕。具体参照 [fast async await](https://mdn.github.io/learning-area/javascript/asynchronous/async-await/fast-async-await.html)。如果内部的 await 等待的异步任务之间没有依赖关系，且需要获取这些异步操作的结果，可以使用 Promise.allSettled() 同时执行这些任务并获得结果。

##### Web Worker

**Web Worker 为 JavaScript 创造了多线程环境**，允许主线程创建 Worker 线程，将一些任务分配给 Worker 线程运行，处理完后可以通过 postMessage 将结果传递给主线程。优点在于可以在一个单独的线程中执行费时的处理任务，从而允许主线程中的任务（通常是 UI）运行不被阻塞/放慢。

使用 Web Worker 时有以下三点需要注意的地方：

1. **在 Worker 内部无法访问主线程的任何资源**，包括全局变量，页面的 DOM 或者其他资源，因为这是一个完全独立的线程。
2. **Worker 和主线程间的数据传递通过消息机制进行**。使用 postMessage 方法发送消息；使用 onmessage 事件处理函数来响应消息。
3. **Worker 可以创建新的 Worker，新的 Worker 和父页面同源**。Worker 在使用 XMLHttpRequest 进行网络 I/O 时，XMLHttpRequest 的 responseXML 和 channel 属性会返回 null。

Web Worker 主要应用场景：

1. 处理密集型数学计算
2. 大数据集排序
3. 数据处理（压缩，音频分析，图像处理等）
4. 高流量网络通信

#### 「参考资料」

1. [异步 JavaScript](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous)
2. [使用 Web Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)

## 肆，Browser 相关

### 浏览器跨域 🔥🔥🔥

#### 「相关问题」

- 什么是跨域

- 为什么会跨域

- 为什么有跨域限制

- 怎么解决跨域

#### 「回答关键点」

- `同源策略`

- `CORS`

- `反向代理`

- `JSONP`

同源策略(same-origin policy)是浏览器的为了请求安全而做的限制,协议(protocol)+主机(host)+端口(port)不一致则为跨域,后端不受此限制,可以通过 CORS 等方式解决跨域

#### 「知识点深入」

##### 跨域问题来源

跨域是浏览器基于浏览器基于同源策略而做的安全特性--限制非同源页面和当前页面进行交互从而减少页面被攻击的可能
​

需要注意的是：跨域是浏览器的限制，实际请求和相应已经发出
​

##### 判断跨域

![](https://cdn.nlark.com/yuque/0/2022/png/377147/1646011331868-23964b0e-43d0-4785-afa6-cfa7c942ff1d.png#clientId=u6ddb5e62-9bae-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ue4b45eb9&margin=%5Bobject%20Object%5D&originHeight=266&originWidth=1342&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u91717123-9b8e-4b7b-bd1d-e798fda37c5&title=)
协议+主机+端口 不一致即为跨域
​

##### 跨域解决方案

常见的跨域解决方案有 CORS、反向代理（Reverse Proxy）、JSONP 等

#####

###### CORS (Cross-Origin Resource Sharing)

- 只需要后端支持

- 在响应头中添加 Access-Control-Allow-\*

具体实现
​

CORS 实现起来非常方便，只需要增加一些 HTTP 头，让服务器能声明允许的访问来源
​

以 koa 框架举例，添加中间件，直接设置 Access-Control-Allow-Origin 响应头:
​

```javascript
app.use(async (ctx, next) => {
  // Access-Control-Allow-Origin 设置为*其实意义不大，
  // 可以说是形同虚设，
  // 实际应用中，上线前我们会将Access-Control-Allow-Origin 值设为我们目标host
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set(
    'Access-Control-Allow-Headers',
    'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild'
  )
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (ctx.method == 'OPTIONS') {
    ctx.body = 200
  } else {
    await next()
  }
})
```

CORS 将请求分为简单请求（Simple Requests）和需预检请求（Preflighted requests），不同场景有不同的行为：
​

简单请求
​

不会触发预检请求的称为简单请求。当请求满足以下条件时就是一个简单请求：
​

- 请求方法：`GET、HEAD、POST`

- 请求头：`Accept、Accept-Language、Content-Language、Content-Type`​
  - Content-Type 仅支持：`application/x-www-form-urlencoded、multipart/form-data、text/plain`​

需预检请求

当一个请求不满足以上简单请求的条件时，浏览器会自动向服务端发送一个 OPTIONS 请求，通过服务端返回的 Access-Control-Allow-\* 判定请求是否被允许

CORS 引入了以下几个以 `Access-Control-Allow-* `开头：
​

- Access-Control-Allow-Origin 表示允许的来源

- Access-Control-Allow-Methods 表示允许的请求方法

- Access-Control-Allow-Headers 表示允许的请求头

- Access-Control-Allow-Credentials 表示允许携带认证信息

###### 反向代理

- 只需要后端支持

- 依赖同源的服务端对请求做一个转发处理，将跨域请求转换成同源请求

具体实现

在页面同域下配置一套反向代理服务，页面请求同域的服务端，服务端请求上游的实际的服务端，之后将结果返回给前端

常见的开发环境下的跨域配置和生产环境下的 Nginx 跨域配置

1. overrideDevServer Webpack DevSever

```javascript
module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 8084,
    // 启动时自动打开浏览器
    open: true,
    proxy: {
      // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
      '/api': {
        //目标地址，一般是指后台服务器地址
        target: 'http://xxx.xxx.xx.xx:8080',
        //是否跨域
        changeOrigin: true,
        // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
```

通过 axios 发送请求中，配置请求的根路径

```javascript
axios.defaults.baseURL = '/api'
```

2. 通过服务端实现代理请求转发以 express 框架为例

```javascript
var express = require('express')
const proxy = require('http-proxy-middleware')
const app = express()

app.use(express.static(__dirname + '/'))
app.use('/api', proxy({ target: 'http://localhost:4000', changeOrigin: false }))

module.exports = app
```

3. 配置 nginx 实现代理

```javascript
server {
    listen    80;
    # server_name www.xxx.com;
    location / {
        root  /var/www/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
    location /api {
        proxy_pass  http://127.0.0.1:3000;
        proxy_redirect   off;
        proxy_set_header  Host       $host;
        proxy_set_header  X-Real-IP     $remote_addr;
        proxy_set_header  X-Forwarded-For  $proxy_add_x_forwarded_for;
    }
}
```

###### JSONP

- 需要服务端和前端配合实现

- 利用了浏览器加载 JavaScript 资源文件时不受同源策略的限制而实现跨域获取数据

具体实现

1. 浏览器全局注册一个函数

```javascript
window.getMember = (num) => console.log('Member: ' + num)
```

2. 构造一个请求 URL，并将函数名放入参数中

```javascript
https://xxx.org/api/Member?callback=getHZFEMember
```

3. 生成一个 `<script>` 并把 src 设为上一步的请求 URL 并插入到文档中

```html
<script src="https://xxx.org/api/Member?callback=getMember" />
```

4. 服务端构造一个 JavaScript 函数调用表达式并返回，

```javascript
getMember(17)
```

5. 浏览器加载并执行以上代码

```javascript
// 输出

Member: 17
```

###### 非常用方式

1. postMessage

- 即在两个 origin 下分别部署一套页面 A 与 B，

- A 页面通过 iframe 加载 B 页面并监听消息，B 页面发送消息

2. window.name

- 主要是利用 [window.name](http://window.name/) 页面跳转不改变的特性实现跨域，

- 即 iframe 加载一个跨域页面，设置 [window.name](http://window.name/)，跳转到同域页面，可以通过 $('iframe').[contentWindow.name](http://contentwindow.name/) 拿到跨域页面的数据

3. document.domain

- 可将相同一级域名下的子域名页面的 document.domain 设置为一级域名实现跨域

- 可将同域不同端口的 document.domain 设置为同域名实现跨域（端口被置为 null）

#### 「扩展」

1. LocalStorage / SessionStorage 跨域

- LocalStorage 和 SessionStorage 同样受到同源策略的限制

- 而跨域读写的方式也可以使用前文提到的 postMessage

2. 跨域与监控

- 前端项目在统计前端报错监控时会遇到上报的内容只有 Script Error 的问题

- 这个问题也是由同源策略引起

- 在 `<script>` 标签上添加 crossorigin="anonymous" 并且返回的 JS 文件响应头加上 Access-Control-Allow-Origin: \* 即可捕捉到完整的错误堆栈

3. 跨域与图片

- 前端项目在图片处理时可能会遇到图片绘制到 Canvas 上之后却不能读取像素或导出 base64 的问题

- 这个问题也是由同源策略引起

- 解决方式和上文相同，给图片添加 crossorigin="anonymous" 并在返回的图片文件响应头加上 Access-Control-Allow-Origin: \* 即可解决

#### 「参考资料」

- [Cross-Origin Resource Sharing (CORS) - HTTP | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

- [Same-origin policy - Web security | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

### 浏览器的重排重绘 🔥🔥🔥

#### 「相关问题」

- 如何提升页面渲染性能

- 如何减少页面重排重绘

- 哪些行为会引起重排/重绘

#### 「回答关键点」

- `Layout`

- `Paint`

- `渲染性能`

浏览器渲染大致分为四个阶段，在解析完 HTML 依次进入 layout （重排）和 paint （重绘）。节点或者样式的变更以及对布局信息的访问等，都可能导致重排或者重绘；重排和重绘在主线程中进行，者意味着不合理的重排和重绘会导致页面卡顿等性能问题
​

#### 「知识点深入」

##### 重排重绘

浏览器渲染的关键路径
![](https://cdn.nlark.com/yuque/0/2022/png/377147/1646027239782-6cde6a0d-7bc6-48e3-951e-f662e9c65ee8.png#clientId=u6ddb5e62-9bae-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u6d2a3d8e&margin=%5Bobject%20Object%5D&originHeight=270&originWidth=1278&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u8b60c6dc-e4d2-4b15-8d51-89c94b33fa6&title=)

1. Parse HTML：相关引擎解析文档和样式表以及脚本，生成 DOM 和 CSSOM ，最终合成为 Render 树

2. Layout：递归的形式计算 Render 树中每个节点的尺寸大小和在页面中的具体位置

3. Paint：将 Render 树中的节点转换成在屏幕上绘制实际像素（生在多个图层上）

4. Composite：将所有层按照一定顺序合并为一个图层并绘制在屏幕上

DOM 或 CSSOM 被修改，会导致浏览器重复执行上述的步骤。重排和重绘，本质上指的就是触发 Layout 和 Paint 的过程，且重排必定导致重绘
​

##### 触发时机

1. 布局结构或节点内容变化时，会导致重排

- 盒子尺寸和类型（包括外边距、内边框、边框大小、高度和宽度等）

- 定位方案（正常流、浮动和绝对定位）

- 文档树中元素之间的关系（增删改）

- 外部信息（如视口大小等）

- 页面一开始渲染的时候（避免不了）

2. 外观有变化时，会导致重绘

- 相关的样式属性如 `color opacity`

3. 获取布局信息时（需要通过即时计算得到，浏览器为了获取这些值，会进行重排），会导致重排

- 相关的方法属性如 `offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight`

- 还包括 `getComputedStyle`

##### 减少重排重绘

意义

大多数显示器的刷新率是 60FPS（frames per second）。理想情况下，浏览器需要在 1/60 秒内完成渲染阶段并交付一帧。这样用户就会看到一个交互流畅的页面
​

![](https://cdn.nlark.com/yuque/0/2022/png/377147/1646028001619-ed5d9f05-3602-489b-8377-0a95d59eaa7a.png#clientId=u6ddb5e62-9bae-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ud1b408b2&margin=%5Bobject%20Object%5D&originHeight=254&originWidth=1274&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue118842a-ebaa-4945-8772-1635306bef4&title=)
​

在交互阶段，页面更新（一般是通过执行 JavaScript 来触发）通常会触发重排和重绘。为了提升浏览器渲染效率，应当尽可能减少重绘重排（跳过 Layout/Paint 步骤），从而降低浏览器渲染耗费的时间，将内容尽快渲染到屏幕上
​

解决方案
​

1.  对 DOM 进行批量写入和读取（通过虚拟 DOM 或者 DocumentFragment 实现）

2.  避免对样式频繁操作

3.  [减少频繁读取布局信息相关的 API](https://gist.github.com/paulirish/5d52fb081b3570c81e3a#element-apis),使用变量对布局信息（如 clientTop）进行缓存，避免因频繁读取布局信息而触发重排和重绘

```javascript
// bad
const width = elem.getBoundingClientRect().width
const height = elem.getBoundingClientRect().height
const top = elem.getBoundingClientRect().top
const left = elem.getBoundingClientRect().left

// good
const elemClientRect = elem.getBoundingClientRect()
const width = elemClientRect.width
const height = elemClientRect.height
const top = elemClientRect.top
const left = elemClientRect.left
```

#### 「参考资料」

- [https://gist.github.com/paulirish/5d52fb081b3570c81e3a#element-apis](https://gist.github.com/paulirish/5d52fb081b3570c81e3a#element-apis)
- [https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=zh-cn](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction?hl=zh-cn)
- [https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing)
- [https://csstriggers.com/](https://csstriggers.com/)
- [https://segmentfault.com/a/1190000017329980](https://segmentfault.com/a/1190000017329980)

### 浏览器从输入网址到页面展示的过程 🔥🔥🔥

#### 「相关问题」

#### 「回答关键点」

- `URL`

- `DNS`

- `TCP`

- `渲染`

浏览器从输入网址到渲染页面主要分为以下几个过程
​

1. URL 输入

2. DNS 解析

3. 建立 TCP 连接

4. 发送 HTTP / HTTPS 请求（建立 TLS 连接）

5. 服务器响应请求

6. 浏览器解析渲染页面

7. HTTP 请求结束，断开 TCP 连接

#### 「知识点深入」

##### URL 输入

URL（统一资源定位符，Uniform Resource Locator）用于定位互联网上资源，俗称网址;浏览器会对输入的信息进行以下判断：
​

1. 检查输入的内容是否是一个合法的 URL 链接

2. 是，则判断输入的 URL 是否完整。如果不完整，浏览器可能会对域进行猜测，补全前缀或者后缀

3. 否，将输入内容作为搜索条件，使用用户设置的默认搜索引擎来进行搜索

大部分浏览器会从历史记录、书签等地方开始查找我们输入的网址，并给出智能提示
​

##### DNS（Domain Name System）解析

浏览器不能直接通过域名找到对应的服务器 IP 地址，所以需要进行 DNS 解析，查找到对应的 IP 地址进行访问
​

解析域名的过程如下：
​

1. 首先搜索浏览器的 DNS 缓存，缓存中维护一张域名与 IP 地址的对应表

2. 若没有命中，则继续搜索操作系统的 DNS 缓存

3. 若仍然没有命中，则操作系统将域名发送至本地域名服务器，本地域名服务器采用递归查询自己的 DNS 缓存，查找成功则返回结果

4. 若本地域名服务器的 DNS 缓存没有命中，则本地域名服务器向上级域名服务器进行迭代查询

- 首先本地域名服务器向根域名服务器发起请求，根域名服务器返回顶级域名服务器的地址给本地服务器

- 本地域名服务器拿到这个顶级域名服务器的地址后，就向其发起请求，获取权限域名服务器的地址

- 本地域名服务器根据权限域名服务器的地址向其发起请求，最终得到该域名对应的 IP 地址

5. 本地域名服务器将得到的 IP 地址返回给操作系统，同时自己将 IP 地址缓存起来

6. 操作系统将 IP 地址返回给浏览器，同时自己也将 IP 地址缓存起

7. 至此，浏览器就得到了域名对应的 IP 地址，并将 IP 地址缓存起

> 计算机中 DNS 的记录也分成了两种缓存方式：
> ​

> 1. 浏览器缓存：浏览器在获取网站域名的实际 IP 地址后会对其进行缓存，减少网络请求的损耗

> 2. 操作系统缓存：操作系统的缓存其实是用户自己配置的 hosts 文件

> DNS 查询的方式有两种：
> ​

> 1. 递归查询：如果 A 请求 B，那么 B 作为请求的接收者一定要给 A 想要的答案

> 2. 迭代查询：如果接收者 B 没有请求者 A 所需要的准确内容，接收者 B 将告诉请求者 A，如何去获得这个内容，但是自己并不去发出请求

##### 建立 TCP 连接

当浏览器获取到服务器的 IP 地址后，浏览器会用一个随机的端口（1024 < 端口 < 65535）向服务器 80 端口发起 TCP 连接请求（注：HTTP 默认约定 80 端口，HTTPS 为 443 端口）。这个连接请求到达服务端后，通过 TCP 三次握手，建立 TCP 的连接
​

分层模型
​

```javascript
    ----------------------------------
  7|   应用层   |           |   HTTP  |

  6|   表示层   |   应用层   |

  5|   会话层   |           |         |
    ---------------------------------
  4|   传输层   |   传输层   | TCP TLS |
    ---------------------------------
  3|   网络层   |   网络层   |   IP    |
    ---------------------------------
  2|  数据链路层
               |   链路层
  1|   物理层
    --------------------------------
       [OSI]   |   [TCP/IP]
```

TCP 三次握手
​

```javascript
# SYN 是建立连接时的握手信号，TCP 中发送第一个 SYN 包的为客户端，接收的为服务端
# TCP 中，当发送端数据到达接收端时，接收端返回一个已收到消息的通知。这个消息叫做确认应答 ACK


# 假设有客户端A，服务端B。我们要建立可靠的数据传输

      SYN(=j)       // SYN: A 请求建立连接
  A ----------> B
                |
     ACK(=j+1)  |   // ACK: B 确认应答 A 的 SYN
     SYN(=k)    |   // SYN: B 发送一个 SYN
  A <-----------
  |
  |  ACK(=k+1)
   -----------> B   // ACK: A 确认应答 B 的包

```

##### 发送 HTTP / HTTPS 请求（建立 TLS 连接）

当浏览器到 web 服务器的连接建立后，浏览器会发送一个初始的 HTTP GET 请求，请求的内容包括：
​

- 请求行

- 请求头

- 请求主体

常见的请求头和字段
​

- Cache-Control：must-revalidate、no-cache、private（是否需要缓存资源）

- Connection：keep-alive（保持连接）

- Content-Encoding：gzip（web 服务器支持的返回内容压缩编码类型）

- Content-Type：text/html；charset=UTF-8（文件类型和字符编码格式）

- Date：Sun， 21 Sep 2021 06:18:21 GMT（服务器消息发出的时间）

- Transfer-Encoding：chunked（服务器发送的资源的方式是分块发送）

##### 服务器响应请求

服务器收到请求后，就会进行逻辑操作,处理完成之后将发回一个 HTTP 响应报文，内容包括:

- 状态行

- 响应头

- 响应正文

状态码
​

状态码是由 3 位数组成，第一个数字定义了响应的类别，且有五类可能取值
​

- 1xx：指示信息——表示请求已接收，继续处理

- 2xx：成功——表示请求已被成功接收、理解、接受

- 3xx：重定向——要完成请求必须进行更进一步的操作

- 4xx：客户端错误——请求有语法错误或请求无法实现

- 5xx：服务器端错误——服务器未能实现合法的请求

HTTP 响应报文
​

响应报文由四部分组成（响应行 + 响应头 + 空行 + 响应体）
​

- 状态行：HTTP 版本 + 空格 + 状态码 + 空格 + 状态码描述 + 回车符（CR） + 换行符（LF）

- 响应头：字段名 + 冒号 + 值 + 回车符 + 换行符

- 空行：回车符 + 换行符

- 响应体：由用户自定义添加，如 post 的 body 等

##### 浏览器解析渲染页面

当浏览器接收到服务器响应的资源后，首先会对资源进行解析：
​

- 查看响应头的信息，根据不同的指示做对应处理，比如重定向，存储 cookie，解压 gzip，缓存资源等等

- 查看响应头的 Content-Type 的值，根据不同的资源类型采用不同的解析方式

关于页面的渲染过程如下：
​

- 解析 HTML，构建 DOM 树

- 解析 CSS ，生成 CSSOM 树

- 合并 DOM 树和 CSS 规则，生成 render 树

- 布局 render 树（ Layout / reflow ），负责各元素尺寸、位置的计算

- 绘制 render 树（ paint ），绘制页面像素信息

- 浏览器会将各层的信息发送给 GPU，GPU 会将各层合成（ composite ），显示在屏幕上

##### HTTP 请求结束，断开 TCP 连接

现在的页面为了优化请求的耗时，默认都会开启持久连接（keep-alive），那么一个 TCP 连接确切关闭的时机，是这个 tab 标签页关闭的时候。这个关闭的过程就是四次挥手。关闭是一个全双工的过程，发包的顺序是不一定的。一般来说是客户端主动发起的关闭。
​

#### 「参考资料」

### 浏览器渲染机制 🔥🔥🔥

#### 「相关问题」

- 浏览器如何渲染页面
- 有哪些提高浏览器渲染性能的方法

#### 「回答关键点」

- `DOM`
- `CSSOM`
- `单线程`
- `渲染树 render Tree`
- `Compositing`
- `GPU 加速`

一般所有的浏览器都会经过五大步骤:
​

1. PARSE：解析 HTML，构建 DOM 树
1. STYLE：为每个节点计算最终的有效样式
1. LAYOUT：为每个节点计算位置和大小等布局信息
1. PAINT：绘制不同的盒子，为了避免不必要的重绘，将会分成**多个层**进行处理
1. COMPOSITE & RENDER：将上述不同的层合成为一张位图，发送给 GPU，渲染到屏幕上

为了提高浏览器的渲染性能，通常的手段是**保证渲染流程不被阻塞**，**避免不必要的绘制计算和重排重绘**，利用 **GPU 硬件加速**等技术来提高渲染性能
​

#### 「知识点深入」

Chromium 的渲染流程的主要步骤如下图所示：
![](https://cdn.nlark.com/yuque/0/2022/png/377147/1646132352945-815f095a-1c19-48fd-bc3e-e454bf45c30f.png#clientId=u4618f0ee-d419-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ufb88f7cd&margin=%5Bobject%20Object%5D&originHeight=1612&originWidth=2886&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ua5c1b7a1-6d2d-4183-8d09-0364a325051&title=)

##### Parse 阶段：解析 HTML

###### 构建 DOM 树

渲染进程主线程解析 HTML 并构建出结构化的树状数据结构 DOM 树，需要经历以下几个步骤：

1. Conversion（转换）：浏览器从网络或磁盘读取 HTML 文件原始字节，根据指定的文件编码（如 UTF-8）将**字节转换成字符**。
1. Tokenizing（分词）：浏览器根据 HTML 规范将**字符串转换为不同的标记**（如 <html>, <body>）。
1. Lexing（语法分析）：上一步产生的**标记将被转换为对象**，这些对象包含了 HTML 语法的各种信息，如属性、属性值、文本等。
1. DOM construction（DOM 构造）：因为 HTML 标记定义了不同标签之间的关系，上一步产生的对象会链接在一个**树状数据结构**中，以标识父子、兄弟关系

构建 DOM 的流程如下图所示

######

次级资源加载

一个网页通常会使用**多个外部资源**，如图片、JavaScript、CSS、字体等。主线程在解析 DOM 的过程中遇到这些资源后会**一一请求**。为了加速渲染流程，会有一个叫做**预加载扫描器**（preload scanner）线程并发运行。如果 HTML 中存在 img 或 link 之类的内容，则预加载扫描器会查看 HTML parser 生成的标记，并发送请求到浏览器进程的**网络线程**获取这些资源
​

###### JavaScript 可能阻塞解析

当 HTML 解析器发现 script 标签时，会暂停 HTML 的解析，转而开始加载、解析和执行 JavaScript。因为 JS 可能会改变 DOM 的结构。如果不想因 JS 阻塞 HTML 的解析，可以为 script 标签添加 **defer 属性**或将 script **放在 body 结束标签之前**，浏览器会在最后执行 JS 代码，**避免阻塞 DOM 构建**

##### Style 阶段：样式计算

CSS 引擎处理样式的过程分为三个阶段：
​

1. **收集、划分和索引 所有样式 **表中存在的样式规则，CSS 引擎会从 style 标签，css 文件及浏览器代理样式中收集所有的样式规则，并为这些规则建立索引，以方便后续的高效查询。
1. 访问每个元素并找到适用于该元素的所有规则，CSS 引擎遍历 DOM 节点，进行选择器**匹配**，并为匹配的节点执行样式设置。
1. 结合层叠规则和其他信息为节点生成**最终的计算样式**，这些样式的值可以通过 window.getComputedStyle() 获取

在大型网站中，会存在大量的 CSS 规则，如果为每个节点都保存一份样式值，会导致内存消耗过大。作为替代，CSS 引擎通常会创建**共享的样式结构**，计算样式对象一般有指针指向相同的共享结构
​

**附加了计算样式的 DOM 树**，一般被称为 **CSSOM**（CSS Object Model）：
​

CSSOM 和 DOM 是**并行构建**的，构建 CSSOM 不会阻塞 DOM 的构建。但 CSSOM 会阻塞 JS 的执行，因为 JS 可能会操作样式信息。**虽然 CSSOM 不会阻塞 DOM 的构建，但在进入下一阶段之前，必须等待 CSSOM 构建完成。这也是通常所说的 CSSOM 会阻塞渲染**
​

##### Layout 阶段

###### 创建 LayoutObject（RenderObject） 树

有了 DOM 树和 DOM 树中元素的计算样式后，浏览器会根据这些信息合并成一个** layout 树**，收集所有可见的 DOM 节点，以及每个节点的所有样式信息。
​

Layout 树和 DOM 树不一定是一一对应的，为了构建 Layout 树，浏览器主要完成了下列工作：
​

1. 从 DOM 树的根节点开始遍历每个**可见节点**。

- 某些不可见节点（例如 script、head、meta 等），它们不会体现在渲染输出中，会被忽略。
- 某些通过设置 display 为 none 隐藏的节点，在渲染树中也会被忽略。
- 为伪元素创建 LayoutObject。
- 为行内元素创建匿名包含块对应的 LayoutObject。

2. 对于每个可见节点，为其找到**适配的 CSSOM 规则**并应用它们
3. 产出可见节点，包含其内容和计算的样式

###### 布局计算

上一步计算了**可见的节点及其样式**，接下来需要计算它们在设备视口内的确切**位置和大小**，这个过程一般被称为自动**重排**。
​

浏览器的布局计算工作包含以下内容：
​

1. 根据 CSS 盒模型及视觉格式化模型，计算每个元素的各种生成盒的大小和位置。
1. 计算块级元素、行内元素、浮动元素、各种定位元素的大小和位置。
1. 计算文字，滚动区域的大小和位置。
1. LayoutObject 有两种类型：

- 传统的 LayoutObject 节点，会把布局运算的结果重新写回布局树中。
- LayoutNG（Chrome 76 开始启用） 节点的输出是不可变的，会保存在 NGLayoutResult 中，这是一个树状的结构，相比之前的 LayoutObject，少了很大回溯计算，提高了性能。

##### Paint 阶段

Paint 阶段将 LayoutObject 树转换成供合成器使用的高效渲染格式，包括一个包含 display item 列表的 cc::Layers 列表，与该列表与 cc::PropertyTrees 关联。
​

###### 构建 PaintLayer（RenderLayer） 树

构建完成的 LayoutObject 树还不能拿去显示，因为它不包含绘制的顺序（z-index）。同时，也为了考虑一些复杂的情况，如 3D 变换、页面滚动等，浏览器会对上一步的节点进行**分层处理**。这个处理过程被称为**建立层叠上下文**
​

浏览器会根据 [CSS 层叠上下文规范](https://www.w3.org/TR/CSS21/zindex.html)，建立层叠上下文，常见情况如下：
​

1. DOM 树的 Document 节点对应的 RenderView 节点。
1. DOM 树中 Document 节点的子节点，也就是 HTML 节点对应的 RenderBlock 节点。
1. 显式指定 CSS 位置的节点（position 为 absolute 或者 fixed）。
1. 具有透明效果的节点。
1. 具有 CSS 3D 属性的节点。
1. 使用 Canvas 元素或者 Video 元素的节点

浏览器遍历 LayoutObject 树的时候，建立了 **PaintLayer 树**，LayoutObject 与 PaintLayer 也不一定是一一对应的。每个 LayoutObject 要么与自己的 PaintLayer 关联，要么与拥有 PaintLayer 的第一个祖先的 PaintLayer 关联
​

###### 构建 cc::Layer 与 display items

浏览器会继续根据 PaintLayer 树创建 cc::Layer 列表。cc::Layer 是列表状结构，每个 layer 包含了个 DisplayItem 列表，每个 DisplayItem 包含了实际的 paint op 指令。将页面分层，可以让一个图层独立于其他的图层进行变换和光栅化处理。
​

1. 合成更新（Compositing update）

- 依据 PaintLayer 决定分层（GraphicsLayers）
- 这个策略被称为 CompositeBeforePaint，未来会被 CompositeAfterPaint 替代。

2. PrePaint

- PaintInvalidator 进行失效检查，找出需要绘制的 display items。
- 构建 paint property 树，该树能使动画、页面滚动，clip 等变化仅在合成线程运行，提高性能。

3. Paint

- 遍历 LayoutObject 树并创建 display items 列表。
- 为共享同样 property tree 状态的 display items 列表创建 paint chunks 分组。
- 将结果 commit 到 compositor。
- CompositeAfterPaint 将在此时决定分层。
- 将 paint chunks 通过 cc::Layer 列表传递给 compositor。
- 将 property 树转换为 cc::PropertyTrees。

上面的流程中，有两个不同的创建合成层的时机，一个是 paint 之前的 CompositeBeforePaint，该操作在渲染主线程中完成。一个是 paint 之后的 CompositeAfterPaint，后续创建 layer 的操作在 CC（Chromium Compositor）线程中完成
​

##### 合成 Compositing

合成阶段在 CC（Chromium Compositor）线程中进行
​

commit
​

当 Paint 阶段完成后，主线程进入 commit 阶段，将 cc::Layer 中的 layer list 和 property 树更新到 CC 线程的 LayerImpl 中，commit 完成。commit 进行的过程中，主线程被阻塞。
​

###### tiling & raster

raster（光栅化）是将 display item 中的绘制操作**转换为位图**的过程
​

光栅化的主要操作流程如下：
​

1. tiling：将 layer 分成 tiles（图块）。 因为有的 layer 可能很大（如整个文档的滚动根节点），对整层的光栅化操作代价昂贵，且 layer 中有的部分是不可见的，会造成不必要的浪费。
1. tiles 是光栅化的基本单元。光栅化操作是通过光栅线程池处理的。离视口更近的 tiles 具有更高的优先级，将优先处理。
1. 一个 layer 实际上会生成多种分辨率的 tiles。
1. raster 同样也会处理页面引用的图片资源，display items 中的 paint ops 引用了这些压缩数据，raster 会调用合适的解码器来解压这些数据。
1. raster 会通过 Skia 来进行 OpenGL 调用，光栅化数据。
1. 渲染进程是运行在沙箱中的，不能直接进行系统调用。paint ops 通过 IPC（MOJO）传递给 GPU 进程，GPU 进程会执行真实的 OpenGL（为了保证性能，在 Windows 上转为 DirectX）调用。
1. 光栅化的位图结果保存在 GPU 内存中，通常作为 OpenGL 材质对象保存。
1. 双缓冲机制：主线程随时会有 commit 到来，当前的光栅化行为在 pending tree（LayerImpl）上进行，一旦光栅化操作完成，将 pending tree 变为 active tree，后续的 draw 操作在 active tree 上进行

###### draw

**​**

当所有的 tiles 都完成光栅化后，会生成 draw quads（绘制四边形）。每个 draw quads 是包含一个在屏幕特定位置绘制 tile 的命令，该命令同时考虑了所有应用到 layer tree 的变换。每个四边形引用了内存中 tile 的光栅化输出。四边形被包裹在合成帧对象（compositor frame object）中，然后提交（submit）到浏览器进程。
​

###### display compositor（viz，visual 的简称）

viz 位于 GPU 进程中，viz 接收来自浏览器的合成帧，合成帧来自多个渲染进程，以及浏览器自身 UI 的 compositor。
​

合成帧和屏幕上将要绘制的位置关联，该位置叫做 surface。surface 可以嵌套其他 surface，浏览器 UI 的 surface 嵌套了渲染进程的 surface，渲染进程的 surface 嵌套了其他跨域 iframes（同源的 iframe 共享相同的渲染进程） 的 surface。viz 同步传入的帧，并处理嵌套 surfaces 的依赖（surface aggregation）。
最终的显示流程：
​

1. viz 会发出 OpenGL 调用将合成帧中的 quads 发送到 GPU 线程的 backbuffer 中。
1. 在新的模式中，viz 会使用 Skia 代替原始 OpenGL 调用。
1. 在大部分平台上，viz 的输出也是双缓冲结构，draw 首先到达 backbuffer，通过 swapping 操作转换成 frontbuffer 最终显示在屏幕上。

###### 线程对浏览器事件的处理

合成的优点是它在不涉及渲染主线程的情况下完成的。合成器不需要等待样式计算或 JavaScript 执行。只和合成相关的动画被认为是获得流畅性能的最佳选择。同时，合成器还负责处理页面的滚动，滚动的时候，合成器会更新页面的位置，并且更新页面的内容。
​

当一个没有绑定任何事件的页面发生滚动时，合成器可以独立于渲染主线程之外进行合成帧的的创建，保证页面的流程滚动。当页面中的某一区域绑定了 JS 事件处理程序时，CC 线程会将这一区域标记为 Non-Fast Scrollable Region。如果事件来自于该区域之外，则 CC 线程继续合成新的帧，而无需等待主线程。
​

在开发中，我们通常会使用事件委托来简化逻辑，但是这会使整个绑定事件的区域变成 Non-Fast Scrollable Region。为了减轻这种情况对滚动造成的影响，你可以传入 passive: true 选项到事件监听器中。

```javascript
document.body.addEventListener(
  'touchstart',
  (event) => {
    if (event.target === area) {
      event.preventDefault()
    }
  },
  { passive: true }
)
```

##### 浏览器渲染性能的优化

在浏览器渲染流程完成之后，**DOM、CSSOM、LayoutObject、PaintLayer **等**各种树状数据结构**都会保留下来，以便在用户操作、网络请求、JS 执行等事件发生时，重新触发渲染流程
​

1. 减少渲染中的重排重绘

浏览器重新渲染时，可能会从中间的任一步骤开始，直至渲染完成。因此，尽可能的**缩短渲染路径**，就可以获得更好的渲染性能。 当浏览器重新绘制一帧的时候，一般需要经过布局、绘图和合成三个主要阶段。这三个阶段中，计算布局和绘图比较费时间，而合成需要的时间相对少一些
​

以动画为例，如果使用 JS 的定时器来控制动画，可能就需要较多的修改布局和绘图的操作，一般有以下两种方法进行优化：
​

1. 使用合适的网页**分层**技术：如使用多层 canvas，将动画背景，运动主体，次要物体分层，这样每一帧需要变化的就只是一个或部分合成层，而不是整个页面。
1. 使用 CSS Transforms 和 Animations：它可以让浏览器**仅仅使用合成器来合成所有的层**就可以达到动画效果，而不需要重新计算布局，重新绘制图形。[CSS Triggers](https://csstriggers.com/) 中仅触发 Composite 的属性就是最优的选择

1. 优化影响渲染的资源

在浏览器解析 HTML 的过程中，CSS 和 JS 都有可能对页面的渲染造成影响。优化方法包括以下几点：
​

1. 关键 CSS 资源放在头部加载。
1. JS 通常放在页面底部。
1. 为 JS 添加 async 和 defer 属性。
1. body 中尽量不要出现 CSS 和 JS。
1. 为 img 指定宽高，避免图像加载完成后触发重排。
1. 避免使用 table, iframe 等慢元素。原因是 table 会等到它的 dom 树全部生成后再一次性插入页面中；iframe 内资源的下载过程会阻塞父页面静态资源的下载及 css, dom 树的解析

![](https://cdn.nlark.com/yuque/0/2022/svg/377147/1646132963282-3690972f-310b-4f04-a00e-9789b5d00196.svg#clientId=ue2e83fdd-a46d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ud335d383&margin=%5Bobject%20Object%5D&originHeight=73&originWidth=300&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u5037c494-e57c-40eb-b1e1-67dbcd0fdc3&title=)

#### 「参考资料」

1. [浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)
1. [渲染页面：浏览器的工作原理](https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work)
1. [Constructing the Object Model](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model)
1. [Inside a super fast CSS engine](https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/)
1. [Render-tree Construction, Layout, and Paint](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-tree-construction)
1. [Inside look at modern web browser（part 3）](https://developers.google.com/web/updates/2018/09/inside-browser-part3)
1. [Inside look at modern web browser（part 4）](https://developers.google.com/web/updates/2018/09/inside-browser-part4)
1. [DOM](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/core/dom/README.md)
1. [CSS](https://chromium.googlesource.com/chromium/src/+/HEAD/third_party/blink/renderer/core/css/style-calculation.md)
1. [Layout](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/core/layout/README.md)
1. [Paint](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/third_party/blink/renderer/core/paint/README.md#Overview)
1. [how cc works](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/docs/how_cc_works.md)
1. [Life of a Pixel](https://docs.google.com/presentation/d/1boPxbgNrTU0ddsc144rcXayGA_WF53k96imRH8Mp34Y/edit#slide=id.ga884fe665f_64_6)

### 垃圾回收机制 🔥🔥

#### 「相关问题」

- 什么是内存泄漏
- 常见的垃圾回收算法
- 如何排查内存泄漏

#### 「回答关键点」

- `引用计数法`
- `标记清除法`
- `Mark-Compact（标记整理）`
- `Scavenger（清道夫`

GC（Garbage Collection，垃圾回收）是一种**内存自动管理机制**， 垃圾回收器（Garbage Collector）可以自动回收分配给程序的已经不再使用的内存。常见的 GC 算法有**引用计数法**和**标记清除法**等。V8（JavaScript 引擎，提供执行 JavaScript 的运行时环境）的垃圾回收器算法主要由 **Mark-Compact** 和 **Scavenger** 构成
​

#### 「知识点深入」

##### 内存泄漏

内存泄漏是指，应当被回收的对象没有被正常回收，变成常驻老生代的对象，导致内存占用越来越高。内存泄漏会导致应用程序速度变慢、高延时、崩溃等问题
​

##### 内存生命周期

1. 分配：按需分配内存。
1. 使用：读写已分配的内存。
1. 释放：释放不再需要的内存。

##### 内存泄漏常见原因

1. 创建全局变量，且没有手动回收。
1. 事件监听器 / 定时器 / 闭包等未正常清理。
1. 使用 JavaScript 对象来做缓存，且不设置过期策略和对象大小控制。
1. 队列拥塞所带来的消费不及时问题。

##### 标记清除

当变量进入执行环境是，就标记这个变量为“进入环境“。进入环境的变量所占用的内存就不能释放，当变量离开环境时，则将其标记为“离开环境“
​

垃圾回收程序运行的时候，会标记内存中存储的所有变量。然后，它会将所有在上下文中的变量，以及被在上下文中的变量引用的变量的标记去掉；在此之后再被加上标记的变量就是待删除的了，原因是任何在上下文中的变量都访问不到它们了。
​

随后垃圾回收程序做一次内存清理，销毁带标记的所有值并收回它们的内存
​

```javascript
function add(a, b) {
  a++
  var c = a + b
  return c
}

var m = 0,
  n = 19 // 把 m,n,add() 标记为进入环境。
add(m, n) // 把 a, b, c标记为进入环境。
console.log(n) // a,b,c标记为离开环境，等待垃圾回收。
```

##### Reference Counting（引用计数）

Reference Counting 是常见的垃圾回收算法，其核心思路是：将资源（比如对象）的被引用次数保存起来，当被引用次数**为零时释放**。该方法的局限性：当出现**循环引用**时，互相引用的对象不会被回收
​

##### V8 垃圾回收机制

V8 中有两个垃圾收集器。主要的 GC 使用 **Mark-Compact** 垃圾回收算法，从整个堆中收集垃圾。小型 GC 使用 **Scavenger** 垃圾回收算法，收集新生代垃圾。
​

两种不同的算法应对不同的场景：

- 使用 Mark-Compact 算法主要处理**存活周期长**的对象中的不可访问的对象。
- 使用 Scavenger 算法主要处理**存活周期短**的对象中的可访问对象。

因为老生代中占少数的是不可访问对象，新生代中占少数的是可访问对象，所以这两种回收算法配合使用十分高效。
​

###### 分代垃圾收集

在 V8 中，所有的 JavaScript 对象都通过**堆**来分配。V8 将其管理的堆分成两代：新生代和老生代。其中新生代又可细分为两个子代（Nursery、Intermediate）。
​

即新生代中的对象为存活时间较短的对象，老生代中的对象为存活时间较长或常驻内存的对象。

###### Mark-Compact 算法

Mark-Compact 算法可以看作是 Mark-Sweep（标记清除）算法和 Cheney 复制算法的结合。该算法主要分为三个阶段：标记、清除、整理。
![](https://cdn.nlark.com/yuque/0/2022/png/377147/1646134646401-200933a3-2bdc-40c6-b5af-1423ca84f7b4.png#clientId=ue2e83fdd-a46d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u4821db04&margin=%5Bobject%20Object%5D&originHeight=442&originWidth=1150&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u3b012faa-7b6e-4fc2-bbb2-a242f4264e0&title=)

1. 标记（Mark）标记是找所有可访问对象的过程。GC 会从一组已知的对象指针（称为根集，包括执行堆栈和全局对象等）中，进行**递归标记可访问对象**。

2. 清除（Sweep）清除是将不可访问的对象留下的内存空间，添加到空闲链表（free list）的过程。未来为新对象分配内存时，可以从空闲链表中进行再分配

3. 整理（Compact）整理是将可访问对象，往内存一端移动的过程。主要解决标记清除阶段后，内存空间出现较多内存碎片时，可能导致无法分配大对象，而提前触发垃圾回收的问题

###### Scavenger 算法（Minor GC）

V8 对新生代内存空间采用了 Scavenger 算法，该算法使用了 semi-space（半空间） 的设计：将堆一分为二，始终只使用一半的空间：From-Space 为使用空间，To-Space 为空闲空间。
​

![](https://cdn.nlark.com/yuque/0/2022/png/377147/1646134510080-838973da-7df1-4f5c-800b-f1dd52c913cf.png#clientId=ue2e83fdd-a46d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u6331b1a3&margin=%5Bobject%20Object%5D&originHeight=1148&originWidth=2006&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u42849156-22d9-4ce6-8b64-29bd1d74f20&title=)
新生代在 From-Space 中分配对象；在垃圾回收阶段，检查并按需复制 From-Space 中的可访问对象到 To-Space 或老生代，并释放 From-Space 中的不可访问对象占用的内存空间；最后 From-Space 和 To-Space 角色互换
​

#### 「参考资料」

1. [Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
1. [Trash talk: the Orinoco garbage collector](https://v8.dev/blog/trash-talk)

### 浏览器事件循环 🔥🔥🔥

#### 「相关问题」

- 什么是浏览器事件循环
- 浏览器为什么需要事件循环
- Node.js 中的事件循环

#### 「回答关键点」

- `任务队列`
- `异步`
- `非阻塞`

浏览器需要事件循环来**协调**事件、用户操作、脚本执行、渲染、网络请求等。通过事件循环，浏览器可以利用**任务队列**来管理任务，让异步事件**非阻塞**地执行。每个客户端对应的事件循环是相对独立的
​

#### 「知识点深入」

##### 什么是浏览器事件循环

> 在计算机中，Event Loop 是一个程序结构，用于等待和发送消息和事件。 —— 维基百科

Event Loop 可以理解为一个消息分发器，通过接收和分发不同类型的消息，让执行程序的事件调度更加合理
​

**浏览器事件循环是以浏览器为宿主环境实现的事件调度**，操作顺序如下：
​

1. 执行同步代码。
1. 执行一个宏任务（执行栈中没有就从任务队列中获取）。
1. 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中。
1. 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）。
1. 当前宏任务执行完毕，开始检查渲染，然后渲染线程接管进行渲染。
1. 渲染完毕后，JavaScript 线程继续接管，开始下一个循环。

##### 浏览器为什么需要事件循环

![](https://cdn.nlark.com/yuque/0/2022/gif/377147/1646307776543-12c5f102-2710-4024-b5bb-cfa2f0b59fce.gif#clientId=u7115af13-2b9e-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u3ee1873c&margin=%5Bobject%20Object%5D&originHeight=422&originWidth=800&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u05533230-4c23-469c-bc65-a2c0663b624&title=)
**由于 JavaScript 是单线程的，且 JavaScript 主线程和渲染线程互斥**，如果异步操作（如上图提到的 WebAPIs）阻塞 JavaScript 的执行，会造成浏览器假死。而事件循环为浏览器引入了任务队列（task queue），使得异步任务可以非阻塞地进行。
​

浏览器事件循环在处理异步任务时不会一直等待其返回结果，而是将这个事件挂起，继续执行栈中的其他任务。当异步事件返回结果，将它放到任务队列中，被放入任务队列不会立刻执行回调，而是等待当前执行栈中所有任务都执行完毕，主线程处于空闲状态，主线程会去查找任务队列中是否有任务，如果有，取出排在第一位的事件，并把这个事件对应的回调放到执行栈中，执行其中的同步代码。
​

##### 宏任务与微任务

异步任务被分为两类：宏任务（macrotask）与微任务（microtask），两者的执行优先级也有所区别。
​

宏任务主要包含：
​

- script（整体代码）、
- setTimeout、
- setInterval、
- setImmediate、
- I/O、
- UI 交互事件

微任务主要包含：
​

- Promise、
- MutationObserver

在当前执行栈为空的时候，主线程会查看微任务队列是否有事件存在。如果不存在，那么再去宏任务队列中取出一个事件并把对应的回调加入当前执行栈；如果存在，则会依次执行队列中事件对应的回调，直到微任务队列为空，然后去宏任务队列中取出最前面的一个事件，把对应的回调加入当前执行栈。如此反复，进入循环。
​

下面通过一个具体的例子来进行分析：
​

```javascript
Promise.resolve().then(() => {
  // 微任务1
  console.log('Promise1')
  setTimeout(() => {
    // 宏任务2
    console.log('setTimeout2')
  }, 0)
})

setTimeout(() => {
  // 宏任务1
  console.log('setTimeout1')
  Promise.resolve().then(() => {
    // 微任务2
    console.log('Promise2')
  })
}, 0)

// Promise1 => setTimeout1 => Promise2 => setTimeout2
```

#### 「参考资料」

1. [whatwg event loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
1. [wikipedia event loops](https://en.wikipedia.org/wiki/Event_loop)
1. [Node.js event loops](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#what-is-the-event-loop)

### 如何定位内存泄露 🔥

#### 「相关问题」

- 垃圾回收机制

#### 「回答关键点」

- `垃圾回收`
- `DevTools`

内存泄漏是指不再使用的内存，没有被垃圾回收机制回收。当内存泄漏很大或足够频繁时，用户会有所感知：轻则影响应用性能，表现为迟缓卡顿；重则导致应用崩溃，表现为无法正常使用。为了避免内存泄漏带来的不良影响，需要对垃圾回收机制进行了解，掌握内存泄漏分析方法，完善线上相关监控措施。
​

内存泄漏定位和分析一般需要辅助工具，比如 Chrome DevTools。开发者可以通过 DevTools 记录页面活动概况，生成可视化分析结果，从时间轴中直观了解内存泄漏情况；利用 DevTools 获取若干次内存快照，检查内存堆栈变化；以及使用 Chrome 任务管理器，实时监控内存的使用情况。

#### 「知识点深入」

[http://febook.hzfe.org/awesome-interview/book3/browser-memory-leaks](http://febook.hzfe.org/awesome-interview/book3/browser-memory-leaks)
​

#### 「参考资料」

1. [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
1. [Fix memory problems](https://developer.chrome.com/docs/devtools/memory-problems/)

### 前端路由实现 🔥🔥🔥

#### 「相关问题」

- 路由是什么
- 前端路由的实现方式和实现原理
- 前端路由和服务端路由的区别
- 前端路由的优势
- 前端路由的不足

#### 「回答关键点」

- `路由`
- `Hash 路由`
- `History 路由`
- `无刷新`
- `SPA（Single-page application，单页面 Web 应用）`

路由： 通过互联网网络从源地址到目标地址的活动；对于 web 应用路由的实质是 URL 到对应的处理程序的映射

Web 路由既可以由服务端，也可以由前端实现。其中前端路由根据实现方式的不同，可以分为 **Hash 路由** 和 **History 路由**。

前端路由对于服务端路由来说，最显著的特点是页面可以在**无刷新**的情况下进行页面的切换。基于前端路由的这一特点，诞生了一种**无刷新**的单页应用开发模式 **SPA**。SPA 通过前端路由避免了页面的切换打断**用户体验**，让 Web 应用的体验更接近一个桌面应用程序

#### 「知识点深入」

前端路由根据具体实现方式的不同，可以分为 **Hash 路由** 和 **History 路由** 两种，这两种实现方式各有其优势和局限性

##### Hash 路由

一个 URI 的组成如下所示。其中的 fragment 部分就是 Hash 路由所读取的内容

```js
     foo://example.com:8042/over/there?name=ferret#nose
     \_/   \______________/\_________/ \_________/ \__/
      |           |            |            |        |
   scheme     authority       path        query   fragment
      |   _____________________|__
     / \ /                        \
     urn:example:animal:ferret:nose
```

fragment 本质是用来标识次级资源，fragment 有以下特点：

- 修改 fragment 的内容**不会触发网页重载**。
- 修改 fragment 的内容会**改变浏览器的历史记录**。
- 修改 fragment 的内容会**触发浏览器的 onhashchange 事件**。

基于 fragment 的以上特点，可实现基于 Hash 的前端路由。

**实现原理**

```js
/**
 * 解析 hash
 * @param hash
 * @returns
 */
function parseHash(hash) {
  // 去除 # 号
  hash = hash.replace(/^#/, '')

  // 简单解析示例
  const parsed = hash.split('?')

  // 返回 hash 的 path 和 query
  return {
    pathname: parsed[0],
    search: parsed[1],
  }
}

/**
 * 监听 hash 变化
 * @returns
 */
function onHashChange() {
  // 解析 hash
  const { pathname, search } = parseHash(location.hash)

  // 切换页面内容
  switch (pathname) {
    case '/home':
      document.body.innerHTML = `Hello ${search}`
      return
    default:
      return
  }
}

window.addEventListener('hashchange', onHashChange)
```

Hash 路由由于通过**监听 hash 变化实现**，所以有以下优势和不足：

**优点**

1. 兼容性最佳。
2. **无需服务端配置**。

**缺点**

1. **服务端无法获取 hash 部分内容**。
2. **可能和锚点功能冲突**。
3. SEO 不友好。

##### History 路由

Hash 路由是一个相对“Hack”的方式，监听 fragment 的变化来实现路由功能。而 History 路由则是通过**浏览器原生提供的操作 History** 的能力来实现的路由功能。

**实现原理**

History 路由核心主要依赖 **History API** 里的**两个方法**和**一个事件**，其中**两个方法用于操作浏览器的历史记录**，**事件用于监听历史记录的切换**：

**方法**

- history.pushState：将给定的 Data **添加**到当前标签页的**历史记录栈**中。
- history.replaceState：将给定的 Data **更新**到历史记录栈中最新的一条记录中。

**事件**

- popstate：监听历史记录的变化。

```js
/**
 * 监听 history 变化
 * @returns
 */
function onHistoryChange() {
  // 解析 location
  const { pathname, search } = location

  // 根据页面不同执行不同内容
  switch (pathname) {
    case '/home':
      document.body.innerHTML = `Hello ${search.replace(/^\?/, '')}`
      return
    default:
      document.body.innerHTML = `Hello World`
      return
  }
}

/**
 * 页面跳转
 * @returns
 */
function pushState(target) {
  history.pushState(null, '', target)
  onHistoryChange()
}

// 3 秒后路由跳转
setTimeout(() => {
  pushState('/home?name=xxxStudio')
}, 3000)

// 6 秒后返回
setTimeout(() => {
  history.back()
}, 6000)

window.addEventListener('popstate', onHistoryChange)
```

History 路由由于通过 History API 实现，所以有以下优势和不足：

**优点**

1. 服务端可获取完整的链接和参数。
2. 前端监控友好。
3. SEO 相对 Hash 路由友好。

**缺点**

1. 兼容性稍弱。
2. **需要服务端额外配置（各 path 均指向同一个 HTML）**。

##### 前端路由的优缺点

前端路由是前后端分离的开发模式的产物，对比服务端路由，前端路由的实现方式有以下优势和不足：

**优点**

1. **无刷新切换内容，用户体验更佳**。
2. **减轻服务端压力**。

**缺点**

1. 初次加载耗时长。
2. **SEO 效果不佳**。

#### 「参考资料」

1. [Window: hashchange event](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)

### DOM && BOM🔥

#### 「相关问题」

- 什么是 dom？bom？

- DOM 常见的操作有哪些

#### 「回答关键点」

- `DOM`

`DOM(Document Object Model)`， 文档对象模型 (DOM) 是 `HTML` 和 `XML` 文档的编程接口;对文档的结构化的表述;

`BOM(Browser Object Model)` ，浏览器对象模型，提供了独立于内容与浏览器窗口进行交互的对象

DOM 常见操作：增删改查

#### 「知识点深入」

##### DOM 增删改查

```js
// 创建节点

const divEl = document.createElement('div') // 创建一个新元素
const textEl = document.createTextNode('content') // 创建一个文本节点
const fragment = document.createDocumentFragment() // 创建一个文档碎片 - 文档碎片的内容一次性添加到DOM中
const dataAttribute = document.createAttribute('custom') // 创建属性节点，可以是自定义属性
```

```js
// 获取节点

document.getElementById('id属性值') // 返回拥有指定id的对象的引用
document.getElementsByClassName('class属性值') // 返回拥有指定class的对象集合
document.getElementsByTagName('标签名') // 返回拥有指定标签名的对象集合
document.getElementsByName('name属性值') // 返回拥有指定名称的对象结合
document / element.querySelector('CSS选择器') // 仅返回第一个匹配的元素(**静态实例**)
document / element.querySelectorAll('CSS选择器') // 返回所有匹配的元素(**静态实例**)
document.documentElement // 获取页面中的HTML标签
document.body // 获取页面中的BODY标签
document.all[''] // 获取页面中的所有元素节点的对象集合型
```

```js
// 更新节点

p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ' // html
p.innerText = '<script>alert("Hi")</script>' // 文本 同 textContent
p.style.paddingTop = '2em' // 样式
```

```js
// 添加节点

parentElement.innerHTML = 'ABC <span style="color:red">RED</span> XYZ' // html
parentElement.appendChild() // 子节点添加到父节点的最后一个子节点
parentElement.insertBefore(newElement, referenceElement) // 子节点会插入到referenceElement之前
div.setAttribute('class', 'white') // 在指定元素中添加一个属性节点，如果元素中已有该属性改变属性值'第一个参数属性名，第二个参数属性值。
```

```js
// 删除节点

// 拿到待删除节点:
const self = document.getElementById('to-be-removed')
// 拿到父节点:
const parent = self.parentElement
// 删除:
const removed = parent.removeChild(self)
removed === self // true
```

##### BOM

- window
- location
- navigator
- screen
- history

#### 「参考资料」

- https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model

## 伍，网络

### 前端安全 🔥🔥🔥

#### 「相关问题」

- 如何防范 XSS / CSRF 攻击

- 说说 HTTPS 中间人攻击，及其如何防范

#### 「回答关键点」

- `XSS`

- `CSRF`

- `中间人攻击`

XSS（跨站脚本攻击） 是指攻击者利用网站漏洞将代码注入到其他用户浏览器的攻击方式。常见类型有：
​

- 反射型（非持久性）

- 存储型（持久性）

- DOM 型

CSRF（跨站请求伪造） 是指攻击者可以在用户不知情的情况下，窃用其身份在对应的网站进行操作
​

中间人攻击（MITM） 是指攻击者与通讯的两端分别创建独立的联系，在通讯中充当一个中间人角色对数据进行监听、拦截甚至篡改
​

#### 「知识点深入」

##### XSS（跨站脚本攻击）(Cross Site Scripting)

1. 反射型（非持久性）

原理：攻击者通过在 URL 插入恶意代码，其他用户访问该恶意链接时，服务端在 URL 取出恶意代码后拼接至 HTML 中返回给用户浏览器
​

要点：

- 通过 URL 插入恶意代码

- 有服务端参与

- 需要用户访问特定链接

例子：
​

攻击者诱导被害者打开链接 `xx.org?name=<script src="http://a.com/attack.js"/>`。被攻击网站服务器收到请求后，未经处理直接将 URL 的 name 字段直接拼接至前端模板中，并返回数据。被害者在不知情的情况下，执行了攻击者注入的脚本（可以通过这个获取对方的 Cookie 等）
​

2. 存储型（持久性）

原理：攻击者将注入型脚本提交至被攻击网站数据库中，当其他用户浏览器请求数据时，注入脚本从服务器返回并执行
​

要点：

- 恶意代码存储在目标网站服务器上

- 有服务端参与

- 只要用户访问被注入恶意脚本的页面时，就会被攻击

例子：
​

攻击者在目标网站留言板中提交了`<script src="http://a.com/attack.js"/>`。目标网站服务端未经转义存储了恶意代码，前端请求到数据后直接通过 innerHTML 渲染到页面中。其他用户在访问该留言板时，会自动执行攻击者注入脚本
​

3. DOM 型

原理：攻击者通过在 URL 插入恶意代码，客户端脚本取出 URL 中的恶意代码并执行。
​

要点：
​

- 在客户端发生

例子：
​

攻击者诱导被害者打开链接 `xx.org?name=<script src="http://a.com/attack.js"/>`。被攻击网站前端取出 URL 的 name 字段后未经转义直接通过 innerHTML 渲染到页面中。被害者在不知情的情况下，执行了攻击者注入的脚本
​

##### 防范 XSS

- 对于外部传入的内容进行充分转义

- 开启 CSP（Content Security Policy，内容安全策略），规定客户端哪些外部资源可以加载和执行，降低 XSS 风险

- 设置 Cookie httpOnly 属性，禁止 JavaScript 读取 Cookie 防止被窃取

##### CSRF（跨站请求伪造）（Cross-site request forgery）

原理：攻击者诱导受害者进入第三方网站，在第三方网站中向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的身份凭证，达到冒充用户对被攻击的网站执行某项操作的目的
​

要点：
​

- 利用浏览器在发送 HTTP 请求时会自动带上 Cookie 的原理，冒用受害者身份请求

- 攻击一般发生在第三方网站上

- 攻击者只能“冒用”受害者的身份凭证，并不能获取

- 跨站请求有多种方式，常见的有图片 URL、超链接、Form 提交等

##### 防范 CSRF

1. 使用 CSRF Token 验证用户身份

- 原理：服务端生成 CSRF Token （通常存储在 Session 中），用户提交请求时携带上 Token，服务端验证 Token 是否有效

- 优点：能比较有效的防御 CSRF （前提是没有 XSS 漏洞泄露 Token）

- 缺点：大型网站中 Session 存储会增加服务器压力，且若使用分布式集群还需要一个公共存储空间存储 Token，否则可能用户请求到不同服务器上导致用户凭证失效；有一定的工作量

2. 双重 Cookie 验证

- 原理：利用攻击者不能获取到 Cookie 的特点，在 URL 参数或者自定义请求头上带上 Cookie 数据，服务器再验证该数据是否与 Cookie 一致

- 优点：无需使用 Session，不会给服务器压力

3. 设置 Cookie 的 SameSite 属性可以用来限制第三方 Cookie 的使用，可选值有 Strict、Lax、None。

- Strict：完全禁止第三方 Cookie。

- Lax：只允许链接、预加载请求和 GET 表单的场景下发送第三方 Cookie。

- None：关闭 SameSite 属性

4. 设置白名单，仅允许安全域名请求

5. 增加验证码验证

##### 中间人攻击（MITM)

原理：中间人攻击是一种通过各种技术手段入侵两台设备通信的网络攻击方法
​

![](https://cdn.nlark.com/yuque/0/2022/png/377147/1646051302305-93ff5c28-7cf5-46ed-b043-43a7b3c58723.png#clientId=u6ddb5e62-9bae-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u589c7ee3&margin=%5Bobject%20Object%5D&originHeight=422&originWidth=871&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u62ef4055-67a6-4d0b-ab7b-1898f9e31e2&title=)

成功的中间人攻击主要有两个不同的阶段：拦截和解密
​

拦截
​

即攻击者需要用户数据在到达目标设备前拦截并通过攻击者的网络。分为被动攻击和主动攻击。
​

常见的被动攻击（也是最简单）的方法，攻击者向公众提供免费的恶意 WiFi 热点，一旦有受害者连接了该热点，攻击者就能完全了解其所有的在线数据交换。
​

常见的主动攻击有两种：
​

1. ARP 欺骗： 攻击者利用 ARP 的漏洞，通过冒充网关或其他主机，使得到达网关或其他主机的流量通过攻击者主机进行转发

2. DNS 欺骗： 攻击者冒充域名服务器，将受害者查询的 IP 地址转发到攻击者的 IP 地址

解密
​

拦截后，若连接是使用 HTTPS 协议即传递的数据用了 SSL / TLS 加密，这时还需要其他手段去解密用户数据。
​

SSL 劫持（伪造证书）
​

攻击者在 TLS 握手期间拦截到服务器返回的公钥后，将服务器的公钥替换成自己的公钥并返回给客户端，这样攻击者就能用自己的私钥去解密用户数据，也可以用服务器公钥解密服务器数据。
​

因为是伪造的证书，所以客户端在校验证书过程中会提示证书错误，若用户仍选择继续操作，此时中间人便能获取与服务端的通信数据。
​

SSL 剥离
​

攻击者拦截到用户到服务器的请求后，攻击者继续和服务器保持 HTTPS 连接，并与用户降级为不安全的 HTTP 连接。
​

服务器可以通过开启 HSTS（HTTP Strict Transport Security）策略，告知浏览器必须使用 HTTPS 连接。但是有个缺点是用户首次访问时因还未收到 HSTS 响应头而不受保护。
​

##### 中间人攻击防范

对于开发者来说：
​

- 支持 HTTPS

- 开启 HSTS 策略

对于用户来说：
​

- 尽可能使用 HTTPS 链接

- 避免连接不知名的 WiFi 热点

- 不忽略不安全的浏览器通知

- 公共网络不进行涉及敏感信息的交互

- 用可信的第三方 CA 厂商，不下载来源不明的证书

#### 「参考资料」

- [https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)
- [https://developer.mozilla.org/zh-CN/docs/learn/Server-side/First_steps/Website_security](https://developer.mozilla.org/zh-CN/docs/learn/Server-side/First_steps/Website_security)

### HTTP 缓存机制 🔥🔥🔥

#### 「相关问题」

- 了解浏览器的缓存机制吗
- 谈谈 HTTP 缓存
- 为什么要有缓存
- 缓存的优点是什么

#### 「回答关键点」

- `**强缓存**`
- `**协商缓存**`

HTTP 缓存主要分为**强缓存**和**协商缓存**。
​

**强缓存**可以通过 Expires / Cache-Control 控制，命中强缓存时**不会发起网络请求，资源直接从本地获取**，浏览器显示状态码 **200 from cache**。
​

**协商缓存**可以通过 Last-Modified / If-Modified-Since 和 Etag / If-None-Match 控制，开启协商缓存时**向服务器发送的请求会带上缓存标识，若命中协商缓存，服务器返回 304 Not Modified 表示浏览器可以使用本地缓存文件，否则返回 200 OK 正常返回数据**。

#### 「知识点深入」

##### 流程图

第一次
![image.png](https://cdn.nlark.com/yuque/0/2022/png/377147/1646292473876-f861a38a-2f22-42af-9e6b-14d5ca810813.png#clientId=u7115af13-2b9e-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ufa4af8e2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=369&originWidth=411&originalType=url&ratio=1&rotation=0&showTitle=false&size=46555&status=done&style=none&taskId=u361b1552-2b10-456b-84a1-69fc2a242c1&title=)
第一次之后
![image.png](https://cdn.nlark.com/yuque/0/2022/png/377147/1646290522622-8b89005d-57e5-4169-834e-67ea5c0f1e5c.png#clientId=u7115af13-2b9e-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u7db0a5fc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=548&originWidth=583&originalType=url&ratio=1&rotation=0&showTitle=false&size=126220&status=done&style=none&taskId=u763acbe5-71dd-452d-bee7-cf83c74c4be&title=)

##### 强缓存

**Expires**
**​**

- HTTP/1.0 产物。
- 优先级低于 Cache-control: max-age。
- 缺点：使用本地时间判断是否过期，而本地时间是可修改的且并非一定准确的。

Expires 是由服务端返回的资源过期时间（GMT 日期格式/时间戳），若用户本地时间在过期时间前，则不发送请求直接从本地获取资源。
​

**Cache-Control**

- HTTP/1.1 产物。
- 优先级高于 Expires。
- 正确区分 no-cache / no-store 的作用。

Cache-Control 是用于页面缓存的**通用**消息头字段，可以通过指定指令来实现缓存机制。
​

常用的字段有：
​

- **max-age** 设置缓存存储的最大时长，单位秒。
- **s-max-age** 与 max-age 用法一致，不过仅适用于代理服务器。
- **public** 表示响应可被任何对象缓存。
- **private** 表示响应只可被私有用户缓存，不能被代理服务器缓存。
- **no-cache** 强制客户端向服务器发起请求（禁用强缓存，可用协商缓存）。
- **no-store** 禁止一切缓存，包含协商缓存也不可用。
- **must-revalidate** 一旦资源过期，在成功向原始服务器验证之前，缓存不能用该资源响应后续请求。
- **immutable** 表示响应正文不会随时间改变（只要资源不过期就不发送请求）。

值得注意的是，虽然以上常用字段都是响应头的字段，但是 Cache-Control 同时也支持请求头，例如 Cache-Control: max-stale=<seconds> 表明客户端愿意接收一个已经过期但不能超出<seconds>秒的资源。
​

**拓展知识（冷门考点）**
**​**

HTTP/1.0 Pragma
​

- 在 HTTP/1.0 时期用于禁用浏览器缓存 Pragma: no-cache。

缓存位置
​

- 从 Service Worker 中读取缓存（只支持 HTTPS）。
- 从内存读取缓存时 network 显示 memory cache。
- 从硬盘读取缓存时 network 显示 disk cache。
- Push Cache（推送缓存）（HTTP/2.0）。
- 优先级 Service Worker > memory cache > disk cache > Push Cache。

最佳实践：资源尽可能命中强缓存，且在资源文件更新时保证用户使用到最新的资源文件
​

- 强缓存只会命中相同命名的资源文件。
- 在资源文件上加 hash 标识（webpack 可在打包时在文件名上带上）。
- 通过更新资源文件名来强制更新命中强缓存的资源。

##### 协商缓存

**ETag / If-None-Match**
**​**

- 通过唯一标识来验证缓存。
- 优先级高于 Last-Modified / If-Modified-Since。

如果资源请求的响应头里含有 ETag，客户端可以在后续的请求的头中带上 If-None-Match 头来验证缓存。若服务器判断资源标识一致，则返回 304 状态码告知浏览器可从本地读取缓存。
​

唯一标识内容是由服务端生成算法决定的，可以是资源内容生成的哈希值，也可以是最后修改时间戳的哈希值。所以 Etag 标识改变并不代表资源文件改变，反之亦然。
​

**Last-Modified / If-Modified-Since**
**​**

- 通过资源的最后修改时间来验证缓存。
- 优先级低于 ETag / If-None-Match。
- 缺点：只能精确到秒，若 1s 内多次修改资源 Last-Modified 不会变化。

如果资源请求的响应头里含有 Last-Modified，客户端可以在后续的请求的头中带上 If-Modified-Since 头来验证缓存。若服务器判断资源最后修改时间一致，则返回 304 状态码告知浏览器可从本地读取缓存。
​

** 拓展知识（冷门考点）**
**​**

- ETag 在标识前面加 W/ 前缀表示用弱比较算法（If-None-Match 本身就只用弱比较算法）。
- ETag 还可以配合 If-Match 检测当前请求是否为最新版本，若资源不匹配返回状态码 412 错误（If-Match 不加 W/ 时使用强比较算法）。

##### 缓存的优缺点

**优点**

- 节省了不必要的数据传输，节省带宽。
- 减少服务端的负担，提高网站性能。
- 降低网络延迟，加快页面响应速度，增强用户体验。

**缺点**
**​**

- 不恰当的缓存设置可能会导致资源更新不及时，导致用户获取信息滞后。

#### 「参考资料」

1. [HTTP Caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)

### HTTP/2 和 HTTP/1.1 的对比 🔥🔥🔥

#### 「相关问题」

- 了解 HTTP/2 吗
- HTTP/1.0、HTTP/1.1 和 HTTP/2 的区别

#### 「回答关键点」

- `队头阻塞`

- `持久连接`

- `二进制分帧层`

- `多路复用`

- `服务端推送`

**HTTP/1.1 相较 HTTP/1.0 的改进和优化：**

- 持久连接
- HTTP 管道化
- 分块编码传输
- 新增 Host 头处理
- 更多缓存处理
- 新增更多状态码
- 断点续传、并行下载

**HTTP/1.1 的缺点：**

- 队头阻塞（Head-of-line blocking）
- 头部冗余
- TCP 连接数限制

**HTTP/2 的优点：**

- 二进制分帧层
- 多路复用
- Header 压缩
- 服务端推送

#### 「知识点深入」

##### HTTP/1.1

##### 相较 HTTP/1.0 的改进和优化

HTTP/1.1 相比于 HTTP/1.0 的改进和优化主要包含：**持久连接、HTTP 管道化请求、分块编码传输、新增 host 头字段、缓存支持、更多状态码等**

**持久连接**

在 HTTP/1.0 时期，每进行一次 HTTP 通信，都需要经过 TCP 三次握手建立连接。若一个页面引用了多个资源文件，就会极大地增加服务器负担，拉长请求时间，降低用户体验。

HTTP/1.1 中增加了持久连接，可以在一次 TCP 连接中发送和接收多个 HTTP 请求/响应。只要浏览器和服务器没有明确断开连接，那么该 TCP 连接会一直保持下去。

持久连接在 HTTP/1.1 中默认开启（请求头中带有 **Connection: keep-alive**），若不需要开启持久连接，可以在请求头中加上 Connection: close。

**HTTP 管道化**

HTTP 管道化是指将多个 HTTP 请求同时发送给服务器的技术，但是响应必须按照请求发出的顺序依次返回。

但是由于 HTTP 管道化仍存在诸多问题：

1. 第一个响应慢仍会阻塞后续响应
2. 服务器为了保证能按序返回需要缓存提前完成的响应而占用更多资源
3. 需要客户端 、代理和服务器都支持管道化

所以目前大部分主流浏览器默认关闭 HTTP 管线化功能。

**分块编码传输**

在 HTTP/1.1 协议里，允许在响应头中指定 Transfer-Encoding: chunked 标识当前为分块编码传输，可以将内容实体分装成一个个块进行传输。

**新增 Host 头处理**

在 HTTP/1.0 中认为每台服务器都绑定一个唯一的 IP 地址，因此一台服务器也无法搭建多个 Web 站点。

在 HTTP/1.1 中新增了 host 字段，可以指定请求将要发送到的服务器主机名和端口号。

**断点续传、并行下载**

在 HTTP/1.1 中，新增了请求头字段 Range 和响应头字段 Content-Range。

前者是用来告知服务器应该返回文件的哪一部分，后者则是用来表示返回的数据片段在整个文件中的位置，可以借助这两个字段实现断点续传和并行下载。

##### HTTP/1.1 的缺点

**队头阻塞**

虽然在 HTTP1.1 中增加了持久连接，能在一次 TCP 连接中发送和接收多个 HTTP 请求/响应，但是在一个管道中同一时刻只能处理一个请求，所以如果上一个请求未完成，后续的请求都会被阻塞。

**头部冗余**

HTTP 请求每次都会带上请求头，若此时 cookie 也携带大量数据时，就会使得请求头部变得臃肿。

**TCP 连接数限制**

浏览器对于同一个域名，只允许同时存在若干个 TCP 连接（根据浏览器内核有所差异），若超过浏览器最大连接数限制，后续请求就会被阻塞

##### HTTP/2

##### HTTP/2 的优点

**二进制分帧层**

在 HTTP/1.x 中传输数据使用的是**纯文本**形式的报文，需要不断地读入字节直到遇到分隔符为止。而 HTTP/2 则是采用**二进制编码**，将请求和响应数据分割为一个或多个的体积小的帧。

**多路复用**

HTTP/2 允许在单个 TCP 连接上**并行**地处理多个请求和响应，真正解决了 HTTP/1.1 的队头阻塞和 TCP 连接数限制问题。

**Header 压缩**

使用 HPACK 算法来压缩头部内容，包体积缩小，在网络上传输变快。

**服务端推送**

允许服务端主动向浏览器推送额外的资源，不再是完全被动地响应请求。例如客户端请求 HTML 文件时，服务端可以同时将 JS 和 CSS 文件发送给客户端。

#### 「参考资料」

- [HPACK: Header Compression for HTTP/2](https://httpwg.org/specs/rfc7541.html)

## 陆，前端工程化

### Webpack 工作原理 🔥🔥🔥

#### 「相关问题」

- webpack 工作流程

- webpack 工作流程是怎样的

- webpack 在不同阶段做了什么事情

#### 「回答关键点」

- `模块(化)`

- `打包`

webpack 是一种模块打包工具,可以将各类资源(js,css,图片,字体等-一切皆可打包)转译组合为 JS 格式 的 bundle 文件
​

##### 基本概念

- Entry：入口，Webpack 执行构建的第一步将从 Entry 开始，可抽象成输入

- Module：模块，在 Webpack 里一切皆模块，一个模块对应着一个文件。Webpack 会从配置的 Entry 开始递归找出所有依赖的模块

- Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割

- Loader：模块转换器，用于把模块原内容按照需求转换成新内容

- Plugin：扩展插件，在 Webpack 构建流程中的特定时机会广播出对应的事件，插件可以监听这些事件的发生，在特定时机做对应的事情

##### 核心任务

完成内容转化和资源合并,可以分为以下三大阶段

1. 初始化阶段

- 读取与合并配置参数

- 实例化 Compiler

- 加载 Plugin

2. 编译阶段

- 从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容

- 再找到该 Module 依赖的 Module，递归地进行编译处理

3. 输出阶段

- 对编译后的 Module 组合成 Chunk

- 把 Chunk 转换成文件，输出到文件系统

![image.png](https://cdn.nlark.com/yuque/0/2022/png/377147/1646013899730-aabdc04d-166c-40e2-9a05-5aeae0838073.png#clientId=u6ddb5e62-9bae-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u9db45715&margin=%5Bobject%20Object%5D&name=image.png&originHeight=415&originWidth=339&originalType=url&ratio=1&rotation=0&showTitle=false&size=13704&status=done&style=none&taskId=ue504f383-3b23-4795-9282-cbe8bc41f7f&title=)

#### 「知识点深入」

##### 初始化阶段

1. 读取与合并配置参数

webpack 将 webpack.config.js 中的各个配置项拷贝到 options 对象中，并加载用户配置的 plugins
​

2. 实例化 Compiler 编译对象

Compiler 掌控者 webpack 生命周期，不执行具体的任务，只是进行一些调度工作；继承自 Tapable，初始化时定义了很多钩子函数

```javascript
class Compiler extends Tapable {
  constructor(context) {
    super();
    this.hooks = {
      beforeCompile: new AsyncSeriesHook(["params"]),
      compile: new SyncHook(["params"]),
      afterCompile: new AsyncSeriesHook(["compilation"]),
      make: new AsyncParallelHook(["compilation"]),
      entryOption: new SyncBailHook(["context", "entry"])
      // 定义了很多不同类型的钩子
    };
    // ...
  }
}

function webpack(options) {
  var compiler = new Compiler();
  ...// 检查options,若watch字段为true,则开启watch线程
  return compiler;
}
```

3. 加载 Plugin

依次调用插件的 apply 方法，让插件可以监听后续的所有事件节点。同时给插件传入 compiler 实例的引用，以方便插件通过 compiler 调用 Webpack 提供的 API
​

##### 编译阶段

实例化 Compiler 编译对象后会调用的 run 来真正启动 webpack 编译构建流程,生命周期如下
​

1. run / watch-run

启动一次新的编译, watch-run 和 run 类似，区别在于它是在监听模式下启动的编译，在这个事件中可以获取到是哪些文件发生了变化导致重新启动一次新的编译
​

2. compile / compilation

compile 事件是为了告诉插件一次新的编译将要启动，同时会给插件带上 Compiler 对象
​

当 Webpack 以开发模式运行时，每当检测到文件变化，一次新的 Compilation 将被创建。一个 Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。Compilation 对象也提供了很多事件回调供插件做扩展
​

Compiler 和 Compilation 的含义如下
​

- Compiler 对象包含了 Webpack 环境所有的的配置信息，包含 options，loaders，plugins 这些信息，这个对象在 Webpack 启动时候被实例化，它是全局唯一的，可以简单地把它理解为 Webpack 实例

- Compilation 对象包含了当前的模块资源、编译生成资源、变化的文件等。当 Webpack 以开发模式运行时，每当检测到一个文件变化，一次新的 Compilation 将被创建。Compilation 对象也提供了很多事件回调供插件做扩展。通过 Compilation 也能读取到 Compiler 对象

Compiler 和 Compilation 的区别在于：Compiler 代表了整个 Webpack 从启动到关闭的生命周期，而 Compilation 只是代表了一次新的编译
​

3. make

一个新的 Compilation 创建完毕，即将从 Entry 开始读取文件，根据文件类型和配置的 Loader 对文件进行编译，编译完后再找出该文件依赖的文件，递归的编译和解析
​

4. [Compilation - build-module]

使用对应的 Loader 去转换一个模块

5. [Compilation - normal-module-loader]

在用 Loader 对一个模块转换完后，使用 acorn 解析转换后的内容，输出对应的抽象语法树（AST），以方便 Webpack 后面对代码的分析
​

6. [Compilation - program]

从配置的入口模块开始，分析其 AST，当遇到 require 等导入其它模块语句时，便将其加入到依赖的模块列表，同时对新找出的依赖模块递归分析，最终搞清所有模块的依赖关系
​

7. [Compilation - seal]

所有模块及其依赖的模块都通过 Loader 转换完成后，根据依赖关系开始生成 Chunk

##### 输出阶段

1. emit

确定好要输出哪些文件后，执行文件输出，可以在这里获取和修改输出内容
​

#### 「参考资料」

- [5-1 工作原理概括 · 深入浅出 Webpack (wuhaolin.cn)](http://webpack.wuhaolin.cn/5%E5%8E%9F%E7%90%86/5-1%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86%E6%A6%82%E6%8B%AC.html)

### 前端模块化规范 🔥🔥🔥

#### 「相关问题」

- JavaScript 主要有哪几种模块化规范

- AMD / CMD 有什么异同

- ESM 是什么

- 模块化解决了什么问题/痛点

#### 「回答关键点」

- `CommonJS`
- `AMD`
- `CMD`
- `UMD`
- `ESM`

1. [CommonJS](https://nodejs.org/api/modules.html#modules_modules_commonjs_modules): 主要是 Node.js 使用，通过 require 同步加载模块，exports 导出内容

2. [AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition): 主要是浏览器端使用，通过 require 异步加载模块，通过 define 定义模块和依赖，推崇依赖前置

3. [CMD](https://github.com/seajs/seajs/issues/242): 和 AMD 比较类似，主要是浏览器端使用，通过 require 异步加载模块，exports 导出内容，推崇依赖就近

4. [UMD](https://github.com/umdjs/umd/): 通用模块规范，是 CommonJS、AMD 两个规范的大融合，是跨平台的解决方案

5. ESM: 官方模块化规范，现代浏览器原生支持，通过 import 异步加载模块，export 导出内容

#### 「知识点深入」

##### 为什么需要模块化和模块化规范

1. 模块化可以解决代码之间的变量、函数、对象等命名的冲突/污染问题，良好的模块化设计可以降低代码之间的耦合关系，提高代码的可维护性、可扩展性以及复用性

2. 模块化规范的作用是为了规范 JavaScript 模块的定义和加载机制，以统一的方式导出和加载模块，降低学习使用成本，提高开发效率

##### CommonJS

CommonJS 主要是 Node.js 使用，通过 require 同步加载模块，exports 导出内容。在 CommonJS 规范下，每一个 JS 文件都是独立的模块，每个模块都有独立的作用域，模块里的本地变量都是私有的
​

使用场景
​

CommonJS 主要在服务端（如：Node.js）使用，也可通过打包工具打包之后在浏览器端使用
​

加载方式
​

CommonJS 通过同步的方式加载模块，首次加载会缓存结果，后续加载则是直接读取缓存结果
​

优缺点
​

优点

- 简单易用

- 可以在任意位置 require 模块

- 支持循环依赖

缺点

- 同步的加载方式不适用于浏览器端

- 浏览器端使用需要打包

- 难以支持模块静态分析

##### AMD (Asynchronous Module Definition)

AMD，即异步模块定义。AMD 定义了一套 JavaScript 模块依赖异步加载标准，用来解决浏览器端模块加载的问题。AMD 主要是浏览器端使用，通过 define 定义模块和依赖，require 异步加载模块，推崇依赖前置
​

```javascript
// foo.js
define('foo', [], function () {
  const member = 17
  const getMember = () => {
    return `member: ${member}`
  }

  return {
    getMember,
  }
})

// index.js
require(['foo'], function (foo) {
  // 依赖前置
  console.log(foo.getMember()) // member: 17
})
```

使用场景
​

AMD 主要在浏览器端中使用，通过符合 AMD 标准的 JavaScript 库（如：RequireJs）加载模块
​

加载方式
​

AMD 通过异步的方式加载模块，每加载一个模块实际就是加载对应的 JS 文件
​

优缺点
​

优点

- 依赖异步加载，更快的启动速度

- 支持循环依赖

- 支持插件

缺点

- 语法相对复杂

- 依赖加载器

- 难以支持模块静态分析

具体实现
​

[https://requirejs.org/](https://requirejs.org/)

##### CMD (Common Module Definition)

CMD，即通用模块定义。CMD 定义了一套 JavaScript 模块依赖异步加载标准，用来解决浏览器端模块加载的问题。CMD 主要是浏览器端使用，通过 define 定义模块和依赖，require 异步加载模块，推崇依赖就近
​

```javascript
// foo.js
define('foo', [], function () {
  const member = 17
  const getMember = () => {
    return `member: ${member}`
  }

  exports.getMember = getMember
})

// index.js
define(function (require, exports) {
  const foo = require('foo') // 依赖就近
  console.log(foo.getMember()) // member: 17
})
```

使用场景
​

CMD 主要在浏览器端中使用，通过符合 CMD 标准的 JavaScript 库（如 sea.js）加载模块。
​

加载方式
​

CMD 通过异步的方式加载模块，每加载一个模块实际就是加载对应的 JS 文件。
​

优缺点
​

优点

- 依赖异步加载，更快的启动速度

- 支持循环依赖

- 依赖就近

- 与 CommonJS 保持很大的兼容性

缺点

- 语法相对复杂

- 依赖加载器

- 难以支持模块静态分析

具体实现
​

[https://github.com/seajs/seajs](https://github.com/seajs/seajs)
​

##### UMD (Universal Module Definition)

UMD，即通用模块定义。UMD 主要为了解决 CommonJS 和 AMD 规范下的代码不通用的问题，同时还支持将模块挂载到全局，是跨平台的解决方案
​

使用场景
​

UMD 可同时在服务器端和浏览器端使用。
​

加载方式
​

UMD 加载模块的方式取决于所处的环境，Node.js 同步加载，浏览器端异步加载。
​

优缺点
​

优点
​

- 跨平台兼容

缺点
​

- 代码量稍大

##### ESM (ECMAScript Module)

ESM，即 ESModule、ECMAScript Module。官方模块化规范，现代浏览器原生支持，通过 import 加载模块，export 导出内容
​

使用场景
​

ESM 在支持的浏览器环境下可以直接使用，在不支持的端需要编译/打包后使用。
​

加载方式
​

ESM 加载模块的方式同样取决于所处的环境，Node.js 同步加载，浏览器端异步加载。
​

优缺点
​

优点

- 支持同步/异步加载

- 语法简单

- 支持模块静态分析

- 支持循环引用

缺点
​

- 兼容性不佳

#### 「扩展」

##### 静态分析

在运行代码之前就可判断出代码内有哪些代码使用到了，哪些没有使用到
​

[https://zh.wikipedia.org/wiki/%E9%9D%9C%E6%85%8B%E7%A8%8B%E5%BA%8F%E5%88%86%E6%9E%90](https://zh.wikipedia.org/wiki/%E9%9D%9C%E6%85%8B%E7%A8%8B%E5%BA%8F%E5%88%86%E6%9E%90)
​

##### Tree Shaking

简单来说，Tree Shaking 是一种依赖 ESM 模块静态分析实现的功能，它可以在编译时安全的移除代码中未使用的部分（webpack 5 对 CommonJS 也进行了支持）
​

#### 「参考资料」

- [https://nodejs.org/api/modules.html#modules_modules_commonjs_modules](https://nodejs.org/api/modules.html#modules_modules_commonjs_modules)
- [https://en.wikipedia.org/wiki/Asynchronous_module_definition](https://en.wikipedia.org/wiki/Asynchronous_module_definition)
- [https://github.com/seajs/seajs/issues/242](https://github.com/seajs/seajs/issues/242)
- [https://github.com/umdjs/umd/](https://github.com/umdjs/umd/)
- [https://zh.wikipedia.org/wiki/%E9%9D%9C%E6%85%8B%E7%A8%8B%E5%BA%8F%E5%88%86%E6%9E%90](https://zh.wikipedia.org/wiki/%E9%9D%9C%E6%85%8B%E7%A8%8B%E5%BA%8F%E5%88%86%E6%9E%90)
- [https://tc39.es/ecma262/#sec-modules](https://tc39.es/ecma262/#sec-modules)

### Babel 的作用和原理 🔥🔥🔥

#### 「相关问题」

- Babel 是什么
- Babel 有什么用
- 压缩代码如何实现

「回答关键点」

- `编译器`
- `AST`
- `插件系统`

Babel 是 **JavaScript 编译器**：他能让开发者在开发过程中，直接使用各类方言（如 TS、Flow、JSX）或新的语法特性，而不需要考虑运行环境，因为 Babel 可以做到按需转换为低版本支持的代码；Babel 内部原理是将 JS 代码转换为 **AST**，对 AST 应用各种插件进行处理，最终输出编译后的 JS 代码。
​

#### 「知识点深入」

##### AST 抽象语法树

**简单定义**：以树的形式来表现编程语言的语法结构。
​

利用在线 [playground](https://astexplorer.net/) 调试，可以对 AST 有个直观感受：生成的树有多个节点，节点有不同的类型，不同类型节点有不同的属性。
​

AST 是源代码的高效表示，能便捷的表示大多数编程语言的结构。适用于做代码分析或转换等需求。之所以用树来进行分析或转换，是因为树能使得程序中的每一节点恰好被访问一次（前序或后序遍历）
​

##### Babel 编译流程

1. **解析阶段**：Babel 默认使用 **@babel/parser** 将代码转换为 AST。解析一般分为两个阶段：词法分析和语法分析

   - **词法分析**：对输入的字符序列做标记化(tokenization)操作。
   - **语法分析**：处理标记与标记之间的关系，最终形成一颗完整的 AST 结构。

2. **转换阶段**：Babel 使用 **@babel/traverse** 提供的方法对 AST 进行深度优先遍历，调用插件对关注节点的处理函数，按需对 AST 节点进行增删改操作

3. **生成阶段**：Babel 默认使用 **@babel/generator** 将上一阶段处理后的 AST 转换为代码字符串

##### Babel 插件系统

Babel 的核心模块 @babel/core，@babel/parser，@babel/traverse 和 @babel/generator 提供了完整的编译流程。而具体的转换逻辑需要插件来完成。
​

在使用 Babel 时，我们可通过配置文件指定 plugin 和 preset。而 preset 可以是 plugin 和 preset 以及其他配置的集合。Babel 会**递归**读取 preset，最终获取一个大的 plugins 数组，用于后续使用。
​

**常见 presets**

- @babel/preset-env
- @babel/preset-typescript
- @babel/preset-react
- @babel/preset-flow

最常见的 @babel/preset-env 预设，包含了[一组](https://github.com/babel/babel/blob/master/packages/babel-compat-data/data/plugins.json)最新浏览器已支持的 ES 语法特性，并且可以通过配置目标运行环境范围，自动按需引入插件。
​

##### 编写 Babel 插件

Babel 插件的写法是借助**访问者模式**（Visitor Pattern）对关注的节点定义处理函数。参考一个简单 Babel 插件例子：

```javascript
module.exports = function () {
  return {
    pre() {},
    // 在 visitor 下挂载各种感兴趣的节点类型的监听方法
    visitor: {
      /**
       * 对 Identify 类型的节点进行处理
       * @param {NodePath} path
       */
      Identifier(path) {
        path.node.name = path.node.name.toUpperCase()
      },
    },
    post() {},
  }
}
```

使用该 Babel 插件的效果如下：

```javascript
// input

// index.js
function foo() {}

// .babelrc
{
  "plugins": ["babel-plugin-yourpluginname"]
}

// output
function HZFE() {}
```

##### 深入 Babel 转换阶段

在转换阶段，Babel 的相关方法会获得一个插件数组变量，用于后续的操作。插件结构可参考以下接口。

```javascript
interface Plugin {
  key: string | undefined | null;
  post: Function | void;
  pre: Function | void;
  visitor: Object;
  parserOverride: Function | void;
  generatorOverride: Function | void;
  // ...
}
```

**转换阶段**，Babel 会按以下顺序执行。详细逻辑可查看[源码](https://github.com/babel/babel/blob/a647b9ea6bdd510f0d80b58dbea66828016ffe00/packages/babel-core/src/transformation/index.ts#L76)：
​

1. 执行所有插件的 pre 方法。
1. 按需执行 visitor 中的方法。
1. 执行所有插件的 post 方法。

一般来说，写 Babel 插件主要使用到的是 visitor 对象，这个 visitor 对象中会书写对于关注的 AST 节点的处理逻辑。而上面执行顺序中的第二步所指的 visitor 对象，是整合自各插件的 visitor，最终形成一个大的 visitor 对象，大致的数据结构可参考以下接口：
​

```javascript
// 书写插件时的 visitor 结构
interface VisitorInPlugin {
  [ASTNodeTypeName: string]:
    | Function
    | {
        enter?: Function,
        exit?: Function,
      };
}

// babel 最终整合的 visitor 结构
interface VisitorInTransform {
  [ASTNodeTypeName: string]: {
    // 不同插件对相同节点的处理会合并为数组
    enter?: Function[],
    exit?: Function[],
  };
}
```

在对 AST 进行**深度优先遍历**的过程中，会创建 TraversalContext 对象来把控对 NodePath 节点的访问，访问时调用对节点所定义的处理方法，从而实现按需执行 visitor 中的方法。详细实现请看 [babel-traverse](https://github.com/babel/babel/tree/bc1b9537b00499f462aa3ac0d49e30314a66f413/packages/babel-traverse) 中的源码。

#### 「参考资料」

1. [AST](https://en.wikipedia.org/wiki/Abstract_syntax_tree)
1. [Babel-handbook](https://github.com/jamiebuilds/babel-handbook)
1. [estree](https://github.com/estree/estree)
1. [访问者模式](https://en.wikipedia.org/wiki/Visitor_pattern)

### 谈下 webpack loader 的机制 🔥🔥🔥

#### 「相关问题」

- webpack loader 是如何工作的
- 如何编写 webpack loader

#### 「回答关键点」

- `转换`
- `生命周期`
- `chunk`

webpack 本身只能处理 JavaScript 和 JSON 文件，而 loader 为 webpack 添加了处理其他类型文件的能力。loader 将其他类型的文件转换成有效的 webpack modules（如 ESmodule、CommonJS、AMD），webpack 能消费这些模块，并将其添加到依赖关系图中

loader 本质上是一个函数，该函数对接收到的内容进行转换，返回转换后的结果。

常见的 loader 有：

- raw-loader：加载文件原始内容。
- file-loader：将引用文件输出到目标文件夹中，在代码中通过相对路径引用输出的文件。
- url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式将文件内容注入到代码中。
- babel-loader：将 ES 较新的语法转换为浏览器可以兼容的语法。
- style-loader：将 CSS 代码注入到 JavaScript 中，通过 DOM 操作加载 CSS。
- css-loader：加载 CSS，支持模块化、压缩、文件导入等特性。

#### 「知识点深入」

##### 编写 loader

由于 Webpack 是运行在 Node.js 之上的，一个 Loader 其实就是一个 Node.js 模块（本质是一个函数），这个模块需要导出一个函数。这个导出的函数的工作就是：**获得处理前的原内容，对原内容执行处理后，返回处理后的内容**

一个最简单的 Loader 的源码如下：

```js
module.exports = function (source) {
  // source 为 compiler 传递给 Loader 的一个文件的原内容
  // 该函数需要返回处理后的内容，这里简单起见，直接把原内容返回了，相当于该 Loader 没有做任何转换
  return source
}
```

###### **获得 Loader 的 options**

用户配置

```js
// webpack.conifg.js
module.exports = {
  module: {
    rules: [
      {
        // 增加对 SCSS 文件的支持
        test: /\.scss$/,
        // SCSS 文件的处理顺序为先 sass-loader 再 css-loader 再 style-loader
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            // 给 css-loader 传入配置项
            options: {
              minimize: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
}
```

上面给 css-loader 传了 options 参数。如何在自己编写的 Loader 中获取到用户传入的 options 呢？需要这样做：

```js
const loaderUtils = require('loader-utils')
module.exports = function (source) {
  // 获取到用户给当前 Loader 传入的 options
  const options = loaderUtils.getOptions(this)
  return source
}
```

###### **返回其它结果**

有些场景下除了需要返回原内容的处理结果外，还需要返回代码对应的 source map(例如以用 babel-loader 转换 ES6 代码为例)

```js
module.exports = function (source) {
  // 通过 this.callback 告诉 Webpack 返回的结果
  this.callback(null, source, sourceMaps)
  // 当你使用 this.callback 返回内容时，该 Loader 必须返回 undefined，
  // 以让 Webpack 知道该 Loader 返回的结果在 this.callback 中，而不是 return 中
  return
}
```

其中的 `this.callback` 是 Webpack 给 Loader 注入的 API，以方便 Loader 和 Webpack 之间通信。 `this.callback` 的详细使用方法如下：

```js
this.callback(
    // 当无法转换原内容时，给 Webpack 返回一个 Error
    err: Error | null,
    // 原内容转换后的内容
    content: string | Buffer,
    // 用于把转换后的内容得出原内容的 Source Map，方便调试
    sourceMap?: SourceMap,
    // 如果本次转换为原内容生成了 AST 语法树，可以把这个 AST 返回，
    // 以方便之后需要 AST 的 Loader 复用该 AST，以避免重复生成 AST，提升性能
    abstractSyntaxTree?: AST
);
```

###### 同步与异步

Loader 有同步和异步之分，在有些场景下转换的步骤只能是异步完成的，例如你需要通过网络请求才能得出结果，如果采用同步的方式网络请求就会阻塞整个构建，导致构建非常缓慢。

在转换步骤是异步时，可以这样：

```js
module.exports = function (source) {
  // 告诉 Webpack 本次转换是异步的，Loader 会在 callback 中回调结果
  var callback = this.async()
  someAsyncOperation(source, function (err, result, sourceMaps, ast) {
    // 通过 callback 返回异步执行后的结果
    callback(err, result, sourceMaps, ast)
  })
}
```

###### loader 开发辅助工具及 loaderContext

`loader-utils` 与 `schema-utils`，可以使获取及验证传递给 loader 的参数的工作简单化。

```js
import { getOptions } from 'loader-utils'
import { validate } from 'schema-utils'

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string',
    },
  },
}

export default function (source) {
  const options = getOptions(this)

  validate(schema, options, {
    name: 'Example Loader',
    baseDataPath: 'options',
  })

  // Apply some transformations to the source...

  return `export default ${JSON.stringify(source)}`
}
```

loader-utils 主要有以下工具方法：

- `parseQuery`：解析 loader 的 query 参数，返回一个对象。

- `stringifyRequest`将请求的资源转换为可以在 loader 生成的代码中 require 或 import 使用的相对路径字符串，同时避免绝对路径导致重新计算 hash 值。

  ```js
  loaderUtils.stringifyRequest(this, './test.js')
  // "\"./test.js\""
  ```

- `urlToRequest` 将请求的资源路径转换成 webpack 可以处理的形式。

  ```js
  const url = '~path/to/module.js'
  const request = loaderUtils.urlToRequest(url) // "path/to/module.js"
  ```

- `interpolateName` 对文件名模板进行插值。

  ```js
  // loaderContext.resourcePath = "/absolute/path/to/app/js/xx.js"
  loaderUtils.interpolateName(loaderContext, "js/[hash].script.[ext]", { content: ... });
  // => js/9473fdd0d880a43c21b7778d34872157.script.js
  ```

- `getHashDigest`：获取文件内容的 hash 值。

在编写 loader 的过程中，还可以利用 loaderContext 对象来获取 loader 的相关信息和进行一些高级的操作，常见的属性和方法有：

- `this.addDependency`：加入一个文件，作为 loader 产生的结果的依赖，使其在有任何变化时可以被监听到，从而触发重新编译。
- `this.async`：告诉 loader-runner 这个 loader 将会异步的执行回调。
- `this.cacheable`：默认情况下，将 loader 的处理结果标记为可缓存。传入 false 可以关闭 loader 处理结果的缓存能力。
- `this.fs`：用于访问 compilation 的 inputFileSystem 属性。
- `this.getOptions`：提取 loader 的配置选项。从 webpack 5 开始，可以获取到 loader 上下文对象，用于替代 `loader-utils` 中的 getOptions 方法。
- `this.mode`： webpack 的运行模式，可以是 "development" 或 "production"。
- `this.query`：如果 loader 配置了 options 对象，则指向这个对象。如果 loader 没有 options，而是以 query 字符串作为参数，query 则是一个以 `?` 开头的字符串。

以上内容是编写一个 loader 的关键点，想要学习更详细的关于编写 loader 的指导，可以参考官方的 [guidelines](https://webpack.js.org/contribute/writing-a-loader/#guidelines)。

##### webpack loader 工作机制

###### 根据 module.rules 解析 loader 加载规则

当 webpack 处理一个模块（module）时，会根据配置文件中 `module.rules` 的规则，使用 loader 处理对应资源，得到可供 webpack 使用的 JavaScript 模块。

根据具体的配置情况，loader 会有不同的类型，可以影响 loader 的执行顺序。具体类型如下所示：

```js
rules: [
  // pre 前置 loader
  { enforce: 'pre', test: /\.js$/, loader: 'eslint-loader' },
  // normal loader
  { test: /\.js$/, loader: 'babel-loader' },
  // post 后置 loader
  { enforce: 'post', test: /\.js$/, loader: 'eslint-loader' },
]
```

以及内联使用的 inline loader：

```js
import 'style-loader!css-loader!sass-loader!./xx.scss'
```

在正常的执行流程中，这些不同类型的 loader 的执行顺序是：`pre -> normal -> inline -> post`。在 pitch 流程中，这些 loader 的执行顺序是反过来的：`post -> inline -> normal -> pre`。

对于内联 loader，可以通知修饰前缀改变 loader 的执行顺序：

```js
// ! 前缀会禁用 normal loader
import { xx } from '!./xx.js'
// -! 前缀会禁用 pre loader 和 normal loader
import { xx } from '-!./xx.js'
// !! 前缀会禁用 pre、normal 和 post loader
import { xx } from '!!./xx.js'
```

一般情况下，`!` 前缀和 inline loader 一起使用仅出现在 loader（如 style-loader）生成的代码中，webpack 官方不建议用户同时使用 inline loader 和 `!` 前缀。

webpack rules 中配置的 loader 可以是多个链式串联的。在正常流程中，链式 loader 会按照从后往前的顺序执行。

- 最后的 loader 最先执行，它接收的是资源文件（resource file）的内容。
- 第一个 loader 最后执行，它将返回 JavaScript 模块和可选的 source map。
- 位于中间的 loader，对接收和返回没有特定要求，只要能处理之前 loader 返回的内容，产出下一个 loader 能够理解的内容就可以。

###### loader-runner 的执行流程

webpack 调用 loader 的时机在触发 compilation 的 buildModule 钩子之后。webpack 会在 `NormalModule.js` 中，调用 runLoaders 运行 loader：

```js
runLoaders(
  {
    resource: this.resource, // 资源文件的路径，可以有查询字符串。如：'./test.txt?query'
    loaders: this.loaders, // loader 的路径。
    context: loaderContext, // 传递给 loader 的上下文
    processResource: (loaderContext, resourcePath, callback) => {
      // 获取资源的方式，有 scheme 的文件通过 readResourceForScheme 读取，否则通过 fs.readFile 读取。
      const resource = loaderContext.resource
      const scheme = getScheme(resource)
      if (scheme) {
        hooks.readResourceForScheme
          .for(scheme)
          .callAsync(resource, this, (err, result) => {
            // ...
            return callback(null, result)
          })
      } else {
        loaderContext.addDependency(resourcePath)
        fs.readFile(resourcePath, callback)
      }
    },
  },
  (err, result) => {
    // 当 loader 转换完成后，会将结果返回到 webpack 中继续处理。
    processResult(err, result.result)
  }
)
```

runLoaders 函数来自 `loader-runner` 包。在介绍 runLoaders 的具体流程之前，先介绍一下 pitch 阶段，之前所讲的这种从后往前执行 loader 的流程，一般叫做 normal 阶段。与之相对的，还有一种叫做 pitch 阶段的流程。

一个 loader 如果在导出的函数的 pitch 属性上挂在了方法，那这个方法将在 pitch 阶段执行。pitch 阶段不同于 normal 阶段，pitch 阶段的执行顺序是从前往后的，整个流程类似浏览器事件模型或洋葱模型，pitch 阶段先从前往后执行 loader，然后再进入 normal 阶段从后往前执行 loader。注意，pitch 阶段一般不返回值，一旦 pitch 阶段有 loader 返回值，则从这里开始进入从后往前执行的 normal 阶段。

loader-runner 的具体流程如下：

1. 处理从 webpack 接收的 context，继续添加必要的属性和辅助方法。

2. iteratePitchingLoaders 处理 pitch loader。

   如果我们给一个 module 配置了三个 loader，每个 loader 都配置了 pitch 函数：

   ```js
   module.exports = {
     //...
     module: {
       rules: [
         {
           //...
           use: ['a-loader', 'b-loader', 'c-loader'],
         },
       ],
     },
   }
   ```

   那么处理这个 module 的流程如下：

   ```shell
   |- a-loader `pitch`
     |- b-loader `pitch`
       |- c-loader `pitch`
         |- requested module is picked up as a dependency
       |- c-loader normal execution
     |- b-loader normal execution
   |- a-loader normal execution
   ```

   如果 b-loader 在 pitch 中提前返回了值，那么流程如下：

   ```shell
   |- a-loader `pitch`
     |- b-loader `pitch` returns a module
   |- a-loader normal execution
   ```

3. iterateNormalLoaders 处理 normal loader。

   当 pitch loader 的流程处理完后，就来到了处理 normal loader 的流程。处理 normal loader 的流程和 pitch loader 相似，只是从后往前迭代。

   iterateNormalLoaders 和 iteratePitchingLoaders 都会调用 runSyncOrAsync 来执行 loader。runSyncOrAsync 会提供 context.async，这是一个返回 callback 的 async 函数，用于异步处理。

##### 常见 webpack loader 原理解析

loader 本身的操作并不复杂，就是一个负责转换其他资源到 JavaScript 模块的函数。

###### raw-loader 分析

该 loader 是功能非常简单的同步 loader，它的核心步骤是从文件原始内容中取得序列化的字符串，修复 JSON 序列化特殊字符时的 bug，添加导出语句，使其成为 JavaScript 模块。

该 loader 在 webpack 5 中已废弃，直接使用 asset modules 的功能代替即可。该 loader 源码如下：

```js
import { getOptions } from 'loader-utils'
import { validate } from 'schema-utils'

import schema from './options.json'

export default function rawLoader(source) {
  const options = getOptions(this)

  validate(schema, options, {
    name: 'Raw Loader',
    baseDataPath: 'options',
  })

  const json = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')

  const esModule =
    typeof options.esModule !== 'undefined' ? options.esModule : true

  return `${esModule ? 'export default' : 'module.exports ='} ${json};`
}
```

###### babel-loader 分析

babel loader 是一个综合了同步和异步的 loader，在使用缓存配置时以异步模式运行，否则以同步方式运行。该 loader 的主要源码如下：

```js
// imports ...
// ...

const transpile = function (source, options) {
  // ...

  let result
  try {
    result = babel.transform(source, options)
  } catch (error) {
    // ...
  }
  // ...

  return {
    code: code,
    map: map,
    metadata: metadata,
  }
}

// ...

module.exports = function (source, inputSourceMap) {
  // ...

  if (cacheDirectory) {
    const callback = this.async()
    return cache(
      {
        directory: cacheDirectory,
        identifier: cacheIdentifier,
        source: source,
        options: options,
        transform: transpile,
      },
      (err, { code, map, metadata } = {}) => {
        if (err) return callback(err)

        metadataSubscribers.forEach((s) => passMetadata(s, this, metadata))

        return callback(null, code, map)
      }
    )
  }

  const { code, map, metadata } = transpile(source, options)

  this.callback(null, code, map)
}
```

babel-loader 通过 callback 传递了经过 babel.transform 转换后的代码及 source map。

#### 3.3 style-loader 与 css-loader 分析

style-loader 负责将样式插入到 DOM 中，使样式对页面生效。css-loader 主要负责处理 import、url 路径等外部引用。

style-loader 只有 pitch 函数。css-loader 是 normal module。整个执行流程是先执行 style-loader 阶段，style-loader 会创建形如 `require(!!./hzfe.css)` 的代码返回给 webpack。webpack 会再次调用 css-loader 处理样式，css-loader 会返回包含 runtime 的 js 模块给 webpack 去解析。style-loader 在上一步注入 `require(!!./hzfe.css)` 的同时，也注入了添加 style 标签的代码。这样，在运行时（浏览器中），style-loader 就可以把 css-loader 的样式插入到页面中。

常见的疑问就是为什么不按照 normal 模式组织 style-loader 和 css-loader。

首先 css-loader 返回的是形如这样的代码：

```js
import ___CSS_LOADER_API_IMPORT___ from '../node_modules/_css-loader@5.1.3@css-loader/dist/runtime/api.js'
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function (i) {
  return i[1]
})
// Module
___CSS_LOADER_EXPORT___.push([module.id, '.xx{\r\n    height: 100px;\r\n}', ''])
// Exports
export default ___CSS_LOADER_EXPORT___
```

style-loader 无法在编译时获取 CSS 相关的内容，因为 style-loader 无法处理 css-loader 生成结果的 runtime 依赖。style-loader 也无法在运行时获取 CSS 相关的内容，因为无论怎样拼接运行时代码，都无法获取到 CSS 的内容。

作为替代，style-loader 采用了 pitch 方案，style-loader 的核心功能如下所示：

style-loader

```js
module.exports.pitch = function (request) {
  var result = [
    // 生成 require CSS 文件的语句，交给 css-loader 解析 得到包含 CSS 内容的 JS 模块
    // 其中 !! 是为了避免 webpack 解析时递归调用 style-loader
    `var content=require("${loaderUtils.stringifyRequest(this, `!!${request}`)}")`,
    // 在运行时调用 addStyle 把 CSS 内容插入到 DOM 中
    `require("${loaderUtils.stringifyRequest(this, `!${path.join(__dirname, "add-style.js")}`)}")(content)`
    // 如果发现启用了 CSS modules，则默认导出它
    "if(content.locals) module.exports = content.locals",
  ];
  return result.join(";");
};
```

add-style.js

```js
module.exports = function (content) {
  var style = document.createElement('style')
  style.innerHTML = content
  document.head.appendChild(style)
}
```

在 pitch 阶段，style-loader 生成 require CSS 以及注入 runtime 的代码。该结果会返回给 webpack 进一步解析，css-loader 返回的结果会作为模块在运行时导入，在运行时能够获得 CSS 的内容，然后调用 add-style.js 把 CSS 内容插入到 DOM 中。

#### 「参考资料」

1. [writting a loader](https://webpack.js.org/contribute/writing-a-loader/)
2. [Loader Interface](https://webpack.js.org/api/loaders/)
3. [loader runner](https://github.com/webpack/loader-runner)
4. [5-3 编写 Loader · 深入浅出 Webpack (wuhaolin.cn)](http://webpack.wuhaolin.cn/5原理/5-3编写Loader.html)

## 柒，框架和类库

### React Fiber 的作用和原理 🔥🔥🔥

#### 「相关问题」

- Fiber 是什么
- 谈谈你对 Fiber 的了解
- Fiber 对 React 的使用带来了什么影响

#### 「回答关键点」

- `调度`
- `深度优先遍历`

Fiber 是 React 16 中采用的新**协调（reconciliation）引擎**，主要目标是支持虚拟 DOM 的**渐进式渲染**。
​

Fiber 将原有的 Stack Reconciler 替换为 Fiber Reconciler，提高了复杂应用的可响应性和性能。主要通过以下方式达成目标：
​

- 对大型复杂任务的**分片**。
- 对任务划分**优先级**，优先调度高优先级的任务。
- 调度过程中，可以对任务进行**挂起、恢复、终止**等操作。

Fiber 对现有代码的影响： 由于 Fiber 采用了全新的调度方式，任务的更新过程可能会被打断，这意味着在组件更新过程中，render 及其之前的生命周期函数可能会调用多次。因此，在下列生命周期函数中不应出现副作用。
​

- shouldComponentUpdate
- React 16 中已经声明废弃的钩子
  - componentWillMount（UNSAFE_componentWillMount）
  - componentWillReceiveProps（UNSAFE_componentWillReceiveProps）
  - componentWillUpdate（UNSAFE_componentWillUpdate）

#### 「知识点深入」

##### React 是如何工作的

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return <div>Hello.</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
```

上面代码中我们引入的两个包，分别代表了 React 的 core API 层和渲染层，在这背后还有一层被称为协调器（Reconcilers）的层次。（协调器在[react-reconciler](https://github.com/facebook/react/tree/main/packages/react-reconciler)中实现）
​

一个 React 组件的渲染主要经历两个阶段：
​

- 调度阶段（Reconciler）：用新的数据生成一棵新的树，然后通过 Diff 算法，遍历旧的树，快速找出需要更新的元素，放到更新队列中去，得到新的更新队列。
- 渲染阶段（Renderer）：遍历更新队列，通过调用宿主环境的 API，实际更新渲染对应的元素。宿主环境如 DOM，Native 等。

对于调度阶段，新老架构中有不同的处理方式：
​

React 16 之前使用的是 Stack Reconciler（栈协调器），使用递归的方式创建虚拟 DOM，递归的过程是不能中断的。如果组件树的层级很深，递归更新组件的时间超过 16ms（以 60Hz 频率的显示器为例，浏览器绘制一帧的最小时间间隔为 1/60s 约等于 16ms），这时会发生俗称的掉帧现象，帧率不稳定时，用户就会感觉到卡顿。
​

React 16 及以后使用的是 Fiber Reconciler（纤维协调器），将递**归中无法中断**的更新重构为**迭代中的异步可中断**更新过程，这样就能够更好的控制组件的渲染。
​

##### Fiber Reconciler 如何工作

由于浏览器中 JS 的运行环境是单线程的，因此，一旦有任务耗时过长，就会阻塞其他任务的执行，导致浏览器不能及时响应用户的操作，从而使用户体验下降。为解决这个问题，React 推出了 Fiber Reconciler 架构。
​

在 Fiber 中，会把一个耗时很长的任务分成很多小的任务片，每一个任务片的运行时间很短。虽然总的任务执行时间依然很长，但是在每个任务小片执行完之后，都会给其他任务一个执行机会。 这样，唯一的线程就不会被独占，其他任务也能够得到执行机会。
​

为了实现**渐进渲染**的目的，Fiber 架构中引入了新的数据结构：Fiber Node，Fiber Node Tree 根据 React Element Tree 生成，并用来驱动真实 DOM 的渲染。
​

Fiber 节点的大致结构：

```javascript
{
    tag: TypeOfWork, // 标识 fiber 类型
    type: 'div', // 和 fiber 相关的组件类型
    return: Fiber | null, // 父节点
    child: Fiber | null, // 子节点
    sibling: Fiber | null, // 同级节点
    alternate: Fiber | null, // diff 的变化记录在这个节点上
    ...
}
```

Fiber 树结构如下：
![](https://cdn.nlark.com/yuque/0/2022/png/377147/1646139067219-d86e825a-948f-47c0-8a4a-b9fee5f85356.png#clientId=ue2e83fdd-a46d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uaa6641c5&margin=%5Bobject%20Object%5D&originHeight=734&originWidth=870&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ufa303a95-35ca-4ebc-8326-6cd1fb42aef&title=)

Fiber 的主要工作流程：

1. ReactDOM.render() 引导 React 启动或调用 setState() 的时候开始创建或更新 Fiber 树。
1. 从根节点开始遍历 Fiber Node Tree， 并且构建 workInProgress Tree（reconciliation 阶段）。

- 本阶段可以暂停、终止、和重启，会导致 react 相关生命周期重复执行。
- React 会生成两棵树，一棵是代表当前状态的 current tree，一棵是待更新的 workInProgress tree。
- 遍历 current tree，重用或更新 Fiber Node 到 workInProgress tree，workInProgress tree 完成后会替换 current tree。
- 每更新一个节点，同时生成该节点对应的 Effect List。
- 为每个节点创建更新任务。

3. 将创建的更新任务加入任务队列，等待调度。

- 调度由 scheduler 模块完成，其核心职责是执行回调。
- scheduler 模块实现了跨平台兼容的 requestIdleCallback。
- 每处理完一个 Fiber Node 的更新，可以中断、挂起，或恢复。

4. 根据 Effect List 更新 DOM （commit 阶段）。([已经弃用 effectList](https://github.com/facebook/react/pull/19673)）

- React 会遍历 Effect List 将所有变更一次性更新到 DOM 上。
- 这一阶段的工作会导致用户可见的变化。因此该过程不可中断，必须一直执行直到更新完成

![](https://cdn.nlark.com/yuque/0/2022/png/377147/1646139297244-8a87f068-35c1-4e7f-bb7e-5c72d0bc464c.png#clientId=ue2e83fdd-a46d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ue96b7aa7&margin=%5Bobject%20Object%5D&originHeight=1545&originWidth=924&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u504fce2e-dbda-4150-b348-4c7af6c5628&title=)

#### 「参考资料」

1. [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
1. [React Conf 2017](https://www.youtube.com/watch?v=7HSd1sk07uU&list=PLb0IAmt7-GS3fZ46IGFirdqKTIxlws7e0)
1. [Inside Fiber](https://blog.ag-grid.com/inside-fiber-an-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/)
1. [https://github.com/facebook/react/pull/19673](https://github.com/facebook/react/pull/19673)

### HOC vs Render Props vs Hooks🔥🔥🔥

#### 「相关问题」

- 什么是 HOC / Render Props / Hooks
- 为什么需要 HOC / Render Props / Hooks
- 如何提高代码复用性
- Hooks 的实现原理
- Hooks 相比其他方案有什么优势

#### 「回答关键点」

- `复用性`

HOC / Render Props / Hooks 三种写法都可以**提高代码的复用性**，但实现方法不同：HOC 是对传入的组件进行增强后，返回新的组件给开发者；Render Props 是指将一个返回 React 组件的函数，作为 prop 传给另一个 React 组件的共享代码的技术；Hooks 是 React 提供的一组 API，使开发者可以在不编写 class 的情况下使用 state 和其他 React 特性
​

#### 「知识点深入」

##### HOC （Higher Order Component，即高阶组件）

HOC 是 React 中复用代码的编程模式。具体来说，高阶组件是一个**纯函数**，它接收一个组件并返回一个新的组件。常见例子：React Redux 的 connect，将 Redux Store 和 React 组件联系起来。
​

```javascript
// react-redux connect 例子
const ConnectedMyComponent = connect(mapState)(MyComponent)
```

```javascript
// 实现一个简单的 HOC 例子
function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('Current props: ', this.props)
      console.log('Previous props: ', prevProps)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
```

##### Render Props

Render Props 是 React 中复用代码的编程模式。主要解决组件逻辑相同而渲染规则不同的复用问题。常见例子：React Router 中，自定义 render 函数，按需使用 routeProps 来渲染业务组件。

```javascript
ReactDOM.render(
  <Router>
    <Route
      path="/home"
      render={(routeProps) => (
        <div>Customize foo's {routeProps.location.pathname}</div>
      )}
    />
  </Router>,
  node
)
```

##### React Hooks

React Hooks 是 React 16.8 引入的一组 API。开发者可以在不使用 class 写法的情况下，借助 Hooks 在纯函数组件中使用状态和其他 React 功能。
​

```javascript
function Example() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

##### HOC vs Render Props vs Hooks

**痛点:**
**​**

在实际业务快速迭代过程中，组件常出现大量重复性工作，少量个性化定制的需求，**如果不遵循 DRY（Don't Repeat Yourself）的规则**，会造成项目臃肿和难以维护的问题。较早的方案是使用 HOC / Render Props 进行重构，然而这两种方案都会**改变组件层级**，容易形成“**嵌套地狱**”，使得代码的**可读性下降**。而 React Hooks 则很好地解决了这个问题。
​

##### 方案优劣

为辅助理解，可参考以下图片。图中所示为下拉列表功能的三种不同实现，相比于使用一个 Class 来书写下拉列表的所有功能，这三种方案都对组件进行了功能拆解，提高了代码的复用性。 （[代码来源](https://medium.com/simply/comparison-hocs-vs-render-props-vs-hooks-55f9ffcd5dc6)）
![](https://cdn.nlark.com/yuque/0/2022/png/377147/1646140235272-7fd1a718-78d9-4c77-92cb-f82cfc1ea924.png#clientId=ue2e83fdd-a46d-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u90a271f7&margin=%5Bobject%20Object%5D&originHeight=1282&originWidth=1586&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u1d27bf4c-cfbc-4a1c-bd25-f58e640262e&title=)
**复用性**
​

HOC、Render Props、Hooks 都有提高代码复用性的能力，但根据其设计模式上的差别，适用范围也会有所差异：HOC 基于单一功能原则，对传入组件进行增强；Render Props 复用数据源，按需渲染 UI；Hooks 对于不同场景的复用都有较好的普适性。
​

**可读性 / 易用性**
**​**

**HOC 可读性差，易用性差。**HOC 写法看似简洁，但开发者无法通过阅读 HOC 的调用辨别出方法的作用：看不到接收和返回的结构，增加调试和修复问题的成本；进行多个 HOC 组合使用时，不能确定使用顺序且有命名空间冲突风险，需要了解每个 HOC 的具体实现，难以维护。不建议过度使用 HOC，但比较适合不需要个性化开发定制时使用：常见于第三方库提供 HOC 类型的 API 给开发者进行功能增强。
**​**

**Render Props 可读性较好，易用性强。**代码相对冗长，但能清晰看到组件接收的 props 以及传递的功能等，可以对 props 属性重命名，不会有命名冲突。但难以在 render 函数外使用数据源，且容易形成嵌套地狱。
**​**

**Hooks 可读性强，易用性较好。**使用 Hooks 时，能清晰看到组件接收的 props 以及传递的功能等，可以对 props 属性重命名，不会有命名冲突，不存在嵌套地狱，且没有数据源获取及使用范围的限制。但 Hooks 编程应遵循函数式编程的实践，否则 Hooks 所需的依赖数组的处理会造成较大的心智负担。
​

#### 「参考资料」

1. [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
1. [Comparison: HOCs vs Render Props vs Hooks](https://medium.com/simply/comparison-hocs-vs-render-props-vs-hooks-55f9ffcd5dc6)

### React Hooks 实现原理 🔥🔥🔥

#### 「相关问题」

- React Hooks 是什么
- React Hooks 是怎么实现的
- 使用 React Hooks 需要注意什么

#### 「回答关键点」

- `闭包`
- `Fiber`
- `链表`

Hooks 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
​

Hooks 主要是利用闭包来保存状态，使用链表保存一系列 Hooks，将链表中的第一个 Hook 与 Fiber 关联。在 Fiber 树更新时，就能从 Hooks 中计算出最终输出的状态和执行相关的副作用。
​

使用 Hooks 的注意事项：
​

- 不要在循环，条件或嵌套函数中调用 Hooks。
- 只在 React 函数中调用 Hooks。

#### 「知识点深入」

##### 状态 Hook

模拟的 useState 实现中，通过闭包，将 state 保存在 `memoizedState[cursor]`。 memoizedState 是一个数组，可以按顺序保存 hook 多次调用产生的状态。

```js
let memoizedState = []
let cursor = 0

function useState(initialValue) {
  // 初次调用时，传入的初始值作为 state，后续使用闭包中保存的 state
  let state = memoizedState[cursor] ?? initialValue
  // 对游标进行闭包缓存，使得 setState 调用时，操作正确的对应状态
  const _cursor = cursor
  const setState = (newValue) => (memoizedState[_cursor] = newValue)
  // 游标自增，为接下来调用的 hook 使用时，引用 memoizedState 中的新位置
  cursor += 1
  return [state, setState]
}
```

实际的 useState 实现经过多方面的[综合考虑](https://overreacted.io/why-do-hooks-rely-on-call-order/)，React 最终选择将 Hooks 设计为顺序结构，这也是 Hooks 不能条件调用的原因。

```js
function mountState<S>(
  initialState: (() => S) | S
): [S, Dispatch<BasicStateAction<S>>] {
  // 创建 Hook，并将当前 Hook 添加到 Hooks 链表中
  const hook = mountWorkInProgressHook()
  // 如果初始值是函数，则调用函数取得初始值
  if (typeof initialState === 'function') {
    initialState = initialState()
  }
  hook.memoizedState = hook.baseState = initialState
  // 创建一个链表来存放更新对象
  const queue = (hook.queue = {
    pending: null,
    dispatch: null,
    lastRenderedReducer: basicStateReducer,
    lastRenderedState: initialState,
  })
  // dispatch 用于修改状态，并将此次更新添加到更新对象链表中
  const dispatch: Dispatch<BasicStateAction<S>> = (queue.dispatch =
    (dispatchAction.bind(null, currentlyRenderingFiber, queue): any))
  return [hook.memoizedState, dispatch]
}
```

##### 副作用 Hook

模拟的 useEffect 实现，同样利用了 memoizedState 闭包来存储依赖数组。依赖数组进行浅比较，默认的比较算法是 `Object.is`。

```js
let memoizedState = []
let cursor = 0

function useEffect(cb, depArray) {
  const oldDeps = memoizedState[cursor]
  let hasChange = true
  if (oldDeps) {
    // 对比传入的依赖数组与闭包中保存的旧依赖数组，采用浅比较算法
    hasChange = depArray.some((dep, i) => !Object.is(dep, oldDeps[i]))
  }
  if (hasChange) cb()
  memoizedState[cursor] = depArray
  cursor++
}
```

实际的 useEffect 实现：

```js
function mountEffect(
  create: () => (() => void) | void,
  deps: Array<mixed> | void | null
): void {
  return mountEffectImpl(
    UpdateEffect | PassiveEffect, // fiberFlags
    HookPassive, // hookFlags
    create,
    deps
  )
}
function mountEffectImpl(fiberFlags, hookFlags, create, deps): void {
  // 创建hook
  const hook = mountWorkInProgressHook()
  const nextDeps = deps === undefined ? null : deps
  // 设置 workInProgress 的副作用标记
  currentlyRenderingFiber.flags |= fiberFlags // fiberFlags 被标记到 workInProgress
  // 创建 Effect, 挂载到 hook.memoizedState 上
  hook.memoizedState = pushEffect(
    HookHasEffect | hookFlags, // hookFlags 用于创建 effect
    create,
    undefined,
    nextDeps
  )
}
```

##### Hooks 如何与 Fiber 共同工作

在了解如何工作之前，先看看 Hook 与 Fiber 的部分结构定义：

```js
export type Hook = {
  memoizedState: any, // 最新的状态值
  baseState: any, // 初始状态值
  baseQueue: Update<any, any> | null,
  queue: UpdateQueue<any, any> | null, // 环形链表，存储的是该 hook 多次调用产生的更新对象
  next: Hook | null, // next 指针，之下链表中的下一个 Hook
}
```

```js
export type Fiber = {
  updateQueue: mixed, // 存储 Fiber 节点相关的副作用链表
  memoizedState: any, // 存储 Fiber 节点相关的状态值

  flags: Flags, // 标识当前 Fiber 节点是否有副作用
}
```

与上节中的模拟实现不同，真实的 Hooks 是一个单链表的结构，React 按 Hooks 的执行顺序依次将 Hook 节点添加到链表中。下面以 useState 和 useEffect 两个最常用的 hook 为例，来分析 Hooks 如何与 Fiber 共同工作。

在每个**状态 Hook**（如 useState）节点中，会通过 queue 属性上的循环链表记住所有的更新操作，并在 update 阶段依次执行循环链表中的所有更新操作，最终拿到最新的 state 返回。

在每个**副作用 Hook**（如 useEffect）节点中，创建 effect 挂载到 Hook 的 memoizedState 中，并添加到环形链表的末尾，该链表会保存到 Fiber 节点的 updateQueue 中，在 commit 阶段执行。

#### 「参考资料」

1. [Why Do React Hooks Rely on Call Order?](https://overreacted.io/why-do-hooks-rely-on-call-order/)
2. [React hooks: not magic, just arrays](https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e)

### React 事件机制原理 🔥🔥🔥

#### 「相关问题」

- React 合成事件与原生 DOM 事件的区别
- React 如何注册和触发事件
- React 事件如何解决浏览器兼容问题

#### 「回答关键点」

React 的事件处理机制可以分为**两个阶段**：初始化渲染时在 root 节点上注册原生事件；原生事件触发时**模拟捕获、目标和冒泡阶段派发合成事件**。

通过这种机制，冒泡的原生事件类型最多**在 root 节点上注册一次，节省内存开销**。且 React 为不同类型的事件定义了不同的处理**优先级**，从而让用户代码及时响应高优先级的用户交互，提升用户体验。

React 的事件机制中依赖**合成事件**这个核心概念。合成事件在符合 W3C 规范定义的前提下，抹平浏览器之间的差异化表现。并且**简化事件逻辑，对关联事件进行合成**。如每当表单类型组件的值发生改变时，都会触发 onChange 事件，而 onChange 事件由 change、click、input、keydown、keyup 等原生事件组成。

#### 「知识点深入」

JavaScript 通过事件可以和 DOM 进行交互

##### 原生事件

主流浏览器基于 DOM2、DOM3 规范，实现标准化 DOM 事件。基于 Event 实现了浏览器中常见的用户事件如 UIEvent、InputEvent、MouseEvent 等。

在事件发生时，相关信息会存储在 **Event 的实例对象**中，对象包含 currentTarget、detail、target、preventDefault()、stopPropagation() 等属性和方法。DOM 节点可以通过 addEventListener 和 removeEventListener 来添加或移除事件监听函数。

```js
// Event 属性
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
void preventDefault()
void stopPropagation()
void stopImmediatePropagation()
DOMEventTarget target
number timeStamp
string type
```

##### React 合成事件

React 的事件机制中，在遵循规范的前提下，引入新的事件类型：**合成事件（SyntheticEvent）**。基于合成事件实现了浏览器中常见的用户事件，并对事件进行规范化处理，使它们在不同浏览器中具有一致的属性。

在事件发生时，相关信息会存储在 SyntheticEvent 的实例对象中，对象包含原生事件对象类似的属性。

```js
// SyntheticEvent 属性
boolean bubbles
boolean cancelable
DOMEventTarget currentTarget
boolean defaultPrevented
number eventPhase
boolean isTrusted
DOMEvent nativeEvent
void preventDefault()
boolean isDefaultPrevented()
void stopPropagation()
boolean isPropagationStopped()
void persist()
DOMEventTarget target
number timeStamp
string type
```

但是合成事件与原生事件**不是一一映射的关系**。比如 onMouseEnter 合成事件映射原生 mouseout、mouseover 事件。React 通过 registrationNameDependencies 来记录合成事件和原生事件的**映射关系**：

```js
/**
 * Mapping from registration name to event name
 */
export const registrationNameDependencies = {
  onClick: ['click'],
  onMouseEnter: ['mouseout', 'mouseover'],
  onChange: [
    'change',
    'click',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'selectionchange',
  ],
  // ...
}
```

##### React 事件机制

##### React 事件的注册

![img](C:\Users\Administrator\Desktop\金三银四.assets\143735223-cb577bcf-8e4c-4047-8818-cbc28a1e8b69.png)

使用 ReactDOM.createRoot 创建 Root 时，React 会调用 listenToAllSupportedEvents 方法对所有支持的原生事件进行监听：

1. allNativeEvents 用于收集所有合成事件相关联的原生事件名。这个收集动作在事件插件初始化阶段完成；

```js
SimpleEventPlugin.registerEvents()
EnterLeaveEventPlugin.registerEvents()
ChangeEventPlugin.registerEvents()
SelectEventPlugin.registerEvents()
BeforeInputEventPlugin.registerEvents()
```

2. 对每个原生事件调用 addTrappedEventListener 函数。该函数最终使用 addEventListener 方法，对原生事件进行捕获或冒泡阶段的事件监听注册。

```ts
function addTrappedEventListener(
  targetContainer: EventTarget,
  domEventName: DOMEventName,
  eventSystemFlags: EventSystemFlags,
  isCapturePhaseListener: boolean
) {
  let listener = createEventListenerWrapperWithPriority(
    targetContainer,
    domEventName,
    eventSystemFlags
  )

  // ...

  if (isCapturePhaseListener) {
    addEventCaptureListener(targetContainer, domEventName, listener)
  } else {
    addEventBubbleListener(targetContainer, domEventName, listener)
  }
}
```

基于以上流程可知，调用 ReactDOM.createRoot 方法时，就已经在 root 节点上初始化所有原生事件的监听回调函数。而不是在组件上写合成事件的监听时，才开始**注册事件回调**。

##### React 事件的触发

![img](C:\Users\Administrator\Desktop\金三银四.assets\144073503-a8a2eb15-a2e7-4d98-9f0e-ef2a6b5c0738.png)

在注册事件阶段调用的 addTrappedEventListener 方法中，会使用 createEventListenerWrapperWithPriority 函数来创建事件回调。createEventListenerWrapperWithPriority 函数根据事件类型，划分出若干个不同**优先级**的 dispathEvent。事件回调最终都调用进 dispatchEvent 方法。

因此触发一个原生事件时，大致的执行流程如下：

1. 原生事件触发后，进入 dispatchEvent 回调方法；

2. attemptToDispatchEvent 方法根据该原生事件查找到当前原生 Dom 节点和映射的 Fiber 节点；

3. 事件和 Fiber 等信息被派发给插件系统进行处理，插件系统调用各插件暴露的 extractEvents 方法；

4. accumulateSinglePhaseListeners 方法向上收集 Fiber 树上监听相关事件的其他回调函数，构造合成事件并加入到派发队列 dispatchQueue 中；

5. 调用 processDispatchQueue 方法，基于捕获或冒泡阶段的标识，按倒序或顺序执行 dispatchQueue 中的方法；

#### 「参考资料」

1. [SyntheticEvent](https://reactjs.org/docs/events.html)
2. [Handling Events](https://reactjs.org/docs/handling-events.html)
3. [UI Events](https://www.w3.org/TR/DOM-Level-3-Events)

### 常见框架的 Diff 算法 🔥🔥🔥

#### 「相关问题」

- 虚拟 DOM 是什么
- 虚拟 DOM 的作用
- 讲一下 React/Vue 的 Diff 算法

#### 「回答关键点」

- `虚拟 DOM`
- `时间复杂度O(n)`

现代网站大多具有复杂布局，大量的节点和交互操作等特征，直接操作 DOM 方法不当带来的**性能**问题不可忽视。

虚拟 DOM 的本质是 JavaScript 对象，是 DOM 的抽象简化版本，可以代表 DOM 的一部分特征。通过预先操作虚拟 DOM，在某个时机找出和真实 DOM 之间的差异部分并重新渲染，来**提升**操作真实 DOM 的性能和效率。

为达到这个目的，还需要关注两个问题：什么时候重新渲染，怎么高效选择重新渲染的范围。找出需要重新渲染的范围，就是 Diff 的过程。React 和 Vue 的 Diff 算法思路基本一致，只对同层节点进行比较，利用唯一标识符对节点进行区分。

#### 「知识点深入」

##### Diff 算法

两棵树的比对和更新，涉及到树编辑距离（Tree Editing Distance）算法：将一棵树转化为另一棵树的最小操作成本。操作类型包括：删除、插入、修改。时间复杂度为 O(n^3)。

为了降低时间复杂度，React 和 Vue 的思路是基于以下两个假设条件，缩减递归迭代规模，将 Diff 算法的时间复杂度降低为 O(n)：

1. 相同类型的组件产生相同的 DOM 结构，反之亦然。所以不同类型组件的结构不需要进一步递归 Diff。
2. 同一层级的一组节点，可以通过唯一标识符进行区分。

##### React Reconciliation

在 React 中，将虚拟 DOM 和真实 DOM 进行比对然后同步的过程被称为 Reconciliation（调和），Fiber 是 React 16 中新的调和引擎。它的主要目标是实现虚拟 DOM 的增量渲染。

Diff 的大致过程是，当对比两棵虚拟 DOM 树时，React 先对比根元素。依据根元素的类型不同，会有不同的操作：

1. **不同类型的元素**

   如果元素的类型不同，React 会抛弃旧树并建立新树。如以下情况，会导致完全重建：

   ```html
   <!-- old -->
   <button class="bg-blue-100">xx</button>

   <!-- new -->
   <div class="bg-blue-100">xx</div>
   ```

2. **相同类型的元素**

   如果元素是两个相同类型的 React DOM 元素时，React 会查看两者的属性，保留 DOM 节点，只更新改变的属性。如以下情况，React 只更新颜色样式。

   ```html
   <!-- old -->
   <button class="bg-blue-100 text-center">xx</button>

   <!-- new -->
   <button class="bg-red-100 text-center">xx</button>
   ```

在元素类型相同的情况下，比对完元素后，会递归元素的子元素。默认情况下，React 会同时迭代新老两个子元素列表。对于列表的更新，React 建议在列表项中标识 key 属性。避免以下低效场景：

```html
<!-- bad -->
<!-- React 不会意识到可以保留<li>xx</li>和<li>Front-End</li>子树的完整，而是重写每个元素 -->

<!-- old -->
<ul>
  <li>xx</li>
  <li>Front-End</li>
</ul>
<!-- new -->
<ul>
  <li>Back-End</li>
  <li>xx</li>
  <li>Front-End</li>
</ul>

<!-- good -->
<!-- 子列表项有稳定且在兄弟节点中唯一的 key 属性， -->
<!-- React 使用 key 从新老树中匹配对应节点比较，提高 Diff 效率。 -->

<!-- old -->
<ul>
  <li key="2016">xx</li>
  <li key="2017">Front-End</li>
</ul>
<!-- new -->
<ul>
  <li key="2015">Back-End</li>
  <li key="2016">xx</li>
  <li key="2017">Front-End</li>
</ul>
```

#### 「参考资料」

- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
- [patch](https://github.com/vuejs/vue/blob/2.6/src/core/vdom/patch.js)

## 捌，设计模式

## 玖，综合场景相关

### 多图站点性能优化 🔥🔥🔥

#### 「相关问题」

#### 「回答关键点」

- `图片优化`
- `传输优化`
- `加载策略`

提高网站性能的一项重要指标是提高访问速度，这与用户留存率和转换率呈正相关。根据 [HTTPArchive](https://httparchive.org/reports/page-weight?start=2017_03_01&end=latest&view=list#bytesImg) 的数据可知，图像是大多数网站需求最多的资源类型，通常比其他资源占用更多带宽。在多图站点中，图片资源对于页面的加载和整体的用户体验有更明显的影响。最常见的问题是图片加载慢。对应的优化策略包括：
​

- 图片优化：进行图片压缩/缩放和选择正确的图片格式。
- 网络传输优化：使用 HTTP/2 和 CDN 服务。
- 图片加载策略优化：按需使用懒加载、预加载，响应式图片加载等策略。

#### 「知识点深入」

##### 图片优化

**选择合适的图片格式**
​

1. JPEG 的压缩效率高，是一种高效且轻巧的**有损压缩**图片格式。但不适合对矢量或对比度强的图像压缩，会有明显的图片质量下降。超过一定的压缩阈值，压缩的图像也会出现明显的图片质量下降。
1. PNG 是一种**无损压缩**的高保真图片格式。相比 JPEG 有更强色彩表现力，且支持透明通道。
1. GIF 是一种最多支持 256 种颜色的 8 位**无损**图片格式，支持动图。
1. WebP 是一种同时提供有损压缩与无损压缩的图片格式。不仅支持透明图片，有优秀的色彩表现，也能支持动画。支持无损压缩且通常比 PNG 格式的相同图像小 26%。支持有损压缩且比视觉上相似压缩水平的 JPEG 图像平均小 25-35%。但是浏览器兼容性差。
1. SVG 是一种基于 XML 语法的图像格式，全称是可缩放矢量图（Scalable Vector Graphics）。适合非照片类型的图片的缩放或高保真场景。

图中所示为 2012 年 1 月至 2021 年 8 月的主流图片格式的使用趋势。
![](https://cdn.nlark.com/yuque/0/2022/png/377147/1646305344426-d3eeecf0-70a4-4667-a019-5c45dd8a1de8.png#clientId=u7115af13-2b9e-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u9a75e0be&margin=%5Bobject%20Object%5D&originHeight=500&originWidth=900&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=ue28a23cd-3c9d-4e12-bb07-ee8990b0c4d&title=)
图片来源 [w3techs.com](https://w3techs.com/technologies/history_overview/image_format/all/y)
​

按需选择更高效的图片格式，不仅能提升用户视觉体验，也可以提升网站加载效率。在选用图片格式时，一般可以基于一些简单规则来筛选：在兼容性支持的情况下，可以选用 WebP，否则可以通过动图和透明度两个需求点来进行筛选：
​

- **动图**可以使用 GIF 或者是视频格式。前者的问题在于支持的色彩少，低帧率低分辨率，文件体积利用率低，而视频方案则可以避免这些问题。也可以使用 APNG，支持更多色彩的前提下，和对应 GIF 格式的文件体积相近。
- **透明度**PNG 和 GIF 都支持透明图片，可以按需使用。

在没有透明和动画需求的情况下，JPEG 格式图片胜任大部分场景，如果对图片的展示质量有较高要求时，可使用 PNG 格式图片。
​

绘制 LOGO、ICON 等非照片的图片内容时，一般使用 SVG 格式。比如 iconfont 等矢量图标管理平台中大量使用 SVG 格式。
​

**图片压缩和缩放处理**
**​**

由于实际应用场景的差异，对应图片的布局大小以及图片细节要求各有不同，大量未经压缩或缩放调整的图片会使网页加载许多不必要的字节，且对用户的视觉效果没有太大的提升。前端常见的压缩和缩放的处理方案包括：
​

- 静态资源通过工具（比如 imagemin）按需进行有损或无损压缩。
- 将用户上传的图片绘制到 Canvas 画布上，利用 CanvasRenderingContext2D.drawImage(image, dx, dy, dWidth, dHeight) API 进行图片缩放；利用 HTMLCanvasElement.toDataURL(type, encoderOptions) API 进行有损压缩。
- 根据用户侧的显示需求（如头像、缩略图、商品图等），通过对象存储服务（如七牛、阿里云 OSS）所提供的压缩或缩放等功能处理后返回使用。

##### 网络传输优化

**使用 HTTP/2 协议**
**​**

使用 HTTP/1.X 协议时，浏览器有同源**最大并发连接数**的限制，且 HTTP/1.X 不支持**多路复用**，因此一个多图站点想要获得较完整的视觉呈现，会有一定程度的延迟：所有的资源请求（包括图片资源）会进入先进先出（FIFO）**队列**等待被下载。
![](https://cdn.nlark.com/yuque/0/2022/png/377147/1646305790314-bc34be61-feb0-4217-97bf-a6681edca0f7.png#clientId=u7115af13-2b9e-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=uf78be167&margin=%5Bobject%20Object%5D&originHeight=1204&originWidth=2878&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u992ef8d2-453e-40e2-a504-fb563b67c43&title=)
​

使用 HTTP/1 前的常见优化方案包括：
​

- 使用精灵图 / 雪碧图，**减少 HTTP 请求数**。
- 10kb 大小以内的图片资源使用 base64 编码，**减少 HTTP 请求数**。
- 通过使用多个域名，开启多个 TCP 连接，突破浏览器同源最大并发连接数的限制。

由于 HTTP/2 支持**多路复用**，因此使用 HTTP/2 可以进一步减少网络延迟，更加快速的加载图片资源。
如下图所示，观察 Connection ID 一列可知，使用 HTTP/2 的情况下，资源重用同一条 TCP 连接，并发请求大量图片资源。
![](https://cdn.nlark.com/yuque/0/2022/png/377147/1646305790268-74535047-d652-44c2-a2e1-5744c9a5227e.png#clientId=u7115af13-2b9e-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u9942f600&margin=%5Bobject%20Object%5D&originHeight=1206&originWidth=2878&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u6623f43e-a36e-4b4e-b9bb-135acd1b95b&title=)
​

**使用 CDN**
**​**

CDN 将源站资源缓存到各加速节点后，用户请求源站资源时无需回源，可就近获取 CDN 节点上已缓存的资源，从而提高资源访问速度，分担源站压力。常见的 CDN 服务还支持对图片进行压缩、缩放、裁剪等图像处理功能
​

##### 图片加载策略优化

###### 图片懒加载

**​**

懒加载的策略是推迟加载离屏图片资源，从而减少资源请求数。实现懒加载的主流方案有：
​

- 使用 img 标签的 loading 属性。
- 使用 Intersection Observer API。
- 使用 scroll、resize 和 orientationchange 事件。

后两种方案的实现**原理**是: **通过在 img 标签上添加 data-src 或其他自定义属性存放图片链接，而 src 属性不被设置或设置为占位图链接。通过 Intersection Observer 或 scroll 等 API 检测离屏图片是否滚动到预期位置，如果是则将 data-src 的值赋给 src 属性，从而达到懒加载的目的**。
​

一般使用图片懒加载时，图片的占位处会使用各种方式来提升用户体验：
​

- 色块 / 骨架屏占位。
- LOGO 等品牌元素做默认图片。
- 使用图片缩略图做模糊效果占位。

1. img loading

从 Chrome 76+ 版本起，开发者可以使用 loading 属性来推迟加载可通过滚动进入视口内的离屏图像。通过给 loading 属性设置 lazy 值，可以推迟加载资源，直到它与视口达到一定距离。[caniuse.com](https://caniuse.com/loading-lazy-attr) 可查阅跨浏览器兼容性支持的详细信息。不支持 loading 属性的浏览器会忽略该属性，不会产生副作用。
​

```javascript
<img src="image.png" loading="lazy" alt="…" width="200" height="200" />
```

2. Intersection Observer

Intersection Observer API 可用于异步观察目标元素与祖先元素或与顶级文档视口的交叉点变化

```javascript
//

<img data-src="https://xxx/anyphoto1.jpg" />
<img data-src="https://xxx/anyphoto2.jpg" />


const config = {
  /** any option */
};

const observer = new IntersectionObserver(function (entries, self) {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) {
      if (target.dataset.src) {
        target.src = target.dataset.src;
        target.removeAttribute("data-src");
      }

      self.unobserve(target);
    }
  });
}, config);

const images = document.querySelectorAll("[data-src]");
images.forEach((image) => {
  observer.observe(image);
});
```

3. scroll

如果 Intersection Observer 存在兼容性问题，除了可以添加对应 polyfill 之外，也可以考虑降级为监听 scroll、resize、orientationchange 事件的方案。实现思路和 Intersection Observer 一致。具体细节上，需要自行计算图片节点与目标视口的纵向或横向距离，且需使用节流函数来避免性能问题。
​

###### 图片预加载

图片预加载机制是为了增强用户体验，尽快地加载出图片，使得用户体验更为流畅。
​

如果预加载的图片是确切且有限的，可以通过硬编码 link 标签来实现预加载。但是多数情况下，预加载的使用场景是动态的。
​

1. link

<link rel="preload"> 允许开发者在 HTML 的 head 标签中声明资源请求，指定页面需要预加载的资源，并且在浏览器的主要渲染机制启动之前加载，避免阻塞页面渲染且保证资源尽早可用。
```javascript
<link rel="preload" as="image" href="important.png" />
```

2. 动态创建

一般常见方案是动态创建 Image 标签或者是 Ajax 请求。使用 Ajax 时需要注意可能存在跨域问题。

```javascript
// 动态创建 Image
function preloadImage(url) {
  var img = new Image()
  img.src = url
}
```

#### 「参考资料」

1. [image types](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types)
1. [Fast load times](https://web.dev/fast)
1. [Usage statistics of WebP for websites](https://w3techs.com/technologies/details/im-webp)
1. [Browser-level image lazy-loading for the web](https://web.dev/browser-level-image-lazy-loading/)

### 如何减少白屏的时间 🔥🔥🔥

#### 「相关问题」

#### 「回答关键点」

- `资源优化`
- `预加载`
- `服务端渲染`
- `性能监控指标`
- `HTTP/2`

前端性能优化是前端开发中一个重要环节，它包括很多内容，其中页面的白屏时间是用户最初接触到的部分，**白屏时间过长会显著影响用户的留存率和转换率**

以一个 APP 内嵌 Webview 打开页面作为例子，来分析页面打开过程以及可优化的方向：

1. 前置条件
   - 性能监控指标
2. APP 内点击打开页面
3. DNS 解析
   - 预解析
   - 域名收敛
4. TCP 连接
   - 预连接
5. 发送并响应请求
   - HTTP/2
6. 浏览器解析页面
   - 服务端渲染
7. 加载资源并渲染页面
   - 骨架屏
   - 资源优化
   - 资源预加载
8. 请求接口，获取数据并渲染
   - 接口预加载
   - 接口合并

#### 「知识点深入」

##### 前端性能监控指标

性能优化的前置条件是性能有测量标准并可以被监控。常用的性能监控指标有以下几块。

Navigation Timing API：

- responseStart - fetchStart：收到首字节的耗时
- domContentLoadedEventEnd - fetchStart：HTML 加载完成耗时
- loadEventStart - fetchStart：页面完全加载耗时
- domainLookupEnd - domainLookupStart：DNS 解析耗时
- connectEnd - connectStart：TCP 连接耗时
- responseStart - requestStart：Time to First Byte（TTFB）
- responseEnd - responseStart：数据传输耗时
- domInteractive - responseEnd：DOM 解析耗时
- loadEventStart - domContentLoadedEventEnd：资源加载耗时（页面中同步加载的资源)

Lighthouse Performance：

- FP（First Paint）：首次绘制
- FCP（First Contentful Paint）：首次内容绘制
- FMP（First Meaningful Paint）：首次有效绘制
- LCP（Largest Contentful Paint）：最大可见元素绘制
- TTI（Time to Interactive）：可交互时间
- TTFB（Time to First Byte）：浏览器接收第一个字节的时间

除了上面之外，UC 内核也有一套性能监控指标：

- T0：Blink 收到 HTTP Head 的时间。
- T1：首屏有内容显示的时间。
- T2：首屏全部显示出来的时间。

##### DNS 解析优化

DNS 解析优化是性能优化重要的一环，DNS 的作用是根据域名获取对应的 IP 地址，获取之后后续的 HTTP 流程才能进行下去。

DNS 解析是一个开销较大的过程，一次 DNS 解析通常需要耗费几十到上百毫秒，而在移动端网络或其他**弱网环境**下 DNS 解析延迟会更加严重，对 DNS 解析优化则可以减少这一步骤的耗时。

**DNS 预解析**

前端可以通过 `dns-prefetch` 预解析的方式提前获取 IP 地址，以缩短后续请求的响应时间

```js
<link rel="dns-prefetch" href="https://xxx.org/" />
```

**域名收敛**

域名收敛的目的是**减少页面中域名的数量**，从而减少所需的 DNS 解析次数，最终减少页面的 DNS 解析过程的耗时，加快页面加载速度。

##### TCP 连接优化

前端可以通过 `preconnect` 在请求发送前预先执行一些操作，这些操作包括 DNS 解析，TCP 握手 和 TLS 协商。具体方式如下：

```html
<link href="https://xxx.org" rel="preconnect" />
```

##### 请求优化

通过使用 HTTP/2 协议，可以依赖 HTTP/2 的多路复用、首部压缩、二进制分帧和服务端推送等特性，从而加快整体请求的响应速度，加快页面的渲染展示。

##### 页面解析优化

浏览器获取 HTML 文件后，需要对 HTML 解析，然后才能开始渲染页面，这个过程中页面也是处于白屏状态。通过对这一过程进行优化可以加快页面的渲染展示

**服务端渲染（Server-Side Rendering）**

目前流行的前后端分离的开发模式，由于前端需要等待 JS 文件和接口加载完成之后才能渲染页面，导致白屏时间变长。服务端渲染是指在服务端将页面的渲染逻辑处理好，然后将处理好的 HTML 直接返回给前端展示。这样即可减少页面白屏的时间。

##### **预渲染**

除了服务端渲染之外，还可以在前端打包时使用 prerender-spa-plugin 之类的插件进行简单的预渲染，减少页面白屏的时间。

##### 资源加载优化和页面渲染优化

浏览器解析 HTML 的同时会加载相关的资源，通过对资源的加载过程进行优化也可以减少页面的白屏时间。

**骨架屏**

骨架屏是在需要等待加载内容的位置提供一些图形组合占位，提前给用户描述页面的基础结构，等待数据加载完成之后，再替换成实际的内容。

骨架屏可以在数据加载前，提前渲染页面，缩短白屏时间，提升用户体验。

**静态资源优化**

静态资源的优化主要分为两个方向：**减小资源大小，加快资源加载速度**。

减小资源大小

- Gzip 压缩文件
- JS 文件拆分，动态加载

加快资源加载速度

- CDN（Content Delivery Network）
- HTTP/2

**资源预加载**

**prefetch**

前端可以使用 prefetch 来指定提前获取之后需要使用到的资源，浏览器将会在**空闲的时候加载资源**，例如:

```html
<link rel="prefetch" href="https://xxx.org/index.js" as="script" />
```

**preload**

前端可以使用 preload 来指定提前获取之后需要使用到的资源，浏览器将会**立即加载对应资源**，在解析到对应资源时即可立即执行，例如:

```html
<link rel="preload" href="https://xxx.org/index.js" as="script" />
```

**quicklink**

quicklink 是 Google 开源的预加载库，quicklink 会判断链接进入视口之后，在闲时预加载。quicklink 实际上加速的是次级页面。

##### 接口请求优化

浏览器在加载完 HTML 和资源之后，一般需要请求接口获取数据之后才会完整渲染页面，对接口请求进行优化也可加快页面的展示。

**接口合并**

过多的接口请求会影响页面初始化时的渲染过程，可以通过增加一层中间层合并部分请求，达到加速页面展示的目的

#### 「参考资料」

1. [Navigation Timeing API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API)

### 如何判断一个元素是否在可视区域中？🔥🔥

#### 「相关问题」

#### 「回答关键点」

经常需要判断目标元素是否在视窗之内或者和视窗的距离小于一个值（例如 100 px），从而实现一些常用的功能，例如：

- 图片的懒加载
- 列表的无限滚动
- 计算广告元素的曝光情况
- 可点击链接的预加载

#### 「知识点深入」

##### 实现方式

- offsetTop、scrollTop
- getBoundingClientRect
- Intersection Observer

##### offsetTop、scrollTop

公式如下

```js
el.offsetTop - document.documentElement.scrollTop <= viewPortHeight

// offsetTop，元素的上外边框至包含元素(offsetParent)的上内边框之间的像素距离
// scrollTop 可以确定元素当前滚动的状态 offset = 0 可以重置元素的滚动距离
// clientWidth = content + padding
```

实现

```js
function isInViewPortOfOne(el) {
  // viewPortHeight 兼容所有浏览器写法
  const viewPortHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
  const offsetTop = el.offsetTop
  const scrollTop = document.documentElement.scrollTop

  const top = offsetTop - scrollTop

  return top <= viewPortHeight
}
```

##### getBoundingClientRect

api

```js
const target = document.querySelector('.target')
const clientRect = target.getBoundingClientRect()
console.log(clientRect)

// {
//   bottom: 556.21875,
//   height: 393.59375,
//   left: 333,
//   right: 1017,
//   top: 162.625,
//   width: 684
// }

// 如果一个元素在视窗之内的话，那么它一定满足下面四个条件：

// top 大于等于 0
// left 大于等于 0
// bottom 小于等于视窗高度
// right 小于等于视窗宽度
```

实现

```js
function isInViewPort(element) {
  const viewWidth = window.innerWidth || document.documentElement.clientWidth
  const viewHeight = window.innerHeight || document.documentElement.clientHeight

  const { top, right, bottom, left } = element.getBoundingClientRect()

  return top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight
}
```

##### Intersection Observer

实现

```js
const options = {
  // 表示重叠面积占被观察者的比例，从 0 - 1 取值，
  // 1 表示完全被包含
  threshold: 1.0,
  root: document.querySelector('#scrollArea'), // 必须是目标元素的父级元素
}

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    entry.time // 触发的时间
    entry.rootBounds // 根元素的位置矩形，这种情况下为视窗位置
    entry.boundingClientRect // 被观察者的位置举行
    entry.intersectionRect // 重叠区域的位置矩形
    entry.intersectionRatio // 重叠区域占被观察者面积的比例（被观察者不是矩形时也按照矩形计算）
    entry.target // 被观察者
  })
}

const observer = new IntersectionObserver(callback, options)
```

使用

```js
const target = document.querySelector('.target')
observer.observe(target)
```

#### 「参考资料」

- [Element.getBoundingClientRect() - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)
- [Intersection Observer API - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)

### 大文件上传如何做断点续传？🔥

[面试官：大文件上传如何做断点续传？ | web 前端面试 - 面试官系列 (vue3js.cn)](https://vue3js.cn/interview/JavaScript/continue_to_upload.html#一、是什么)

## 拾，数据结构和算法

### 尾递归 🔥🔥

#### 数组求和

```js
function sum(arr, total) {
  if (arr.length === 0) {
    return total
  }
  return sum(arr, total + arr.pop())
}
```

#### 优化斐波那契数列

```js
function f(n, start = 1, total = 1) {
  if (n <= 2) {
    return total
  }

  return f(n - 1, total, total + start)
}
```

#### 数组扁平化

```js
let a = [1, 2, 3, [1, 2, 3, [1, 2, 3]]]
// 变成
let a = [1, 2, 3, 1, 2, 3, 1, 2, 3]
// 具体实现
function flat(arr = [], result = []) {
  arr.forEach((v) => {
    if (Array.isArray(v)) {
      result = result.concat(flat(v, []))
    } else {
      result.push(v)
    }
  })
  return result
}
```

#### 数组对象格式化

```js
// 代码实现
function keysLower(obj) {
  let reg = new RegExp('([A-Z]+)', 'g')
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let temp = obj[key]
      if (reg.test(key.toString())) {
        // 将修改后的属性名重新赋值给temp，并在对象obj内添加一个转换后的属性
        temp = obj[
          key.replace(reg, function (result) {
            return result.toLowerCase()
          })
        ] = obj[key]
        // 将之前大写的键属性删除
        delete obj[key]
      }
      // 如果属性是对象或者数组，重新执行函数
      if (
        typeof temp === 'object' ||
        Object.prototype.toString.call(temp) === '[object Array]'
      ) {
        keysLower(temp)
      }
    }
  }
  return obj
}
```

### 函数缓存 🔥🔥

将函数运算过的结果进行缓存（用空间（缓存存储）换时间（计算过程））

#### 闭包

```js
// 函数 + 函数体内可访问的变量总和

;(function () {
  var a = 1
  function add() {
    const b = 2
    let sum = b + a
    console.log(sum) // 3
  }
  add()
})()
```

#### 柯里化

```js
// 把接受多个参数的函数转换成接受一个单一参数的函数

// 非函数柯里化
var add = function (x, y) {
  return x + y
}
add(3, 4) //7

// 函数柯里化
var add2 = function (x) {
  //**返回函数**
  return function (y) {
    return x + y
  }
}
add2(3)(4) //7
```

#### 高阶函数

```js
// 通过接收其他函数作为参数或返回其他函数的函数

function foo() {
  var a = 2

  function bar() {
    console.log(a)
  }
  return bar
}
var baz = foo()
baz() //2
```

#### 实现函数缓存

```js
// 把参数和对应的结果数据存在一个对象中，
// 调用时判断参数对应的数据是否存在，存在就返回对应的结果数据，否则就返回计算结果

const memoize = function (func, content) {
  let cache = Object.create(null)
  content = content || this
  return (...key) => {
    if (!cache[key]) {
      cache[key] = func.apply(content, key)
    }
    return cache[key]
  }
}

// 以下几种情况下，适合使用缓存：

- 对于昂贵的函数调用，执行复杂计算的函数
- 对于具有有限且高度重复输入范围的函数
- 对于具有重复输入值的递归函数
- 对于纯函数，即每次使用特定输入调用时返回相同输出的函数
```

### 上拉加载 🔥

触底公式

```js
scrollTop + clientHeight >= scrollHeight
```

简单实现

```js
let clientHeight = document.documentElement.clientHeight //浏览器高度
let scrollHeight = document.body.scrollHeight
let scrollTop = document.documentElement.scrollTop

let distance = 50 //距离视窗还用50的时候，开始触发；

if (scrollTop + clientHeight >= scrollHeight - distance) {
  console.log('开始加载数据')
}
```
