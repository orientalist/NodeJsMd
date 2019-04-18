# exports與module.exports的區別
在Node.js中,每個模塊內部都有一個`module`物件,該物件內有`exports`物件

並且在最後會回傳module.exports
```js
//此區塊為底層,不會顯示
var module={
    exports:{
        //預設為空
    }
}
//因為將module.exporte賦予exports,可透過exports存取該物件
var exports=module.exports
return module.exports
```
```js
//透過exports設定值
exports.foo='Hello'
var module={
    exports:{
        foo:"Hello"
    }
}
```
```js
//透過module.exports設定值
module.exports=function(){
    console.log('Hello')
}
var module={
    exports:function(){
        console.log('Hello')
    }
}
```
在require該模塊的模塊中取值
```js
var things=require('./a')
```
```js
//若是透過exports.變數名稱賦值
var foo=things.foo
```
```js
//透過module.exports賦值,things即值
things()
```