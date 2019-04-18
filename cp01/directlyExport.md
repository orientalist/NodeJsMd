# 如何直接將物件導出(非透過掛載)
透過掛載導出物件
```js
//假設a.js為一模塊,其程式碼:
exports.foo="Hello!"

//於b.js中引入a.js
var a=require('a')
//取得a導出物件
var foo=a.foo
```
直接輸出單一物件(拿到的就是函式/字串...)
```js
//輸出js
//module.exports=輸出物件
module.exports=function(){
    console.log('Hello!')
}

//輸入js
var func=require('a')
//如此一來func就等於a輸出的函示而不需要透過.取值
```
也可以透過modeule導出多個值
```js
//輸出js
module.exports={
    func00:function(){console.log('00')},
    func01:function(){console.log('01')},
    func02:function(){console.log('02')},
    func03:function(){console.log('03')}
}
//輸入js
var funcs=require('a')
var func00=funcs['func00']
```
***
## 背後原理(底層作業,你看不到)
其實任何node區塊內皆具有module物件
```js
var module={
    exports:{

    }
}
```
在底層會指派module.exports給exports變數
```js
var exports=module.exports
//也就是說,下面的程式碼是相等的
module.exports.test="test"
exports.test="test"
```
而在所有區塊結束後,會return module.exports
```js
return module.exports
```
由於exports指向module.exports,可以便捷地透過exports掛載導出物件

然而 **直接** 給exports賦值並 **不等於** 給module.exports賦值
```js
exports=function(){
    console.log('Hi')
}
//這樣的賦值是將exports 參考 到另一物件,而不是將module.exports指向另一物件
```
