let MONGODB_URI = 'mongodb://localhost/zhangfu'

if (process.env.MONGODB_URI) {
  //MONGODBURL ：改为自己线上的mongodb_uri
  MONGODB_URI = 'mongodb://root:65oosDNoneacnzPVG73zCoevgXLFDFS0SHhTAvaF@clyqlklfouet.mongodb.sae.sina.com.cn:10523,ipzwyjblkjsv.mongodb.sae.sina.com.cn:10523'
}

module.exports = {
  MONGODB_URI: MONGODB_URI
}
