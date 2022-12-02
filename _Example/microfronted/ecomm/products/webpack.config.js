const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/bootstrap',
      },
      shared: ['faker']
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

// if this is set to singleton, it does matter how much 
// not same version for the libe it is going to be one
// shared: {
//   faker: {
//     singleton: true,
//   },
// },
