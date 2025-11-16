/**

Operadores Type Of e Delete

 typeof -> Tipo do dado
 Delete -> Deleta uma propriedade de um objeto

 */

 const myObject = {
   name: "Anael",
   age: 10,
   address: "Rua Universo, 10",
 }

 const myNumber = 7

 delete myObject.address

 console.log(myObject)
 console.log(typeof myNumber)