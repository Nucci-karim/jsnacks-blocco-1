// const domanda1 = parseInt(prompt("dammi un numero da sommare"))
// const domanda2 = parseInt(prompt("dammi un numero da sommare"))
// const domanda3 = parseInt(prompt("dammi un numero da sommare"))
// const domanda4 = parseInt(prompt("dammi un numero da sommare"))
// const domanda5 = parseInt(prompt("dammi un numero da sommare"))
// const domanda6 = parseInt(prompt("dammi un numero da sommare"))
// const domanda7 = parseInt(prompt("dammi un numero da sommare"))
// const domanda8 = parseInt(prompt("dammi un numero da sommare"))
// const domanda9 = parseInt(prompt("dammi un numero da sommare"))
// const domanda10 = parseInt(prompt("dammi un numero da sommare"))

// document.querySelector('#risultato').innerHTML = `${domanda1} + ${domanda2} + ${domanda3} + ${domanda4} + ${domanda5} + ${domanda6} + ${domanda7} + ${domanda8} + ${domanda9} + ${domanda10}` (non viene neanche cosi la somma)

// invece di fare cosi si usa un ciclo
let somma = 0

for(let i = 0; i < 10; i++){
    const numero = parseInt(prompt("dammi un numero da sommare"))

    // somma = somma+numero forma lunga 
    somma += numero
}

document.querySelector('#risultato').innerHTML = `${somma}`