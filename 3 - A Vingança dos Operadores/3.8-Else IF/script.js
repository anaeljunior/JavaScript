/**

 IF (SE)
 Else (Se não)
 Else If (Se, caso contrário, se)

 */

 //const temperature = 30
 //const temperature = 36
 //const temperature = 37.5
 const temperature = 42

 if(temperature === 36) {
    console.log("Você está saudável")
 } else if(temperature > 36 && temperature <= 40) {
    console.log("Está com febre")
 } else if(temperature > 40) {
    console.log("Está com MUITA febre")
 } else {
    console.log("Está com hipotermia")
 }