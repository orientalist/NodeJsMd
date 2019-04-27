# 文件讀取/模組家載/資源路徑中的 `/` 
在`require()`方法中以`相對路徑`標示資源時,`./`不可省略
```js
var myModule=require('./myModule.js')
```
在`fs.readFile()`中以`相對路徑`標示資源時,`./`可省略
```js
var fs=require('fs')
fs.readFile('data/a.txt',function(){})
```
在`fs.readFile()`與`require()`中`/`表示`硬碟根目錄`
```js
var fs=require('fs')
fs.readFile('/test.txt',function(err){})
//在這裡會讀到D(根據檔案鎖在硬碟)://test.txt
var test=require('/test.js')
//這也會取用D://test.js
```