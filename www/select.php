<?php
	$cole = $_GET["clave"];

  $conexi = mysql_connect("sql47.main-hosting.eu.",'u238578227_fel','diseno80')
      or die ("Error al conectar a la base de datos.");
  mysql_select_db ('u238578227_libre',$conexi)
      or die ("Error al conectar a la base de datos.");
	  
	 
	  
$result ="SELECT *  FROM Catalogo WHERE isbn= '$cole'";
$datos=mysql_query($result,$conexi); //enviar código MySQL

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>PHP con MySQL: Consultar datos en MySQL</title>
<style>
	.imgbook{
    float: left;
    padding: 13px;
    width: 130px;
    margin-left: 15px;
    height: 150px;
	background:#D8D8D8;
	border:#CCC medium solid;
	
	}
	
	.imgbook:hover{
		background-color:#CCC;
		
		}

}

</style>

</head>
<body>



              <div id="libros">
			  <?php while ($row=mysql_fetch_array($datos)) { ?>
					
                    <div class="imgbook" onclick="location='ConsultaLib.html?isbn=<?php echo $row['isbn']; ?>'" style="background-image:url(../webimag/antar/<?php echo $row['img']; ?>.jpg)">
					<?php echo $row['numcolec']; ?>.-&nbsp;	<?php echo $row['titulo']; ?></div>
   					

			  <?php } ?>
 
                   
                 </div>



</body></html>