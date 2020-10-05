module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "standard"
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module"
    },
    rules: {
        semi: ["warn", "always"],
        quotes: ["warn", "double"],
        indent: ["warn", 4]
    }
};
