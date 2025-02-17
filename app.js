/* Funciones a elaborar:
* animateByLine:
    Esta función debe imprimir el corazón línea por línea en la consola del editor, debe de haber un salto de línea entre cada impresión.
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de línea.
    
* animateByChart:
    Esta función debe imprimir el corazón carácter por carácter en la consola del editor, debe de haber un delay entre cada impresión de carácter.
    Cada vez que se complete la impresión de una línea, se debe hacer un salto de línea.
    Recibe un parámetro llamado "ms" que indica el retraso en milisegundos entre cada impresión de carácter.

Pistas:
- Investiga sobre la función setTimeout, puede ser de interés.
- Usa console.log o process.stdout.write para imprimir en la consola de acuerdo a lo que necesites.
- Recuerda que necesitas iterar un string, ¿cómo lo conviertes en un array de caracteres?

Para iniciar el proyecto, ejecuta node app.js
*/

const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
];

const animateByChart = (ms) => {
    let totalDelay = 0; // Lleva el tiempo acumulado

    asciiHeart.forEach((line) => { //recorre cada linea del corazon
        line.split('').forEach((char, charIndex) => { //divide la linea en caracteres y lo recorre con el forEach
            setTimeout(() => {
                process.stdout.write(char);//este en vez de ser console.log para que no imprima con salto de linea automatico
                if (charIndex === line.length - 1) { 
                    process.stdout.write('\n'); // Forzar el salto de línea cuando terminamos de leer la linea
                }
            }, totalDelay);
            totalDelay += ms; // valor actual de totaldelay, le suma ms, guarda el nuevo valor en totaldelay
        });
    });
};
/* cada setTimeout siempre está basado en el tiempo acumulado de totalDelay, no en el intervalo entre caracteres.
totalDelay no afecta la velocidad entre caracteres, sino que calcula el momento exacto en que se debe 
imprimir cada carácter en función de un retraso acumulado */


const animateByLine = (ms) => {
    asciiHeart.forEach((line, index) => {
        setTimeout(() => {
            console.log(line);
        }, ms * index);
    });
}

// Para iniciar el proyecto, ejecuta node app.js y descomenta las siguientes líneas para probar las funciones:
animateByChart(100); 
//animateByLine(500);   