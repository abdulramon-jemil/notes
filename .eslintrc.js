module.exports = {
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier"
  ],

  env: { node: true },
  ignorePatterns: ["!.*"],
  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2020,
    project: ["./tsconfig.eslint.json"]
  },

  plugins: ["@typescript-eslint"],
  root: true,

  rules: {
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        ts: "never"
      }
    ],
    "arrow-parens": ["error", "always"],

    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true }
    ],

    "no-restricted-syntax": "off",
    quotes: ["error", "double"],
    semi: ["error", "never"]
  }
}
