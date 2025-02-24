// eslint.config.mjs
import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    env: {
      browser: true,
      node: true
    },
    plugins: {
      react
    },
    rules: {
      "no-console": "warn",
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off"
    }
  }
];
