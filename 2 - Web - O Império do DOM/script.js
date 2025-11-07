const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert') // Valor em real a ser convertido
    const currencyValueConverted = document.querySelector('.currency-value') //Valor convertido, outras moedas

    const dolarToday = 5.38
    const bitcoinToday = 0.0000017
    const euroToday = 6.23
    const ieneToday = 28.68
    const pesoArgentinoToday = 269.40
    const yuanToday = 1.32

    if (currencySelect.value == 'dolar') { //Se estiver selecionado o valor de dólar, ENTRE AQUI
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == 'bitcoin') { //Se estiver selecionado o valor de bitcoin, ENTRE AQUI
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == 'euro') { //Se estiver selecionado o valor de euro, ENTRE AQUI
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == 'iene') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY'
        }).format(inputCurrencyValue / ieneToday)
    }

    if (currencySelect.value == 'peso-argentino') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
        }).format(inputCurrencyValue / pesoArgentinoToday)
    }
    
    if (currencySelect.value == 'yuan') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('zh-CN', {
            style: 'currency',
            currency: 'CNY'
        }).format(inputCurrencyValue / yuanToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)
}

function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.querySelector('.currency-img')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = './assets/dolar.png'
    }

    if (currencySelect.value == 'bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin.png'
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.png'
    }

    if (currencySelect.value == 'iene') {
        currencyName.innerHTML = 'Iene'
        currencyImg.src = './assets/iene.png'
    }

    if (currencySelect.value == 'peso-argentino') {
        currencyName.innerHTML = 'Peso Argentino'
        currencyImg.src = './assets/peso-argentino.png'
    }

    if (currencySelect.value == 'yuan') {
        currencyName.innerHTML = 'Yuan'
        currencyImg.src = './assets/yuan.png'
    }

    convertValues()
}

currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)