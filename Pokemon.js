//1. Definir Rutas (Uso de const)
//Primero definimos el mapa. Usamos const porque la referencia al arreglo de rutas no debería cambiar durante la ejecución del programa (no vamos a cambiar el mapa entero por otro objeto).
const rutas = ["Ruta 1", "Ruta 2", "Ruta 3", "Ruta 4", "Ruta 5"];
console.log("Rutas disponibles para explorar:", rutas);
//Explicación: Al usar const, aseguramos que la variable rutas siempre apunte a este arreglo específico. Es la base inmutable de nuestro mapa.

//---------------------------------
//2. Recorrido usando var (Uso de var)
//Aquí usamos la forma antigua de declarar variables. Presta atención a lo que sucede con la variable contadora i.
var ultimaRutaVisitada = "";

// Iniciamos el ciclo con var
for (var i = 0; i < rutas.length; i++) {
  console.log("Visitando:", rutas[i]);
  ultimaRutaVisitada = rutas[i];
}

console.log("--- Resultados con VAR ---");
console.log("Última ruta visitada:", ultimaRutaVisitada);

// ANÁLISIS DEL VALOR DE i:
console.log("Valor de i después del for con var:", i);
//Análisis del resultado:

//¿Qué valor toma i al final? El valor será 5.

//¿Por qué? El ciclo se detiene cuando i ya no es menor que la longitud del arreglo (que es 5). Como var no respeta el bloque del ciclo for, la variable i sigue existiendo fuera de él y conserva ese último valor (5) que rompió la condición del bucle.

//---------------------------------

//3. Recorrido usando let (Uso de let)
//Ahora usamos la forma moderna (ES6). let tiene alcance de bloque, lo que significa que la variable solo existe dentro de las llaves { ... } donde fue creada.
let ultimaRutaVisitadaLet = "";

// Iniciamos el ciclo con let
for (let j = 0; j < rutas.length; j++) {
  console.log("Visitando con let:", rutas[j]);
  ultimaRutaVisitadaLet = rutas[j];
}

console.log("--- Resultados con LET ---");

// PRUEBA DE j FUERA DEL FOR:
try {
    console.log(j); 
} catch (error) {
    console.log("Error: La variable 'j' no existe fuera del ciclo.");
}

//Comparación Final: Var vs. Let
//Aquí tienes las conclusiones que el grupo debe escribir para finalizar el ejercicio:

//Con var pasa esto con la variable del ciclo: La variable i se "escapa" del ciclo. Se convierte en una variable global (o de la función contenedora), contaminando el entorno y quedando con el valor final del contador (5) incluso después de que el ciclo terminó.

//Con let pasa esto otro: La variable j vive y muere dentro del ciclo for. Una vez que se cierra la llave }, la variable j desaparece de la memoria. Si intentas acceder a ella fuera, JavaScript te dará un error (ReferenceError), lo cual es más seguro y limpio para la programación.

//---------------------------------
//4. Mapa visual — impresión sencilla en consola
// Usamos join para unir las rutas con una flecha
const mapaVisual = rutas.join(" ➡️ ");

console.log("--- MAPA DE EXPLORACIÓN ---");
console.log("🏠 Inicio ➡️ " + mapaVisual + " 🏁 Fin");
//-------------------------------- 