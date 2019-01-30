
$(document).ready(function(){    
    
    $('body #enviar').on('click', function(){
        
    
    var fallos = 0;    
    var resultado = 0;
    
    //Pregunta1
    var opcion1 = $("input:checked[name=example1]").val();
    var respu1 = opcion1;
    
    //Pregunta2
    var opcionimg = $("input:checked[name=seleimg]").val();
    var respu2 = opcionimg;
        
    //Pregunta3
    var vfopcion1 = $("input:checked[name=vfopcion1]").val();
    var vfopcion2 = $("input:checked[name=vfopcion2]").val();
    
    var respu3 = vfopcion1;

    var respu4 = vfopcion2; 
    
    //Pregunta4
    var opcionimg2 = $("input:checked[name=seleimg2]").val();
    var respu5 = opcionimg2;     
    
    //Pregunta5
     var ordenar1 = $("#clickme").text();
     var ordenar2 = $("#clickme2").text();
     var ordenar3 = $("#clickme3").text();
     
     var respu6 = ordenar1;
     var respu7 = ordenar2;
     var respu8 = ordenar3;
        
    //Pregunta6
    var opcion2 = $("input:checked[name=example2]").val();
    var respu9 = opcion2;    
        
    //Pregunta7
    var vfopcion3 = $("input:checked[name=vfopcion3]").val();
    var vfopcion4 = $("input:checked[name=vfopcion4]").val();
    
    var respu10 = vfopcion3;

    var respu11 = vfopcion4;
                     
    var recorespu = [respu1, respu2, respu3, respu4, respu5, respu6,respu7, respu8, respu9, respu10, respu11];
        
    var respuestasquery = ["1","1","falso","verdadero","1","3","1","2","2","falso","falso"];     
        
        function comprobar(){
        for (var i=0; i < recorespu.length; i++){
            
               if (recorespu[i] == undefined){
                   recorespu[i] = "s/r";
                };
                if (recorespu[i] == ""){
                   recorespu[i] = "s/r";
                };
                if (recorespu[i] == "_________"){
                   recorespu[i] = "s/r";
                };            
        }; 
            
        return recorespu;    
        };
        

        
    
        function submit() {  
            
           for(i=0; i<11; i++) {      
            if (recorespu[i] == respuestasquery[i]){
               resultado++;
            }
           }

            
            resultado = (resultado * 10)/respuestasquery.length;
            resultado = resultado.toFixed(1);
            
                    console.log(resultado);   

            window.location.href = 'resultadosprueba2.html?' + "verinfo=" + resultado;
        }
        submit();
       
        
   })
   
});


            