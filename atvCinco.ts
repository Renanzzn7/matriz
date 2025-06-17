/* 5- Crie uma matriz 3x3 com entrada manual de
números. Em seguida, exiba a matriz na tela.

Renan Vinicius N° 28 */

console.clear();
let teclado = require('prompt-sync')();
let matriz: number[][] = new Array(3); 

for (let i = 0; i < 3; i++) {
    matriz[i] = new Array(3);
  
    for (let j = 0; j < 3; j++) {
      let numeroo: number = teclado(
        `Digite o número que vai estar no endereço [${i} e ${j}] da matriz: `
      );
  
      matriz[i][j] = numeroo;
    }
  }
  
  console.log(matriz);