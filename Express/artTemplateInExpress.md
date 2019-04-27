# 在Express中使用art-template
[art-template Git](https://github.com/aui/art-template)

[art-template 官方文檔](http://aui.github.io/art-template/zh-cn/)

安裝：
```shell
npm install --save art-template
npm install --save express-art-template
```
配置
```js
var express = require('express');
var app = express();
//表示當渲染.art的檔案時使用express-art-template
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
```
若要改變預設的views路徑:
```js
app.set('views','你想要的路徑')
```

使用
```js
app.get('/', function (req, res) {
    //Express預設提供.render方法,但不可用
    //除非有使用模版引擎
    //.render('html檔案名',{渲染數據})
    //注意!第一個參數是views目錄為起始
    res.render('index.art', {
        user: {
            name: 'aui',
            tags: ['art', 'template', 'nodejs']
        }
    });
});
```