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

/* const asciiHeart = [
    "    *****    ",
    "  *********  ",
    " *********** ",
    "*************",
    "*************",
    " *********** ",
    "  *********  ",
    "    *****    "
]; */

const animateByChart = (ms) => {
    asciiHeart.forEach((line, lineIndex) => {
        line.split('').forEach((char, charIndex) => {
            setTimeout(() => {
                process.stdout.write(char);
                if (charIndex === line.length - 1) {
                    console.log(''); // Salto de línea al final de cada línea
                }
            }, ms * (lineIndex * line.length + charIndex)); // Calcular el delay para cada caracter
        });
    });
}

const animateByLine = (ms) => {
    asciiHeart.forEach((line, index) => {
        setTimeout(() => {
            console.log(line);
        }, ms * index);
    });
}

// Para iniciar el proyecto, ejecuta node app.js y descomenta las siguientes líneas para probar las funciones:
 animateByChart(20); // Prueba la animación carácter por carácter con un delay de 10ms
//animateByLine(500);   // Prueba la animación línea por línea con un delay de 500ms