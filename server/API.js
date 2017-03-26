const db = require('./db.js');
const uuid = require('node-uuid')
const crypto = require('crypto')

const session = {
  token: null,
  username: null
}
module.exports = function (app) {

  app.post('/api/*', checkLogin)
  app.delete('/api/*', checkLogin)
  app.put('/api/*', checkLogin)

  app.get('/api/*', isIllegal)
  /* 登录
  *  @body username
  *  @body password
  */
  app.post('/api/login', (req, res) => {
    let {username, password} = req.body
    password = createdMd5Pwd(password)
    db.User.findOne({ username }, (err, doc) => {
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

  /*  signout
  *
  */
  app.get('/api/signout', (req, res) => {
    signout();
    res.json({state: 1, msg: '已登出'})
  })

  /* 获取文章列表
  *  @param limit 一页显示几条数据
  * @param skip  从第几页开
  * @param name 搜索文章的字段
  */
  app.get('/api/getArticle', (req, res) => {
    let limit = Number(req.query.limit) || 1
    let start = Number(req.query.skip) || 1

    let promise = db.Article.count()
    promise.then((count) => {
      return db.Article.find().skip((start - 1) * limit).sort({date: -1}).limit(limit).exec((err, data) => {
        res.json({state: 1, 'articles': data, 'total': count})
      })
    }).catch(err => {
      res.json({state: 0, msg: err})
    })
  });

  /* search
  *
  */

  app.get('/api/search', (req, res) => {
    let key = req.query.key
    let pattern = new RegExp( key, 'i')
    db.Article.find({ 'content': pattern })
    .sort({ date: -1})
    .exec(function(err, docs) {
	    if (err) {
        res.json({state: 0, msg: err})
      } else {
        console.log(docs)
        res.json({state: 1, articles: docs})
      }
	  })
  })

  /*添加文章
  * @body title: 文章标题
  * @body date: 创建文章时间
  * @body content: 文章正文
  * @body types: 文字分类
  */
  app.post('/api/createdArticle', (req, res) => {
    let {title, content, types, sourceContent} = req.body
    let date = new Date()
    let createdArticleTime = date.toLocaleString()
    let createdArticleYear = date.getFullYear()
    let createdArticleMonth = date.getMonth() + 1
    types = types.split(';')
    let article = {
      title: title,
      date: createdArticleTime,
      content: content,
      types: types,
      sourceContent: sourceContent,
      author: session.username
    }
    let archive = {
      title: title,
      time: createdArticleTime,
      createdYear: createdArticleYear,
      createdMonth: createdArticleMonth
    }
    db.Article(article).save()
    .then((data) => {
      archive.id = data._id
      db.Archive(archive).save()
    })
    .then(() => {
      res.json({state: 1, msg: '创建成功'})
    })
    .catch(err => {
      res.json({state: 0, msg: err})
    })
  });

  /* 更改文章
  *
  */
  app.put('/api/updateArticle', (req, res) => {
    let { title, content, types, _id, sourceContent } = req.body
    let data = {
      title: title,
      content: content,
      sourceContent: sourceContent,
      types: types.split(';')
    }
    db.Article.update({'_id': _id}, {$set: data}, err => {
      if (err) {
        res.json({state: 0, msg: err})
      } else {
        res.json({state: 1, msg: '更改成功'})
      }
    })
  })

  /*  获取归档列表
  *
  */
  app.get('/api/getArchive', (req, res) => {
    db.Archive.aggregate([
      {
        $sort: { createdYear: -1}
      },
      {
        $group: {
          _id: "$createdYear",
          articleList: { $push: "$$ROOT"}
        }
      }
    ]).exec((err, data) => {
      if (err) {
        res.json({state: 0, msg: err})
      } else {
        res.json({state: 1, archive: data})
      }
    })
  })

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
      date: (new Date()).toLocaleString(),
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

/* 添加社交帐号信息
*  @body src: 图标的src
*  @body path: 社交链接
* @body  isAction: 显示
*/
app.post('/api/saveSocialContact', (req, res) => {
  let {src, path, isAction} = req.body
  let data = {
    src: src,
    path: path,
    isAction: isAction
  }
  db.SocialContact(data).save((err, data) => {
    if (err) {
      res.json({state: 0, msg: err})
    } else {
      res.json({state: 1, msg: '添加成功'})
    }
  })
});

/* 更新社交帐号
*  @body _id 、src path  isAction
*/
app.put('/api/updateSocialContact', (req, res) => {
  let { _id, src, path, isAction } = req.body
  let data = {
    src: src,
    path: path,
    isAction: isAction
  }
  db.SocialContact.update({'_id': _id}, {$set: data}, err => {
    if (err) {
      res.json({state: 0, msg: err})
    } else {
      res.json({state: 1, msg: '更改成功'})
    }
  })
})

/* 删除社交图标
*
*/
app.delete('/api/removeSocialContact', (req, res) => {
  let id = req.query.id
  db.SocialContact.remove({'_id': id}).exec((err, data) => {
    if (err) {
      res.json({state: 0, msg: err})
    } else {
      res.json({state: 1, msg: '删除成功'})
    }
  })
})

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

/* 修改密码
*
*/
app.put('/api/updatePwd', (req, res) => {
  let username = session.username || 'zlj'
  let oldPwd = createdMd5Pwd(req.body.oldPwd)
  let newPwd = createdMd5Pwd(req.body.newPwd)
  db.User.findOne({username: username}, (err, user) => {
    new Promise((resolve, reject) => {
      if (err) {
        reject(err)
      } else {
        resolve(user)
      }
    })
  }).then(user => {
    if (oldPwd !== user.password) {
      res.json({state: 0, msg: '原密码不正确'})
      return
    } else if (newPwd === user.password) {
      res.json({state: 0, msg: '新密码和原密码不能相同'})
      return
    }
    //进行密码更新
    db.User.update({'username': username}, {$set: {'password': newPwd}}, (err) => {
      if (err) {
        res.json({state: 0, msg: err})
      } else {
        let token = createToken(username)
        res.json({state: 1, msg: '更改成功', token: token})
      }
    })
  },
  err => {
    res.json({state: 0, msg: err})
  });
});

/* 更改个人信息
*  @body headURL: 用户头像的地址
*  @body blogTitle: 博客的名字
*  @body motto: 座右铭
*/
app.put('/api/updateUserInfo', (req, res) => {
  let { headURL, blogTitle, motto } = req.body
  let username = session.username
  let data = {
    'headURL': headURL,
    'blogTitle': blogTitle,
    'motto': motto
  }
  if (!username) {
    res.json({state: 0, msg: '当前用户不存在，请重新登录'});
    return
  }
  db.UserInfo.update({username: username}, {$set: data}, err => {
    if (err) {
      res.json({state: 0, msg: err})
    } else {
      res.json({state: 1, msg: '更新成功', userInfo: data})
    }
  })
});

/* 添加菜单
* @body path: 跳转路径
* @body text: 显示的文字
*/
app.post('/api/addNav', (req, res) => {
  let { path, text } = req.body
  let data = {
    path: path,
    text: text
  }
  db.Nav(data).save((err, data) => {
    if (err) {
      res.json({state: 0, msg: err})
    } else {
      res.json({state: 1, msg: '添加成功'})
    }
  })
});

/* 删除菜单
*  @body _id
*/
app.delete('/api/removeNav', (req, res) => {
  let id = req.query.id
  db.Nav.remove({'_id': id}).exec((err, data) => {
    if (err) {
      res.json({state: 0, msg: err})
    } else {
      res.json({state: 1, msg: '删除成功'})
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
//登出
function signout () {
  session.token = null;
}

/* md5 加密
*
*/
function createdMd5Pwd (password) {
  let md5 = crypto.createHash('md5')
  return md5.update(password).digest('hex')
}
//验证是否存在token，不存在则登录
function checkLogin(req, res, next) {
  let token = req.headers.authorization;
  let url = req.url;
  if (session.token === token || url === '/api/login') {
    next()
  } else {
    res.status(403).send('您没有权限访问！');
  }
}
//过滤非法操作访问
function isIllegal (req, res, next) {
  let token = req.headers.authorization
  if (!session.token && token) {
    res.status(403).send('您没有权限访问！')
  } else {
    next()
  }
}
