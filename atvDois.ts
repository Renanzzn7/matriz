console.clear();
let teclado = require ('prompt-sync')();
//declarando matriz usando o construtuor Array limitando a 3 linhas 
let matrizDois: string[][] = new Array(3);

for (let i = 0; i < 3; i++) { 
    // Cria um array vazio para preencher a linha correspondente ao i
    matrizDois[i] = new Array(3);



for (let j = 0; j < 4; j++) {
        //Atribuição via entrada de dados manual na variavel nome 
  let nome: string = teclado(`Digite o nome que vai estar no endereço [${i} e ${j}] da matriz: `);

        //Atribui nome na matrizDois do endereço dado por i e j
  matrizDois[i][j] = nome;
    }
}

//imprime a matriz

console.log(matrizDois);