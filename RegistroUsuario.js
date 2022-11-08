function Registro(){
    var correo= document.getElementById("co1").value;
    var contraseña= document.getElementById("con1").value;
    var Confirmar= document.getElementById("ccon1").value;
    var nombre= document.getElementById("n1").value;
    var Cedula= document.getElementById("ce1").value;
    var carro= document.getElementById("car").value;
    
    var valico= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var validar=valico.test(correo);
    if(validar == true){
        if(contraseña ==null || contraseña.length == 0){
            alert("Se debe llenar el campo contraseña")
        }
        else{
            if(Confirmar==null || Confirmar.length == 0){
                alert('Se debe llenar el campo confirmar contraseña') 
            }
            else{
                if(nombre==null ||nombre.length == 0){
                    alert('Se debe llenar el campo nombre completo')
                }
                else{
                    if(Cedula == null || Cedula.length == 0){
                        alert(' Se debe llenar el campo cedula')     
                    }
                    else{
                        if(contraseña != Confirmar){
                            alert('Las contraseñas no son iguales')  
         
                        }
                        else{
                            if(carro == null || carro.length == 0){
                                alert(' Se debe llenar el campo carro')     
                            } 
                            else{ 
                                alert('Se ah registrado exitosamente')
                                document.getElementById('re1').href='InicioMuerto.html';  
                          }   
                        }

                        
                      
                    }

                }
            }
        }
    }else{
        alert("Correo electronico no es valido(esta vacio no cumple con los requerimientos)");
    } 
}   