/***********************************************************************
  * Objetivo: Aplicação para calcular a tabuada sequencial
  * data: 27/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/


function calcularMedia(ultimaTabuada, primeiraTabuada, ultimoNumero, primeiroNumero){

   // função que recebe o número inicial e final e separa os pares e ímpares
function calcularParesImpares(numeroInicial, numeroFinal) {
 
  // array que vai guardar os números pares encontrados
  let pares = []
 
  // array que vai guardar os números ímpares encontrados
  let impares = []
 
  // loop que percorre todos os números do inicial até o final
  for (let numeroRepeticao = numeroInicial; numeroRepeticao <= numeroFinal; numeroRepeticao++) {
 
    // verifica se o número é par (resto da divisão por 2 igual a 0)
    if (numeroRepeticao % 2 == 0) {
      pares.push(numeroRepeticao) // adiciona o número no array de pares
 
    } else {
      impares.push(numeroRepeticao) // adiciona o número no array de ímpares
    }
 
  }
 
  // retorna os dois arrays com os números separados
  return { pares, impares }
 
}
 
// exporta a função para que outros arquivos possam utilizá-la
module.exports = {
  calcularParesImpares
}

}