<?php
//get all the info from the prev html file
$id = $_GET["iid"];
$name = $_GET["iname"];
$address = $_GET["iaddress"];
$cellphone = $_GET["icellphone"];
$adult = $_GET["iadult"];
$child = $_GET["ichild"];
$hobby = $_GET["ihobby"]
?>
<html>
<head>
    <title>Practical Test #2 | SDWI 2017</title>
    <!-- Bootstrap Exteral Style -->
    <link href="https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.css" rel="stylesheet">
</head>
<body>
<div class="container">
    <table class="table">
        <thead>
        <tr>
            <th>Submitted Infomation</th><!-- a infomation table -->
            <th><a href="index.html" class="btn btn-info">Back</a></th><!--a back btn-->
        </tr>
        </thead>
        <tbody><!--info table-->
        <tr>
            <th scope="row">ID</th>
            <td><?php echo $id; ?></td>
        </tr>
        <tr>
            <th scope="row">Name</th>
            <td><?php echo $name; ?></td>
        </tr>
        <tr>
            <th scope="row">Address</th>
            <td><?php echo $address; ?></td>
        </tr>
        <tr>
            <th scope="row">CellPhone</th>
            <td><?php echo $cellphone; ?></td>
        </tr>
        <tr>
            <th scope="row">Family Condition</th>
            <td>You have <?php echo $adult; ?> adult(s) and <?php echo $child; ?> Children in your family.</td>
        </tr>
        <tr>
            <th scope="row">Hobby</th>
            <td>Your hobbies are: <?php echo $hobby; ?></td>
        </tr>
        </tbody>
    </table>
</div>
</body>
</html>
