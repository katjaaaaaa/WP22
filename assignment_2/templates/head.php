<!DOCTYPE html>
<html lang="eng">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title><?= $page_title ?></title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css" integrity="sha512-T584yQ/tdRR5QwOpfvDfVQUidzfgc2339Lc8uBDtcp/wYu80d7jwBgAxbyMh0a9YM9F8N3tdErpFI8iaGx6x5g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="css/styles.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.min.js" integrity="sha512-UR25UO94eTnCVwjbXozyeVd6ZqpaAE9naiEUBK/A+QDbfSTQFhPGj5lOR6d8tsgbBk84Ggb5A3EkjsOgPRPcKA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script type="application/javascript" src="js/main.js"></script>
    </head>

    <body>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">WP22</a>
                <ul class="navbar-nav mr-auto">
                    <?php $active = $navigation["active"]; ?>
                    <?php foreach ($navigation["items"] as $title => $url){
                        if ($title == $active){ ?>
                            <li class="nav-item active">
                                <a class="nav-link" href="<?= $url ?>"><?= $title ?></a>
                            </li>
                    <?php } else {?>
                        <li class="nav-item">
                            <a class="nav-link" href="<?= $url ?>"><?= $title ?></a>
                        </li>
                        <?php } ?>
                    <?php } ?>
                    <script>
                        $(function() {

                            let links_list = [
                                "google.com",
                                "google.com",
                                "google.com",
                                "google.com"
                            ];

                            ('.navbar-nav mr-auto').append("<ul id='new_list'></ul>");
                            for (let i = 0; i < links_list.length; i++) {
                                $("#new_list").append("<li>"+links_list[i]+"</li>");
                            }
                        });
                    </script>
                </ul>
            </nav>
        </header>

