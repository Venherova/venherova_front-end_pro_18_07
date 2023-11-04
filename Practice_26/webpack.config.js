import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin  from 'eslint-webpack-plugin';
import { ESLint } from 'eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  context: path.resolve(__dirname, 'src'),
  entry: './js/app.js',
  devtool: 'source-map',
  // watch: true,
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
      test: /\.scss$/, 
      use: ['style-loader', 'css-loader', 'sass-loader'] 
    },
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          // plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      }
    }
  ]
  },
  plugins: [
    ...glob.sync('./src/*.html').map((htmlFile) => {
      return new HtmlWebpackPlugin({
        inject: true,
        filename: path.basename(htmlFile),
        template: path.basename(htmlFile),
      });
    }),
    new ESLintPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
  },
};
