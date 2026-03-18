/***********************************************************************
  * Objetivo: Aplicação para obter os dados para cálculo da tabuada
  * data: 05/03/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/
 
// importa o arquivo que contém a função de calcular a tabuada
const calcularTabuada = require('./calcularTabuada')
 
// importa o módulo nativo do Node.js para leitura de dados no terminal
const readline = require('readline')
 
// função responsável por obter e tratar os dados da tabuada
function obterDados() {
 
  // cria a interface de leitura conectando a entrada (teclado) e saída (console)
  const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
 
  // solicita a tabuada inicial ao usuário
  entradaDeDados.question('Digite a tabuada inicial (2 a 100): ', function (entradaTabuadaInicial) {
 
    // validação: verifica se o campo está vazio
    if (entradaTabuadaInicial == '') {
      console.log('***A tabuada inicial nao pode ser vazia***')
      entradaDeDados.close()
      return
    }
 
    // validação: verifica se o valor digitado é um número
    if (isNaN(entradaTabuadaInicial)) {
      console.log('***Digite apenas numeros na tabuada inicial***')
      entradaDeDados.close()
      return
    }
 
    // converte a tabuada inicial para número inteiro
    let tabuadaInicial = parseInt(entradaTabuadaInicial)
 
    // validação: tabuada inicial deve estar entre 2 e 100
    if (tabuadaInicial < 2 || tabuadaInicial > 100) {
      console.log('***A tabuada inicial deve estar entre 2 e 100***')
      entradaDeDados.close()
      return
    }
 
    // solicita a tabuada final ao usuário
    entradaDeDados.question('Digite a tabuada final (2 a 100): ', function (entradaTabuadaFinal) {
 
      // validação: verifica se o campo está vazio
      if (entradaTabuadaFinal == '') {
        console.log('***A tabuada final nao pode ser vazia***')
        entradaDeDados.close()
        return
      }
 
      // validação: verifica se o valor digitado é um número
      if (isNaN(entradaTabuadaFinal)) {
        console.log('***Digite apenas numeros na tabuada final***')
        entradaDeDados.close()
        return
      }
 
      // converte a tabuada final para número inteiro
      let tabuadaFinal = parseInt(entradaTabuadaFinal)
 
      // validação: tabuada final deve estar entre 2 e 100
      if (tabuadaFinal < 2 || tabuadaFinal > 100) {
        console.log('***A tabuada final deve estar entre 2 e 100***')
        entradaDeDados.close()
        return
      }
 
      // validação: tabuada inicial não pode ser maior que a tabuada final
      if (tabuadaInicial > tabuadaFinal) {
        console.log('***A tabuada inicial nao pode ser maior que a tabuada final***')
        entradaDeDados.close()
        return
      }
 
      // solicita o multiplicador inicial ao usuário
      entradaDeDados.question('Digite o multiplicador inicial (1 a 50): ', function (entradaMultiplicadorInicial) {
 
        // validação: verifica se o campo está vazio
        if (entradaMultiplicadorInicial == '') {
          console.log('***O multiplicador inicial nao pode ser vazio***')
          entradaDeDados.close()
          return
        }
 
        // validação: verifica se o valor digitado é um número
        if (isNaN(entradaMultiplicadorInicial)) {
          console.log('***Digite apenas numeros no multiplicador inicial***')
          entradaDeDados.close()
          return
        }
 
        // converte o multiplicador inicial para número inteiro
        let multiplicadorInicial = parseInt(entradaMultiplicadorInicial)
 
        // validação: multiplicador inicial deve estar entre 1 e 50
        if (multiplicadorInicial < 1 || multiplicadorInicial > 50) {
          console.log('***O multiplicador inicial deve estar entre 1 e 50***')
          entradaDeDados.close()
          return
        }
 
        // solicita o multiplicador final ao usuário
        entradaDeDados.question('Digite o multiplicador final (1 a 50): ', function (entradaMultiplicadorFinal) {
 
          // validação: verifica se o campo está vazio
          if (entradaMultiplicadorFinal == '') {
            console.log('***O multiplicador final nao pode ser vazio***')
            entradaDeDados.close()
            return
          }
 
          // validação: verifica se o valor digitado é um número
          if (isNaN(entradaMultiplicadorFinal)) {
            console.log('***Digite apenas numeros no multiplicador final***')
            entradaDeDados.close()
            return
          }
 
          // converte o multiplicador final para número inteiro
          let multiplicadorFinal = parseInt(entradaMultiplicadorFinal)
 
          // validação: multiplicador final deve estar entre 1 e 50
          if (multiplicadorFinal < 1 || multiplicadorFinal > 50) {
            console.log('***O multiplicador final deve estar entre 1 e 50***')
            entradaDeDados.close()
            return
          }
 
          // validação: multiplicador inicial não pode ser maior que o multiplicador final
          if (multiplicadorInicial > multiplicadorFinal) {
            console.log('***O multiplicador inicial nao pode ser maior que o multiplicador final***')
            entradaDeDados.close()
            return
          }
 
          // chama a função de cálculo passando os 4 valores validados
          calcularTabuada.calcularTabuada(tabuadaInicial, tabuadaFinal, multiplicadorInicial, multiplicadorFinal)
 
          // encerra a interface de leitura após exibir os resultados
          entradaDeDados.close()
 
        }) // fim da question multiplicador final
 
      }) // fim da question multiplicador inicial
 
    }) // fim da question tabuada final
 
  }) // fim da question tabuada inicial
 
} // fim da função obterDados
 
// exporta a função para que o app.js possa utilizá-la
module.exports = {
  obterDados
}