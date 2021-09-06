import { glob } from 'glob';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import sass from 'rollup-plugin-sass';
import copy from 'rollup-plugin-copy';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import progress from 'rollup-plugin-progress';

export default {
  input: glob('src/**/index.ts', { sync: true }),
  output: [
    {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      preserveModulesRoot: 'src',
    },
  ],
  preserveModules: true, // Important if we want to code split
  plugins: [
    progress(),
    // Exclude peer dependencies from bundle
    peerDepsExternal(),
    // Resolve dependencies from node_modules
    nodeResolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    // Handle CJS dependencies 
    commonjs({
      include: /node_modules/,
    }),
    // Handle JSON file imports
    json(),
    typescript(),
    sass({
      insert: true,
    }),
    copy({
      targets: [
        {
          src: 'src/styles',
          dest: 'dist'
        },
      ],
    }),
  ],
  watch: {
    exclude: ['dist', 'node_modules', '.git'],
  },
};
