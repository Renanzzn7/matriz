/* 8- Crie uma matriz 3x3 com números aleatórios entre 0 e 20.
Em seguida, exiba a matriz na tela e encontre o maior
elemento da matriz e a posição em que ele se encontra.

Renan Vinicius N° 28  */

let matriz: number[][] = [];
let maiorNumero: number = 0;
let posicaoLinha: number = 0;
let posicaoColuna: number = 0;


for (let linha = 0; linha < 3; linha++) {
    matriz[linha] = [];
    for (let coluna = 0; coluna < 3; coluna++) {
        matriz[linha][coluna] = Math.floor(Math.random() * 21);

       
        if (linha == 0 && coluna == 0) {
            maiorNumero = matriz[linha][coluna];
            posicaoLinha = linha;
            posicaoColuna = coluna;
        }

        
        if (matriz[linha][coluna] > maiorNumero) {
            maiorNumero = matriz[linha][coluna];
            posicaoLinha = linha;
            posicaoColuna = coluna;
        }
    }
}


console.log("Matriz 3x3:");
for (let linha = 0; linha < 3; linha++) {
    let textoLinha: string = "";
    for (let coluna = 0; coluna < 3; coluna++) {
        textoLinha += matriz[linha][coluna] + " ";
    }
    console.log(textoLinha);
}


console.log("Maior número:", maiorNumero);
console.log(`Posição: Linha", ${posicaoLinha}, Coluna, ${posicaoColuna}`);