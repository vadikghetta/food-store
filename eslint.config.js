module.exports = { 
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["build", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
 "semi": ["error", "always", { "omitLastInOneLineBlock": false}],
 'comma-dangle': ["error", "never"],
 quotes: ["error", "double"],
 "react/prop-types": [0],
 "indent": ["error", "tab"]
  },
};