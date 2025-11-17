/*

Switch Case - Controlador de fluxo

*/

const temperature = 40

switch (temperature) {
    case 10:
        console.log("Está frio")
        break;
    case 30:
        console.log("Está meio quente")
        break;
    case 40:
        console.log("Está pegando fogo!!!")
        break;
    default:
        console.log("Temperatura não identificada")
        break;
}