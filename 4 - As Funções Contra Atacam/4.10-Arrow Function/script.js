/*

Functions / Funções

    function padrão -> function () {}
    arrow function -> () => {}

    Não escrevemos "function".
    Além disso, usamos o sinal "=>" para criá-la,
    o que lembra uma flecha, fazendo jus ao nome "Arrow Functions".

*/

function sayMyName(name) {
    return `Seu nome é: ${name}`
}


const sayMyName2 = (name) => `Seu nome é: ${name}` 
// Se não "arrow function" tiver apenas uma linha, não preoisa do "return" nem das chaves {}

const sum = (number1, number2) => {
    return `A soma dos números é igual: ${number1 + number2}`
}

console.log(sayMyName("Anael"))
console.log(sayMyName2("Júnior"))
console.log(sum(10, 10))