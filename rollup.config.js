import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
// import json from '@rollup/plugin-json';

export default {
  input: 'src/main.js',
  plugins: [
    resolve({ browser: true }),
    babel({ babelHelpers: 'bundled' }),
    // json(),
    commonjs(),
  ],
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'isomorphicFetch',
  },
};
