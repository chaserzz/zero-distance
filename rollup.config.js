import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import dts from 'rollup-plugin-dts'

// 入口文件
const entry = './src/index.ts'

// 忽略文件
const externalConfig = [
  id => /\/__expample__|main.tsx/.test(id), // 组件的本地测试文件，不希望被打包。
  'react',
  'react-dom',
  'classname',
  'react-is',
  '**/node_modules/**'
]

// babel插件配置
const babelConfig = {
  extensions:['.ts','.tsx'],
  exclude: "**/node_modules/**"
}

export default [
  // 代码
  {
    input: entry,
    output:{
      file:'./lib/index.js', // js文件
      format:'es',
    },
    plugins:[
      resolve(),
      commonjs(),
      typescript(),
      babel(babelConfig),
    ],
    external: externalConfig,
  },
  // 声明文件
  {
    input: entry,
    output: {
        filename: 'index.d.ts',  //声明文件
        dir: '@types', 
        format: 'esm'
    },
    plugins: [dts()]
  }
]