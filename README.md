# vue2.0构建的一个SPA博客

> 前端采用了2.0版本(vue + vue-router + vuex + vue-resource)等，API端采用express + mongodb.[项目Demo](tryzf.online)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

#api serve localhost:3000
npm run start

//上面是开发环境启动，下面是生成环境
# build for production with minification
npm run build

#api serve localhost:3000
npm run start
```

### 修改config/db_config.js里面的URI 本地mongodbURI  
> 例如：mongodb://tryzf:tryzf253545@127.0.0.1:27017/zhangfu（数据库有帐号密码的情况）
> 'mongodb://l27.0.0.1:27017/zhangfu (数据库无帐号密码)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
