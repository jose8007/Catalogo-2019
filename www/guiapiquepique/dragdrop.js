    $(document).ready(function(){
                
        //inicio
        
        $('#fullpage').fullpage({
		sectionsColor: ['#4BBFC3']                       
			});
         $('#moveSlideRight').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSlideRight();
			});
        
        
    var sonido = document.getElementById("myAudio");
         
    //emparejar color    
        
    $('body #empacolor p:first').on('click', 'input', function(){  
        var color = $( this ).css( "background-color" );
           $("#empacolor p:first").css("background-color", color);
           $("#empacolor p:first").css("color", "white");
            var x = document.getElementById("myAudio");
            sonido.play();          
      })
      
        $('body #empacolor p:nth-child(2)').on('click', 'input', function(){  
        var color = $( this ).css( "background-color" );
           $("#empacolor p:nth-child(2)").css("background-color", color);
           $("#empacolor p:nth-child(2)").css("color", "white");   
            sonido.play();            
      })
        
        $('body #empacolor p:nth-child(3)').on('click', 'input', function(){  
        var color = $( this ).css( "background-color" );
           $("#empacolor p:nth-child(3)").css("background-color", color);
           $("#empacolor p:nth-child(3)").css("color", "white");
            sonido.play();
      })
        
        
    //puzzle    
    var puz = function() {
    var texta = "";
    var possible = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    texta = possible.charAt(Math.floor(Math.random() * possible.length));
    return texta;        
    }
     $("div.puzzle > p").text(puz);
    $("div.puzzle").click(function() {
       $( this ).toggleClass( "puzzlechan" );
        });     
   $("div.puzzle1").click(function() {
       $( this ).toggleClass( "puzzle1chan" );
        });

   $("div.puzzle2").click(function() {
       $( this ).toggleClass( "puzzle1chan" );
        });        

    $("div.puzzle3").click(function() {
       $( this ).toggleClass( "puzzle1chan" );
        }); 

    $("div.puzzle4").click(function() {
       $( this ).toggleClass( "puzzle1chan" );
        }); 
        
        
    $('body #respuesta').on('click', 'span', function(){  
           sonido.play();
      })    
    
    //palabra
      $('body .emparejapalabra').on('click', function(){
            var palabra = $(this).text();         
            $("#empareja span").text(palabra);
            sonido.play();
          })
      
      $('body .emparejapalabra1').on('click', function(){
            var palabra = $(this).text();         
            $("#empareja1 span").text(palabra);
            sonido.play();
          })
      
        $('body .emparejapalabra2').on('click', function(){
            var palabra = $(this).text();         
            $("#empareja2 span").text(palabra);
            sonido.play();
          })  
            
            
              
       $('body #identi').on('click', 'img', function(){   
           $("#identicuadro").toggle();
       })
       
        $(".bu2").click(function(){
        var palabra = $(this).text();    
        $("#oracion p").before("<span>" + palabra+ "</span>");
        $("#oracion span").attr("class", "someID");  
        })
        
        $("#oraborrar").click(function(){
        $(".someID").last().remove();
    });
        
    // ordena numeros 
    var count = 0;
    $('body .numclick').on('click', function(){

        if(count < 3){
            count += 1
            $(this).text(count);   
        }
    	 else{
  	         count = 0
             $(this).text(count);
	   }
    });     
          
        
    //ordena con imagen
    imgcount = 0;
    imgcount2 = 0;
    imgcount3 = 0;
    
    var img1 = "imgs/pueblodelocos80.png";
    var img2 = "imgs/pueblodelocos55.png";
    var img3 = "imgs/pueblodelocos27.png";  
     
                           
                            
   $("#ordenaopcion").on("click",function(){
       
       imgcount += 1;
       var lugar = lugar + '"' + "img" + '"';
       
     	if( imgcount == 1){ 
        $("#ordenaopcion img").attr("src", img1);
	   };        
     	if( imgcount == 2){ 
             $("#ordenaopcion img").attr("src", img2);
	   };
        if( imgcount == 3){ 
             $("#ordenaopcion img").attr("src", img3);
	   };
        if( imgcount > 3){ 
             imgcount = 0;
             $("#ordenaopcion img").attr("src", "imgs/imagopcion1.png");
	   };
    });
        
    $("#ordenaopcion2").on("click",function(){
        imgcount2 += 1;
     	if( imgcount2 == 1){ 
            $("#ordenaopcion2 img").attr("src",img1);
	   };        
     	if( imgcount2 == 2){ 
             $("#ordenaopcion2 img").attr("src", img2);
	   };
        if( imgcount2 == 3){ 
             $("#ordenaopcion2 img").attr("src", img3);
	   };
        if( imgcount2 > 3){ 
             imgcount2 = 0;
            $("#ordenaopcion2 img").attr("src", "imgs/imagopcion2.png");
	   };
    });
  
    $("#ordenaopcion3").on("click",function(){
        imgcount3 += 1;
     	if( imgcount3 == 1){ 
            $("#ordenaopcion3 img").attr("src", img1);
	   };        
     	if( imgcount3 == 2){ 
             $("#ordenaopcion3 img").attr("src", img2);
	   };
        if( imgcount3 == 3){ 
             $("#ordenaopcion3 img").attr("src", img3);
	   };
        if( imgcount3 > 3){ 
             imgcount3 = 0;
            $("#ordenaopcion3 img").attr("src", "imgs/imagopcion3.png");
	   };
    });
        
    //fin    
    });




            