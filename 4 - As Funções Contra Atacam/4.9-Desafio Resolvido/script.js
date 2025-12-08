/*

    Calcular Descontos:
    Todos os produtos acima de R$ 30,00 tem desconto de 10%.

*/

const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValueWithDiscount = 0
let finalValue = 0

function calculateDiscount(price, discount) {
    const result = (price * discount) / 100
    /* 
        R$658,00 // 10%
        658 * 10 -> 6580 / 100 -> 65,80
    */
    return result
}

cart.forEach(value => {
    finalValue += value
});

cart.forEach(value => {
    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        //finalValueWithDiscount = finalValueWithDiscount + (value - discount) --> É a mesma coisa que a linha abaixo
        finalValueWithDiscount += (value - discount)
    } else {
        //finalValueWithDiscount = finalValueWithDiscount + value --> É a mesma coisa que a linha abaixo
        finalValueWithDiscount += value
    }
})

console.log
(`O valor da compra foi de R$ ${finalValue.toFixed(2)}
Você economizou R$ ${(cart.reduce((acc, val) => acc + val, 0) - finalValueWithDiscount).toFixed(2)}
Irá pagar R$ ${finalValueWithDiscount.toFixed(2)} no total.`)

