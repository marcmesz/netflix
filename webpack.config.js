const path = require("path")
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname+'/src/', 'dist'),
    publicPath: '/',
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/'),
    },
    compress: true,
    port: 9000,
 },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.jsx?$/,
        include: /node_modules/,
        enforce: "pre",
        use: ["source-map-loader"],
      }
    ]
  }
};


