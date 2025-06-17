/* 3- Altere o código um(1) desse conteúdo para funcionar
com números e ter duas colunas. 
Renan Vinicius N° 28 */

console.clear();
let teclado = require ('prompt-sync'); 
let minhaMatriz: number[][] = [];
let linha: number = 2
let coluna: number = 2;

for (let z = 0; z < linha; z++) { 
   
    minhaMatriz[z] = [];

    for (let x = 0; x < coluna; x++) {
        
        let numeroo: number= teclado(`Digite o número que vai estar no endereço [${z} e coluna ${x}] da matriz: `);
    

    minhaMatriz[z][x] += numeroo;
    }
}
console.log("Minha Matriz 2x2:")
    console.log(minhaMatriz);
