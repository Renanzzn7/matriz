/* 9- Crie uma matriz 6x6 com entrada manual. Em seguida,
calcule e exiba a soma dos elementos das colunas pares da
matriz.

Renan Vinicius N° 28  */

let teclado = require('prompt-sync')();

let matriz: number[][] = [];
let somaColunasPares: number = 0;

for (let linha = 0; linha < 6; linha++) {
    matriz[linha] = [];
    for (let coluna = 0; coluna < 6; coluna++) {
        let valorNumero = teclado(`Digite o valor para posição [${linha}][${coluna}]: `);
        let valor = parseInt(valorNumero);

        while (isNaN(valor)) {
            valorNumero = teclado(`Valor inválido! Digite um número para posição [${linha}][${coluna}]: `);
            valor = parseInt(valorNumero);
        }

        matriz[linha][coluna] = valor;
    }
}

console.log("Matriz 6x6:");
for (let linha = 0; linha < 6; linha++) {
    let textoLinha = "";
    for (let coluna = 0; coluna < 6; coluna++) {
        textoLinha += matriz[linha][coluna] + " ";
    }
    console.log(textoLinha);
}

for (let coluna = 0; coluna < 6; coluna += 2) {
    for (let linha = 0; linha < 6; linha++) {
        somaColunasPares += matriz[linha][coluna];
    }
}

console.log("Soma dos elementos das colunas pares:", somaColunasPares);
