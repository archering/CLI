### 编写一个命令行工具并发布到npm，大约分3步

（1）编写一个本地应用，用node  index.js 调试

 (2)  设置#! /usr/bin/env node  ； $ chmod 755 abc.js ； package.json    ; npm link  本地安装测试
 
 (3) 发布


 ### 设置入口程序  修改完善package.json

项目入口程序 比如index.js 

第一行加入

"#! /usr/bin/env node"

package.json

```

  {
      "name": "abc",
      "version": "0.0.1",
      "description": "List all the files in a directory!",
      "preferGlobal": "true",  //全局安装
      "bin": { "nf": "abc.js" },// nf 就是你要发布的CLI 命令行命令名  abc.js 是入口程序
      "author": "steel1990",
      "engines": { "node": "*" }
  }
```

### 发布一个编写好的包大概有4步

下面处理如何发布命令行工具到 npm

(1)注册一个github账户用于托管代码

(2)注册一个npm账户
```
      打开这个https://www.npmjs.com/signup 网站 注册一个账号
      然后在命令行 输入npm login 登陆
      >  npm login
      Username: ericeverme
      Password:
      Email: (this IS public) archerzing@gmail.com
      Logged in as ericeverme on http://registry.npmjs.org/.
```
为了保障npm login 成功，需要你先检查 	
>  \> npm config list 

查看是不是 registry = "http://registry.npm.taobao.org/"

一般这一步，还伴随着修改.npmrc

(3) npm adducer

  >  \> npm adduser
  Username: ericeverme
  Password:
  Email: (this IS public) archerzing@gmail.com
  Logged in as ericeverme on http://registry.npmjs.org/.

(4) npm publish
命令行输入下面
  > \> npm publish  


