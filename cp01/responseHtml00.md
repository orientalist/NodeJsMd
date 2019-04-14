# 如何回應Html頁面
```js
var http=require('http')
var server=http.createServer()
var fs=require('fs')

server.listen(3000,function(){
    console.log('Server is ready')
})

server.on('request',function(request,response){
    //如前所述,我們可以透過response.end('回應字串')回饋客戶端
    //我們可以直接將html代碼作為參數呼叫此方法,不過不實際
    response.end('<h1>Hi</h1>')
    //正確應以fs讀取檔案作並將讀取結果作為參數呼叫.end()
    fs.readFile('./index.html',function(err,data){
        //記得設置標頭中的Content-Type
        response.setHeader('Content-Type','text/html; charset=utf-8')
        response.end(data.toString());
    })
})
```