// actions.js
var fn = {
    init: function(){
        document.addEventListener('deviceready',fn.device,false);
      
    },
    device: function(){
        var x = false;
        if(!x)
            windows.location.href = '#reg';
        $('#regSend').click(fn.registro);
    },
    registro: function(){
        //Tomamos los campos y con el .val sacamos el contenido
        var nombre = $('#regName').val();
        var mail = $('#regMail').val();
        var tel = $('#regTel').val();
        if(nombre != '' && mail != '' && tel != ''){
         // enviar datos al servidor
        }else{
            alert("Todos los campos son requeridos");
        }
        
    }
};

//Esta esta en Java Script
// window.addEventListener('load',fn.init,false);

//Esta esta en Jquery
$('document').ready(fn.init);

//Este ejemeplo se toma de la documentacion de jquery
// $(fn.init); //Es lo equivalente