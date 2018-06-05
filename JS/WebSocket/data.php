

<?php
header('content-type:text/css;charset="utf-8"');
error_reporting(0);

$username=$_GET['username'];
$password=$_GET['password'];
echo "{$username}{$password}";
