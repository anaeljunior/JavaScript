/*

setTimeout -> Executa uma vez
setInterval -> Executa infinitas vezes

cleamInterval -> Pausa o setInterval

*/

// setTimeout(() => {
//     // forma moderna de escrever funções
//     // executa o que estiver aqui
// }, timeout);


// function myFunction() {
//     // executa o que estiver aqui
// }
// setTimeout(myFunction, timeout);


// setTimeout(function () {
//     // executa o que estiver aqui
//     alert('Executei')
// }, 3000); // 1000 milissegundos = 1 segundo

// let number = 0

// setInterval(() => {
//     console.log(number++)
// }, 1000);

let number = 0
let cron
let h1 = document.querySelector('h1')

function start() {
    cron = setInterval(function () {
        number++
        h1.innerHTML = number
    }, 1000)
}

function stop() {
    clearInterval(cron)
}