function Validar(user,pwd)
		  {
		   user=document.getElementById(user);
		   pwd=document.getElementById(pwd);
		   if(user.value=="")
			{
			 alert("El campo Correo esta vacio");
			 user.focus();
			 return false;
			}
		   else
			{
			 if(pwd.value=="")
			  {
			   alert("El campo Contrasena esta vacio");
			   pwd.focus();
			   return false;
			  }
			 else
			  {
			   var usuario = document.formulario.user.value;
			   var password = document.formulario.password.value;
			   window.location='procesoChecador.php?usuario='+usuario+'&pw='+password;
               window.open='ResgistroVehiculo.html';
			   return true;
			  }
			}
		  }