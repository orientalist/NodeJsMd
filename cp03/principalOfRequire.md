# require的原則
暫存區優先加載
例如有 main.js a.js b.js三個檔案,程式碼如下
```js
/*main.js*/
require('./a')
var fn=require('./b')
console.log(fn)
/**/

/*a.js*/
console.log('a被加載了')
var fn=require('./b')
console.log(fn)
/**/

/*b.js*/
console.log('b被加載了')
module.exports=function(){
    console.log('Hello world!')
}
/**/
```