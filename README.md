# Trabajo práctico 01
## Descripción
Proyecto de fundamentos de Node.js que genera la ficha de un videojuego y demuestra el orden del event loop.

## Cómo ejecutar
- `node index.js` o `node index.js Sergio`
- `node orden-event-loop.js`

## Archivo generado
La ficha se guarda automáticamente en `salida/ficha-videojuego.txt`.

## Conceptos
1. **JavaScript, V8 y Node.js**  
   - JavaScript: lenguaje de programación.  
   - V8: motor que interpreta y ejecuta JavaScript (usado por Chrome y Node.js).  
   - Node.js: runtime que usa V8 y agrega librerías para trabajar con archivos, procesos y red.

2. **Callback de setTimeout(…, 0)**  
   Se ejecuta después del código principal porque se encola en la fase de *tasks* del event loop, nunca interrumpe el flujo inmediato.

3. **I/O bloqueante vs no bloqueante**  
   - Bloqueante: el programa espera la finalización de la operación antes de continuar.  
   - No bloqueante: la operación se delega y el programa sigue ejecutando otras tareas.

4. **node:path y node:fs en index.js**  
   - `path`: construye rutas de forma segura y multiplataforma.  
   - `fs`: crea carpetas y escribe archivos en el sistema.
