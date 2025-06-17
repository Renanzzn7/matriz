//7-Crie uma matriz 3x3 com números aleatórios de 0 a 9. Em seguida, exiba a matriz na tela.
// Renan Vinicius N° 28 


console.clear();

let matriz = [new Array(3), new Array(3), new Array(3)];

for (let linha = 0; linha < 3; linha++) 
    for (let coluna = 0; coluna < 3; coluna++) {
    
        let numero = Math.floor(Math.random() * 10); 
        matriz[linha][coluna] = numero;

console.log("Matriz 3x3:");
for (let linha = 0; linha < 3; linha++) {
    console.log(matriz[linha]);
}
    } 