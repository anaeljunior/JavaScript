/**

FOR 

    1) INICILIALIZAÇÃO - Criar uma variável e colocar um valor inicial para ela.
    2) CONDIÇÃO - Enquanto for TRUE, o laço continuará executando.
                  Ele irá verificar antes de cada interação.
    3) EXPRESSÃO FINAL - O que irá ocorrer a cada vez que o nosso laço der uma volta.

    for ([inicialização]; [condição]; [expressão final]) {
        seu código aqui
    }

 */

// for (let i = 0; i < 15; i++) {
//     console.log (i)
// }

// for (let i = 20; i > 2; i--) {
//     console.log (i)
// }

const users = [
    'Anael',
    'Júnior', 
    'Júlia',
    'Raphaelly',
    'Maria',
    'Gorete',
    'Soraya',
    'Leana',
    'Gael',
    'Vitória',
]

// for (let i = 0; i < users.length; i++) { // users.length = tamanho do array
//     console.log(users[i])
// }

for (let i = 0; i < users.length; i++) {
    console.log(`Usuário ${i + 1}: ${users[i]}`)
}