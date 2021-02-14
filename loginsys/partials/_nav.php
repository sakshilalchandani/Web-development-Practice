<?php
    //not start session again bcs this file is already included in other pages, and wahape session started !!!
    //session_start();
    if(isset($_SESSION['loggedin']) && $_SESSION['loggedin']==true){
        $loggedin=true;
    }
    else{
        $loggedin=false;
    }

echo '<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/cwharry/loginsys">Login System</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>';

  
    echo '<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="welcome.php">Home</a>
      </li>';
      if(!$loggedin){
      echo '<li class="nav-item">
        <a class="nav-link" href="login.php">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="signup.php">Signup</a>
      </li>';
  }
  if($loggedin){
      echo '<li class="nav-item">
        <a class="nav-link" href="logout.php">Logout</a>
      </li>';
  }
    
    echo '</ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>';

?>