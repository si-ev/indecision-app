const path = require('path');

module.exports = {
     mode: 'production',
     entry: './src/app.js',
     output: {
          path: path.join(__dirname, 'public'),
          filename: 'bundle.js',
          publicPath: '/indecision-app/'
     },
     module: {
          rules: [{
               loader: 'babel-loader',
               test: /\.js$/,
               exclude: /node_modules/
            }, {
               test: /\.s?css$/,
               use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
               ]
          }]
     },
     devtool: 'eval-cheap-module-source-map',
     devServer: {
        static: path.join(__dirname, 'public'),
        client: {
          overlay: false,
        }
     }
};
