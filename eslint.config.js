// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  // dist 폴더 전체 ESLint 무시
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended, // 기본 JS 규칙
      tseslint.configs.recommended, // TypeScript 규칙
      reactHooks.configs['recommended-latest'], // 최신 React Hooks 규칙
      reactRefresh.configs.vite // Vite용 React Refresh
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    rules: {
      // React Hooks 추가 규칙 (옵션)
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error'
    }
  }
])
