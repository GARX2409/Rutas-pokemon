// ===================================================================
// RUTA POKÉMON CON CALLBACKS Y BUENAS PRÁCTICAS
// ===================================================================

// --- 1. Definición estructurada de las rutas ---

// Mejor práctica: usamos un array de objetos para enlazar ruta y evento
const aventuras = [
  { nombre: "Ruta 1", evento: "encuentro" },
  { nombre: "Ruta 2", evento: "objeto encontrado" },
  { nombre: "Ruta 3", evento: "nada" },
  { nombre: "Bosque Verde", evento: "encuentro" }
];

// --- 2. Función para describir cada tipo de evento ---

function descripcionEvento(evento) {
  switch (evento) {
    case "encuentro":
      return "¡Un Pokémon salvaje apareció! 💥";
    case "objeto encontrado":
      return "¡Se encontró una Pokebola! 🎁";
    case "nada":
      return "Solo silencio. El camino está despejado. 🍃";
    default:
      return "Aventura desconocida...";
  }
}

// --- 3. Mostrar rutas usando distintos tipos de callbacks ---

console.log("--- 1. Recorrido con Función Anónima Clásica ---");
// Usando función anónima clásica
aventuras.forEach(function(aventura) {
  console.log(`El Entrenador visita: **${aventura.nombre}**`);
});

console.log("\n--- 2. Recorrido con Función Flecha (Arrow Function) ---");
// Usando función flecha
aventuras.forEach(aventura => {
  console.log(`El Entrenador recorre: **${aventura.nombre}**`);
});

// --- 4. Mostrar eventos de la aventura combinando ruta y suceso ---
console.log("\n--- 3. Sucesos de la Aventura ---");
aventuras.forEach((aventura) => {
  const mensaje = descripcionEvento(aventura.evento);
  console.log(`**${aventura.nombre}** --> ${mensaje}`);
});