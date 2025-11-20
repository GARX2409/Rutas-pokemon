# Guía de 1 hora — Ejercicio sobre rutas, `var` vs `let` y recorrido

Tiempo total: 1 hora

Resumen: Esta guía está pensada para un taller de ~1 hora. Incluye tareas con tiempos, fragmentos de código listos para ejecutar, preguntas para el grupo y explicaciones sobre por qué `var` hace que la variable `i` termine con un cierto valor después del bucle.

**Distribución del tiempo (sugerida)**
- 0–5 min: Presentación y objetivo.
- 5–15 min (10 min): Definir rutas y revisar `const rutas`.
- 15–30 min (15 min): Recorrido con `var` y observación del comportamiento.
- 30–45 min (15 min): Discusión y anotaciones sobre por qué `i` tiene ese valor (hoisting y scope).
- 45–55 min (10 min): Contraste con `let` y ejercicios prácticos.
- 55–60 min (5 min): Conclusiones y siguientes pasos.

---

## 1) Definir rutas (10 min)
Objetivo: Usar `const` para almacenar la lista de rutas y mostrarla.

Código a ejecutar:

```js
const rutas = ["Ruta 1", "Ruta 2", "Ruta 3", "Ruta 4", "Ruta 5"];
console.log("Rutas:", rutas);
```

Qué observar:
- `const` evita que reasignes `rutas` a otro valor (ej. `rutas = []` fallaría).
- Aun así puedes modificar el contenido del arreglo (`rutas.push(...)`) si fuera necesario.

Actividad (5–10 min):
- Cada participante sugiere una ruta y se añade a la lista (si hay permiso para mutar). Anotar la lista final.

---

## 2) Recorrido con `var` (10–15 min)
Objetivo: Ejecutar un `for` usando `var` y observar el valor final de la variable de control.

Código a ejecutar:

```js
var ultimaRutaVisitada = "";

for (var i = 0; i < rutas.length; i++) {
  console.log("Visitando:", rutas[i]);
  ultimaRutaVisitada = rutas[i];
}

console.log("Última ruta visitada con var:", ultimaRutaVisitada);
console.log("Valor de i después del for con var:", i);
```

Qué observarán:
- La consola imprimirá cada ruta visitada.
- Al final, `ultimaRutaVisitada` contendrá la última ruta del arreglo.
- `i` **no** estará fuera de alcance: tendrá el valor `rutas.length` (por ejemplo, 5 si hay 5 rutas).

Explicación breve (para anotar en el grupo):
- `var` declara una variable con *function scope* (o global scope si no está en una función).
- En un `for (var i = 0; ... )`, `i` queda accesible fuera del bloque `for`. Cuando el bucle termina, la condición `i < rutas.length` falló con `i === rutas.length`, por eso `i` vale `rutas.length`.

Actividad grupal:
- El grupo revisa el valor final de `i` e lo anota. ¿Coincide con la longitud de `rutas`? ¿Por qué?

---

## 3) Por qué ocurre (hoisting y alcance) (15 min)
Detalles clave para discutir y anotar:
- Hoisting: las declaraciones con `var` se "mueven" a la parte superior de la función en tiempo de compilación. La inicialización sigue donde está escrita, pero la declaración existe desde el principio.
- Scope: `var` no respeta el bloque `{}` para crear un scope; `let` y `const` sí crean scope de bloque.
- Resultado: `i` es visible fuera del `for` y su valor después del bucle es el estado en que terminó la condición (generalmente `rutas.length`).

Ejemplo ilustrativo (opcional):

```js
function ejemploVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 — var no respeta scope de bloque
}

function ejemploLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ReferenceError — let respeta scope de bloque
}
```

---

## 4) Contraste con `let` (10 min)
Ejecutar y comparar:

```js
for (let k = 0; k < rutas.length; k++) {
  console.log('Visitando (let):', rutas[k]);
}

// console.log(k); // ReferenceError si lo descomentas: k no existe fuera del bloque
```

Puntos a anotar:
- Con `let` la variable `k` tiene scope de bloque y no es accesible fuera del `for`.
- Esto evita errores accidentales y comportamientos inesperados en código asíncrono (por ejemplo con callbacks).

Ejercicio práctico (opcional): comparar `var` y `let` con `setTimeout`:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function(){ console.log('var i =', i); }, 50);
}

for (let j = 0; j < 3; j++) {
  setTimeout(function(){ console.log('let j =', j); }, 50);
}
```

Explicación:
- En el caso de `var`, las 3 callbacks verán el mismo `i` final (por cierre sobre la misma variable).
- Con `let`, cada iteración crea una nueva `j` con su valor correspondiente.

---

## 5) Tareas del grupo y anotaciones (10 min)
- Anotar en una pizarra o documento: el valor final de `i` con `var` y explicar en 1–2 frases por qué.
- Proponer cómo cambiar el código para evitar el problema (respuestas: usar `let`, envolver en IIFE, o usar `forEach`).

Sugerencias de soluciones:

- Usar `let` en el `for`.
- Usar `Array.prototype.forEach`:

```js
rutas.forEach(function(r) {
  console.log('Visitando (forEach):', r);
});
```

- Usar una IIFE si por algún motivo hay que mantener `var`:

```js
for (var i = 0; i < rutas.length; i++) {
  (function(index) {
    setTimeout(function(){ console.log('i via IIFE =', index); }, 50);
  })(i);
}
```

---

## 6) Material extra y siguientes pasos (5 min)
- Si quieren, podemos generar una visualización (SVG/HTML) que muestre el orden de visita (ya hay `map.html` en este proyecto que dibuja rutas y orden).
- Próximos temas recomendados: closures, scope en funciones, const mutability, `for...of`.

---

## Archivos creados
- `GUIDE.md` (esta guía)
- Puedes ver también `app.js` y `map.html` en la carpeta del proyecto.

---

## Comandos para ejecutar (PowerShell Windows)

```powershell
# Ejecutar el script con los ejemplos (imprime en consola y genera map.html si app.js lo hace)
node .\app.js

# Abrir el HTML (Windows)
start .\map.html
```

---

Si quieres, puedo:
- Ejecutar `node .\app.js` aquí y mostrar el resultado de consola y el HTML generado.
- Añadir más ejercicios con respuestas para evaluar al grupo.
- Preparar una versión imprimible de esta guía.

Dime cuál de estas opciones prefieres y lo hago.