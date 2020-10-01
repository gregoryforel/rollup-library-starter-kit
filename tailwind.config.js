module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    purge: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx'
    ],
    theme: {
        extend: {}
    },
    variants: {}
    // plugins: []
}
