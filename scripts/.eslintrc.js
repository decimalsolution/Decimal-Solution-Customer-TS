module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "script",
  },
  rules: {
    // Allow require statements in Node.js scripts
    "@typescript-eslint/no-var-requires": "off",
    // Allow unused variables in scripts (they might be used for side effects)
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    // Disable React-specific rules for Node.js scripts
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "off",
    // Disable React-specific rules that don't apply to Node.js
    "react/no-this-in-sfc": "off",
    "react/function-component-definition": "off",
    // Allow console.log in scripts
    "no-console": "off",
    // Disable rules that don't apply to Node.js scripts
    "no-undef": "off",
  },
  globals: {
    process: "readonly",
    Buffer: "readonly",
    __dirname: "readonly",
    __filename: "readonly",
    global: "readonly",
    module: "readonly",
    require: "readonly",
    exports: "readonly",
  },
};
