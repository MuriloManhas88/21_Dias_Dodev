let valor
let quantidade
opcao = prompt("digite uo numero 1 para gasolina, numero2 para etanol, numero 3 para calibragem")



switch(opcao){
    case "1":
        valor = parseFloat(prompt("Digite quantos $ "))
        quantidade = valor / 5
        console.log("foram abastecidos " + quantidade + "L")
    break;


    case "2":
        valor = parseFloat(prompt("Digite quantos $ "))
        quantidade = valor / 3
        console.log("foram abastecidos " + quantidade + "L")
    break;

    default:
   
     console.log("Pneus calibrados ")
    break;

  
}