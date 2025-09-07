/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
  parserOptions: {
    ecmaVersion: 2020,                  // 支持最新的 ECMAScript 特性
    sourceType: 'module',               // 支持 ES 模块
    ecmaFeatures: {
      jsx: true,                        // 启用 JSX 语法（如果有使用 JSX）
    },
  },
  extends: [
    'plugin:vue/vue3-recommended',      // 启用 Vue 3 推荐规则
    'eslint:recommended',               // 启用 ESLint 默认推荐规则
    'plugin:@typescript-eslint/recommended', // 启用 TypeScript 推荐规则
    'plugin:prettier/recommended',      // 启用 Prettier 配置并确保 Prettier 和 ESLint 不冲突
  ],
  plugins: [
    'vue',                             // 使用 Vue 插件
    '@typescript-eslint',               // 使用 TypeScript 插件
    'prettier',                         // 使用 Prettier 插件
  ],
  rules: {
    'prettier/prettier': 'error',        // 报告 Prettier 格式化错误
    'vue/multi-word-component-names': 'off',  // 关闭 Vue 组件名必须是多单词的规则
    '@typescript-eslint/no-unused-vars': ['warn'],  // 提醒未使用的变量
    '@typescript-eslint/no-explicit-any': 'off',  // 允许使用 any 类型（根据需要启用）
    'no-console': 'warn',               // 控制台输出的警告
    'no-debugger': 'warn',              // debugger 语句的警告
    'vue/valid-v-model': 'off',         // 关闭 v-model 的校验
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],          // 针对 TypeScript 文件单独设置
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn', // 警告显示 any 类型的使用
      },
    },
  ],
}
