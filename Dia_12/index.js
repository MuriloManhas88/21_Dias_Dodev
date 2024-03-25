let nomes = []
let senhas = []
let contador = 0 


let continuar = true

while(continuar){
    let opcao = prompt("Olá oque você deseja fazer 1 login 2 entrar 3 excluir 4 sair ")

    switch(opcao){

        case "1":
            nomes [contador] = prompt("qual é seu nome")
            senhas [contador] = prompt("qual é sua senha")
            contador++
          break;
         
         


        case "2" :
            let nome = prompt("qual é seu nome") 
            let senha = prompt("qual é sua senha ")
            let loginValido = false



            for (let i = 0; i<nome.length; i++) {
                if (nome == nomes[i] && senha == senhas[i]){
                    loginValido = true
                }
            }

            if ( loginValido) {
                alert("login realizado com sucesso")
            }else{
                alert("login ou senha errada ")
            }
            break;
        case "3":
            let nomeExcluir = prompt("Qual o nome que deseja excluir ")
            let nomesAux = [] 
            let senhasAux = []   
            let contadorAux = 0
            for (let i = 0; i< contador; i++){
            if (nomeExcluir == nomes[i]){
                alert("Cadastro excluido com sucesso")
            }else{
                nomesAux[contadorAux] = nomes[i]
                senhasAux[contadorAux] = senhas[i]
                contadorAux++
            }
            }  
            nomes = nomesAux  
            senhas = senhasAuxaux
            contador--
            break;
        case"4":
            continuar = false
            break;
   
   
        default:    
            console.log("opcao invalida")
            break;
        }   

}