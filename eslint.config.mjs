import js from '@eslint/js'
import ts from 'typescript-eslint'
import prettierLint from 'eslint-plugin-prettier/recommended'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

export default ts.config(
  js.configs.recommended,
  ts.configs.recommended,
  prettierLint,
  // ignore list
  {
    ignores: ['bin', 'build', 'node_modules', 'public', 'tailwind.config.js'],
  },
  // react rules
  {
    files: ['app/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
  },
  // custom general rules
  {
    rules: {
      'no-irregular-whitespace': 'off',
      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
        },
      ],
    },
  }
)
