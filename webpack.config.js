module.exports = process.env.ENV === 'dev'
  ? require('./webpack.config.dev')
  : require('./webpack.config.prod');
