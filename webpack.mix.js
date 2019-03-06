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

mix.options({
        processCssUrls: false,
        autoprefixer: {
            enabled: true,
            options: {
                browsers: ['last 2 versions', '> 1%'],
                cascade: true,
                grid: true,
            }
        },
    })
    .setPublicPath('/')
    .sass('src/scss/app.scss', 'assets/css/styles.css')
    .js('src/js/app.js', 'assets/js/scripts.js');

if (mix.inProduction()) {
    mix.version();
}
