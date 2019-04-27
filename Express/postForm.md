# 在網頁中Post資料到伺服器(利用Express)

```html
<form action="/feedback" method="POST">
    <div>
        <input type="text" name="name" placeholder="請輸入名稱">
    </div>
    <div>
        <textarea name="message" cols="30" rows="10" placeholder="請輸入留言"></textarea>
    </div>
    <div>
        <button type="submit">送出</button>
    </div>
</form>
```
在Server中透過Express接收Post資料

**注意：Express預設沒有提供套件,但官網有提供下載位置**

> [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html)

透過npm 安裝
```shell
npm --save install body-parser
```
配置使用
```js
var express=require('express')
var bodyParser=require('body-parser')
var app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//配置完成後,request會配置body屬性,用以獲取post資料
app.post('/feedback',function(req,res){
    console.log(req.body)
})
```
terminal獲得資料如下:
```shell
[Object: null prototype] { name: '大灌王', message: '222' }
```