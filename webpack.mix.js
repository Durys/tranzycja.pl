const mix = require('laravel-mix');
require('laravel-mix-jigsaw');

mix.disableSuccessNotifications();
mix.setPublicPath('source/assets/build');

mix.sass('source/__source/assets/sass/main.scss', 'css/main.css')
    .jigsaw({
        watch: ['config.php', 'source/**/*.md', 'source/**/*.php', 'source/**/*.scss'],
    })
    .options({
        processCssUrls: false,
        postCss: [
            require('tailwindcss')('./tailwind.config.js')
        ],
    })
    .sass('source/__source/assets/sass/manual_mode.scss', 'css/manual_mode.css', {processCssUrls: false}, [
        require('tailwindcss')('./tailwindForManualMode.config.js')
    ])
    .js('source/__source/assets/js/main.js', 'js/main.js')
    .js('source/__source/assets/js/section-highlight.js', 'js/section-highlight.js')
    .sourceMaps()
    .version();