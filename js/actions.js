// actions.js
var fn = {
    init: function(){
        document.addEventListener('deviceready',fn.device,false);
      
    },
    device: function(){
        var x = false;
            if(!x)
            window.location.href = '#reg';
        // tap es como un clic de los mobiles
        $('#regTake').tap(myCapture.tomarFoto);
        $('#regSend').tap(fn.registro);
    },
    registro: function(){
        //Tomamos los campos y con el .val sacamos el contenido
        var nombre = $('#regName').val();
        var mail = $('#regMail').val();
        var tel = $('#regTel').val();
        if(nombre != '' && mail != '' && tel != ''){
         // enviar datos al servidor
            navigator.notification.beep(2);
        }else{
           navigator.notification.alert('Todos los campos son requeridos',null,'Error','Aceptar');
        }
        
    }
};

//Esta esta en Java Script
// window.addEventListener('load',fn.init,false);

//Esta esta en Jquery
$('document').ready(fn.init);

//Este ejemeplo se toma de la documentacion de jquery
// $(fn.init); //Es lo equivalente