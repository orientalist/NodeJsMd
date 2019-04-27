var express=require('express')
var app=express()

//app.use(取得資源路徑,express.static(靜態資源實際位置))
//如此則網頁端可以透過 /public/xxx/xxx.js取得 ./public/xxx/xxx.js
app.use('/public/',express.static('./public/'))

//僅有一個參數表示直接開放資源,不需添加其他路徑
//例127.123.4.2:3000/index.html
app.use(express.static('./pages/'))

app.get('/',(req,res)=>res.send('Hello World!'))

app.listen(3000,()=>console.log('Server is ready'))