// =================================================================
// RUTA POKÉMON CON CALLBACKS ANÓNIMOS
// =================================================================

// --- 1. Definición de Variables Base ---

// Array (lista) con los nombres de las rutas que el Entrenador recorrerá.
const rutas = ["Ruta 1", "Ruta 2", "Ruta 3", "Bosque Verde"];

// Array con los sucesos que ocurren en cada ruta (debe tener el mismo orden que 'rutas').
const eventos = ["encuentro", "objeto encontrado", "nada", "encuentro"];


// =================================================================
// TAREA 1: forEach con Función Anónima Clásica (Callback)
// =================================================================
console.log("--- 1. Recorrido con Función Anónima Clásica ---");

// 'forEach' es un método que itera sobre cada elemento del array 'rutas'.
// Recibe como argumento una función, que es el **callback**.
rutas.forEach(function (ruta) {
    // La palabra 'function' sin un nombre a su lado define una **función anónima**.
    // Esta función anónima se ejecuta una vez por cada elemento.
    // 'ruta' es el parámetro que toma el valor del elemento actual del array ('Ruta 1', 'Ruta 2', etc.).
    
    // Se imprime el registro de la visita del Entrenador a la ruta actual.
    console.log(`El Entrenador visita: **${ruta}**`);
});


// =================================================================
// TAREA 2: forEach con Función Flecha (Arrow Function)
// =================================================================
console.log("\n--- 2. Recorrido con Función Flecha (Arrow Function) ---");

// Se usa de nuevo 'forEach' para iterar, pero con una sintaxis más moderna.
rutas.forEach((ruta) => {
    // Esto es una **Función Flecha (Arrow Function)**, una forma más concisa de definir una **función anónima**.
    // La sintaxis '() => {}' reemplaza a 'function () {}'.

    // El cuerpo de la función realiza la misma acción que en el ejemplo anterior.
    console.log(`El Entrenador recorre: **${ruta}**`);
});


// =================================================================
// TAREA 3: forEach e Impresión de Eventos (Combinando Arrays)
// =================================================================
console.log("\n--- 3. Sucesos de la Aventura ---");

// Se itera sobre el array 'eventos'.
// El callback de 'forEach' recibe el elemento ('evento') y su posición ('indice').
eventos.forEach((evento, indice) => {
    
    // Usamos 'indice' para obtener la ruta correspondiente del array 'rutas'.
    const rutaActual = rutas[indice];
    
    // Variable para almacenar el mensaje específico del evento.
    let mensaje;

    // Estructura 'switch' para asignar un mensaje diferente según el tipo de 'evento'.
    switch (evento) {
        case "encuentro":
            mensaje = `¡Un Pokémon salvaje apareció! 💥`;
            break;
        case "objeto encontrado":
            mensaje = `¡Se encontró una Pokebola! 🎁`;
            break;
        case "nada":
            mensaje = `Solo silencio. El camino está despejado. 🍃`;
            break;
    }

    // Se imprime el resultado: la **Ruta** seguida por la flecha '-->' y el **Suceso**.
    console.log(`**${rutaActual}** --> ${mensaje}`);
});