const express=require('express')
const app=express()

app.use('/pages/',express.static('./pages/'))

app.listen(3000,function(){
    console.log('express is ready')
})

app.get('/',function(req,res){
    
})