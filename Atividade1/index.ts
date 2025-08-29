import * as leia from "readline-sync"

import { Queue } from "./queue"

const queue = new Queue

let aux = true


do {
    console.log("**********************************************");
    console.log("  1 - Adicionar Cliente na Fila");
    console.log("  2 - Listar todos os Clientes");        
    console.log("  3 - Retirar Cliente da Fila");
    console.log("  0 - Sair");
    console.log("**********************************************");
    let opcao = leia.questionInt("Entre com a opção desejada:")

    switch (true) {
        case opcao == 1:
            let nomeAdicao = leia.question("Qual o nome do novo cliente ? ")
            queue.enqueue(nomeAdicao)
            console.log(`Cliente ${nomeAdicao} adicionado`);
            
            queue.printQueue()
            break;

        case opcao == 2:
            
            queue.printQueue()
            break;
        
        case opcao == 3:
            
            queue.dequeue()
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