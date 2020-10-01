const path = require('path')
const tsImportPluginFactory = require('ts-import-plugin')

const fs = require('fs')
const lessToJs = require('less-vars-to-js')
const modifyVarsFromLessFile = lessToJs(
    fs.readFileSync('src/styles/antd-vars.less', 'utf8')
)
const modifyVarsFromJsFile = require('../src/styles/antd-vars')

// Choose here whether modifyVars is the LESS or js file.
const modifyVars = modifyVarsFromJsFile

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    // Add any Storybook addons you want here: https://storybook.js.org/addons/
    addons: [],
    webpackFinal: async (config) => {
        config.module.rules.push(
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader?cacheDirectory=true'
                    },
                    {
                        loader: 'ts-loader?silent=true',
                        options: {
                            transpileOnly: true,
                            getCustomTransformers: () => ({
                                // Antd:
                                before: [
                                    tsImportPluginFactory([
                                        {
                                            style: true
                                        }
                                    ])
                                ]
                            }),
                            compilerOptions: {
                                module: 'es2015'
                            }
                        }
                    },
                    require.resolve('react-docgen-typescript-loader')
                ],
                // include: path.resolve(__dirname, '../src'),
                exclude: [/node_modules/, /build/, /dist/, /webpack/]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'postcss-loader'
                    }
                ],
                include: path.resolve(__dirname, '../')
            },
            {
                // CSS Modules LESS
                test: /\module.less$/,
                include: [/src/, /stories/],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    '@teamsupercell/typings-for-css-modules-loader',
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            // ANTD less
                            lessOptions: {
                                javascriptEnabled: true,
                                modifyVars: {
                                    'primary-color': 'red',
                                    'link-color': '#1DA57A',
                                    'border-radius-base': '2px'
                                }
                            }
                        }
                    }
                ]
            },
            {
                // NON CSS Modules LESS
                test: /(?!.*\.module\.less$)^.+\.less$/,
                include: [/src/, /stories/],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            // ANTD less
                            lessOptions: {
                                javascriptEnabled: true,
                                modifyVars: {
                                    'primary-color': 'red',
                                    'link-color': '#1DA57A',
                                    'border-radius-base': '2px'
                                }
                            }
                        }
                    }
                ]
            },
            {
                // LESS Files from node_modules
                test: /\.less$/,
                include: [/node_modules/],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            }
        )
        config.resolve.extensions.push(
            '.css',
            '.js',
            '.jsx',
            '.less',
            '.ts',
            '.tsx'
        )

        return config
    }
}
