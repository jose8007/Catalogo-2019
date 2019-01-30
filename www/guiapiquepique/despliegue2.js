function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
/*Funcion Cargar y Mostrar datos*/
    $(document).ready(function(){ 
        acertadas = 0;
        fallos = 0;
        var resultado = getUrlParameter('verinfo');
        
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