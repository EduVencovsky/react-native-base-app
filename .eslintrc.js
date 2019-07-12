// prettier-ignore
module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "jest": true
        // "react-native/react-native": true, // this stop showing errors on vscode folders and files
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "react-hooks"
        // "react-native", // this stop showing errors on vscode folders and files
    ],
    "rules": {
        "quotes": ["warn", "single"],
        "semi": ["warn", "never"],
        "block-spacing": "warn",
        "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
        "object-curly-spacing": ["warn", "always"],
        "eol-last": ["warn", "always"],
        "indent": ["warn", 4],
        "no-console": "warn",
        "no-debugger": "warn",
        "no-eval": "error",
        "no-trailing-spaces": ["warn", { "ignoreComments": true }],
        "no-unused-vars": "warn",
        "no-undef": "error",
        "no-multiple-empty-lines": ["warn", { "max": 1 }],
        "jsx-quotes": ["warn", "prefer-double"],
        "react/react-in-jsx-scope": "warn",
        "react/prop-types": "warn",
        "react/no-deprecated": "error",
        "react/jsx-props-no-multi-spaces": "warn",
        "react/jsx-key": "warn",
        "react/jsx-no-bind": [
            "warn",
            { "ignoreRefs": true, "allowArrowFunctions": true }
        ],
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-uses-react": "warn", // related to no-unused-vars
        "react/jsx-uses-vars": "warn", // related to no-unused-vars
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
        // "react-native/no-unused-styles": "warn",
        // "react-native/no-raw-text": "error",
    }
}
