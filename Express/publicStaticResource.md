# 如何公布靜態資源
問題起源：如何在html中取用靜態資源(如js/img...)

解決辦法：透過Express的`.use()`公開伺服器上的靜態資源
```js
var express=require('express')
var app=express()

//app.use(取得資源路徑,express.static(靜態資源實際位置))
//如此則網頁端可以透過 /public/xxx/xxx.js取得 ./public/xxx/xxx.js
app.use('/public/',express.static('./public/'))

//省略第一個參數表示後方資料夾內資源名稱可直接加在url後取得
//例如127.234.1.5:3000/index.html
app.use(express.static('./public/'))
```