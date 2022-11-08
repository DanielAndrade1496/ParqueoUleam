function rplaca(){
    var MarcaVehiculo= document.getElementById("ma").value;
    var ColorVehiculo= document.getElementById("colorv").value;
    var PlacaVehiculo= document.getElementById("pla").value;
        if(MarcaVehiculo ==null ||MarcaVehiculo.length == 0){
            alert("Se debe llenar el campo Marca de Vehiculo")
        } 
        else{ 
            if(ColorVehiculo==null || ColorVehiculo.length == 0){
            alert('Se debe llenar el campo contraseña nueva') 
            }   
            else{
                if(PlacaVehiculo==null || PlacaVehiculo.length == 0){
                    alert('Se debe llenar el campo confirmar contraseña') 
                }
                else{ 
                        alert('Su vehiculo se ha registrado')
                        document.getElementById('g1').href='InicioMuerto.html'; 
                  }     

            }
         
        }
        }

    
