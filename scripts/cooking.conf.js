var cooking = require('cooking');
var path = require('path');

cooking.set({
  entry: './src/index.js',
  dist: './lib',
  clean: false,
  format: 'umd',
  moduleName: 'ELEMENT',
  extends: ['vue2'],
  alias: {
    main: path.join(__dirname, '../src'),
    packages: path.join(__dirname, '../packages'),
    examples: path.join(__dirname, '../examples')
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
});

cooking.add('output.filename', 'index.js');
cooking.add('loader.js.exclude', /node_modules|utils\/popper\.js|util\/fecha.\js/);
module.exports = cooking.resolve();
