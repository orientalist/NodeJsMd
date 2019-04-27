# 在Express中取得QueryString

Express內置方法
```js
app.get('/someGet',function(req,res){
    var obj=req.query
    console.log(obj)
})
```
取得內容
```shell
{ a: '123', b: '456' }
```