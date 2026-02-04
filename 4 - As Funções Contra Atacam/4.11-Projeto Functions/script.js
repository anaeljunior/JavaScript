//parte 4 - Seleciona o elemento onde o resultado será exibido
const resultDisplay = document.querySelector('.result')

//parte 5 - Seleciona os elementos onde as pontuações serão exibidas
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

//parte 6 - Variáveis para armazenar as pontuações
let humanScoreNumber = 0
let machineScoreNumber = 0

//parte 1 - Escolha do usuário
const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())
}

//parte 2 - Escolha da máquina
const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

//parte 3 - Verifica o vencedor
const playTheGame = (human, machine) => {
    console.log('Humano: ' + human, 'Máquina: ' + machine)

    if (human === machine) {
        resultDisplay.innerHTML = 'Empate!'
    } else if (
        (human === 'rock' && machine === 'scissors') ||
        (human === 'paper' && machine === 'rock') ||
        (human === 'scissors' && machine === 'paper')) {

        humanScoreNumber++ // Incrementa a pontuação do humano
        humanScore.innerHTML = humanScoreNumber // Atualiza a exibição da pontuação do humano  
        resultDisplay.innerHTML = 'Você ganhou!'
    } else {
        machineScoreNumber++ // Incrementa a pontuação da máquina
        machineScore.innerHTML = machineScoreNumber // Atualiza a exibição da pontuação da máquina
        resultDisplay.innerHTML = 'Alexa ganhou!'
    }
}