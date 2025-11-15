import js from '@eslint/js'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['dist/**'],
    plugins: {
      'react-refresh': reactRefresh
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
    }
  }
]
