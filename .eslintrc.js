module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串
    'no-multi-str': 0,
    'no-undef': 0,
    'no-dupe-keys': 0,
    'key-spacing': 0,
    'no-trailing-spaces': 0,
    "no-unused-vars": [0, { "vars": "all", "args": "none" }]
  }
}
