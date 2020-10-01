import commonjs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import tailwind from 'rollup-plugin-tailwindcss'

const packageJson = require('./package.json')
// const antdVars = require('./src/antd-vars');

export default {
    input: 'src/index.ts',
    output: [
        {
            exports: 'named',
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            exports: 'named',
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        postcss({
            // extensions: ['css', '.less'],
            minimize: true,
            modules: true,
            use: {
                sass: null,
                stylus: null,
                less: { javascriptEnabled: true }
            }, //, modifyVars: antdVars }},,
            extract: true,
            config: {
                path: './postcss.config.js',
                ctx: null
            }
        }),
        // image(),
        // json(),
        resolve(),
        commonjs(),
        typescript({
            useTsconfigDeclarationDir: true
        })
        // tailwind({
        //     input: 'build/esm/index.es.css', // required
        //     // Tailor the emitted stylesheet to the bundle by removing any unused CSS
        //     // (highly recommended when packaging for distribution).
        //     purge: false
        // })
    ]
}
