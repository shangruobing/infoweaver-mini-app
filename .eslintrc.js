module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': 0,
    // 'vue/no-multiple-template-root': 0,
    'object-shorthand': 0,
    'space-before-function-paren': 0
  },
  globals: {
    uni: true
  }
}
