
$(document).ready(function(){
    
    $('body #enviar').on('click', function(){
    
    var resultado = 0;
    
    //Pregunta1 ejercicio de colocar palabra
    var coloca = $("#empareja span").text();
    
    var respu1 = coloca;

    //Pregunta2 ejercicio opción multiple texto
    var opcion1 = $("input:checked[name=example1]").val();
    var respu2 = opcion1;

    //Pregunta3 
    var empacolor1 = $("input:checked[name=empacolor1]").val();
    var empacolor2 = $("input:checked[name=empacolor2]").val();
    var empacolor3 = $("input:checked[name=empacolor3]").val();
    
    var respu3 = empacolor1;
    var respu4 = empacolor2;
    var respu5 = empacolor3;
        
        
    //Pregunta4
    var vfopcion1 = $("input:checked[name=vfopcion1]").val();
    var vfopcion2 = $("input:checked[name=vfopcion2]").val();
    
    var respu6 = vfopcion1;
    var respu7 = vfopcion2;
    
    //Pregunta5
    var empacolor4 = $("input:checked[name=empacolor4]").val();
    var empacolor5 = $("input:checked[name=empacolor5]").val();
    var empacolor6 = $("input:checked[name=empacolor6]").val();
    
    var respu8 = empacolor4;
    var respu9 = empacolor5;
    var respu10 = empacolor6;
        
         
    //Pregunta6
    var buscapalabras = $("div.puzzle1" ).filter(function(){   
    return $(this).css('background-color') == 'rgb(245, 205, 38)'; 
    });
    var buscapalabras = buscapalabras.text();
    
    
    var buscapalabras2 = $("div.puzzle2" ).filter(function(){   
    return $(this).css('background-color') == 'rgb(245, 205, 38)'; 
    });
    var buscapalabras2 = buscapalabras2.text();
    
    
    var buscapalabras3 = $("div.puzzle3" ).filter(function(){   
    return $(this).css('background-color') == 'rgb(245, 205, 38)'; 
    });
    var buscapalabras3 = buscapalabras3.text();
    
    
    var buscapalabras4 = $("div.puzzle4" ).filter(function(){   
    return $(this).css('background-color') == 'rgb(245, 205, 38)'; 
    });
    var buscapalabras4 = buscapalabras4.text();
    
    var respu11 = buscapalabras;
    var respu12 = buscapalabras2;
    var respu13 = buscapalabras3;
    var respu14 = buscapalabras4;
    
  
     
        
        
    //--para pruebas internas--
    
     localStorage.setItem("re1", respu1);
      localStorage.setItem("re2", respu2);
      localStorage.setItem("re3", respu3);
      localStorage.setItem("re4", respu4);
      localStorage.setItem("re5", respu5);
      localStorage.setItem("re6", respu6);
      localStorage.setItem("re7", respu7);
      localStorage.setItem("re8", respu8);
      localStorage.setItem("re9", respu9);
      localStorage.setItem("re10", respu10);
      localStorage.setItem("re11", respu11);
      localStorage.setItem("re12", respu12);
      localStorage.setItem("re13", respu13);
      localStorage.setItem("re14", respu14);
        
      //localStorage.setItem("re15", respu15);
      //localStorage.setItem("re16", respu16);
      //localStorage.setItem("re17", respu17);
      //localStorage.setItem("re18", respu18);
      //localStorage.setItem("re19", respu19);
      //localStorage.setItem("re20", respu20);
      //localStorage.setItem("re21", respu21);
        
      //localStorage.setItem("re22", respu22);   
      //localStorage.setItem("re23", respu23);
      //localStorage.setItem("re24", respu24);
      //localStorage.setItem("re25", respu25);
      //localStorage.setItem("re26", respu26);
    
      //localStorage.setItem("re27", respu27);
      //localStorage.setItem("re28", respu28);
      //localStorage.setItem("re29", respu29);      
      //localStorage.setItem("re30", respu30);
        
    //para comparacion de respuestas
   // var respu17 = respu17.replace(/\s+/g, '');     
    //
        
        
    if (respu1 == "hacer"){resultado++;};
    if (respu2 == 1){resultado++;};   
    if (respu3 == 2){resultado++;};    
    if (respu4 == 3){resultado++;};
    if (respu5 == 1){resultado++;};   
    if (respu6 == "verdadero"){resultado++;}; 
    if (respu7 == "falso"){resultado++;};   
    if (respu8 == 3){resultado++;};     
    if (respu9 == 1){resultado++;};
    if (respu10 == 2){resultado++;};
    if (respu11 == "CUCULECA"){resultado++;};
    if (respu12 == "TILIPITI"){resultado++;};    
    if (respu13 == "RENGO"){resultado++;};
    if (respu14 == "ABUEA"){resultado++;};
        
    //if (respu15 == -1){resultado++;};
    //if (respu16 == -1){resultado++;};
    //if (respu17 == -1){resultado++;};
    //if (respu18 == -1){resultado++;};
    //if (respu19 == -1){resultado++;};
    //if (respu20 == -1){resultado++;};
    //if (respu21 == -1){resultado++;};
    //if (respu22 == -1){resultado++;}; 
    //if (respu23 == -1){resultado++;};   
   var resultado = (resultado*10)/14;
   var resultado = resultado.toFixed(1);
   window.location.href = 'reportes2.html?' + "verinfo=" + resultado;

 //window.location.href = 'resultadosprueba.html?' + "verinfo=" + resultado;
   })

});


            