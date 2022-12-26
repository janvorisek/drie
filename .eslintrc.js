module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    //"plugin:vue/recommended",
    "prettier",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
  },
  ignorePatterns: ["dist", "index.d.ts"],
};
