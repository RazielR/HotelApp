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
        var foto = $('#regTake').attre('rel');
        if(nombre != '' && mail != '' && tel != '' && foto !='' && foto != undefined){
         // enviar datos al servidor
            fn.enviarRegistro(nombre, mail, tel, foto);
        }else{
           navigator.notification.alert('Todos los campos son requeridos',null,'Error','Aceptar');
        }
        
    },
    enviarRegistro: function(nom, mail, tel , foto){
        $.ajax({
          type: "POST",
          url: "http://carlos.igitsoft.com/apps/test.php",
          data: { nom: nom, mail: tel, tel: tel }
        }).done(function( respuesta ) {
                if (respuesta=='1')
                    myTransfer.ft.upload(foto,"http://carlos.igitsoft.com/apps/test.php",myTransfer.subido,myTransfer.error,myTransfer.opciones,true);
        });
    }
};

//Esta esta en Java Script
// window.addEventListener('load',fn.init,false);

//Esta esta en Jquery
$('document').ready(fn.init);

//Este ejemeplo se toma de la documentacion de jquery
// $(fn.init); //Es lo equivalente