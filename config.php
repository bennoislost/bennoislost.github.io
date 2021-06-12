<?php

return [
    'production'  => false,
    'baseUrl'     => '',
    'title'       => 'Ben McManus',
    'description' => 'Website description.',
    'collections' => [],
    'hyperlink' => function($page, $slug = '') {
        return $page->baseUrl . '/' . $slug;
    }
];
