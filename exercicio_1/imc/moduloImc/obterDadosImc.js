/***********************************************************************
  * Objetivo: Aplicação para funções de obtenção de dados
  * data: 27/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/
//import da biblioteca do cálculo
const calculoImc = require('./calcularImc')

//import da biblioteca do readline
const readline = require('readline')

//Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})



// função para receber o input do usuário
function obterDados(nome, peso, altura ) {
    

    //entrada do nome do paciente
    entradaDeDados.question('Digite o nome do paciente: ', function (nome) {
        let nomePaciente = nome
        
        // entrada do peso do paciente
        entradaDeDados.question('Digite a o peso do paciente em kg: ', function(peso){
            let pesoPaciente = peso

            //entrada da altura do paciente
            entradaDeDados.question('Digite a altura do paciente: ',function(altura){
                let alturaPaciente = parseFloat(altura.replace(',','.'))
                let alturaConvertida

                //condicional para converção da entrada caso seja sem virgula ou ponto(, ou .)
                if (alturaPaciente > 100) {
                    alturaConvertida = (alturaPaciente / 100)
                }
                else{
                    alturaConvertida = alturaPaciente
                }

                //chamando a função para calcular os dados coletados 
                let imcCalculado = calculoImc.calcularImc(Number(pesoPaciente), Number(alturaConvertida), nomePaciente)

                entradaDeDados.close()
                
            })//Fecha a entrada de dados da altura do paciente
        
        })//Fecha a entrada de dados do peso do paciente
    
    })//Fecha a entrada de dados do nome do paciente

}//fim da função obterDados

module.exports = {
    obterDados
}