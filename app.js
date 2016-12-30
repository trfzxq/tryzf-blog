/*
* LEAN express cleanCloud SDK
*/
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const app = express();
const router = express.Router();
const API = require('./server/API.js');

// const LEAN = require('leanengine')
//
// LEAN.init({
//   appId: process.env.LEANCLOUD_APP_ID || '{{appid}}',
//   appKey: process.env.LEANCLOUD_APP_KEY || '{{appkey}}',
//   masterKey: process.env.LEANCLOUD_APP_MASTER_KEY || '{{masterkey}}'
// })
//
// app.user(LEAN.express())

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/dist')));
app.use(express.static(path.join(__dirname, '/src/assets')));
app.use(router);

app.set('trust proxy', 1)
const sess = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}

app.use(session(sess));

//api请求
API(app);


app.get('/*', function (req, res) {
  return res.sendFile(__dirname + '/dist/index.html')
})

// app.listen(process.env.LEANCLOUD_APP_PORT)

app.listen(3000, function(){
  console.log('start vue2.0 blog server')
});
