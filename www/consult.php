<?php
$clave = $_GET['clave'];
//database configuration
$config['mysql_host'] = "mysql.hostinger.es";
$config['mysql_user'] = "u238578227_fel";
$config['mysql_pass'] = "diseno80";
$config['db_name']    = "u238578227_libre";
$config['table_name'] = "Catalogo";
//connect to host
mysql_connect($config['mysql_host'],$config['mysql_user'],$config['mysql_pass']);
//select database
@mysql_select_db($config['db_name']) or die( "Unable to select database");

$xml          = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
$root_element = $config['table_name']."s"; //fruits
$xml         .= "<$root_element>";
//select all items in table
$sql = "SELECT * FROM Catalogo WHERE isbn = '$clave'";
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
