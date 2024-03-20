let alunos =[]
let notas = []
let continuar = true
let contador = 0

while (continuar){
   let nome = prompt("digite seu nome do"+(contador + 1)+ " aluno")
   let nota = parseInt(prompt("Digite a nota "))

   alunos [contador] = nome
   notas [contador] = nota
   contador++

   let resposta = prompt("deseja inserir informações sobre outro aluno (s/n)")

   if(resposta =="n")
      continuar = false
}
console.log("notas dos alunos")
for (let i = 0 ; i< alunos.length; i++){
   console.log(alunos [i] +"-"+ notas[i])
}

let somaNotas = 0
console.log("Notas dos alunos: ")
for (let i = 0; i< alunos.length; i++){
   somaNotas += notas[i]
}
let media = somaNotas / alunos.length
console.log("a soma das notas foi " + somaNotas)
console.log("a média geral da turma foi "+ media)