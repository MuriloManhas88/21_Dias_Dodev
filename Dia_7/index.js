let medGeral = 0
let contador = 0
let qtd_Homens = 0
let qtd_Mulheres = 0 
let maiorNotaHomens = 0 
while (contador <=10 ){
    nota = parseFloat(prompt("digite a nota"+ contador + "aluno"))
    sexo = prompt("digite o sexo ")



    if (sexo == "m"){
        if(nota > maiorNotaHomens){
          maiorNotaHomens = nota 


        }
    qtd_Homens++
    } 
    if (sexo =="f" && nota>7){
    qtd_Mulheres++
    }
    medGeral +=nota
    contador++
}
medGeral = medGeral/10

console.log("a media geral é " + medGeral)
console.log("a qtd de homens cadastrado é  " + qtd_Homens)
console.log("a qtd de mulheres acimda  de sete é  " + qtd_Mulheres)
console.log("a maior nota de homens foi  " + maiorNotaHomens)




