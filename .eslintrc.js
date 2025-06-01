const plugin = require("eslint-plugin-react");
const { Settings } = require("react-native");

module.exports = {
    root: true,
    extends: '@react-native-community',
    plugins: ['react', 'react-hoohks', 'import'],
    settings: {
        'import/resolver': {
            'babel-plugin-root-import': {
                rootPathSuffix: 'src',
            },
        },
    },
    rules: {
        semi: ['2, never'],
        'no-extra-boolean-cast': 'off',
    },
}