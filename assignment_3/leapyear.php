<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Leap year',
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
        <form  action="leapyear.php" method="POST">
            <?php
            if(isset($_POST['name-l'])){ ?>
                <h1> Welcome, <?= $_POST['name-l'] ?>!</h1>
                <p>The next 5 leap years, this will be your age!</p>
                <?php
            }
            ?>
            <?php
            if(isset($_POST['place-l'])){
                if($_POST['place-l'] == "Groningen"){ ?>
                    <p>Nothing lies above Groningen, does it?</p>
                    <?php
                }
                }
            ?>
            <?php if(isset($_POST['age-l'])) : ?>
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Age</th>
                    </tr>
                    </thead>
                    <tbody>
                        <?php for ($x = 0; $x <= 5; $x++): ?>
                            <tr>
                                <th scope="row"><?= 2024 + 4 * $x?></th>
                                <td><?= $_POST['age-l'] + 2 + 4 * $x?></td>
                            </tr>
                        <?php endfor; ?>
                    </tbody>
                </table>
            <?php endif; ?>
            <div class="form-group">
                <label for="name-l">Name</label>
                <input type="text" class="form-control" id="name-l" name="name-l" placeholder="Enter your name">
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
                <label for="age-l">Age</label>
                <input type="text" class="form-control" id="age-l" name="age-l" placeholder="Enter your age">
                <div class="valid-feedback">
                    Looks good!
                </div>
                <!-- invalid -->
                <div class="invalid-feedback">
                    Enter a valid age
                </div>
            </div>
            <div class="form-group">
                <label for="place-l">Place</label>
                <input type="text" class="form-control" id="place-l" name="place-l" placeholder="Enter the place you live in">
                <!-- valid -->
                <div class="valid-feedback">
                    Looks good!
                </div>
                <!-- invalid -->
                <div class="invalid-feedback">
                    Enter a valid place you live in
                </div>
            </div>
            <div class="form-group">
                <label for="e-mail-l">Email address</label>
                <input type="email" class="form-control" id="e-mail-l" aria-describedby="emailHelp" name="e-mail-l" placeholder="Enter email">
                <div class="valid-feedback">
                    Looks good!
                </div>
                <!-- invalid -->
                <div class="invalid-feedback">
                    Enter a valid e-mail
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                    <div id="submit" class="btn btn-primary">Show me!</div>
                </div>
            </div>
        </form>

    </div>
</div>
<?php
include __DIR__ . '/tpl/body_end.php';
?>
