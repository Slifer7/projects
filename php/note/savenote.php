<?php
  // Get post data
  $username = $_POST["username"];
  $password = $_POST["password"];
  $note = $_POST["text"];

  define("_VALID_PHP", true);
  require_once("init.php");

  $ret = new stdClass();
  $ret->OK = $user->login($username, $password);
  $ret->ErrorMessage = "";

  if ($ret->OK){
    $filename = "notes/" . $username; // Folder contains notes
    if (!file_exists($filename))
      mkdir($filename);

    $filename .= "/note_" . date('Ymd_his', time()) . ".txt"; //
    file_put_contents($filename, $note);
    $ret->ErrorMessage = "Success. Added note with file name: " . $filename;
  }
  else{
    $ret->ErrorMessage = "Log in not successfully. Check your username and password.";
  }

  echo json_encode($ret);
 ?>
