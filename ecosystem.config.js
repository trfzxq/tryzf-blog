module.exports = {
  apps : [

    // First application
    {
      name      : 'tryzf-blog',
      script    : 'server.js',
      env: {
        NODE_ENV: 'production'
      },
      port: '3002'
    }
  ]
};
