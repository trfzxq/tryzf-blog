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


app.get('/*', (req, res) => {
  return res.sendFile(__dirname + '/dist/index.html')
})
app.listen(process.env.PORT || 8070)
