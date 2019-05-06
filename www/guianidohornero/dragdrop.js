$(window).on('load', function() { // makes sure the whole site is loaded 
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE");
        var msie2 = ua.indexOf("Trident");
        if (msie !== -1){
            window.location.href = 'atencion.html';
        };
        if (msie2 !== -1){
            window.location.href = 'atencion.html';
        }; 
	
	
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})


        $(document).ready(function() {
                     
			$('#fullpage').fullpage({
				sectionsColor: ['#4BBFC3']                       
			});
             $('#moveSlideRight').click(function(e){
				e.preventDefault();
				$.fn.fullpage.moveSlideRight();
			}); 
	
      var sonido = document.getElementById("myAudio");
			
//light box
    $('.lightbox_trigger').click(function(e) {
		

		e.preventDefault();
		
		var image_href = $(this).attr("href");
		
		if ($('#lightbox').length > 0) {
			$('#content').html('<img src="' + image_href + '" />');
			$('#lightbox').show();
		}
		
		else { 
			
			var lightbox = 
			'<div id="lightbox">' +
				'<p>X Cerrar</p><br/>' +
				'<div id="content">' + 
					'<img src="' + image_href +'" />' +
				'</div>' +	
			'</div>';
				
			$('body').append(lightbox);
		}
		
	});
	
	$('#lightbox').live('click', function() {
		$('#lightbox').hide();
	});
      			

// target elements with the "draggable" class
interact('.draggable')
  .draggable({
    // enable inertial throwing
    inertia: true,
    // keep the element within the area of it's parent
    restrict: {
      restriction: "parent",
      endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');
        var pixelx = "prueba";

      textEl && (textEl.textContent = pixelx);
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;      
        target.style.webkitTransform =
            target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;
/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '#yes-drop',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.80,

  // listen for drop related events:

  ondropactivate: function (event) {
    // add active dropzone feedback
    event.target.classList.add('drop-active');
  },
  ondragenter: function (event) {
    var draggableElement = event.relatedTarget,
        dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
    //draggableElement.textContent = 'Dragged in';
  },
  ondragleave: function (event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
    //event.relatedTarget.textContent = 'Dragged out';
  },
  ondrop: function (event) {
    //event.relatedTarget.textContent = 'Dropped';
  },
  ondropdeactivate: function (event) {
    // remove active dropzone feedback
    event.target.classList.remove('drop-active');
    event.target.classList.remove('drop-target');
  }
});




      
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
    
        $('body #empacolor2 p:first').on('click', 'input', function(){  
        var color = $( this ).css( "background-color" );
           $("#empacolor2 p:first").css("background-color", color);
           $("#empacolor2 p:first").css("color", "white");
            var x = document.getElementById("myAudio");
            sonido.play();          
      })
      
        $('body #empacolor2 p:nth-child(2)').on('click', 'input', function(){  
        var color = $( this ).css( "background-color" );
           $("#empacolor2 p:nth-child(2)").css("background-color", color);
           $("#empacolor2 p:nth-child(2)").css("color", "white");   
            sonido.play();            
      })
        
        $('body #empacolor2 p:nth-child(3)').on('click', 'input', function(){  
        var color = $( this ).css( "background-color" );
           $("#empacolor2 p:nth-child(3)").css("background-color", color);
           $("#empacolor2 p:nth-child(3)").css("color", "white");
            sonido.play();
      })
        
        
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
        
    //ordena con imagen
    imgcount = 0;
    imgcount2 = 0;
    imgcount3 = 0;  
            
    $("#ordenaopcion").click(function(){
        imgcount += 1;
     	if( imgcount == 1){ 
            $("#ordenaopcion img").attr("src", "imgs/pag17.png");
	   };        
     	if( imgcount == 2){ 
             $("#ordenaopcion img").attr("src", "imgs/pag5.png");
	   };
        if( imgcount == 3){ 
             $("#ordenaopcion img").attr("src", "imgs/pag23.png");
	   };
        if( imgcount > 3){ 
             imgcount = 0;
            $("#ordenaopcion img").attr("src", "imgs/pag17.png");
	   };
    });
        
    $("#ordenaopcion2").click(function(){
        imgcount2 += 1;
     	if( imgcount2 == 1){ 
            $("#ordenaopcion2 img").attr("src", "imgs/pag17.png");
	   };        
     	if( imgcount2 == 2){ 
             $("#ordenaopcion2 img").attr("src", "imgs/pag5.png");
	   };
        if( imgcount2 == 3){ 
             $("#ordenaopcion2 img").attr("src", "imgs/pag23.png");
	   };
        if( imgcount2 > 3){ 
             imgcount2 = 0;
            $("#ordenaopcion2 img").attr("src", "imgs/pag17.png");
	   };
    });
  
    $("#ordenaopcion3").click(function(){
        imgcount3 += 1;
     	if( imgcount3 == 1){ 
            $("#ordenaopcion3 img").attr("src", "imgs/pag17.png");
	   };        
     	if( imgcount3 == 2){ 
             $("#ordenaopcion3 img").attr("src", "imgs/pag5.png");
	   };
        if( imgcount3 == 3){ 
             $("#ordenaopcion3 img").attr("src", "imgs/pag23.png");
	   };
        if( imgcount3 > 3){ 
             imgcount3 = 0;
            $("#ordenaopcion3 img").attr("src", "imgs/pag17.png");
	   };
    });
        
    //fin    
    });

   
            