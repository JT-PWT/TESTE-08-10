// Elaborar um programa que adicione números a um vetor. O programa deve impedir a inclusão de números repetidos. 
// Exibir a lista de números a cada inclusão.
// Inicializando um array para armazenar os números
let numeros = [];
function adicionarNumero() {
    let input = prompt("Digite um número:");
    let numero = parseInt(input);
    if (numeros.includes(numero)) {
        alert("O número " + numero + " já foi adicionado anteriormente!");
    } else {
        numeros.push(numero);
        alert("Número " + numero + " adicionado com sucesso!");
    }
    alert("Lista de número: " + numeros.join(", "));
    adicionarNumero();
}
adicionarNumero();