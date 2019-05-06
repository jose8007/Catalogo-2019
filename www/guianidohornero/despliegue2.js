/*Funcion Cargar y Mostrar datos*/
    $(document).ready(function(){    
        resultado = 5.5;
        acertadas = 4;
        fallos = 0;
        xprelog = [];

        pregquery = ["3", "Alumno Libresa", "7/6/2019", "7/6/2019", "2", "1", "2", "2", "1", "3", "falso", "falso", "2", "ventanas", "2", "GORRIONES", "TREPADORES", "MIRLO", "RAYADITOS"];
		
        fecha = pregquery[3];
        usuario = pregquery[1];
        codguia = pregquery[2];
		
		
        $("#fecha span").text(fecha);
        $("#idusuario").text(usuario);
        
        
       pregquery.splice(0, 4);     
        
        var respuestasquery = ["3", "1", "1", "2", "1", "3", "verdadero", "falso", "2", "ventanas", "2", "GORRIONES", "TREPADORES", "MIRLO", "RAYADITOS"];
        
          
        function sumaresult (array1, array2){
                
	       for(var i=0; i<respuestasquery.length; i++){
		          if(array1[i] == array2[i]){
			         resultado++;
                     acertadas++;}
               	    if(array1[i] !== array2[i]){
                     fallos++}
                }
            };
            
        
            sumaresult (pregquery, respuestasquery);
            resultado = (resultado * 10)/respuestasquery.length;
            resultado = resultado.toFixed(1);        
        
            $('#circle').circleProgress({
            value: 1,
            size: 90,
            fill: {color: "#ff1e41" },
            thickness : 10,   
            }).on('circle-animation-end', function(event, progress) {
             $("#circle").css("display", "none");
            $("#resultado1").text(resultado + "/"+10);      
             $("resultado1").css("display", "block");
            $("#cert").text(acertadas);
            $("#fail").text(fallos);
            $("#stage2 div").css("display", "block");
             })
        
/*respuestas*/
        
             function printresult(prege, respuesta, lugar, tet){
            if (prege !== respuesta){
            $(tet).css("background-color", "red");
            $(lugar).text(prege);
             xprelog.push("0");    
            };  
                
            if (prege == respuesta){
                $(lugar).text(prege);
                xprelog.push("1"); 
               
            };
            };
        
            function printora(prege, respuesta, lugar, tet){
            var newpreg = prege.replace(/\s+/g, '');
			var newrespua = respuesta.replace(/\s+/g, '');	
            if (newpreg !== newrespua){
    
            $(tet).css("background-color", "red");
            $(lugar).text(prege);
                xprelog.push("0"); 
            };

            if (newpreg == newrespua){
                $(lugar).text(prege);
                xprelog.push("1"); 
            }   
            };
        
            function arrastracomparar (prege, respuesta,lugar,tet){
                var pr = respuesta.indexOf(prege);
                if (pr == -1){
                    $(tet).css("background-color", "red");
                    $(lugar).text(prege);
                    xprelog.push("0"); 
                };
                if (pr !== -1){
                    $(lugar).text(prege);
                    xprelog.push("1"); 
                };
            };
        
		printresult(pregquery[0], respuestasquery[0], "#pre1", "#selec1"); 		
		printresult(pregquery[1], respuestasquery[1], "#pre2", "#selec2");
		printresult(pregquery[2], respuestasquery[2], "#pre3", "#selec3"); 	
		printresult(pregquery[3], respuestasquery[3], "#pre4", "#ordenimg1"); 
		printresult(pregquery[4], respuestasquery[4], "#pre5", "#ordenimg1"); 	
		printresult(pregquery[5], respuestasquery[5], "#pre6", "#ordenimg1"); 		
        printresult(pregquery[6], respuestasquery[6], "#pre7", "#selecvf1");
        printresult(pregquery[7], respuestasquery[7], "#pre8", "#selecvf1");  		
		printresult(pregquery[8], respuestasquery[8], "#pre9", "#selec4"); 			
        printresult(pregquery[9], respuestasquery[9], "#pre10", "#palabra1"); 
        printresult(pregquery[10], respuestasquery[10], "#pre11", "#selecimg2");  		
        printresult(pregquery[11], respuestasquery[11], "#pre12", "#puzzle1");
        printresult(pregquery[12], respuestasquery[12], "#pre13", "#puzzle1");   
        printresult(pregquery[13], respuestasquery[13], "#pre14", "#puzzle1");
        printresult(pregquery[14], respuestasquery[14], "#pre15", "#puzzle1");
        
    $('#boton-cargar').click(function(){                   
        $("#prime2").css("display", "block"); 
        
    });
    
    

});