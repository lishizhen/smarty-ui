module.exports = {
  env: { browser: true, node: true, es6: true },
  globals: {
    __defaultImgPrefix__: true,
    _global: true,
    swan: true,
    qq: true,
    tt: true,
    my: true,
    ap: true,
    __webpack_public_path__: true,
    wx: true,
    jQuery: true,
    __DEV__: true,
    rprm: true,
  },
  parser: "@babel/eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier/react",
    "prettier",
  ],
  plugins: ["react", "prettier"],
  parserOptions: {
    sourceType: "module",
    parser: "@typescript-eslint/parser", // 解析 .ts 文件
  },
  rules: {
    "prefer-const": "error",
    "no-var": "error",
    "react/prop-types": "off",
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      env: { browser: true, node: true, es6: true },
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/react",
        "prettier",
      ],
      plugins: ["react", "@typescript-eslint"],
      globals: {
        __defaultImgPrefix__: true,
        _global: true,
        swan: true,
        qq: true,
        tt: true,
        my: true,
        ap: true,
        __webpack_public_path__: true,
        wx: true,
        jQuery: true,
        __DEV__: true,
        rprm: true,
      },
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
      },
    },
  ],
};
