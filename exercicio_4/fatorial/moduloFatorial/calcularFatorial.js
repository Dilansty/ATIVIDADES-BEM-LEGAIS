/***********************************************************************
  * Objetivo: Aplicação para calcular a o fatorial
  * data: 27/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/


// função que recebe o número a ser fatoriado
function calcularFatorial(numeroFatoriado) {
 
  // variável que guarda o resultado
  let resultado = 1
 
  // repetição que começa no número informado e vai diminuindo até chegar em 1
  for (let numeroSubtraido = numeroFatoriado; numeroSubtraido >= 1; numeroSubtraido--) {
   // multiplica o resultado pelo número atual do loop
    resultado = resultado * numeroSubtraido 
  
  }
 
  // retorna o resultado final do fatorial
  return resultado
 
}
 
// exportação da função
module.exports = {
  calcularFatorial
}
 