module.exports = {
  apps : [

    // First application
    {
      name      : 'tryzf-blog',
      script    : 'server.js',
      env: {
        NODE_ENV: 'production'
      },
      port: '3002',
      "log_date_format" : "YYYY-MM-DD HH:mm Z",
      "log_file"  : "/var/log/pm2/www-entire.log",
      "error_file": "/var/log/pm2/www-err.log",
      "out_file"  : "/var/log/pm2/www-out.log"
    }
  ]
};
