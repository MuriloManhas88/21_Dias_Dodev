let nome = ""
let idade = 0 
temCarta = false
temCarro = false


nome = prompt("Qual é seu nome ")

idade = parseInt(prompt("Digite sua idade"))


let opcaoCarta = prompt("Você tem carta de motorista ?")

if (opcaoCarta ==="sim"){

    temCarta = true
}


let opcaoCarro = prompt("Você tem carro ?")

if (opcaoCarro ==="sim"){

    temCarro = true
}


if (idade <18 || !temCarta){
    console.log("você não pode dirigir ")
}else if( idade>= 18 && temCarta && !temCarro){
    console.log("você precisa de um carro " )
}else{
    console.log ("voce é o senna")
}