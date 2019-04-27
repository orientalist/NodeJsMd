# require的原則
1. 暫存區優先加載
例如有 main.js a.js b.js三個檔案,程式碼如下
```js
/*main.js*/
require('./a')
var fn=require('./b')
console.log(fn)
/**/

/*a.js*/
console.log('a被加載了')
var fn=require('./b')
console.log(fn)
/**/

/*b.js*/
console.log('b被加載了')
module.exports=function(){
    console.log('Hello world!')
}
/**/
```
執行結果
```
zhuanggangdeMBP:code zhuangguangxiang$ node main.js
a被加載了
b被加載了
[Function]
[Function]
zhuanggang
```
執行結果說明,在a.js中已經被加載過的b.js被再次require時,會直接從暫存區取出 `module.exports` 的物件,而不會執行b.js的程式碼,以加快速度與避免資源浪費
***
2. 模組標示符
   
   require()方法內的參數稱為 **模組標示符**
  
- 如果 **非路徑形式** 標示符,則一定是則為 **核心模組** 或 **第三方模組**
```js
//核心模組
var fs=require('fs')
//第三方模組
var template=require('art-template')
```
- **路徑形式標示符**
  - 用以加載**自己編寫**的模組
  - `.`表示當前目錄(不可省)
  - `..`表示上一層(不可省)
  - `.js`可以省略
  - `/`表示**硬碟**根目錄(不要使用)
  - 也可以`D://a/b/...`(不要使用)
```js
var foo=require('./foo.js')
//或
var foo=require('./foo')
```
3. 核心模組
   - 核心模組其實也是`.js文件`
   - 但已經被編譯到二進制文件中,可直接加載
4. 第三方模組
   - 第三方模組皆使用npm加載
   - 可直接使用`require('模組名稱')`加載
```cmd
terminal 安裝art-template
npm -i art-template
```
```js
//js中加載
var template=require('art-template')
```
- 運作流程
  1. 當require的參數`非核心模組`且`非路徑標示符`,node會去尋找當前文件同目錄下的`node_modules`資料夾
  2. 找尋`node_mudules`中的`參數模組名`的`package.json`文件
  3. 找尋`package.json`中的`main`屬性
  4. `main`屬性即該模組`實際`載入的`.js`文件
  5. 若該目錄下`package.json`不存在;`main`屬性遺失;`main`屬性的js檔不存在,會直接加載`index.js`,若連`index.js`也不存在,會`一直往上級查找`  
  6. 若連`硬碟根目錄`皆無,則會報錯- `cant find module ***`
```js
var template=require('art-template')
//等同於
var template=require('./lib/index.js')
```
*** 因此最佳的做法是將node_modules放置於專案共同根目錄 *** 

> 參考書目[<<深入淺出Node.js>>](https://www.infoq.cn/article/nodejs)