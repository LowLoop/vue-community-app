# vue-community-app
利用vue中文社区(www.vue-js.com) 提供的api开发的一个app
用到了全家桶:vuex, vue-router, axios等等.

## 项目结构
```
|-src  					//开发
|----api  			//抽取出来的api放这个目录
|----components  			//自己封装的组件
|----router  		//路由
|----assets  			//资源
|----store       //状态管理(vuex)
|----style  		//全局css样式
|----utils  			//axios——http插件或者放其它的一些工具类
|----views  				//vue页面
|-static          //自己从iconfont下的字体图标文件等
```

## 安装依赖
> npm install
## 启动命令
> npm run dev 然后访问 localhost:8888 (这是开发环境).端口号可以在 config/index.js里修改.
## 打包命令
> npm run build

