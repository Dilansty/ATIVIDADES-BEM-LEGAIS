/***********************************************************************
  * Objetivo: Aplicação para obter os dados para cálculo da tabuada
  * data: 27/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/


 
// importa o arquivo que contém a função de calcular o fatorial
const calcularFatorial = require('./calcularFatorial')
 
//import da biblioteca do readline
const readline = require('readline')

// função responsável por obter e tratar os dados do fatorial
function obterDados() {
 
 //Cria o objeto de entrada de dados
  const entradaDeDados = readline.createInterface({
    input: process.stdin,  
    output: process.stdout 
  })
 
  //entrada do nome do paciente
  entradaDeDados.question('Digite o numero a ser calculado o fatorial: ', function (numeroFatorial) {
  // garante que o numero não seja uma string
    let numero = Number(numeroFatorial)

    // validação: verifica se o usuário não digitou nada (campo vazio)
    if (numeroFatorial == '') {
      console.log('O campo nao pode ser vazio')
      entradaDeDados.close() // encerra a interface de leitura
      return                 // interrompe a execução da função
    }
 
    // condicional do valor digitado não é um número 
    else if (isNaN(numeroFatorial)) {
      console.log('Digite apenas numeros')
      entradaDeDados.close() 
      return                
    }
 
    // condicional para negar números negativos
    else if (numero < 0) {
      console.log('Nao existe fatorial de numero negativo')
      entradaDeDados.close() 
      return                 
    }
 
    // validação: fatorial de 0 não é permitido conforme requisito do sistema
     else if (numero == 0) {
      console.log('Nao existe fatorial de 0')
      entradaDeDados.close() 
      return                 
    }
 
    // validação fatorial de 1 não é calculado conforme requisito do sistema
    else if (numero == 1) {
      console.log('O numero precisa ser maior que 1')
      entradaDeDados.close() 
      return                 
    }
 
    // converte o número para BigInt antes de enviar para o cálculo (para não perder dígitos)
    let resultado = calcularFatorial.calcularFatorial(BigInt(numero))
 
    // exibe o resultado final
    console.log('*******************************\n')
    console.log('O fatorial de ' + numero + ' e igual a ' + resultado)
     console.log('\n*******************************')
     
    // finaliza a interface de leitura
    entradaDeDados.close()
 
  })//fim da função obterDados

  
 
}
 
// exporta a função
module.exports = {
  obterDados
}