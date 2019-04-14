# 透過url控制靜態資源存取
在Node.js控管的html中,靜態資源的路徑**不需要**依照資源的真實位置填寫,您可以在Server程式碼中解析url以回應您想控制的資源,如此便可以防止不必要的路徑外洩以及控管資源存取

原理說明
```html
<!--先於html頁面設定靜態資源路徑(可以依據您的安排設計)-->
<script src="/public/lib/jquery.js"></script>
```
```js
//當Server收到Request後,便可解析並返回指定資源
var url=rquest.url
if(url.indexOf('/public')===0){
    fs.readFile('.'+url,function(err,data){
        response.end(data)
    })
}
```