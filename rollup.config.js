import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    vue({
      css: true,
    }),
    nodeResolve(),
    commonjs(),
  ],
}
