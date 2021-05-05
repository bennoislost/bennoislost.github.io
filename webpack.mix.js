const mix = require('laravel-mix');
require('laravel-mix-jigsaw');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets');

mix.copy([
    'resources/images/'
], 'source/assets/images');


mix.jigsaw()
    // .js('source/_assets/js/main.js', 'js')
    .postCss('resources/css/app.css', 'css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .options({
        processCssUrls: false,
    })
    .version();
