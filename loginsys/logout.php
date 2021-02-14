<?php
// yahape aake bina kuch bhi soche wo insan logout kar dega.

session_start();
session_unset();
session_destroy();

header("location: login.php");
exit;
?>