/**

Operadores Lógicos

&& -> E -> Pessoa Exigente / Pessoa Obediente
    true && true = true
    true && false = false
    false && false = false

|| -> OU -> Tanto faz / Filho Espertinho
    true || true = true
    true || false = true  
    false || false = false

! -> Negação
    !true = false
    !false = true   

 */

console.log(true && true && true) // true
console.log(true && false && true) // false
console.log(false && false && false) // false

// Mariazinha é exigente. Ela NÃO que o Joãozinho
// Bonito &&(E) Inteligente &&(E) Programador &&(E) Tem que ter carro //A Mariazinha quer isso
// Não é Bonito / Inteligente / Programador / Ter carro // Joãozinho


console.log(true || true || true)  // true 
console.log(true || false || true) // true 
console.log(false || false || false) // false

//Luzuzinha não é tão exigente. Ela quer o Paulinho
// Bonito ||(OU) Inteligente ||(OU) Programador ||(OU) Tem que ter carro //A Luzuzinha quer isso
// Não é Bonito / Burro / Não é Programador / Tem carro // Paulinho


console.log(!true)  // false
console.log(!false) // true 
// Negação


const digitarASenha= true
const digitarOToken = true
const numeroDaConta = true


if(digitarASenha && digitarOToken && numeroDaConta) {
    console.log("Logado com sucesso")
} else {
    console.log("Falha na autenticação")
}