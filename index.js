const prompt = require("prompt-sync")({ sigint: true });
const { exercisesHandler } = require("./handler");

const number = prompt("Introduce el número del ejercicio, si deseas ver todos los ejercicios escribe 0: ");

for(const key in exercisesHandler) {
    if(key === number) {
        return key.exec
    }
    return console.log(`No existen ejercicios con el numero ${number}. Ejercicios existentes: ${exercisesHandler[key].name}, `)
}