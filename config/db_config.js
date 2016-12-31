let MONGODB_URI = 'mongodb://localhost/zhangfu'

if (process.env.MONGODB_URI) {
  //MONGODBURL ：改为自己线上的mongodb_uri
  MONGODB_URI = MONGODBURL
}

module.exports = {
  MONGODB_URI: MONGODB_URI
}
