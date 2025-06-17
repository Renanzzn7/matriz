//Crie uma matriz 3x3 com entrada manual de números aceitando somente números de 0 a 9
//  Em seguida, exiba a matriz na tela.
// Renan Vinicius N° 28 
console.clear();
let teclado = require(`prompt-sync`)();
let minhaMatriz: number[][] = [];

for (let z = 0; z < 3; z++) {
  minhaMatriz[z] = [];

  for (let x = 0; x < 3; x++) {
    let n1: number = teclado(
      `Digite o número que vai estar no endereço [${z}, ${x}] da matriz: `
    );

    if (n1 >= 0 && n1 <= 9) {
      minhaMatriz[z][x] = n1;
    } else {
      n1--;
    }
  }
}
console.log(minhaMatriz);
