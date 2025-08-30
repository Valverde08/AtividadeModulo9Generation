import * as leia from "readline-sync"

import { Stack } from "./Stack"

const stack = new Stack;

let aux = true

do {
    console.log("**********************************************");
    console.log("  1 - Adicionar Livro na pilha");
    console.log("  2 - Listar todos os Livros");        
    console.log("  3 - Retirar Livro da Pilha");
    console.log("  0 - Sair");
    console.log("**********************************************");
    let opcao = leia.questionInt("Entre com a opção desejada:")

    switch (true) {
        case opcao == 1:
            let nomeLivro = leia.question("Qual o nome dLivro a ser adicionado ? ")
            stack.push(nomeLivro)
            console.log(`Livro ${nomeLivro} adicionado`);
            
            stack.printStack()
            break;

        case opcao == 2:
            
            stack.printStack()
            break;
        
        case opcao == 3:
            
            stack.pop()
            break; 

        case opcao == 0:
            console.log("O porgrama será finalizado.");
            aux = false
            break; 

        default:
            console.log("Essa opção não existe, tente outra.");
            
            break;
    }

} while (aux);