/*Funcion Cargar y Mostrar datos*/
    $(document).ready(function(){    
        resultado = 0;
        acertadas = 0;
        fallos = 0;
        

        var pregquery = respuestas[0];
        console.log(pregquery);
        var fecha = pregquery[3];
        var usuario = pregquery[1];
        
        $("#fecha span").text(fecha);
        $("#idusuario").text(usuario);
        
        
        pregquery.splice(0, 4);       
        
        
        var respuestasquery = ["1","1","falso","verdadero","1","3","1","2","2","falso","falso"];
        
        var resarrastre= ["arroz" ,"hamburguesas", "helados de fresa"];
            
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
    
    $('#boton-cargar').click(function(){       
      
            
        $("#prime2").css("display", "block"); 
        
            function printresult(prege, respuesta, lugar, tet){
            if (prege !== respuesta){
            $(tet).css("background-color", "red");
            $(lugar).text(prege);
            };
            if (prege == 'undefined'){
            $(lugar).text("s/r");    
            };   
                
            if (prege == respuesta){
                $(lugar).text(prege);
               
            };
            };
        
            function printora(prege, respuesta, lugar, tet){
             var newpreg = prege.replace(/\s+/g, '');
            if (newpreg !== respuesta){
    
            $(tet).css("background-color", "red");
            $(lugar).text(prege);
            };
            if (newpreg == 'undefined'){
                $(lugar).text("s/r");    
            };
            if (newpreg == respuesta){
                $(lugar).text(prege);
              
            } 
            };
        
            function arrastracomparar (prege, respuesta,lugar,tet){
                var pr = respuesta.indexOf(prege);
                if (pr == -1){
                    $(tet).css("background-color", "red");
                    $(lugar).text(prege);
                };
                if (pr !== -1){
                    $(lugar).text(prege);
                    
                };
            };
        
        printresult(pregquery[0], respuestasquery[0], "#pre1", "#selec1");
        printresult(pregquery[1], respuestasquery[1], "#pre2", "#selecimg1");
        printresult(pregquery[2], respuestasquery[2], "#pre3", "#selecvf1");
        printresult(pregquery[3], respuestasquery[3], "#pre4", "#selecvf1");
        printresult(pregquery[4], respuestasquery[4], "#pre5", "#selecimg2");
        
        printresult(pregquery[5], respuestasquery[5], "#pre6", "#ordennum1");
        printresult(pregquery[6], respuestasquery[6], "#pre7", "#ordennum1");        
        printresult(pregquery[7], respuestasquery[7], "#pre8", "#ordennum1");
        
        printresult(pregquery[8], respuestasquery[8], "#pre9", "#selec2");
        printresult(pregquery[9], respuestasquery[9], "#pre10", "#selecvf2");
        printresult(pregquery[10], respuestasquery[10], "#pre11", "#selecvf2");                              
    });
    
    

});