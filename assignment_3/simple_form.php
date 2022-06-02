<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => '/WP22/assignment_3/index.php',
        'Add news item' => '/WP22/assignment_3/news_add.php',
        'Leap Year' => '/WP22/assignment_3/leapyear.php',
        'Simple Form' => '/WP22/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>
<div class="row">
    <div class="col-md-12">
        <div class="alert alert-danger" id="form-alert" role="alert">
            Not all form fields are filled in!
        </div>
        <form  action="simple_form.php" method="GET">
            <?php
                if(isset($_GET['name'])){ ?>
            <h1> Welcome <?= $_GET['name'] ?>!</h1>
            <?php
                }
            ?>
            <?php
                if(isset($_GET['place'])){
                    if($_GET['place'] == "Amsterdam"){ ?>
                        <p> You're from the capital of the Netherlands!</p>
                    <?php
                        }
                    else { ?>
                        <p>You're from <?= $_GET['place'] ?>!</p>

                    <?php
                    }}
                    ?>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="name" name="name">
                <!-- valid -->
                <div class="valid-feedback">
                    Looks good!
                </div>
                <!-- invalid -->
                <div class="invalid-feedback">
                    Enter a valid name
                </div>
            </div>
            <div class="form-group">
                <label for="place">Place/Residence</label>
                <input type="text" class="form-control" id="place" placeholder="Enter place/residence you live in" name="place">
                <!-- valid -->
                <div class="valid-feedback">
                    Looks good!
                </div>
                <!-- invalid -->
                <div class="invalid-feedback">
                    Enter a valid city/residence name
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                    <button class="btn btn-primary" id="submit-bt" type="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
</div>
<?php
p_print($_GET);
?>

<?php

?>
<?php
include __DIR__ . '/tpl/body_end.php';
?>
