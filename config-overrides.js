/**
 * 修改默认配置，
 * 按需加载antd组件代码和样式
 *  */

const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);