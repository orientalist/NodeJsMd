# 建立可透過http呼叫的js程式碼
```js
//載入http核心模組
var http=require('http')
//建立server
var server=http.createServer()
//綁定該服務可被呼叫的port,並啟動
server.listen(3000,function(){
    console.log('伺服器已啟動')
})
//啟動後,透過.on()監聽request
server.on('request',function(request,response){
    //於此區域可撰寫收到請求後的處理程式碼
    console.log('收到請求了')
})
```
***

**備註:server成功建立後,在瀏覽器輸入網址 [http://127.0.0.1:3000](http://127.0.0.1:3000) 就可進行訪問**