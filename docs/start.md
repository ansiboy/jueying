---
layout: page
title: 开始
---

# Jueying 的使用步骤

## 1. 依赖的引用

jueying 依赖下面几个库

* React
* jQuery (建议使用 2.x 版本)
* jQeury.event.drag & jQuery.event.drop (http://threedubmedia.com/code/) 已打包进 jueying.js 文件中，无需单独引用

所以在使用中，需要引用 React 和 jQuery，例如：

```js
<script src="https://cdn.bootcss.com/react/16.6.0/umd/react.development.js"></script>
<script src="https://cdn.bootcss.com/react-dom/16.6.0/umd/react-dom.development.js"></script>
<script src="https://cdn.bootcss.com/jquery/2.1.2/jquery.min.js"></script>
```

## 2. Jueying JS 文件的引用

* 如果使用 ES5

    引用 jueying.es5.js 或者 jueying.min.js 文件，例如

    ```js
    <script src="https://ansiboy.gitee.io/jueying/dist/jueying.es5.js"></script>
    ```

    ```js
    <script src="https://ansiboy.gitee.io/jueying/dist/jueying.min.js"></script>
    ```

* 如果使用 ES6

    引用 jueying.js 文件

    ```js
    <script src="https://ansiboy.gitee.io/jueying/dist/jueying.js"></script>
    ```

## 3. 创建组件面板，设计器，属性编辑器 

