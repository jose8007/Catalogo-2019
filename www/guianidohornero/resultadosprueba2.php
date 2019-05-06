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
               
<!-- 1 Seleccion-->
				
                <section class="conpreg">
                    
                    <div id="preg"><img src="imgs/escojeicon.png"><p>¿Qué le pasó un día al hornero?</p></div>   
					
                <p><span>1</span>Se cansó de hacer nidos y se puso a estudiar arquitectura</p>
                <p><span>2</span>Decidió irse de casa por un tiempo</p>
                <p><span id="imgcorrec">3</span>Se cansó de hacer siempre los mismos nidos</p>
                    
                    <div id="selec1" class="respuesta">Tu respuesta(s): <span id="pre1">s/r</span> </div>  
                </section>
				

			
	<!-- 2 Seleccion-->
				
                <section class="conpreg">
                    
                    <div id="preg"><img src="imgs/escojeicon.png"><p>¿Cuál fue la respuesta del hornero cuando le preguntaron que significaba eso?</p></div>   
					
                <p><span id="imgcorrec">1</span>Mi nido</p>
                <p><span>2</span>No significa nada </p>
                <p><span>3</span>Es mi nueva casa</p>
                    
                    <div id="selec2" class="respuesta">Tu respuesta(s): <span id="pre2">s/r</span> </div>  
                </section>		
				
<!--3 Seleccion con Imagen-->  
                
                <section class="conpreg">
                    
                    <div id="preg"><img src="imgs/icono2.png"><p>¿Qué hace el hornero en esta imagen?</p>  </div>
                    
                      <div class="selecimagen"><img src="imgs/pag4.png"><br/></div>

                <p><span id="imgcorrec">1</span>Construir un nuevo nido</p>
                <p><span>2</span>Recolectar material</p>
                <p><span>3</span>Dando un paseo</p>
                 
                   <div id="separ"></div>
                      
                    <div id="selec3" class="respuesta">Tu respuesta(s): <span id="pre3">s/r</span> </div> 
                 
                </section>			
    

<!--4 Secuenciacion-->
                
                
                <section class="conpreg">
                    
                    <div id="preg"><img src="imgs/icono4.png"><p>¿Cuál es el orden lógico de estas ilustraciones? Organízalas 1º, 2º y 3º </p></div>
        
                    
                    <div class="selecimagen"><img src="imgs/pag5.png"><br/><span id="imgcorrec">2</span></div>
                    <div class="selecimagen"><img src="imgs/pag17.png"><br/><span id="imgcorrec">1</span></div>
                    <div class="selecimagen"><img src="imgs/pag23.png"><br/><span id="imgcorrec">3</span></div>
                    
                    <div id="separ"></div>
                     
                    <div id="ordenimg1" class="respuesta">Tu respuesta(s): <span id="pre4">s/r</span><span id="pre5">s/r</span><span id="pre6">s/r</span> </div>  
                </section>

				
				
 <!--5 Verdaderdo Falso-->
				
				<section class="conpreg">                    
                    <div id="preg"><img src="imgs/icono7.png"><p>Verdadero o Falso</p></div>
                
                <p><img src="imgs/verdadero.png">Les pareció una vergüenza el nido que hizo el hormero</p>
                <p ><img src="imgs/falso.png">El hornero se puso a llorar cuando le dijeron que estaba feo</p>
                    
                    <div id="selecvf1" class="respuesta">Tu respuesta(s): <span2 id="pre7">s/r</span2><span2 id="pre8">s/r</span2> </div>  

                </section>	
				
 	<!--6 Seleccion-->
				
                <section class="conpreg">
                    
                    <div id="preg"><img src="imgs/escojeicon.png"><p>Escoge 1 de los enunciados del decreto</p></div>   
					
                <p><span>1</span>A partir de hoy deben ir a visitar el nido</p>
                <p><span id="imgcorrec">2</span>Se prohíbe llamar nido a esa horripilante cosa</p>
                <p><span>3</span>Será considerado museo por lo raro que es</p>
                    
                    <div id="selec4" class="respuesta">Tu respuesta(s): <span id="pre9">s/r</span> </div>  
                </section>		
				
	<!--7 Palabra correcta--> 
                <section class="conpreg">                    
                    <div id="preg"><img src="imgs/icono4.png"><p>Completa la frase con la palabra correcta</p></div>
                
                <p>El nido del hornero tenía muchas<spn id="correctoPala">ventanas</spn> y puertas.</p>
                    
                <div id="palabra1" class="respuesta">Tu respuesta(s): <span2 id="pre10">s/r</span2> </div>     

                </section>
				
<!--8 Seleccion grafico--> 
                
             <section class="conpreg">
                    
               <div id="preg"><img src="imgs/escojeicon.png"><p>El Mirlo entró por la puerta de color</p></div>
                            
               <div>
                <div class="selecimagen"><img src="imgs/rojo.png"><br/><span>1</span></div>
                <div class="selecimagen"><img src="imgs/amarillo.png"><br/><span id="imgcorrec" >2</span></div>
                <div class="selecimagen"><img src="imgs/azul.png"><br/><span>3</span></div>
                    
                    </div>
                    <div id="separ"></div>
                    <div id="selecimg2" class="respuesta">Tu respuesta(s):<span id="pre11">s/r</span> </div>  
                </section> 
				
				
  <!--9 Buscapalabras--> 
				
				<section class="conpregpuzzle">
                    
                    <div id="preg"><img src="imgs/icono8.png"><p>Encuentra las siguientes palabras:</p></div>
        
                    
                
                <br/>
 <div id="puzzlecanvas" >
<div class="puzzle1"><p id="letra">G</p></div>
<div class="puzzle1"><p id="letra">O</p></div>
<div class="puzzle1"><p id="letra">R</p></div>
<div class="puzzle1"><p id="letra">R</p></div>
<div class="puzzle1"><p id="letra">I</p></div>
<div class="puzzle1"><p id="letra">O</p></div>
<div class="puzzle1"><p id="letra">N</p></div>
<div class="puzzle1"><p id="letra">E</p></div>
<div class="puzzle1"><p id="letra">S</p></div>
<div class="puzzle"><p id="letra">10</p></div>            

<!--tercera fila-->     
<div class="puzzle"><p id="letra">21</p></div>
<div class="puzzle"><p id="letra">22</p></div>
<div class="puzzle"><p id="letra">23</p></div>
<div class="puzzle"><p id="letra">24</p></div>
<div class="puzzle"><p id="letra">25</p></div>
<div class="puzzle"><p id="letra">26</p></div>
<div class="puzzle3"><p id="letra">M</p></div>
<div class="puzzle"><p id="letra">28</p></div>
<div class="puzzle"><p id="letra">29</p></div>
<div class="puzzle"><p id="letra">30</p></div>
<!--cuarta fila-->       
<div class="puzzle"><p id="letra">31</p></div>
<div class="puzzle"><p id="letra">32</p></div>
<div class="puzzle"><p id="letra">33</p></div>
<div class="puzzle"><p id="letra">34</p></div>
<div class="puzzle"><p id="letra">35</p></div>
<div class="puzzle"><p id="letra">36</p></div>
<div class="puzzle3"><p id="letra">I</p></div>
<div class="puzzle"><p id="letra">38</p></div>
<div class="puzzle"><p id="letra">39</p></div>
<div class="puzzle"><p id="letra">40</p></div>
<!--quinta fila-->       
<div class="puzzle"><p id="letra">41</p></div>
<div class="puzzle"><p id="letra">42</p></div>
<div class="puzzle"><p id="letra">43</p></div>
<div class="puzzle"><p id="letra">44</p></div>
<div class="puzzle"><p id="letra">45</p></div>
<div class="puzzle"><p id="letra">46</p></div>
<div class="puzzle3"><p id="letra">R</p></div>
<div class="puzzle"><p id="letra">48</p></div>
<div class="puzzle"><p id="letra">49</p></div>
<div class="puzzle"><p id="letra">50</p></div>
<!--sexta fila-->       
<div class="puzzle"><p id="letra">51</p></div>
<div class="puzzle"><p id="letra">52</p></div>
<div class="puzzle"><p id="letra">53</p></div>
<div class="puzzle"><p id="letra">54</p></div>
<div class="puzzle"><p id="letra">55</p></div>
<div class="puzzle"><p id="letra">56</p></div>
<div class="puzzle3"><p id="letra">L</p></div>
<div class="puzzle"><p id="letra">58</p></div>
<div class="puzzle"><p id="letra">59</p></div>
<div class="puzzle"><p id="letra">60</p></div>
<!--septima fila-->       
<div class="puzzle"><p id="letra">61</p></div>
<div class="puzzle"><p id="letra">62</p></div>
<div class="puzzle"><p id="letra">63</p></div>
<div class="puzzle"><p id="letra">64</p></div>
<div class="puzzle"><p id="letra">65</p></div>
<div class="puzzle"><p id="letra">66</p></div>
<div class="puzzle3"><p id="letra">O</p></div>
<div class="puzzle"><p id="letra">68</p></div>
<div class="puzzle"><p id="letra">69</p></div>
<div class="puzzle"><p id="letra">70</p></div>
<!--octava fila-->       
<div class="puzzle2"><p id="letra">T</p></div>
<div class="puzzle2"><p id="letra">R</p></div>
<div class="puzzle2"><p id="letra">E</p></div>
<div class="puzzle2"><p id="letra">P</p></div>
<div class="puzzle2"><p id="letra">A</p></div>
<div class="puzzle2"><p id="letra">D</p></div>
<div class="puzzle2"><p id="letra">O</p></div>
<div class="puzzle2"><p id="letra">R</p></div>
<div class="puzzle2"><p id="letra">E</p></div>
<div class="puzzle2"><p id="letra">S</p></div>
<!--novena fila-->       
<div class="puzzle4"><p id="letra">R</p></div>
<div class="puzzle4"><p id="letra">A</p></div>
<div class="puzzle4"><p id="letra">Y</p></div>
<div class="puzzle4"><p id="letra">A</p></div>
<div class="puzzle4"><p id="letra">D</p></div>
<div class="puzzle4"><p id="letra">I</p></div>
<div class="puzzle4"><p id="letra">T</p></div>
<div class="puzzle4"><p id="letra">O</p></div>
<div class="puzzle4"><p id="letra">S</p></div>
<div class="puzzle"><p id="letra">90</p></div>   
</div>                     
    <div id="puzzle1" class="respuesta">Tu respuesta(s):<span2 id="pre12">s/r</span2><span2 id="pre13">s/r</span2><span2 id="pre14">s/r</span2><span2 id="pre15">s/r</span2> </div>  
                </section>
				
                
    </div>
    
<script type="text/javascript" src="sendservice.js"></script>
</body> 
</html>