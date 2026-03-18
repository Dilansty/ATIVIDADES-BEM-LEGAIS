/***********************************************************************
  * Objetivo: Obter os dados para o cálculo de pares e ímpares
  * data: 17/03/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/

// importa as funções de calcular e exibir pares e ímpares
const { calcularPares, calcularImpares, exibirPares, exibirImpares } = require('./calcularImparPar')

// função responsável por obter e tratar os dados de pares e ímpares
function obterDadosParesImpares() {

    //import da biblioteca do readline
    const readline = require('readline')
    

     //Cria o objeto de entrada de dados
      const entradaDeDados = readline.createInterface({
        input: process.stdin,  
        output: process.stdout 
})

    // solicita o número inicial ao usuário
    entradaDeDados.question('Digite o numero inicial (0 a 500): ', function (entradaInicial) {
         // converte o número inicial para inteiro
        let numeroInicial = parseInt(entradaInicial)


        // validação: verifica se o campo está vazio
        if (entradaInicial == '') {
            console.log('O numero inicial nao pode ser vazio')
            entradaDeDados.close()
            return
        }

        // validação: verifica se o valor digitado é um número
        else if (isNaN(entradaInicial)) {
            console.log('Digite apenas numeros no campo inicial')
            entradaDeDados.close()
            return
        }


        // validação: número inicial deve estar entre 0 e 500
        else if (numeroInicial < 0 || numeroInicial > 500) {
            console.log('O numero inicial deve estar entre 0 e 500')
            entradaDeDados.close()
            return
        }

        // solicita o número final ao usuário
        entradaDeDados.question('Digite o numero final (100 a 1000): ', function (entradaFinal) {
            // converte o número final para inteiro
            let numeroFinal = parseInt(entradaFinal)


            // validação: verifica se o campo está vazio
            if (entradaFinal == '') {
                console.log('O numero final nao pode ser vazio')
                entradaDeDados.close()
                return
            }

            // validação: verifica se o valor digitado é um número
            else if (isNaN(entradaFinal)) {
                console.log('Digite apenas numeros no campo final')
                entradaDeDados.close()
                return
            }
 

            // validação: número final deve estar entre 100 e 1000
            else if (numeroFinal < 100 || numeroFinal > 1000) {
                console.log('O numero final deve estar entre 100 e 1000')
                entradaDeDados.close()
                return
            }

            // validação: número inicial não pode ser maior que o número final
            else if (numeroInicial > numeroFinal) {
                console.log('O numero inicial nao pode ser maior que o numero final')
                entradaDeDados.close()
                return
            }

            // validação: os dois números não podem ser iguais
            else if (numeroInicial == numeroFinal) {
                console.log('O numero inicial e o numero final nao podem ser iguais')
                entradaDeDados.close()
                return
            }

            // solicita ao usuário qual separação ele deseja ver
            console.log('\nO que voce deseja calcular?')
            console.log('1 - Somente Pares')
            console.log('2 - Somente Impares')
            console.log('3 - Pares e Impares')

            entradaDeDados.question('Digite a opção desejada: ', function (opcao) {
                // converte a opção para número inteiro
                let opcaoEscolhida = opcao
                // validação: verifica se a opção está vazia
                if (opcao == '') {
                    console.log('A opção nao pode ser vazia')
                    entradaDeDados.close()
                    return
                }

                

                // verifica a opção escolhida e exibe o resultado correspondente
                if (opcaoEscolhida == 1) {

                    // calcula e exibe somente os pares
                    let pares = calcularPares(numeroInicial, numeroFinal)
                    exibirPares(pares)

                } else if (opcaoEscolhida == 2) {

                    // calcula e exibe somente os ímpares
                    let impares = calcularImpares(numeroInicial, numeroFinal)
                    exibirImpares(impares)

                } else if (opcaoEscolhida == 3) {

                    // calcula e exibe pares e ímpares
                    let pares = calcularPares(numeroInicial, numeroFinal)
                    let impares = calcularImpares(numeroInicial, numeroFinal)
                    exibirPares(pares)
                    exibirImpares(impares)

                } else {

                    // opção inválida
                    console.log('Opção invalida. Digite 1, 2 ou 3')
                    entradaDeDados.close()

                }

            }) // fim da entrada de dados opção

        }) // fim da entrada de dados numero final

    }) // fim da entrada de dados numero inicial

}

// exporta a função
module.exports = {
    obterDadosParesImpares
}
