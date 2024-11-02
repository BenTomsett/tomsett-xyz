import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginTailwind from 'eslint-plugin-tailwindcss';


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    ignores: [
        '*.config.js'
    ]
  },
  {
    rules: {
      "tailwindcss/no-custom-classname": [1, {
        whitelist: ['icon\\-.*']
      }]
    }
  },
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  pluginReact.configs.flat.recommended,
  ...pluginTailwind.configs['flat/recommended'],
];