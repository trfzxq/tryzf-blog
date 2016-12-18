const db = require('./db.js');

module.exports = function (app) {
  app.post('/api/login', (req, res) => {
    const {username, password} = req.body
    db.User.findOne({ username }, 'password', (err, doc) => {
      switch (true) {
        case !!err:
          console.log(err)
          break;
        case !doc:
          res.send({state: 0, msg: '帐号不存在'});
          break;
        case doc.password === password:
          res.send({state: 1, msg: '登录成功'});
          break;
        case doc.password !== password:
          res.send({state: 0, msg: '密码错误'});
          break;
        default:
          res.send({state: 0, msg: '未知错误'});
      }
    })
  });


}
