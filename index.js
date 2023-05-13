const prompt = require("prompt-sync")({ sigint: true });
const { exercisesHandler } = require("./handler");

const number = prompt("Introduce el número del ejercicio, si deseas ver todos los ejercicios escribe 0: ");
const names = [];
for(let key in exercisesHandler) {
    console.log(exercisesHandler[key])
    if(key === number) {
        return key.exec
    }
    return console.log(`No existen ejercicios con el numero ${number}. Ejercicios existentes: ${names}, `)
}
