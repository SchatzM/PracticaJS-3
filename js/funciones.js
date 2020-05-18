'use strict';

// PalmaActiva Práctica 06
// Marcas de Coches del usuario
// Brian Passos

var nombreUsuario, // Variable que contendrá el nombre de usuario
	ordinales = ['primer', 'segundo', 'tercer'], // Referencia a el orden de las marcas de coche que solicitaremos
	ArrayCochesUsuarios = [], // Array que almacenará las marcas de coche
	funciones = {
		solicitarNombre: function () { // Función principal
			let usuarioIntroducido = String (prompt ('Por favor introduce tu nombre:')).trim (); // Solicitamos el nombre del usuario, el cual debe contener al menos un carácter y no ser sólo espacio(s).

			switch (usuarioIntroducido) { // Procesamos el nombre introducido
				case 'null':
				case '': // Si el nombre proporcionado no es válido
					console.warn ('Por favor introduce tu nombre de usuario.'); // Advertencia de la ausencia de nombre en consola
					confirm ('Es necesario tu nombre de usuario.') ? this.solicitarNombre () : console.error ('Cancelado por el usuario.'); // Advertimos en cuadro diálogo y si el usuario acepta, solicitamos una vez más el nombre o si el usuario cancela, advertimos en consola.
					break;
				default: // Si el nombre es válido, procedemos:
					nombreUsuario = usuarioIntroducido; // Almacenamos el nombre en variable global
					return this.solicitarCoches (); // Pasamos a solicitar las marcas de coche
			};
		},
		solicitarCoches : function () { // Solicitamos la marca de los coches
			let marca = String (prompt (`Por favor ${nombreUsuario}, introduce marca del ${ordinales[ArrayCochesUsuarios.length]} coche:`)).trim (); // Solicitamos el nombre las marcas, una por una. Deben contener al menos un carácter y no ser sólo espacio(s)

			switch (marca) { // Procesamos la marca introducida
				case 'null':
				case '': // Si la marca no es válida
					console.warn (`Por favor introduce la marca del ${ordinales[ArrayCochesUsuarios.length]} coche.`); // Advertimos en consola de la falta de una marca válida
					confirm (`Es necesaria la marca del ${ordinales[ArrayCochesUsuarios.length]} coche.`) ? this.solicitarCoches () : console.error ('Cancelado por el usuario.'); // Advertimos en cuadro de diálogo de la falta de una marca válida. Si el usuario acepta, solicitamos de nuevo la marca o si cancela, advertimos en consola.
					break;
				default: // Si el nombre de la marca es válida
					ArrayCochesUsuarios.push (marca); // Almacenamos la marca en Array global
					return ArrayCochesUsuarios.length <= 2 ? this.solicitarCoches () : console.info (`${nombreUsuario} ha tenido coches de las marcas:\n· ${ArrayCochesUsuarios[0]}\n· ${ArrayCochesUsuarios[1]}\n· ${ArrayCochesUsuarios[2]}`); // Repetimos el proceso hasta tener 3 marcas en Array o mostramos en consola los resultados.
			};
		}
	};

funciones.solicitarNombre(); // Ejecutamos la función principal al cargar el archivo
