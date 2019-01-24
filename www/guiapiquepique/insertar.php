<?php
	
	$tit = json_decode($_POST['recorespu']);
	$count = count($tit);
	$fecha = date("Y/m/d");

	  $conexi = mysql_connect('sql47.main-hosting.eu','u238578227_fel','diseno80')
      or die ("Error al conectar a la base de datos.");
  	mysql_select_db ('u238578227_libre',$conexi)
      or die ("Error al conectar a la base de datos.");
	  

	mysql_query("INSERT INTO Interactivas (codusuario, codguia, fecha, respuesta1, respuesta2, respuesta3, respuesta4, respuesta5, respuesta6, respuesta7, respuesta8, respuesta9, respuesta10, respuesta11, respuesta12,  respuesta13, respuesta14, respuesta15, respuesta16, respuesta17, respuesta18,  respuesta19, respuesta20, respuesta21, respuesta22, respuesta23, respuesta24, respuesta25, respuesta26, respuesta27,  respuesta28, respuesta29, respuesta30) VALUES ('$tit[0]','$tit[1]','$fecha','$tit[2]', '$tit[3]','$tit[4]', '$tit[5]', '$tit[6]', '$tit[7]', '$tit[8]', '$tit[9]','$tit[10]', '$tit[11]', '$tit[12]', '$tit[13]', '$tit[14]', '$tit[15]','$tit[16]', '$tit[17]', '$tit[18]', '$tit[19]', '$tit[20]', '$tit[21]','$tit[22]', '$tit[23]', '$tit[24]', '$tit[25]', '$tit[26]', '$tit[27]','$tit[28]', '$tit[29]', '$tit[30]', '$tit[31]')");
?>
