function Validar(user,pwd)
		  {
		   Correo=document.getElementById(Correo);
		   contrasena=document.getElementById(contrasena);
		   if(Correo.value=="")
			{
			 alert("El campo Correo esta vacio");
			 Correo.focus();
			 return false;
			}
		   else
			{
			 if(contrasena.value=="")
			  {
			   alert("El campo Contrasena esta vacio");
			   contrasena.focus();
			   return false;
			  }
			 else
			  {
			   var Correo = document.formulario.Correo.value;
			   var Contrasena = document.formulario.contrasena.value;
			   window.location='procesoChecador.php?usuario='+Correo+'&pw='+Contrasena;
               window.open='ResgistroVehiculo.html';
			   return true;
			  }
			}
		  }