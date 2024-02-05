const mix = require('laravel-mix');

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

mix.disableNotifications();

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .copy(
        'node_modules/@fortawesome/fontawesome-free/webfonts',
        'public/webfonts'
    )
    .version()
    .sourceMaps(false, 'source-map')
;

const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
mix.webpackConfig({
    plugins: [
        new BrowserSyncPlugin({
            files: [
                'public/js/*',
                'public/css/*',
                'public/font/*',
            ]
        })
    ]
});
