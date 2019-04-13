# 補充-Node.js的基本概念
1. 只有Ecma JavaScript
2. 沒有dom與bom
3. ***模組***
   - 不論是核心/第三方/自己撰寫 的模組
   - 在node.js中 **沒有全作用域** 只有 **模組作用域** 已達到 **封閉**
   - 使用方法: 
  ```js
  //var 變數名稱=require('模組名稱')
  var fs=require('fs')
  ```
4. 自定義模組
5. 加載與導出
   - 每個模組都提供了exports用於輸出任何物件
   - 
