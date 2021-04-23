const mix = require('laravel-mix');

mix.setPublicPath('public/assets');
mix.setResourceRoot('..');

mix.options({
    processCssUrls: false,
});

mix.copy('resources/images/', 'public/assets/images');

// mix.js('resources/js/app.js', 'js');

mix.postCss('resources/css/app.css', 'css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
]).version();

mix.disableNotifications();
