// file transfer.js
var myTransfer = {
    subido: function(r){
        //Respuesta Satisfactoria
          alert('p3');
        if(r.response == '1'){
            alert('p4: '+r.response);
            navigator.notification.alert("Se ha registrado corrrectamente",function(){
            windows.location.href = '#home';
                //asignar registro local
                 alert('p5');
            },"Registro Correcto","Aceptar");
        }
    },
    error: function(err){
        navigator.notification.alert("Error: "+err.code,null,"Error","Aceptar");
    },
    opciones: new FileUploadOptions(),
    ft: new FileTransfer();
};

myTransfer.opciones.fileKey = "foto";
myTransfer.opciones.fileName = "Raziel";
myTransfer.opciones.mimeType = "image/jpg";
myTransfer.opciones.params = {value1: 'Text', value2: 'param'};