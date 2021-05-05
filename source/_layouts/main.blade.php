<!DOCTYPE html>
<html lang="{{ $page->language ?? 'en' }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>{{ $page->title }}</title>
        <meta name="description" content="{{ $page->description }}">
        <link rel="canonical" href="{{ $page->getUrl() }}">
        <link href="https://fonts.googleapis.com/css?family=Karla:700|Source+Serif+Pro" rel="stylesheet">
        <link rel="stylesheet" href="{{ mix('css/app.css', 'assets') }}">
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
