<?php
/* Header */
$page_title = 'Webprogramming Assignment 2';
$navigation = Array(
    'active' => 'Future',
    'items' => Array(
        'Home' => '/WP22/assignment_2/index.php',
        'Links' => '/WP22/assignment_2/links.php',
        'News' => '/WP22/assignment_2/news.php',
        'Future' => '/WP22/assignment_2/future.php'
    )
);
include __DIR__ . '/templates/head.php';
/* Body */
include __DIR__ . '/templates/body-start.php';
?>
<div class="col-md-12">
    <h1>Welcome to my site once again! Future time! The future is bright!</h1>
</div>
<?php
include __DIR__ . '/templates/body-end.php';
/* Footer */
include __DIR__ . '/templates/footer.php';
?>

