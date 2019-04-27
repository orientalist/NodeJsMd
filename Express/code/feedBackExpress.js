var express=require('express')

var bodyParser=require('body-parser')

var app=express()

app.use('/public/',express.static('./public/'))

app.engine('html',require('express-art-template'))

app.set('view options',{
    debug:process.env.NODE_ENV!=='production'
})

//配置body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

var messages=[
    {name:'Zhuang',message:"Hi",date:"2019/01/01"},
    {name:'Zhuang1',message:"Hi1",date:"2019/01/02"},
    {name:'Zhuang2',message:"Hi2",date:"2019/01/03"},
    {name:'Zhuang3',message:"Hi3",date:"2019/01/04"},
    {name:'Zhuang4',message:"Hi4",date:"2019/01/05"}
]

app.get('/',function(req,res){
    res.render('index.html',{
        title:"留言板測試",
        Welcome:"歡迎來到留言板",
        Messages:messages
    })
})

app.get('/feedback',function(req,res){
    res.render('feedback.html')
})

app.post('/feedback',function(req,res){
    //1.接收post資料
    var message=req.body
    //2.處理
    message.date=new Date()
    messages.unshift(message)
    //3.回覆
    res.redirect('/')
})

app.get('/someGet',function(req,res){
    console.log(req.query)
    res.end()
})

app.listen(3000,function(){
    console.log('server is ready')
})