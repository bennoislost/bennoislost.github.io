---
title: Uses
---

@extends('_layouts.main')

@section('body')
    <x-page-heading title="Uses">
        <p class="font-serif text-red-700">Kit, tools and services I use for my business and life. I will keep this list updated as my workflow and hobbies evolve.</p>
    </x-page-heading>
    <div class="flex space-x-4 text-red-700 text-xl">
        <a class="transition border-b border-transparent hover:border-red-700" href="#tech-hardware">Tech Hardware</a>
        <a class="transition border-b border-transparent hover:border-red-700" href="#tech-hardware">Tech Hardware</a>
        <a class="transition border-b border-transparent hover:border-red-700" href="#tech-hardware">Tech Hardware</a>
        <a class="transition border-b border-transparent hover:border-red-700" href="#tech-hardware">Tech Hardware</a>
    </div>

    <h2 class="text-2xl mb-4 mt-8" id="tech-hardware">Tech Hardware</h2>
    <ul class="mt-4 space-y-6">
        <x-uses-item hyperlink="https://google.com/" title="Apple MacBook Pro (16,2 2020), i7, 32GB RAM, 1TB SSD">
            My everyday work machine, nice and light for commuting and powerful enough to work with many disciplines. I decided against M1 as I wanted stability in my workflow and tooling. I never really use the touch bar but at least it has a real escape button. It's an ace bit of kit.
        </x-uses-item>
        <x-uses-item hyperlink="https://google.com/" title="CalDigit TS3 Plus Thunderbolt 3 Dock">
            I hate cables. Power cables, data cables, network cables, monitor cables, all of them.
        </x-uses-item>
    </ul>

@endsection
