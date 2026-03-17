/***********************************************************************
  * Objetivo: Aplicação para obter os dados do usuário
  * data: 15/03/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/
 
// importa o módulo nativo do Node.js para leitura de dados no terminal
const readline = require('readline')
 
// importa o arquivo que contém a função de calcular pares e ímpares
const calcularParesImpares = require('./calcularParesImpares')
 
// função responsável por obter e tratar os dados do usuário
function obterDados() {
 
  // cria a interface de leitura conectando a entrada (teclado) e saída (console)
  const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
 
  // solicita o número inicial ao usuário
  entradaDeDados.question('Digite o numero inicial (0 ate 500): ', function (entradaInicial) {
 
    // validação: verifica se o campo do número inicial está vazio
    if (entradaInicial == '') {
      console.log('ERRO: O numero inicial nao pode ser vazio')
      entradaDeDados.close()
      return
    }
 
    // validação: verifica se o número inicial contém apenas números
    if (isNaN(entradaInicial)) {
      console.log('ERRO: Digite apenas numeros no campo inicial')
      entradaDeDados.close()
      return
    }
 
    // converte o número inicial para inteiro
    let numeroInicial = parseInt(entradaInicial)
 
    // validação: número inicial deve estar entre 0 e 500
    if (numeroInicial < 0 || numeroInicial > 500) {
      console.log('ERRO: O numero inicial deve estar entre 0 e 500')
      entradaDeDados.close()
      return
    }
 
    // solicita o número final ao usuário
    entradaDeDados.question('Digite o numero final (100 ate 1000): ', function (entradaFinal) {
 
      // validação: verifica se o campo do número final está vazio
      if (entradaFinal == '') {
        console.log('ERRO: O numero final nao pode ser vazio')
        entradaDeDados.close()
        return
      }
 
      // validação: verifica se o número final contém apenas números
      if (isNaN(entradaFinal)) {
        console.log('ERRO: Digite apenas numeros no campo final')
        entradaDeDados.close()
        return
      }
 
      // converte o número final para inteiro
      let numeroFinal = parseInt(entradaFinal)
 
      // validação: número final deve estar entre 100 e 1000
      if (numeroFinal < 100 || numeroFinal > 1000) {
        console.log('ERRO: O numero final deve estar entre 100 e 1000')
        entradaDeDados.close()
        return
      }
 
      // validação: número inicial não pode ser maior que o número final
      if (numeroInicial > numeroFinal) {
        console.log('ERRO: O numero inicial nao pode ser maior que o numero final')
        entradaDeDados.close()
        return
      }
 
      // validação: os dois números não podem ser iguais
      if (numeroInicial == numeroFinal) {
        console.log('ERRO: O numero inicial e o numero final nao podem ser iguais')
        entradaDeDados.close()
        return
      }
 
      // chama a função de cálculo passando os dois números validados
      let { pares, impares } = calcularParesImpares.calcularParesImpares(numeroInicial, numeroFinal)
 
      // exibe a lista de números pares
      console.log('\nLista de numeros Pares')
      for (let i = 0; i < pares.length; i++) {
        console.log(pares[i]) // imprime cada número par
      }
      console.log('Qtde de numeros encontrados: ' + pares.length)
 
      // exibe a lista de números ímpares
      console.log('\nLista de numeros Impares')
      for (let i = 0; i < impares.length; i++) {
        console.log(impares[i]) // imprime cada número ímpar
      }
      console.log('Qtde de numeros encontrados: ' + impares.length)
 
      // encerra a interface de leitura após exibir os resultados
      entradaDeDados.close()
 
    }) // fim da question do número final
 
  }) // fim da question do número inicial
 
}
 
// exporta a função para que o app.js possa utilizá-la
module.exports = {
  obterDados
}
 