let mix = require('laravel-mix');

let webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, dir)
}
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
  .extract(['jquery', 'vue']);

mix.less('resources/assets/less/app.less', 'public/css/vendor.css');
mix.sass('resources/assets/sass/app.scss', 'public/css/app.css');
mix.sass('public/sass/app.scss', 'public/home/css/index.css');


mix.webpackConfig({
  output: {
    publicPath: "/",
    chunkFilename: './js/bundles/[name].[chunkhash].js',
  },
  resolve: {
    alias: {
      'assets': resolve('resources/assets'),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: ['popper.js', 'default']
    })
  ]
});

