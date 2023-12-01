const readline = require('readline-sync');

// Función para generar un número aleatorio entre 1 y 100
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;  // aca le digo que me un numero ramdon del 1 al 100 , " lo hago del 1 al 20 asi es mas facil encontrarlo jaja"
}

// Función principal del juego
function adivinaNumeroSecreto() {
    const numeroSecreto = generarNumeroAleatorio();
    let intentos = 0;

    console.log('Juego adivina el Numero! clase-2 node');

    while (true) {
        const numeroIncognito = readline.question('Ingresa un numero:'
        );

        if (isNaN(numeroIncognito)) {
            console.log('Por favor, ingresa un numero válido.'); // aca le digo que tiene que ser un numero valido , no letras
            continue;
        }

        intentos++;

        if (parseInt(numeroIncognito) === numeroSecreto) {
            console.log(`¡Felicidades! Adivinaste el numero secreto (${numeroSecreto}) en ${intentos} intentos.`); // aca le digo en cuantos intentos complete el juego
            break;
        } else if (parseInt(numeroIncognito) < numeroSecreto) {
            console.log('El número es demasiado bajo. Intenta nuevamente.');
        } else {
            console.log('El número es demasiado alto. Intenta nuevamente.');
        }
    }
}

// Inicia el juego
adivinaNumeroSecreto();