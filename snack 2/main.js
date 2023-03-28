const parola1 = prompt("prima parola") 
const parola2 = prompt("seconda parola")

if(parola1.length > parola2.length){
    document.querySelector('#risultato').innerHTML = `${parola1}`
} else if(parola1.length < parola2.length){
    document.querySelector('#risultato').innerHTML = `${parola2}`
} else{
    document.querySelector('#risultato').innerHTML = `sono uguali: ${parola1}, ${parola2}`
}
