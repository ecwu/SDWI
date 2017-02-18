<?php
$name=$_POST["username"];
$email=$_POST["email"];
$skills=$_POST["cs"];
$city=$_POST["citye"];
$position=$_POST["po"];
$recent=$_POST["rj"];
$experience=$_POST["exp"];
?>
<!DOCTYPE html>
<html>
<head>
  <title>Join my company form | SDWI2017</title>
  <link href="https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/css/bootstrap.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<div class="container banner">
    Join My Company<a href="../myhome.html" class="backlink">Back</a>
</div>
<div class="container">

<table class="table">
  <thead>
    <tr>
      <th>Category</th>
      <th>First Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Name</th>
      <td><?php echo $name; ?></td>
    </tr>
    <tr>
      <th scope="row">Email</th>
      <td><?php echo $email; ?></td>
    </tr>
    <tr>
      <th scope="row">Current Skills</th>
      <td><?php echo $skills; ?></td>
    </tr>
    <tr>
      <th scope="row">City Expected</th>
      <td><?php echo $city; ?></td>
    </tr>
    <tr>
      <th scope="row">Position</th>
      <td><?php echo $position; ?></td>
    </tr>
    <tr>
      <th scope="row">Recent Jobs</th>
      <td><?php echo $recent; ?></td>
    </tr>
    <tr>
      <th scope="row">Experience</th>
      <td><?php echo $experience; ?></td>
    </tr>
  </tbody>
</table>

</div>
</body>
<script src="https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdn.bootcss.com/bootstrap/4.0.0-alpha.6/js/bootstrap.js"></script>
</html>