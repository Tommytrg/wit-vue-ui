import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginStorybook from 'eslint-plugin-storybook'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,cjs,mjs,ts,mts,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist',
      '**/storybook-static/'
    ],
  },
  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  skipFormatting,
  {
    plugins: {
      import: eslintPluginImport,
      storybook: eslintPluginStorybook

    },
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['**/*.stories.*'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]