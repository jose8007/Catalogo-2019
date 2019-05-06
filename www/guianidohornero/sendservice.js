$(document).ready(function(){
							  
		function pep() {
			
		var guia = {guia: codguia};
		var userid = {userid: usuario};
		var date = {fecha: fecha};	
		var nota = {total: resultado};
			

        var servidor = [userid,guia,date,nota];
        console.log(servidor);
  
			};
         
			setTimeout(function(){pep();
								 }, 2000);
});