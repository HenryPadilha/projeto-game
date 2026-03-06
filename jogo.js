const readline = require("readline-sync");

console.log("Bem vindo ao jogo de adivinhação");

const numeroSecreto = 7; 
let tentativa = "";
let tentativas = 0;

while (tentativa != numeroSecreto) {

    tentativa = readline.question("digite um numero entre 1 e 10: ");
    tentativa = Number(tentativa);

    tentativas++;

    if (tentativa > numeroSecreto) {
        console.log("muito alto");
    }
    else if (tentativa < numeroSecreto) {
        console.log("muito baixo");
    }
    else {
        console.log("parabéns! Você acertou em " + tentativas + " tentativas.");
    }
}