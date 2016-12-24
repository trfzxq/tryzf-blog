const db = require('./db.js');
const uuid = require('node-uuid')
const session = {
  token: null,
  username: null
}
module.exports = function (app) {
  /* 登录
  *  @body username
  *  @body password
  */
  app.post('/api/login', (req, res) => {
    const {username, password} = req.body
    db.User.findOne({ username }, 'password', (err, doc) => {
      switch (true) {
        case !!err:
          console.log(err)
          break
        case !doc:
          res.send({state: 0, msg: '帐号不存在'})
          break;
        case doc.password === password:
          let token = createToken(username)
          res.send({state: 1, msg: '登录成功', token: token})
          break
        case doc.password !== password:
          res.send({state: 0, msg: '密码错误'})
          break
        default:
          res.send({state: 0, msg: '未知错误'})
      }
    })
  });

  /* 获取文件列表
  *  @param limit 一页显示几条数据
  * @param skip  从第几页开
  * @param name 搜索文章的字段
  */
  app.get('/api/getArticle', (req, res) => {
    let limit = req.query.limit || 1
    let start = req.query.skip || 1
    let query = req.query.name || {}

    db.Article.count(query, function(err, data) {
      return new Promise((resolve, reject) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    }).then((count) => {
      if (count < limit) {
        start = 1
      } else {
        start = start * limit
      }
      db.Article.find().skip((start - 1) * limit).sort({time:-1}).limit(limit).exec((err, data) => {
        if(err) {
          res.json({state: 0, msg: err})
        } else {
          res.json({state: 1, 'articles': data, 'total': count})
        }
      })
    }, (err) => {
      res.json({state: 0, msg: err})
    })
  });

  /*添加文章
  * @body title: 文章标题
  * @body date: 创建文章时间
  * @body content: 文章正文
  * @body types: 文字分类
  */
  app.post('/api/createdArticle', (req, res) => {
    let {title, content, types} = req.body
    types = types.split(';')
    let article = {
      title: title,
      date: new Date(),
      content: content,
      types: types,
      author: session.username
    }
    console.log(article, '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    db.Article(article).save((err, data) => {
      if (err) {
        res.json({state: 0, msg: err})
      } else {
        res.json({state: 1, msg: '创建成功'})
      }
    })
  });

  /*草稿箱
  * @body title: 文章标题
  * @body date: 创建文章时间
  * @body content: 文章正文
  * @body types: 文字分类
  */
  app.post('/api/saveArticle', (req, res) => {
    let {title, date, content, types} = req.body
    types = types.split(';')
    let article = {
      title: title,
      date: new Date(),
      content: content,
      types: types,
      author: session.username
    }
    db.TemporaryArticle(article).save((err, doc) => {
      if (err) {
        res.json({state: 0, msg: err})
      } else {
        res.json({state: 1, msg: '保存成功'})
      }
    })
  });

  /* 删除指定id的文章
  *  @params id: 文章的id
  */
  app.delete('/api/removeArticle/', (req, res) => {
    let id = req.query.id
    db.Article.remove({'_id': id}).exec((err, data) => {
      if (err) {
        res.json({state: 0, msg: error})
      } else {
        res.json({state: 1, msg: '删除成功'})
      }
    })
  });

  /* 获取文件详情
  *  @params id : 文章的id
  */
  app.get('/api/getArticleDetaile/:id', (req, res) => {
    let id = req.params.id
    db.Article.findOne({'_id': id}).exec((err, data) => {
      if (err) {
        res.json({state: 0, msg: err})
      } else {
        res.json({state: 1, 'article': data})
      }
    })
  });

  /*
  * 获取用户信息接口
  */
  app.get('/api/getUserInfo', (req, res) => {
    db.UserInfo.findOne({}).exec((err, data) => {
      if (err) {
        res.json({state: 0, msg: err})
      } else {
        res.json({state: 1, userInfo: data})
      }
    })
  });

  /*
  * 获取社交帐号信息
  */
  app.get('/api/getSocialContact', (req, res) => {
    db.SocialContact.find().exec((err, data) => {
      if (err) {
        res.json({state: 0, msg: err})
      } else {
        res.json({state: 1, socialContact: data})
      }
    })
  });

  /*
  * 获取导航菜单
  */
  app.get('/api/getNavList', (req, res) => {
    db.Nav.find().exec((err, data) => {
      if (err) {
        res.json({state: 0, msg: err})
      } else {
        res.json({state: 1, navList: data})
      }
    })
  });
}

/*
* 创建token
*/
function createToken (username) {
  let token = uuid.v4()
  session.token = token
  session.username = username
  return token
}
