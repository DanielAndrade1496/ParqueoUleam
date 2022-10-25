

function Aprov(){
    var Email= document.getElementById("Correo").value;
    var password= document.getElementById("password").value;
    var asc= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var validar=asc.test(Email);
    if(validar == true){
        if(password ==null || password.length == 0){
            alert("Se debe llenar el campo contraseña")
        }
        else{
            
        }
    }else{
        alert("Correo electronico no valido")
    }
    
    
}

