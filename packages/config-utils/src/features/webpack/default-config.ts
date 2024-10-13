import { BUILD_START_TIME } from './start-time'

import { resolve, join } from 'node:path'
import { existsSync } from 'node:fs'
import { ProvidePlugin, EnvironmentPlugin, DefinePlugin } from 'webpack'
import { getHtmlWebpackPluginConfig } from './utils'

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

export const defaultConfig = (
  env: any,
  argv: any,
  option: { withHtml?: boolean } = { withHtml: true },
) => {
  require('dotenv').config({ path: `.env.${argv.mode ?? 'development'}` })
  require('dotenv').config({
    path: resolve('../../', `.env`),
  })

  return {
    entry: './src/app/index.ts',
    mode: 'development',
    // stats: 'verbose',
    devServer: {
      port: 3000,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: [
        {
          context: ['/api'],
          target: process.env.REACT_APP_PROXY_PATH,
          changeOrigin: true,
          secure: false,
        },
      ],
    },
    output: {
      asyncChunks: true,
      chunkFilename: `[id]_${BUILD_START_TIME}.js`,
      filename: `[name]_${BUILD_START_TIME}.js`,
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react',
                  '@babel/preset-typescript',
                ],
              },
            },
          ],
        },
        {
          test: /\.mp4$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.(s[ac]|c)ss$/i,
          use: [
            // { loader: MiniCssExtractPlugin.loader },
            'style-loader',
            // {
            //   loader: 'css-loader',
            //   options: {
            //     modules: {
            //       localIdentName: '[name]__[local]-[hash:base64:5]',
            //     },
            //   },
            // },
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        // {
        //   test: /\.css$/,
        //   use: ['style-loader', 'css-loader'],
        // },
        // {
        //   test: /\.scss$/,
        //   use: [
        //     {
        //       loader: 'style-loader', // creates style nodes from JS strings
        //     },
        //     {
        //       loader: 'css-loader', // translates CSS into CommonJS
        //     },
        //     {
        //       loader: 'sass-loader', // compiles Sass to CSS
        //     },
        //   ],
        // },
        {
          test: /\.svg$/,
          issuer: {
            and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
          },
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                prettier: false,
                svgo: false,
                svgoConfig: {
                  plugins: [{ removeViewBox: false }],
                },
                titleProp: true,
                ref: true,
              },
            },
            {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash].[ext]',
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|webp|ico)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
          },
        },
        {
          test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      // new MiniCssExtractPlugin(),
      option.withHtml &&
        getHtmlWebpackPluginConfig('public/index.html', {
          filename: 'index.html',
          inject: true,
        }),
      new CopyPlugin({
        patterns: [
          // {
          //   // from: '../public',
          //   // from: resolve(__dirname, '../../../../../public'),
          //   // from: join(__dirname, '../../../../../public'),
          //   // from: join(process.cwd(), '../../public'),
          //   to: 'public',
          //   globOptions: {
          //     dot: true,
          //     // gitignore: true,
          //     // ignore: ['**/*.html', '.*.DS_Store'],
          //   },
          //   from: 'public',
          //   context: resolve(__dirname, '../../../../../'),
          // },
          existsSync('public') && {
            from: 'public',
            globOptions: {
              dot: true,
              gitignore: true,
              ignore: ['**/*.html'],
            },
          },
          existsSync('src/shared/images') && {
            from: 'src/shared/images',
            globOptions: {
              dot: true,
              gitignore: true,
              ignore: ['**/*.html'],
            },
          },
          {
            from: 'src/*/**/*.(scss|svg)',
            to: ({ absoluteFilename }: { absoluteFilename: string }) =>
              absoluteFilename.replace('src', 'dist'),
          },
        ].filter((el) => !!el),
      }),
      new ProvidePlugin({
        process: 'process/browser',
        React: 'react',
      }),
      new EnvironmentPlugin({
        REACT_APP_INFURA_API_KEY: process.env?.REACT_APP_INFURA_API_KEY ?? '',
      }),
      new DefinePlugin({
        'process.env.REACT_APP_BUILD_TIME': JSON.stringify(BUILD_START_TIME),
      }),
    ],
    resolve: {
      alias: {
        process: 'process/browser',
        // process: require.resolve('process/browser'),
      },
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      plugins: [
        new TsconfigPathsPlugin({
          configFile: 'tsconfig.json',
        }),
      ],
    },
  }
}
