module.exports = {
  apps : [

    // First application
    {
      name      : 'tryzf-blog',
      script    : 'server.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      port: '3002',
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ]
};
