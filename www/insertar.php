<?php
	$tit = $_POST["profesor"];
	$auto = $_POST["alumno"];
	$ilu = $_POST["interactiva"];	
	$seri = $_POST["serial"];
	

  $conexi = mysql_connect("sql47.main-hosting.eu.",'u238578227_fel','diseno80')
      or die ("Error al conectar a la base de datos.");
  mysql_select_db ('u238578227_libre',$conexi)
      or die ("Error al conectar a la base de datos.");

mysql_query("UPDATE Catalogo SET profe='$tit', alumno='$auto', interactiva='$ilu'
WHERE isbn='$seri'");

header('Location: actualizar.html');

?>