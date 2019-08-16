import commonjs from 'rollup-plugin-commonjs'; // Convert CommonJS modules to ES6
import resolve from 'rollup-plugin-node-resolve'
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
const { terser } = require('rollup-plugin-terser')
import babel from 'rollup-plugin-babel';

export default CLIArgs => {
  const mini = !!CLIArgs.mini;
  let plugins = [
    resolve(),
    commonjs(),
    vue({
      css: true, // Dynamically inject css as a <style> tag
      compileTemplate: true, // Explicitly convert template to render function
    }),
    babel({ // Transpile to ES5
      runtimeHelpers: true,
      exclude: 'node_modules/**'
    }),
  ];

  let bundle = {
    input: 'src/components/EChart.vue',
    output: {
      name: 'EChart',
      exports: 'named',
      globals: {
        vue: 'Vue',
        'echarts/lib/echarts': 'echarts'
      }
    },
    external: [
      'vue',
      'echarts/lib/echarts'
    ]
  };

  if(mini) {
    plugins.push(terser())
  }
  bundle.plugins = plugins
  return bundle;
};
