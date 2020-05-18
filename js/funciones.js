'use strict';

// PalmaActiva Práctica 06
// Marcas de Coches del usuario
// Brian Passos

let nombreUsuario, // Variable con contendrá el nombre de usuario
	ordinales = ['primer', 'segundo', 'tercer'], // Referencia a el orden de las marcas de coche que solicitaremos
	ArrayCochesUsuarios = [], // Array que almacenará las marcas de coche
	funciones = {
		solicitarNombre: function () { // Función principal
			let usuarioIntroducido = String (prompt ('Por favor introduce tu nombre:','Usuario')).trim(); // Solicitamos el nombre del usuario, el cual debe contener al menos un carácter y no ser sólo espacio(s).

			switch (usuarioIntroducido) { // Procesamos el nombre introducido
				case 'null':
				case '':	// Si el nombre proporcionado no es válido
					console.warn ('Por favor introduce tu nombre de usuario.'); // Advertencia de la ausencia de nombre en consola
					switch (confirm('Es necesario tu nombre de usuario.')) { // Advertimos de la ausencia de nombre en cuadro de diálogo
						case true: // El usuario acepta en el cuadro de diálogo
							funciones.solicitarNombre (); // Solicitamos una vez más el nombre
							break;
						default: // Si el usuario cancela la ventana de diálogo
							console.error ('Cancelado por el usuario.');
							break;
					}
					break;
				default: // Si el nombre es válido, procedemos:
					nombreUsuario = usuarioIntroducido; // Almacenamos el nombre en variable global
					return this.solicitarCoches (); // Pasamos a solicitar las marcas de coche
			};
		},
		solicitarCoches : function () { // Solicitamos la marca de los coches
			let marca = String (prompt (`Por favor ${nombreUsuario}, introduce marca del ${ordinales[ArrayCochesUsuarios.length]} coche:`)).trim();

			switch (marca) {
				case 'null':
					console.warn (`Por favor introduce la marca del ${ordinales[ArrayCochesUsuarios.length]} coche.`);
					switch (confirm(`Por favor introduce la marca del ${ordinales[ArrayCochesUsuarios.length]} coche:`)) {
						case true:
							this.solicitarCoches ();
							break;
						default:
							return console.error ('Cancelado por el usuario.');
					}
					break;
				default:
					switch (marca) {
						case '': // Si la marca introducida no es válida
							this.solicitarCoches ();
							break;
						default: // Si la marca es válida, procedemos:
							ArrayCochesUsuarios.push (marca); // Almacenamos la marca en Array global
							if (ArrayCochesUsuarios.length <= 2) { // Repetimos el proceso hasta tener 3 marcas en Array
								return this.solicitarCoches ();
							}
							break;
					}
				// Mostramos en consola los resultados
				return console.info (`${nombreUsuario} ha tenido coches de las marcas:\n· ${ArrayCochesUsuarios[0]}\n· ${ArrayCochesUsuarios[1]}\n· ${ArrayCochesUsuarios[2]}`)
			}
		}
	}

funciones.solicitarNombre() // Ejecutamos la función principal al cargar el archivo
