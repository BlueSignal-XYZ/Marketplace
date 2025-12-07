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
  ],
  rules: {
    "no-restricted-globals": ["error", "name", "length"],
    "prefer-arrow-callback": "off",
    "quotes": ["error", "double", { allowTemplateLiterals: true }],
    "object-curly-spacing": "off",
    "max-len": "off",
    "indent": "off",
    "require-jsdoc": "off",
    "valid-jsdoc": "off",
    "no-unused-vars": "off",
    "camelcase": "off",
    "comma-dangle": "off",
    "semi": "off",
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
