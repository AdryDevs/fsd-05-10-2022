
// array multidimensional para el juego debe tener un array y cada una de las posiciones será un array con 3 posiciones, por lo que será un total de 9 posiciones (tablero).

// creamos un array

// let y1 = ["X", "X", "O"];

// let y2 = ["X", "O", "X"];

// let y3 = ["O", "X", "O"];

// let matriz = [y1, y2, y3];

// for(let i = 0; i < matriz.length; i++){  // i no puede empezar en uno porque los arrays empiezan por 0, empezaría por el segundo en caso de ponerle 1

//mostrar "el tablero" conforme está marcado
    //    console.log(matriz[i]);


// Cómo selecciono una posición dependiendo de si tiene X o O

// }

// console.log (matriz[2][1]);

// saber si hay una X o no en una casilla

    // if(matriz[2][1] == "X") {
    //     console.log("Sí que es una X")
    // } else {
    //     console.log("No es una X")
    // }

// PARA PARTIDA GANADA!!! se puede hacer un if con varios && en el que cada una de las posiciones ganadoras se dé por ejemplo:

// if((matriz[0][0] == "X") && (matriz[1][1] == "X") && (matriz[2][2] == "X")) {
//     console.log("has ganado la partida");
// }

// OJO!!! toda la partida está en un bucle while (mientras no se gane, sigue) y hay turno mientras no gane el otro (contador para el turno)

// OJO!!! función reset para cuando acabe la partida

// let frutas = ["Manzana","plátano","melocotón","melón","albaricoque"];

// let bebidas = ["agua", "fanta", "cerveza", "vino", "ron", "cazalla"];

//CONCATENAR ARRAYS (unir dos arrays, el "padre" primero en este caso frutas y luego los del segundo)

// let bebidasFrutas = frutas.concat(bebidas);

// console.log(bebidasFrutas);

// console.log(frutas.length);

// JOIN ARRAYS (junta todo lo que hay dentro del array con un string y lo que le pongas en el paréntesis entre uno y otro)

// let juntos = frutas.join(" / ");

// console.log(juntos);

// ARRAY FILTER - quitar del array un elemento

// let videojuegos = ["Lost ark", "Warframe", "LoL", "WoW", "metal slug"];

// let posibles = videojuegos.filter(juego => juego != "LoL"); //quita solo "LoL", si quieres quedarte solo con lol sería == en vez de !=

// console.log(posibles);

// Ejercicio DNI

// let num = parseInt(prompt("Introduce el número de dni"));

// let letra = prompt("Introduce la letra del DNI");

// let array = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];

// const div = 23;

// letra = letra.toUpperCase();

// let pos = num%23;

// if (letra == array[pos]) {
//     console.log("Es correcto")
// } else {
//     console.log("No es correecto")
// };


// Ahora que te salga la letra que debería ser

// console.log(num,array[pos]);

// Objetos

// let carlos = ["Carlos", 27, "Valencia", "Videojuegos"]; //esto sería en un array y no es práctico, para eso hacemos objetos y valores de estos.

// let alumnoCarlos = {
//     nombre: "Carlos",
//     edad: 27,
//     ciudad: "Valencia",
//     hobbie: ["videojuegos", "películas", "leer", "viajar"],
//     amigos: {
//         amigo1: "José",
//         amigo2: "Marta",
//         amigo3: {
//             nombreAmigo3: "Mara",
//             hobbieAmigo3: {
//                 hobbieMara1: "Leer",
//                 hobbieMara2: "Viajar"
//             }
//         }
//     }
// };

// console.log(alumnoCarlos.ciudad);
// console.log(alumnoCarlos.amigos.amigo3);


// Ejercicio Entradas de Cine

let edad = parseInt(prompt("Introduce tu edad."));
let pelicula = prompt("¿Qué película quieres ver?").toLowerCase();

let objetoPeliculas = {
    pelicula1: {
        titulo: "el rey leon",
        edad: 3
    },
    pelicula2: {
        titulo: "soy leyenda",
        edad: 13
    },
    pelicula3: {
        titulo: "la marca del demonio",
        edad: 18
    },
    pelicula4: {
        titulo: "a todo gas",
        edad: 8
    }
}

switch (pelicula) {
    case "el rey leon":
        if (edad >= objetoPeliculas.pelicula1.edad) {
            console.log("Puedes ver la película");
        } else {
            console.log("No puedes ver la película");
        }
        break;
    case "soy leyenda":
        if (edad >= objetoPeliculas.pelicula2.edad) {
            console.log("Puedes ver la película");
        } else {
            console.log("No puedes ver la película");
        }
        break;
    case "la marca del demonio":
        if (edad >= objetoPeliculas.pelicula3.edad) {
            console.log("Puedes ver la película");
        } else {
            console.log("No puedes ver la película");
        }
        break;
    case "a todo gas":
        if (edad >= objetoPeliculas.pelicula4.edad) {
            console.log("Puedes ver la película");
        } else {
            console.log("No puedes ver la película");
        }
        break;
    default:
        console.log("Esa película no está disponible");
        break;
}

