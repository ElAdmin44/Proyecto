//EMPIEZA EL JAVASCRIPT SEÑORES...




//seccion para mostrar y ocultar el MENU
	const boton = document.getElementById("boton-mostrar-menu");//llamamos al valor de boton
	const menu = document.getElementById("menu");//al valor de menu
 
	  boton.addEventListener("click", function(){//escuchador cuando hagamos click
		if (menu.style.display === "none") {//si esta vacio o en display none
		  menu.style.display = "flex";//cambia a display flex
		} else {
		  menu.style.display = "none";//si no esta en display none cambia a display none
		}

	  });
//fin seccion MENU	  
	  
	  
//seccion de cabecera FIJA
	  
	  window.addEventListener('scroll', function(){
  let header = document.querySelector('.menu-cabecera');
  header.classList.toggle('scrolling', window.scrollY > 100);
});
	  
//FIN de cabecera FIJA
	  
	  
//SECCION FORMULARIO
var formContacta = document.getElementById('formContacta');
var contactaBoton = document.getElementById('elenviar');

contactaBoton.addEventListener(//seguimos el mismo proceso que en los anteriores
'click',
	
	function(){
		
		var mensaje = formContacta.querySelector('.mensaje');//quitamos el anterior mensaje
		if (mensaje){
			mensaje.parentNode.removeChild(mensaje);
		}	
		var aviso = document.createElement('ul');//creamos un nuevo mensaje vaciio
		aviso.classList.add('mensaje');
		
		var errores = 0;//contador
		
		var nombre = document.formContacta.campoNombre.value;
		
		var email = document.formContacta.campoEmail.value;
		
		var mensaje = document.formContacta.campoComentarios.value;
		
		let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);;
		
      
		if ( (nombre.length < 2) || (/\d/.test(nombre))){//si hay menos de 2 o hay numero
			errores++;//añadimos errores
			aviso.innerHTML = '<li>El nombre de Usuario debe tener mas de 2 caracteres y no puede contener numeros.</li>';//agregamos aviso
		}
				
		if ( !emailValido ){ // si el email no es valido
			
			errores++;//añadimos errores
			aviso.innerHTML += '<li>el email no es valido.</li>';//agregamos aviso
			}
				
			
		if (errores == 0){ //si no hay errores mostrar
			aviso.innerHTML += '<li>Todo listo</li>';
			aviso.innerHTML += '<li>Nombre: ' + nombre + '</li>';
			aviso.innerHTML += '<li>Email: ' + email + '</li>';
			aviso.innerHTML += '<li>Mensaje: ' + mensaje + '</li>';
			
			formContacta.lastChild.before(aviso);
		}else{ //si hay errores mostramos
			formContacta.lastChild.before(aviso);		//los avisos por pantalla
		}
		
		
		},
	false
	);
