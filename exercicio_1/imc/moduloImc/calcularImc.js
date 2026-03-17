/***********************************************************************
  * Objetivo: Aplicação para realizar o calculo de IMC com os valores obtidos
  * data: 27/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/


//criando a função para calcular o imc e apresentar os resultados
function calcularImc(peso, altura, nome) {
    //declaração das variaveis utilizadas no calculo e resultados
    let pesoPaciente = peso
    let alturaConvertida = altura
    let nomePaciente = nome
    let resultadoImc


    //calculo do IMC
    resultadoImc = (pesoPaciente / (alturaConvertida * alturaConvertida))


    //Condicional de validação do valor e amostragem dos resultados
    if (resultadoImc < 18.5) {
        return console.log(`O paciente  ${nomePaciente} tem um IMC de: ${resultadoImc.toFixed(2)} e está abaixo do peso\n      \n ************************FINALIZANDO************************`)
    }
    else if (resultadoImc >= 18.5 && resultadoImc < 25) {
        return console.log(`O paciente  ${nomePaciente} tem um IMC de: ${resultadoImc.toFixed()} e está no peso ideal\n      \n ************************FINALIZANDO************************`)
    }
    else if (resultadoImc >= 25 && resultadoImc < 30) {
        return console.log(`O paciente  ${nomePaciente} tem um IMC de: ${resultadoImc.toFixed()} e está acima do peso/com sobrepeso\n      \n ************************FINALIZANDO************************`) 
    }
    else if (resultadoImc >= 30 && resultadoImc < 35) {
        return console.log(`O paciente  ${nomePaciente} tem um IMC de: ${resultadoImc.toFixed()} e está no grau de obesidade 1\n      \n ************************FINALIZANDO************************`)   
    }
    else if (resultadoImc >= 35 && resultadoImc < 40) {
        return console.log(`O paciente  ${nomePaciente} tem um IMC de: ${resultadoImc.toFixed()} e está no grau de obesidade 2\n      \n ************************FINALIZANDO************************`)   
    }
    else {
        return console.log(`O paciente  ${nomePaciente} tem um IMC de: ${resultadoImc.toFixed()} e está no grau de obesidade 3\n      \n ************************FINALIZANDO************************`)
    }

        

}

//export da função
module.exports = {
    calcularImc
}