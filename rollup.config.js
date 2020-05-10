import builtins from 'rollup-plugin-node-builtins';
import resolve from '@rollup/plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';

export default {
  input: 'src/main.js',
  plugins: [
    resolve({ preferBuiltins: true }),
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
    commonjs(),
    globals(),
    builtins(),
    json(),
  ],
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'isomorphicFetch',
  },
};
