let nome = prompt("Digite seu nome ")
let idade = parseInt(prompt("Digite sua idade "))
let peso = prompt("Digite seu peso ")
let altura = prompt("Digite sua altura  ")
let profissao = prompt("Digite sua profissao ")


console.log("olá: " + nome + "você tem: " +idade+" anos, pesa: " +peso + "kg , tem : "+altura+ "e você é : " +profissao)

if (idade >=18 ){
    console.log("sextou ")
}else {

    console.log("vc está of =(")

}    

let meses = idade * 12
let semanas = idade * 52
let dias = idade *365

console.log("Voce tem " + meses+ ": meses de vida") 
console.log("Voce tem " + semanas+ ": semanas  de vida") 
console.log("Voce tem " + dias + ": dias de vida") 