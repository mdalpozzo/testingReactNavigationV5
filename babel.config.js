module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        [
            'module-resolver',
            {
                root: ['.'],
                alias: {
                    '@Components': './src/components',
                    '@Utils': './src/utils',
                    '@Screens': './src/screens',
                    '@Data': './src/data',
                    '@Models': './src/models',
                    '@Theme': './src/theme',
                    '@Root': './src',
                },
            },
        ],
    ],
};
