var express=require('express')

var app=express()

app.engine('html',require('express-art-template'))

app.set('view options',{
    debug:process.env.NODE_ENV!=='production'
})

app.use('/public/',express.static('./public/'))

app.get('/',function(req,res){
    res.render('index.html',{
        title:"art-template",
        Welcome:"Hello!Welcome Here!"
    })
})

app.get('/post',function(req,res){
    res.send('post page')
})

app.listen(3000,function(){
    console.log('express is ready')
})