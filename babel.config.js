module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                "@core": "./src/core",
                "@application": "./src/application",
                "@domain": "./src/domain",
                "@infra": "./src/infra",
                "@__testsUtil__": './src/__testsUtil__'
            }
        }]
    ],
    ignore: [
        '**/*.test.ts',
        './src/_seeds',
        './src/__tests__',
        './src/__testsUtil__'
    ]
}