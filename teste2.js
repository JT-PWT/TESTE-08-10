// Questão 2: Crie um programa que exiba em uma tabela e destaque todos os números primos que estão entre 0 e 200.
function ehPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
numero = (3);

console.log(ehPrimo);