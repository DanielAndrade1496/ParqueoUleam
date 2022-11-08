function contraseña(){
    var Contraseña_actual= document.getElementById("co1").value;
    var contraseña= document.getElementById("con1").value;
    var Confirmar= document.getElementById("ccon1").value;
        if(Contraseña_actual ==null ||Contraseña_actual.length == 0){
            alert("Se debe llenar el campo contraseña actual")
        } 
        else{ 
            if(contraseña==null || contraseña.length == 0){
            alert('Se debe llenar el campo contraseña nueva') 
            }   
            else{
                if(Confirmar==null || Confirmar.length == 0){
                    alert('Se debe llenar el campo confirmar contraseña') 
                }
                else{  
                    if(contraseña != Confirmar){
                        alert('Las contraseñas no son iguales')  
     
                    }
                    else{ 
                        alert('La clave se ah camabiado  exitosamente')
                        document.getElementById('g1').href='InicioSesion.html'; 
                  }     

            }
         
        }
        }

    
}