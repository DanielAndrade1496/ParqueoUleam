
function Inicio(){
    var Correo= document.getElementById("e1").value;
    var contraseña= document.getElementById("c1").value;
    var valico= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var validar=valico.test(Correo);
    if(validar == true){
        if(contraseña ==null || contraseña.length == 0){
            alert("Se debe llenar el campo contraseña")
        }
        else{
            document.getElementById('ini1').href='InicioMuerto.html'
        }
    }else{
        alert("Correo electronico no valido")
    }
    
}


