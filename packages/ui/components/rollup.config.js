import { glob } from "glob";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import sass from "rollup-plugin-sass";
import copy from "rollup-plugin-copy";

export default {
  input: glob("src/**/index.ts", { sync: true }),
  output: [
    {
      dir: "build",
      format: "esm",
      sourcemap: true
    }
  ],
  preserveModules: true, // Important if we want to code split
  plugins: [
    peerDepsExternal(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    sass({
      insert: true
    }),
    copy({
      targets: [
        {
          src: "src/variables.scss",
          dest: "build",
          rename: "variables.scss"
        },
        {
          src: "src/typography.scss",
          dest: "build",
          rename: "typography.scss"
        }
      ]
    })
  ],
  watch: {
    exclude: ['build', 'node_modules', '.git']
  }
};