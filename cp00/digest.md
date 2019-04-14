# 補充-Node.js的基本概念
1. 只有Ecma JavaScript
2. 沒有dom與bom
3. **模組**
   - 不論是核心/第三方/自己撰寫 的模組
   - 在node.js中 **沒有全作用域** 只有 **模組作用域** 以達到 **封閉**
   - 使用方法: 
  ```js
  //var 變數名稱=require('模組名稱')
  var fs=require('fs')
  ```
4. 自定義模組
5. **導出**
   - 由於沒有全作用域,個別模組要輸出物件需要額外處理
   - 每個模組都提供了**export**用於輸出任何物件
   - export可以掛載**多個**物件
   - 用法：
```js
//export.變數名稱＝要導出的物件
export.foo="Hi"
//在要接收物件處
var importThing=require('foo')
//如此一來,import等於export
//要取得先前export物件即
importThing.foo //其值即"Hi"
```
