<?php
  /**
   * Logout
   *
   * @package Membership Manager Pro
   * @author wojoscripts.com
   * @copyright 2015
   * @version $Id: logout.php, v3.00 2015-03-20 10:12:05 gewa Exp $
   */
  define("_VALID_PHP", true);
  
  require_once("init.php");
?>
<?php
  if ($user->logged_in)
      $user->logout();
	  
  redirect_to("index.php");
?>