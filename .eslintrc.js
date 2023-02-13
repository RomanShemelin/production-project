module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "plugin:react/jsx-runtime",
    "plugin:i18next/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "react/jsx-indent": [2, 4],
    "react/function-component-definition": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/strict-boolean-expressions": "warn",
    "@typescript-eslint/naming-convention": "warn",
    "i18next/no-literal-string": ["error", { markupOnly: true , ignoreAttribute: ['data-testid']}],
    "max-len": ["error", {ignoreComments: true}, { "code": 100 }]
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides:[{
    files:['**/src/**/*.test.{ts,tsx}'],
    rules: {
      "i18next/no-literal-string": 'off'
    }
  }]
};