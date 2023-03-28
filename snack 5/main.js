
const listaNumeri = [];

for(let i = 0; i < 6; i++){
    const numero = parseInt(prompt("dammi un numero"))

    if(numero % 2 != 0){
    listaNumeri.push(numero)
    } 
}


console.log(listaNumeri)