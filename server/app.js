const http = require('http');
const request = require('request');
const url = require('url');


const OnRequest = (req, res) => {
  var key = (url.parse(req.url, true).query).key || '暴走大事件';
  var URL_ = 'http://op.juhe.cn/onebox/movie/video?key=1ac4b24f508ce239b7b50e34fa854ee6&q=' + key;

  request({
    url: 'http://op.juhe.cn/onebox/movie/video?key=1ac4b24f508ce239b7b50e34fa854ee6&q=机械师',
    method: 'GET'
  }, function(error, response, body) {
    if(error){
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    res.write(body);
    res.end();

  })

}

http.createServer(OnRequest).listen(process.env.PORT || 3000);
console.log('start server')
