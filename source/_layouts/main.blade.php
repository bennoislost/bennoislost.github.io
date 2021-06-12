<!DOCTYPE html>
<html lang="{{ $page->language ?? 'en' }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>{{ $page->title }} &mdash; Ben McManus | bennoislost</title>
        <meta name="title" content="{{ $page->title }}  &mdash; Ben McManus | bennoislost">
        <meta name="description" content="{{ $page->description }}">
        <link rel="canonical" href="{{ $page->getUrl() }}">
        <link href="https://fonts.googleapis.com/css?family=Karla:700|Source+Serif+Pro" rel="stylesheet">
        <link rel="stylesheet" href="{{ mix('css/app.css', 'assets') }}">
        <meta property="og:type" content="website">
        <meta property="og:url" content="{{ $page->getUrl() }}">
        <meta property="og:title" content="{{ $page->title }} &mdash; Ben McManus | bennoislost">
        <meta property="og:description" content="{{ $page->description }}">
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="{{ $page->getUrl() }}">
        <meta property="twitter:title" content="{{ $page->title }} &mdash; Ben McManus | bennoislost">
        <meta property="twitter:description" content="{{ $page->description }}">
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png">
    </head>
    <body>
        <div class="breakpoint fixed z-50 top-1 left-1 flex text-xs"></div>
        <div class="max-w-5xl mx-auto px-6 min-h-screen">
            @include('_snippets/header')

            @yield('body')
        </div>
        @include('_snippets/footer')
    </body>
</html>
