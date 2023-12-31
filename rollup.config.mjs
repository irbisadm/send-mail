import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import * as fs from 'fs';
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
console.log(packageJson.version);

const replacePlugin = replace({
    preventAssignment: true,
    values: {
        __lib_version__: packageJson.version,
        __lib_file_name__: `${packageJson.name} v${packageJson.version}`,
    }
})

export default [
    {
        input: 'src/index.ts',
        external: ['path','fs'],
        output: {
            format: 'es', file: 'dist/index.mjs'
        },
        plugins: [
            typescript({tsconfig: './tsconfig.json'}),
            replacePlugin,
            terser(),
        ],
    },
    {
        input: 'src/index.ts',
        external: ['path','fs'],
        output: {
            format: 'cjs', file: 'dist/index.js'
        },
        plugins: [
            typescript({tsconfig: './tsconfig.json'}),
            replacePlugin,
            terser(),
        ],
    },
    {
        input: 'dist/build/index.d.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'es'
        },
        plugins: [
            replacePlugin,
            dts(),
        ]
    }
];