const mongoose = require('mongoose')
const Schema = mongoose.Schema
const init = require('./init.json')


const userSchema = new Schema({
  username: String,
  password: String
})

const articleSchema = new Schema({
  title: String,
  date: Date,
  content: String
})

const Models = {
  User: mongoose.model('User', userSchema),
  Article: mongoose.model('Article', articleSchema),
  initialized: false
}

const initialize = function () {
  Models.User.find(null, function (err, doc) {
    if (err) {
      console.log(err)
    } else if (!doc.length) {
      console.log('Database opens for the first time...')
      Promise.all(init.map(item => new Models[item.type](item).save()))
        .then(() => console.log('Initialize successfully.'))
        .catch(() => console.log('Something went wrong during initializing.'))
    } else {
      Models.initialized = true
    }
  })
}


mongoose.connect('mongodb://localhost/drifter')

const db = mongoose.connection

db.on('error', function () {
  console.log('Database connection error.')
})

db.once('open', function () {
  console.log('The database has connected.')
  initialize()
})

module.exports = Models
