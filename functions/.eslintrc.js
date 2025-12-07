module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "error",
    "quotes": ["error", "double", {allowTemplateLiterals: true}],
    "object-curly-spacing": ["error", "always"],
    "max-len": ["error", {code: 120}],
    "indent": ["error", 2],
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "no-unused-vars": ["error", {argsIgnorePattern: "^_"}],
    "camelcase": "off",
  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {},
    },
  ],
  globals: {},
};
