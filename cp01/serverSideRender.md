# Node.js中的伺服器端Html渲染引擎
本次使用引擎:[template-art](https://aui.github.io/art-template/zh-cn/docs/)

使用方法
1. 透過npm安裝(盡量安裝在要使用的專案資料夾下)
```terminal
npm install art-template
```
2. 於js檔中require該套件
```js
var tmp=require('art-template')
```
3. 依需求查找官方文件並使用
   - 一些基本功能
```js
//.render('要被替換的字串,替換部分以{{變數名稱}}包含',{變數名稱：替換值})
tmp.render('hello {{ name }}',{name:'Jack'})
```