<?php
	$cole = $_GET["clave"];

  $conexi = mysql_connect("sql47.main-hosting.eu.",'u238578227_fel','diseno80')
      or die ("Error al conectar a la base de datos.");
  mysql_select_db ('u238578227_libre',$conexi)
      or die ("Error al conectar a la base de datos.");

$xml          = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
$root_element = $config['table_name']."s"; //fruits
$xml         .= "<$root_element>";

//select all items in table
$result ="SELECT *  FROM Catalogo WHERE isbn= '$cole'";
$sql=mysql_query($result,$conexi); //enviar código MySQL


if (!$result = mysql_query($sql))
   die("Query failed.");
if(mysql_num_rows($result)>0)
{
   while($result_array = mysql_fetch_assoc($result))
   {
      $xml .= "<".$config['table_name'].">";
      //loop through each key,value pair in row
      foreach($result_array as $key => $value)
      {
         //$key holds the table column name
         $xml .= "<$key>";
         //embed the SQL data in a CDATA element to avoid XML entity issues
         $xml .= "<![CDATA[$value]]>";
         //and close the element
         $xml .= "</$key>";
      }
      $xml.="</".$config['table_name'].">";
   }
}
//close the root element
$xml .= "</$root_element>";
//send the xml header to the browser
header ("Content-Type:text/xml");
//output the XML data
echo $xml;
?>
