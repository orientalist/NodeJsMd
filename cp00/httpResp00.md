# 回應http Request
```js
var http=require('http')
var server=http.createServer()
server.listen(3000,function(){
    console.log('Server is ready.')
})
server.on('request',function(request,response){
    //透過response.write()可以寫入要回應的內容
    //.write()在response.end()前可以多次呼叫
    response.write('你好啊')
    response.end()
    //注意!務必以.end()結尾,否則瀏覽器會處於等待狀態
})
```