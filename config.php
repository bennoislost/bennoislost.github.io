<?php

return [
    'production'  => false,
    'baseUrl'     => '',
    'title'       => 'Ben McManus',
    'description' => 'Delivery focused software engineer, highly experienced in PHP, JavaScript & DevOps.',
    'collections' => [],
    'hyperlink' => function($page, $slug = '') {
        return $page->baseUrl . '/' . $slug;
    }
];
