const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies, version } = require('./package.json');
const mfeDefination = require('./mfe.def');

const ENVS = {
  dev: 'dev',
  uat: 'uat',
  prod: 'prod',
};
const MODES = {
  production: 'production',
  development: 'development',
};

const getPath =
  (folderName) =>
  (...paths) =>
    path.resolve(__dirname, folderName, ...paths);
const getPathBuild = getPath('dist');
const getPathSrc = getPath('src');
const jsEntryPoint = getPath('.')('index.js');
const publicJsEntryPoint = getPath('.')('public.js');
const { MFE_ENV: env = ENVS.dev, PORT = 3000, baseUrl = env } = process?.env;

const isProduction = env !== ENVS.dev;
const fileVersion = `v${version.split('.').join('_')}`;

let extensions = ['.js', '.jsx'];
if (env === ENVS.prod) {
  extensions = ['.prod.js', '.prod.jsx', ...extensions];
} else if (env === ENVS.uat) {
  extensions = ['.uat.js', '.uat.jsx', ...extensions];
}

const config = {
  mode: isProduction ? MODES.production : MODES.development,
  devtool: isProduction ? 'source-map' : 'eval-source-map',
  entry: isProduction ? publicJsEntryPoint : jsEntryPoint,
  output: {
    publicPath: 'auto',
    path: getPathBuild(),
    filename: `assets/js/[name].[chunkhash].${fileVersion}.js`,
    sourceMapFilename: `assets/js/[name].[chunkhash].${fileVersion}.map`,
    pathinfo: !isProduction,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|gif|jpe?g|svg|woff?2|ttf|eot)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions,
    alias: {
      '@app': getPathSrc('.'),
    },
  },
  optimization: {
    minimize: isProduction,
    minimizer: isProduction
      ? [
          new TerserPlugin({
            terserOptions: {
              warnings: false,
              compress: {
                drop_debugger: true,
                dead_code: true,
                drop_console: false,
                pure_funcs: ['console.log', 'console.info', 'console.warn', 'console.debug'],
              },
              format: {
                comments: false,
              },
            },
            extractComments: false,
          }),
        ]
      : [],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: mfeDefination.name,
      filename: 'remoteEntry.js',
      exposes: { App: './src/App' },
      shared: {
        react: {
          singleton: true,
          eager: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
    new HTMLWebpackPlugin({
      template: getPath('public')('index.html'),
      htmlVersion: `${mfeDefination.name}-${Date.now()}-${env}@${version}`,
      mfeTitle: `${mfeDefination.name}@${version}`,
      env,
      minify: {
        removeComments: false,
        collapseWhitespace: true,
      },
    }),
  ],
  devServer: {
    static: getPathBuild(),
    port: mfeDefination.port,
    hot: true,
    compress: false,
    historyApiFallback: true,
  },
};

module.exports = config;
