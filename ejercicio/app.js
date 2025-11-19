const fs = require('fs');

// Mapa de rutas: usar `const` para la estructura principal
const routesMap = new Map([
	['Ruta A', ['A', 'B', 'C']],
	['Ruta B', ['C', 'D', 'E']],
	['Ruta C', ['E', 'F', 'G', 'A']]
]);

// Nodos con coordenadas (x, y)
const nodes = {
	A: { x: 1, y: 1 },
	B: { x: 3, y: 2 },
	C: { x: 5, y: 1 },
	D: { x: 7, y: 3 },
	E: { x: 9, y: 1 },
	F: { x: 11, y: 2 },
	G: { x: 13, y: 1 }
};

// Recorrido sobre varias rutas: usar `let` en los bucles
function traverseRoutes(map) {
	const visited = [];
	for (const [routeName, path] of map) {
		for (let i = 0; i < path.length; i++) {
			let nodeId = path[i];
			const coord = nodes[nodeId];
			visited.push({ order: visited.length + 1, route: routeName, id: nodeId, coord });
		}
	}
	return visited;
}

// Contrastar var y let en un for
function contrastVarLet() {
	console.log('\nContraste usando `var` en un for con setTimeout (espera 50ms):');
	for (var i = 0; i < 3; i++) {
		setTimeout(function () {
			console.log('var i =', i);
		}, 50);
	}

	console.log('Contraste usando `let` en un for con setTimeout (espera 50ms):');
	for (let j = 0; j < 3; j++) {
		setTimeout(function () {
			console.log('let j =', j);
		}, 50);
	}
}

// Generar SVG y HTML del mapa con las rutas visitadas en orden
function generateMapHtml(visited) {
	const scale = 60; // escala para SVG
	const pad = 40;

	// Construir polilíneas por ruta para dibujar conexiones
	const routeLines = [];
	const routeColors = ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3'];
	let routeIndex = 0;
	for (const [routeName, path] of routesMap) {
		const points = [];
		for (let i = 0; i < path.length; i++) {
			const id = path[i];
			const p = nodes[id];
			points.push(`${p.x * scale + pad},${p.y * scale + pad}`);
		}
		routeLines.push({ name: routeName, points: points.join(' '), color: routeColors[routeIndex % routeColors.length] });
		routeIndex++;
	}

	// Dibujar círculos y números de orden
	let circles = '';
	for (let k = 0; k < visited.length; k++) {
		const v = visited[k];
		const cx = v.coord.x * scale + pad;
		const cy = v.coord.y * scale + pad;
		circles += `<circle cx="${cx}" cy="${cy}" r="8" fill="#fff" stroke="#000"/>\n`;
		circles += `<text x="${cx + 12}" y="${cy + 4}" font-size="12">${v.order}. ${v.id}</text>\n`;
	}

	let polylines = '';
	for (let r = 0; r < routeLines.length; r++) {
		const rl = routeLines[r];
		polylines += `<polyline points="${rl.points}" fill="none" stroke="${rl.color}" stroke-width="4" stroke-opacity="0.6"/>\n`;
	}

	const svgWidth = 14 * scale + pad * 2;
	const svgHeight = 4 * scale + pad * 2;

	const html = `<!doctype html>
<html lang="es">
<head>
	<meta charset="utf-8" />
	<title>Mapa de rutas - recorrido</title>
	<style>
		body { font-family: Arial, sans-serif; }
		svg { background: #f8f8f8; border: 1px solid #ddd; }
	</style>
</head>
<body>
	<h2>Mapa de rutas — Rutas visitadas en orden</h2>
	<svg width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}" xmlns="http://www.w3.org/2000/svg">
		${polylines}
		${circles}
	</svg>
	<p>Se han visitado ${visited.length} puntos. Abra este archivo localmente para ver el mapa.</p>
</body>
</html>`;

	return html;
}

// Ejecución principal
function main() {
	console.log('Recorriendo las rutas (usar `const` para el mapa, `let` en bucles)...');
	const visited = traverseRoutes(routesMap);
	console.log('Orden de visita:');
	for (let i = 0; i < visited.length; i++) {
		const v = visited[i];
		console.log(`${v.order}. ${v.route} -> ${v.id} (${v.coord.x},${v.coord.y})`);
	}

	contrastVarLet();

	const html = generateMapHtml(visited);
	fs.writeFileSync('map.html', html, 'utf8');
	console.log('\nmap.html generado en la carpeta actual. Ábralo en el navegador para ver el mapa.');
}

main();
