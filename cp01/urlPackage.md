# Node.js的url套件
url套件屬於Node.js核心模組

其用途在於快速分析url、獲取query string

使用方式：
```js
var urlTool=require('url')
//解析url:.parse('url路徑',是否物件化query string)
var queryObj=urlTool.parse('https://www.google.com?name=Wang',true)
```
```terminal
輸出結果:
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.google.com',
  port: null,
  hostname: 'www.google.com',
  hash: null,
  search: '?name=Zhuang',
  query: [Object: null prototype] { name: 'Zhuang' },
  pathname: '/',
  path: '/?name=Zhuang',
  href: 'https://www.google.com/?name=Zhuang' }
```
