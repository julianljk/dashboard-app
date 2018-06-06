module.exports = {
    extends: ['eslint:recommended', 'airbnb' ,'prettier'],
    plugins: ['prettier'], // activating eslint-plugin-prettier (enabling --fix to format code)
    rules: {
        'prettier/prettier': 'error',
        "react/jsx-indent": ["error", 4],
        "react/require-default-props": 'off',
        "react/no-array-index-key": 'off',
        "react/jsx-indent-props": 'off',
        eqeqeq: ['error', 'always'], // use triple equals
        'linebreak-style': ["error", "windows"], // conform to window's CRLF line breaks 
    },
    env: {
        es6: true
    }, 
    parserOptions: {
        sourceType: "module", //enables ES6 module syntax
        ecmaFeatures: {
            jsx: true
        }
    },
    "parser": "babel-eslint", //enables the use of fat arrow class methods: https://stackoverflow.com/questions/34244888/how-do-i-configure-eslint-to-allow-fat-arrow-class-methods
};