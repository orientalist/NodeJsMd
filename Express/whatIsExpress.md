# 什麼是Express
[官方首頁](http://expressjs.com/)

[作者GutHub](https://github.com/tj)

[Express GitHub](https://github.com/expressjs)
1. Ｅxpress誕生原因:
   - http原生不足以應付開發需求
   - 加快開發速度
   - 統一程式碼
   - **備註:** Node.js有許多Web開發框架,Express只是其中之一

## 使用步驟
1. 安裝
```shell
npm install --save express
```
**備註：記得先`npm init --yes`**

2. 建立js檔
```js
var express=require('express')
//1.創建app
var app=express()
//2.監聽port
app.listen(3000,function(){
    console.log('express is running...')
})
//3.設定路徑對應資源
app.get('/',function(req,res){
    res.send('Hello World!')
})
```
3. 當代碼變更時,自動重新啟動
   - 使用`nodemon`
   - `nodemon`是基於node.js開發的第三方命令工具
   - 安裝
   - 之後以`nodemon`啟動js檔,即可在程式碼變更時自動重啟
```shell
npm install --global nodemon
nodemon test.js

[nodemon] restarting due to changes...
[nodemon] starting `node helloWorld.js`
Example app listening in port 3000!
```