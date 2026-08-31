// index.js
import fs from "node:fs";
import path from "node:path";

// 1. Recibir nombre del estudiante
const estudiante = process.argv[2] || "Estudiante Anónimo";

// 2. Mostrar versión y plataforma
console.log("Node.js:", process.version);
console.log("Plataforma del sistema:", process.platform);

// 3. Objeto videojuego
const videojuego = {
    titulo: "The Legend of Zelda: Breath of the Wild",
    estudio: "Nintendo",
    anio: 2017,
    plataformas: ["Nintendo Switch", "Wii U"],
    multijugador: false,
};

// 4. Transformaciones
const plataformasTexto = videojuego.plataformas.join(", ");
const multijugadorTexto = videojuego.multijugador ? "Sí" : "No";

// 5. Template literal
const ficha = `
FICHA DE VIDEOJUEGO
Estudiante: ${estudiante}
Node.js: ${process.version}
Plataforma del sistema: ${process.platform}

Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${plataformasTexto}
¿Es multijugador?: ${multijugadorTexto}
`;

// 6. Crear carpeta y archivo
const carpetaSalida = path.join("salida");
fs.mkdirSync(carpetaSalida, { recursive: true });

const rutaArchivo = path.join(carpetaSalida, "ficha-videojuego.txt");
fs.writeFileSync(rutaArchivo, ficha, "utf8");

// 7. Mostrar resultados
console.log(ficha);
console.log("Archivo generado en:", rutaArchivo);
