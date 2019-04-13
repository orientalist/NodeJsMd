# 一個I/O測試
1. 目標：以JavaScript語言讀取檔案
```js
var fs=require('fs')
/*fs.read('文件路徑',回調函數(失敗參數,成功檔案){
    函數讀取後執行(不論成功失敗)
})*/
fs.read('./test.txt',function(err,data){
    console.log(data.toString())
})
```
2. 目標:寫文件
```js
var fs=require('fs')
/*fs.write('文件路徑','寫入內容',回調函數(失敗參數){
    函數讀取後執行(不論成功失敗)
})*/
fs.write('./test.txt','Hello World!',function(err){
    if(err){
        console.log(err.toString())
    }
})
```