const db = require('./db.js');
const uuid = require('node-uuid')
const session = {
  token: null
}
module.exports = function (app) {
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
          let token = createToken()
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

  /* 获取文件列表 */
  app.get('/api/getArticle', (req, res) => {
    let start = req.body.limit || 1
    let pageSize = req.body.pageSize || 10
    db.Article.find().sort({time:-1}).limit(pageSize).exec((err, data) => {
      if(err) {
        console.log(err)
      } else {
        console.log(data)
        res.json({'articles': data})
      }
    })
  });

  /*获取文件详情*/
  app.get('/api/getArticleDetaile/:id', (req, res) => {
    let id = req.params.id
    console.log(id)
    db.Article.findOne({'_id': id}).exec((err, data) => {
      if (err) {
        console.log(err)
      } else {
        res.json({'article': data});
      }
    })
  })
}

//创建token
function createToken () {
  let token = uuid.v4()
  session.token = token
  return token
}
