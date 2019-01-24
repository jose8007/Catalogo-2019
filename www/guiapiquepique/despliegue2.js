     var remplaza = /\+/gi; 
        var url = window.location.href;

        url = unescape(url);
        url = url.replace(remplaza, " ");
        url = url.toUpperCase();

        function obtener_valor(variable) 
        { 
            var variable_may = variable.toUpperCase();
            var variable_pos = url.indexOf(variable_may);

            if (variable_pos != -1) 
            {
                var pos_separador = url.indexOf("&", variable_pos);

                if (pos_separador != -1) 
                {
                    return url.substring(variable_pos + variable_may.length + 1, pos_separador);
                } else
                {
                    return url.substring(variable_pos + variable_may.length + 1, url.length);
                }
            } else 
            {
                return "NO_ENCONTRADO";
            }
        }   
        resultado = obtener_valor("verinfo");

/*Funcion Cargar y Mostrar datos*/
    $(document).ready(function(){    
        acertadas = 6;
        fallos = 5;
        xprelog = [];

        
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
        
    });
    
    

});