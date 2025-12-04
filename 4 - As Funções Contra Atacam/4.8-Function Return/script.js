/* 

    Functions / Funções

    Função void (vazia), não retorna nada
    Função return, retorna um valor para quem chamou a função

*/


// function sum(value, value2) { // void
//     console.log(value + value2)
// }

// const result = sum(40, 36)
// console.log(result + ' resultado') // undefined, pois a função não retornou nada



function sum(value, value2) { 
    const result = value + value2
    return result 
}

const myResult = sum(40, 36)
console.log(myResult + ' resultado' ) // 76 resultado, pois a função retornou o valor da soma