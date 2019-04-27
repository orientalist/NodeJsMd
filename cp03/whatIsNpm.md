# npm簡介
他是`node套件管理器`

在安裝node.js時會同時安裝

用於安裝第三方套件時,`最好加入--save參數`-用以記錄專案與套件的`相依性`

使用`--save`指令前必須先使用`npm init`來創建`package.json`文件(模組描述文件) 

使用`--save`參數後會在`package.json`中紀錄專案使用的`第三方套件的版本`

1. terminal:
```
zhuanggangdeMBP:code zhuangguangxiang$ npm install jauery --save
```
2. package.json
```json
{
  "dependencies": {
    "jquery": "^3.4.0"
  }
}
```
3. 一但丟失`node_modules`資料夾而未丟失`package.json`,即可透過`npm install`來取回專案相依的第三方套件
***
## npm網站
[npm官方網站](https://www.npmjs.com/)

這個網站是js第三方套件的集合站,可以用來搜尋/瀏覽/下載/發布 套建

# npm常用指令
1. `npm --version`:查看npm版本
2. `npm install --global npm`:升級
3. `npm init`:初始化npm套件資料夾
   - `npm init -y`:快速生成
4. `npm install`:依照package.json下載套件(`npm i`)
   - `npm install 套件名稱`:直接下載指定套件(`npm i 套件名稱`)
   - `npm install 套件名稱 --save`:下載套件並記錄到package.json(`npm i 套件名稱 -S`)
5. `npm uninstall 套件名稱`:刪除指定套件(`npm un 套件名稱`)
   - 注意:只刪除,若該模組被**其他模組依賴**,則會保存且**package.json**內訊息不會刪除
   - `npm uninstall --save 套件名稱`:刪除同時去除package.json訊息(`npm un --save 套件名稱`)
6. `npm help`:查看幫助
   - `npm 指令 --help`:查看指定命令幫助

> [常用命令](https://www.cnblogs.com/PeunZhang/p/5553574.html)
***
## 加速npm下載
> [npm中國鏡像](http://npm.taobao.org/)

使用步驟:
1. 安裝`cnpm`
```
#--global表示全局安裝(全作業系統)
npm install --global cnpm
```
2. 之後的安裝以`cnpm`開頭
```
cnpm install art-template
```
***
**備註**:想用淘寶資源卻不想下載cnpm:
1. 在npm install指令後加上--registry=https://registry.npm.taobao.org
```
npm install jquery --registry=https://registry.npm.taobao.org
```
2. 或將設定加入config
```shell
npm config set registry https://registry.npm.taobao.org
```
3. 經上設定,爾後任何下載**自動由淘寶**取得,可由下查看配置
```
npm config list

; cli configs
metrics-registry = "https://registry.npmjs.org/"
scope = ""
user-agent = "npm/6.7.0 node/v11.12.0 darwin x64"

; node bin location = /usr/local/bin/node
; cwd = /Users/zhuangguangxiang/github/markDown/Node.js/cp03/code
; HOME = /Users/zhuangguangxiang
; "npm config ls -l" to show all defaults.
```
***
