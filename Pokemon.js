//1. Definir Rutas (Uso de const)

const rutas = ["Ruta 1", "Ruta 2", "Ruta 3", "Ruta 4", "Ruta 5"];
console.log("Rutas disponibles para explorar:", rutas);

//---------------------------------
//2. Recorrido usando var (Uso de var)

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

//---------------------------------

//3. Recorrido usando let (Uso de let)
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

//---------------------------------
//4. Mapa visual — impresión sencilla en consola
const mapaVisual = rutas.join(" ➡️ ");

console.log("--- MAPA DE EXPLORACIÓN ---");
console.log("🏠 Inicio ➡️ " + mapaVisual + " 🏁 Fin");
//--------------------------------