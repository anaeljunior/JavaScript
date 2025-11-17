/**

Operador Ternário

 ? if (se)
 : else (se não)
 && (if sem else)

 */

const salary = 12000

// if (salary < 3000) {
//     console.log('O colaborador é JÚNIOR')
// } else if (salary >= 3000 && salary < 10000) {
//     console.log('Ele é SÊNIOR')
// } else {
//     console.log('Ele é DIRETOR')
// }

// salary < 3000 ? console.log('O colaborador é JÚNIOR') : console.log('Ele é SÊNIOR') // -> IF|Else
// salary < 3000 && console.log('O colaborador é JÚNIOR') // -> IF
salary < 3000 ? console.log('O colaborador é JÚNIOR') : salary >= 3000 && salary < 10000 ? console.log('Ele é SÊNIOR') : console.log('Ele é DIRETOR') // -> Else IF