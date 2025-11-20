/*
Aquí tienes todo organizado, limpio y listo para usar como guía, explicación y práctica del tema var vs let
aplicando el ejercicio de “Rutas Pokémon y Exploración”.

Te lo dejo ordenado por secciones, bien explicado y con código correcto, tal como lo necesitas para la actividad.

---

🧭 Rutas Pokémon y Exploración — Guía Completa (1 hora)

---

✅ Objetivo en JavaScript

Usar const para crear un mapa de rutas.

Usar let dentro de ciclos.

Comparar el comportamiento de var vs let dentro de un for.

Generar un recorrido y un “mapa” visual de rutas visitadas.


---

🔹 1. Definir rutas (10 min)

const rutas = ["Ruta 1", "Ruta 2", "Ruta 3", "Ruta 4", "Ruta 5"];
console.log("Rutas:", rutas);

✔️ Explicación:

const se usa porque la lista de rutas no cambiará.

No vamos a reasignar la variable rutas, solo leerla.


---

🔹 2. Recorrido usando var (10–15 min)

var ultimaRutaVisitada = "";

for (var i = 0; i < rutas.length; i++) {
	console.log("Visitando:", rutas[i]);
	ultimaRutaVisitada = rutas[i];
}

console.log("Última ruta visitada con var:", ultimaRutaVisitada);
console.log("Valor de i después del for con var:", i);

🔍 Qué deben observar los estudiantes

El for termina cuando i llega a 5 (porque hay 5 rutas).

Con var, la variable i sigue existiendo fuera del for.


📌 Conclusión del grupo (escriben en su cuaderno):

> Con var, la variable del ciclo no se limita al bloque, sale del for y se puede usar afuera.



---

🔹 3. Recorrido usando let (15–20 min)

let ultimaRutaVisitadaLet = "";

for (let j = 0; j < rutas.length; j++) {
	console.log("Visitando con let:", rutas[j]);
	ultimaRutaVisitadaLet = rutas[j];
}

// console.log(j); // Activar esto para probar qué pasa

🔍 Qué deben observar

Con let, el estudiante prueba si j existe fuera del ciclo.

Si quitan el comentario y ejecutan console.log(j) → da error, porque j desaparece fuera del for.


📌 Conclusión del grupo:

> Con let, la variable del ciclo solo existe dentro del bloque del for. Afuera no funciona.



---

🔹 4. Mapa visual (10–15 min)

En una hoja dibujan así:

Inicio → Ruta 1 → Ruta 2 → Ruta 3 → Ruta 4 → Ruta 5 → Fin

Y debajo escriben:

✏️ Explicación final

✔ Con var:
La variable del ciclo sobrevive después del for.
Por eso i todavía existe y tiene un valor.

✔ Con let:
La variable del ciclo solo vive dentro del for.
Fuera del for, desaparece.


---

🎉 Resultado Final del Taller

Un recorrido completo impreso en consola.

El valor de la última ruta visitada usando var y usando let.

Un mapa visual de rutas conectadas.

Una comparación clara entre var y let.


---

Si quieres te lo convierto en formato PDF, diapositivas, o en una cartilla para el salón.
*/

// Código ejecutable que corresponde a los ejemplos anteriores

// 1) Definir rutas
// Usamos `const` porque no vamos a reasignar la variable `rutas`.
// Ojo: `const` evita reasignar la variable, pero los elementos del array sí pueden
// modificarse (ej. `rutas.push(...)` funcionaría). Aquí tratamos la lista como fija.
const rutas = ["Ruta 1", "Ruta 2", "Ruta 3", "Ruta 4", "Ruta 5"];
console.log('\n--- Ejecución de los ejemplos (parte práctica) ---');

// 2) Recorrido usando var
// `var` tiene alcance de función (o global si no está en función). No respeta el bloque `{}`
// del `for`, por eso la variable `i` seguirá existiendo después del bucle.
var ultimaRutaVisitada = ""; // almacenará la última ruta visitada usando var
for (var i = 0; i < rutas.length; i++) {
	// Dentro del bucle usamos `i` (declarada con var)
	console.log("Visitando:", rutas[i]);
	// Actualizamos la variable externa `ultimaRutaVisitada`
	ultimaRutaVisitada = rutas[i];
}
// Después del for, `ultimaRutaVisitada` contiene el último elemento visitado
console.log("Última ruta visitada con var:", ultimaRutaVisitada);
// Como `i` fue declarada con var, todavía existe aquí y su valor es rutas.length (5)
console.log("Valor de i después del for con var:", i);

// 3) Recorrido usando let
// `let` tiene alcance de bloque: la variable usada en el for (aquí `j`) solo vive
// dentro de las llaves del bucle. Afuera no existe y al intentar acceder dará error.
let ultimaRutaVisitadaLet = ""; // almacenará la última ruta visitada usando let
for (let j = 0; j < rutas.length; j++) {
	// `j` está disponible solo dentro de este bloque
	console.log("Visitando con let:", rutas[j]);
	ultimaRutaVisitadaLet = rutas[j];
}
// Aquí mostramos la última ruta guardada por el bucle con let
console.log("Última ruta visitada con let:", ultimaRutaVisitadaLet);
// Si descomentases `console.log(j)` aquí obtendrías `ReferenceError: j is not defined`.

// 4) Mapa visual simple
// Usamos spread `...rutas` para crear un array que incluya Inicio y Fin alrededor
// de las rutas visitadas. `join(' → ')` une los elementos con flechas.
console.log('\nMapa visual:');
console.log(["Inicio", ...rutas, "Fin"].join(' → '));

// Explicación final resumida (útil para el cierre del taller)
console.log('\n✏️ Explicación final:');
console.log('✔ Con var: la variable del ciclo sobrevive después del for (ámbito de función/global).');
console.log('✔ Con let: la variable del ciclo solo existe dentro del bloque del for (ámbito de bloque).');

// Fin del script


