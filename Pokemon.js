/*
	Rutas Pokémon y Exploración — Guía Completa (1 hora)

	Objetivos prácticos:
	- Usar `const` para crear un mapa de rutas.
	- Usar `let` dentro de ciclos.
	- Comparar el comportamiento de `var` vs `let` dentro de un `for`.
	- Generar un recorrido y un "mapa" visual de rutas visitadas.

	Ejecutar: `node Pokemon.js` (en una terminal con Node.js instalado).
*/

// 1) Definir rutas
const rutas = ["Ruta 1", "Ruta 2", "Ruta 3", "Ruta 4", "Ruta 5"];
console.log("\n--- 1. Definir rutas ---");
console.log("Rutas:", rutas);


// 2) Recorrido usando var
// Notas: 'var' tiene alcance de función (o global) y no respeta el bloque del for.
var ultimaRutaVisitada = "";

function recorridoConVar(lista) {
	console.log("\n--- 2. Recorrido usando var ---");
	for (var i = 0; i < lista.length; i++) {
		console.log("Visitando:", lista[i]);
		ultimaRutaVisitada = lista[i];
	}

	console.log("Última ruta visitada con var:", ultimaRutaVisitada);
	// i sigue existiendo aquí porque se declaró con var
	console.log("Valor de i después del for con var:", i);
}


// 3) Recorrido usando let
// Notas: 'let' tiene alcance de bloque; la variable del for no estará disponible fuera.
let ultimaRutaVisitadaLet = "";

function recorridoConLet(lista) {
	console.log("\n--- 3. Recorrido usando let ---");
	for (let j = 0; j < lista.length; j++) {
		console.log("Visitando con let:", lista[j]);
		ultimaRutaVisitadaLet = lista[j];
	}

	console.log("Última ruta visitada con let:", ultimaRutaVisitadaLet);
	// Si descomentas la siguiente línea obtendrás un ReferenceError porque j no existe fuera del for
	// console.log(j);
}


// 4) Mapa visual — impresión sencilla en consola
function imprimirMapa(lista) {
	console.log("\n--- 4. Mapa visual ---");
	// Forma simple: Inicio -> Ruta 1 -> Ruta 2 -> ... -> Fin
	const recorrido = ["Inicio", ...lista, "Fin"];
	console.log(recorrido.join(" → "));

	// Otra representación: líneas por elemento
	console.log('\nRepresentación por líneas:');
	for (let k = 0; k < recorrido.length; k++) {
		if (k === 0) console.log("(Inicio)");
		console.log(`  ${recorrido[k]}`);
		if (k === recorrido.length - 1) console.log("(Fin)");
	}
}


// Función principal para demostrar todo el flujo
function main() {
	recorridoConVar(rutas);
	recorridoConLet(rutas);
	imprimirMapa(rutas);

	console.log('\n✏️ Explicación final:');
	console.log('✔ Con var: la variable del ciclo sobrevive después del for (ámbito de función/global).');
	console.log('✔ Con let: la variable del ciclo solo existe dentro del bloque del for (ámbito de bloque).');
	console.log('\n🎉 Resultado: recorrido impreso, últimas rutas y mapa visual.');
}


// Ejecutar cuando se llame directamente con Node
if (typeof require !== 'undefined' && require.main === module) {
	main();
}

