const numero1 = parseInt(prompt("primo numero")) 
const numero2 = parseInt(prompt("secondo numero")) 

if(numero1 > numero2){
    document.querySelector('#risultato').innerHTML = `${numero1}`
} else if(numero1 < numero2){
    document.querySelector('#risultato').innerHTML = `${numero2}`
} else{
    document.querySelector('#risultato').innerHTML = `sono uguali: ${numero1}, ${numero2}`
}

