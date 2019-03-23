module.exports = {
    "env": {
        "browser": true,
        "node" : true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        'ecmaVersion': 2017,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // "indent": [
        //     "error",
        //     2
        // ],
        // "linebreak-style": [
        //     "error",
        //     "unix"
        // ],
        // "quotes": [
        //     "error",
        //     "single"
        // ],
        // "semi": [
        //     "error",
        //     "always"
        // ],
        "react/jsx-uses-vars": 1,
        "no-console": 0,
        // "linebreak-style": 0,
    }
};
