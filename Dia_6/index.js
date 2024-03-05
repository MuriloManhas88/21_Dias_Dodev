


// ex 2

for (let i = 0; i<= 50; i+= 5){
    console.log (i)
}


//ex 3 

for (let i = 50; i>= 0 ; i-= 5 ) {
    console.log (i)
}




let numero = parseInt(prompt("digite o numero "))

for (let i =numero ; i<= numero + 2 ; i++){
    console.log("tabauda do numero" + i  )
    for (let j = 0; j <= 10; j++){
console.log(i+"X" + j+ "=" + (i*j))
    }
}