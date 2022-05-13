module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  plugins: ['prettier'],
  // extends: 'airbnb-base',
  rules: {
    // 1. off 关闭 对应数字0
    // 2. warn 警告 对应数字1
    // 3. error 错误 对应数字2
    // 'no-console': 'warn',
    // 'semi': 'warn',
    // 'eol-last': 'off',
    // 'no-new': 'off',
    // 'arrow-parens': 'off',
    // 'no-duplicate-imports': 'error',
    // 'import/no-extraneous-dependencies': 'off',
    // 'comma-danger': 'off',
    // 'no-useless-escape': 'off'
    'no-console': 'warn',
    semi: 'off',
    'eol-last': 'off',
    'no-new': 'off',
    'arrow-parens': 'off',
    'import/no-extraneous-dependencies': 'off',
    'comma-danger': 'off',
    'no-useless-escape': 'off',
    // 'prettier/prettier': 'error',
  },
   // 语言风格
   parserOptions: {
    // 支持import
    sourceType: 'module'
  },
}