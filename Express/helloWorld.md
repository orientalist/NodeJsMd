# 透過Express框架建立Hello world!服務

```js
//載入express模組
const express=require('express')
//建立伺服器
const app=express()
//等同於
var server=require('http').createServer()

//指定埠號
const port=3000

//此表明透過GET呼叫/的回呼方法
app.get('/',(req,res)=>res.send('Hello World!'))
//大約等同於
server.on('request',function(req,resp){
    if(req.url==='/'){
        resp.end('Hello World!')
    }
})

//指定監聽埠號,並建立server建立函式
app.listen(port,()=>console.log(`Example app listening in port ${port}!`))
//等同於
server.listen(3000,function(){
    console.log(`Example app listening in 3000`)
})
```