<?php

$usuario = $_GET['key1'];
$sql = "SELECT * FROM Interactivas WHERE codusuario = '$usuario' ORDER BY Id DESC LIMIT 1";
    function connectDB(){
        $server = 'sql47.main-hosting.eu';
        $user = "u238578227_fel";
        $pass = "diseno80";
        $bd = "u238578227_libre";
    $conexion = mysqli_connect($server, $user, $pass,$bd);
    return $conexion;
    }

    function disconnectDB($conexion){
        $close = mysqli_close($conexion);
        return $close;
    }

    function getArraySQL($sql){
        $conexion = connectDB();
        mysqli_set_charset($conexion, "utf8"); 

        if(!$result = mysqli_query($conexion, $sql)) die();
        $rawdata = array(); 
        $i=0;
        
        while($row = mysqli_fetch_array($result, MYSQLI_NUM))
        {
        $rawdata[$i] = $row;
        $i++;
        }
        disconnectDB($conexion); 
        return $rawdata;
        }
        $myArray = getArraySQL($sql);
        $myArray = json_encode($myArray);
?>
<!DOCTYPE html>
<html>
    <head> 
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Verificar respuestas</title>
        	<link rel="stylesheet" type="text/css" media="all" href="csspruebas.css"/>
        
            <script src="jquery.min.js"></script>
            <script type="text/javascript" src="despliegue2.js"></script>
            <script src="circle-progress.min.js"></script>
          <script>
            var respuestas = <?php echo $myArray?>;
            </script>
</head>
<body>
            <div id="separ"></div>                 
        <section id="prime">
             
            <div id="redatos">
               <div id="dat1"> 
                <h1><strong id="idusuario">Juan Carlos Pérez Chávez</strong></h1><br/>
                    <p>Colegio Militar Quito</p>
                    <p>9no de Educación Básica</p><br/>
                    <p>Profesor(a):<br/> Armando Sálomon</p><br/>
                    <p id="fecha">Fecha:<br/><span>17/05/2018</span></p>
                </div>
               
            </div>
            <div id="relibros">
                <div id="stage"><p>Resultado</p><br/>
                    <div id="circle"></div><p id="resultado1">8/10</p></div> 
                <div id="stage2">
                    <p>Acertadas:<span id="cert"></span></p><br/>
                    <p>Equivocadas:<span id="fail"></span></p><br/>
                    <div id="boton-cargar">Ver respuestas</div> 
                    </div>
                
                <div id="booka">
                 <p id="boton-borrar">¿Te gusto este libro?<br/>
                        <img src="imgs/icon1bad.png">
                        <img src="imgs/icon1middle.png">
                        <img src="imgs/icon1good.png">
                    </p>
                      
                </div>
   
            </div> 
            <div id="salir"><p>Derechos reservados a LIBRESA S.A.</p>
                <span onclick=" window.print();"><a href="#">Imprimir<img src="imgs/icoimpri.png" align="middle"></a></span>
                
            <span><a href="../Guiasdemo.html">Salir<img src="imgs/icosalir.png" align="middle"></a></span></div>
                     <div id="separ"></div>
            
                </section>
    
                  
             

            <div id="prime2"> 
 
<!--1 Seleccion--> 
                
                <section class="conpreg">
                    
                    <div id="preg"><img src="imgs/escojeicon.png"><p>¿Qué quería hacer Pique Pique con sus patas?</p></div>   
                <p><span id="imgcorrec">1</span>Pintarlas de colores</p>
                <p><span>2</span>Mojarlas en el mar</p>
                <p><span>3</span>Sacudirlas</p>
                    
                    <div id="selec1" class="respuesta">Tu respuesta(s): <span id="pre1">s/r</span> </div>  
                </section>

<!--2 Seleccion grafico--> 
                
             <section class="conpreg">
                    
               <div id="preg"><img src="imgs/escojeicon.png"><p>¿En dónde recogía colores Pique Pique?</p></div>
                            
               <div>
                <div class="selecimagen"><img src="imgs/pique-pag7.png"><br/><span id="imgcorrec">1</span></div>
                <div class="selecimagen"><img src="imgs/pique-pag10.png"><br/><span >2</span></div>
                <div class="selecimagen"><img src="imgs/pique-pag11.png"><br/><span>3</span></div>
                    
                    </div>
                    <div id="separ"></div>
                    <div id="selecimg1" class="respuesta">Tu respuesta(s):<span id="pre2">s/r</span> </div>  
                </section> 
                
<!--3 Verdaderdo Falso-->  
                
                <section class="conpreg">                    
                    <div id="preg"><img src="imgs/icono7.png"><p>Verdadero o Falso</p></div>
                
                <p><img src="imgs/falso.png">Pique le pidió a las nubes el color azul</p>
                <p ><img src="imgs/verdadero.png">Cuando ya tenía los colores le faltaba una brocha</p>
                    
                    <div id="selecvf1" class="respuesta">Tu respuesta(s): <span2 id="pre3">s/r</span2><span2 id="pre4">s/r</span2> </div>  

                </section> 
                                
<!--4 Seleccion grafico--> 
                
             <section class="conpreg">
                    
               <div id="preg"><img src="imgs/escojeicon.png"><p>¿Quién derramó los colores de la botella?</p></div>
                            
               <div>
                <div class="selecimagen"><img src="imgs/pique-pag19.png"><br/><span id="imgcorrec">1</span></div>
                <div class="selecimagen"><img src="imgs/pique-pag15.png"><br/><span >2</span></div>
                <div class="selecimagen"><img src="imgs/pique-pag14.png"><br/><span>3</span></div>
                    
                    </div>
                    <div id="separ"></div>
                    <div id="selecimg2" class="respuesta">Tu respuesta(s):<span id="pre5">s/r</span> </div>  
                </section> 

<!--5 Secuenciacion-->
                
                <section class="conpreg">                    
                    <div id="preg"><img src="imgs/icono6.png"><p>Pon en orden que se dan los hechos según la historia</p></div>
                
                    <p><span id="clickme">3</span>Pique queda pintado de muchos colores</p>
                   <p><span id="clickme">1</span>Se puso a buscar colores</p>
                   <p><span id="clickme">2</span>Se fue a buscar una brocha</p>
                    
                    <div id="ordennum1" class="respuesta">Tu respuesta(s): <span id="pre6">s/r</span> <span id="pre7">s/r</span> <span id="pre8">s/r</span> </div>  

                </section>

                
<!--6 Seleccion con Imagen-->  
                
                <section class="conpreg">
                    
                    <div id="preg"><img src="imgs/icono2.png"><p>Según la imagen qué hacía Pique</p>  </div>
                    
                      <div class="selecimagen"><img src="imgs/pique-pag20.png"><br/></div>

                <p><span>1</span>Estaba jugando</p>
                <p><span id="imgcorrec">2</span>Estaba recogiendo los colores en la botella</p>
                <p><span>3</span>Se estaba pintando</p>
                 
                   <div id="separ"></div>
                      
                    <div id="selec2" class="respuesta">Tu respuesta(s): <span id="pre9">s/r</span> </div> 
                 
                </section>
 
 <!--7 Verdaderdo Falso-->  
                
                <section class="conpreg">                    
                    <div id="preg"><img src="imgs/icono7.png"><p>Verdadero o Falso</p></div>
                
                <p><img src="imgs/falso.png">Pique se pintó solo las patas</p>
                <p ><img src="imgs/falso.png">El sol le prestó color morado</p>
                    
                    <div id="selecvf2" class="respuesta">Tu respuesta(s): <span2 id="pre10">s/r</span2><span2 id="pre11">s/r</span2> </div>  

                </section>                
 
    </div>
    

<script type="text/javascript" src="sendservice.js"></script>
</body> 
</html>