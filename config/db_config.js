let MONGODB_URI = process.env.NODE_ENV !== 'production' ? 'mongodb://localhost' : 'mongodb://tryzf:tryzf253545@127.0.0.1:27017/zhangfu'
// MONGODB_URI 为本地mogodb的URI
module.exports = {
  MONGODB_URI: MONGODB_URI
}
