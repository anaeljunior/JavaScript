/*
  Function / Funções 
            = Trecho de código que é executado, SOMENTE quando solicitado

    Funções podem receber argumentos ou parâmetros

*/

// function sayMyName(name) {
//     console.log(`O meu nome é: ${name}`)
// }

// sayMyName('Anael')
// sayMyName('João')
// sayMyName('Maria') 
// sayMyName('Pedro')


// function sum(value, value2) {
//     console.log(value + value2)
// }

// sum(40, 36) //Soma de 40 + 36


function sayMyName(name = 'Nome não informado') {
    console.log(name)
}

sayMyName() // Se não passar nenhum nome, vai mostrar o valor padrão
sayMyName('Anael')