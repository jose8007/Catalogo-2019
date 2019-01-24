<?php
//database configuration
$config['mysql_host'] = "sql47.main-hosting.eu.";
$config['mysql_user'] = "u238578227_fel";
$config['mysql_pass'] = "diseno80";
$config['db_name']    = "u238578227_libre";
$config['table_name'] = "Catalogo";
//connect to host
mysql_connect($config['mysql_host'],$config['mysql_user'],$config['mysql_pass']);
//select database
@mysql_select_db($config['db_name']) or die( "Unable to select database");


//select all items in table
$sql = "UPDATE Catalogo SET interactiva = 'si' WHERE `Catalogo`.`isbn` = '$clave'";
?>
