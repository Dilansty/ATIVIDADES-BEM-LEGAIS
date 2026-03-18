/***********************************************************************
  * Objetivo: Aplicação para calcular a tabuada
  * data: 05/03/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/
 
// função que recebe os 4 valores e calcula a tabuada
function calcularTabuada(tabuadaInicial, tabuadaFinal, multiplicadorInicial, multiplicadorFinal) {
 
  // loop que percorre cada tabuada do inicial até o final
  for (let tabuada = tabuadaInicial; tabuada <= tabuadaFinal; tabuada++) {
 
    // exibe o cabeçalho de cada tabuada
    console.log('\nTabuada do [' + tabuada + ']')
 
    // loop que percorre o multiplicador do inicial até o final
    for (let multiplicador = multiplicadorInicial; multiplicador <= multiplicadorFinal; multiplicador++) {
 
      // calcula o resultado da multiplicação
      let resultado = tabuada * multiplicador
 
      // exibe a linha da tabuada
      console.log(tabuada + ' x ' + multiplicador + ' = ' + resultado)
 
    } // fim do loop do multiplicador
 
  } // fim da repetição da tabuada
 
}
 
// exporta a função para que outros arquivos possam utilizá-la
module.exports = {
  calcularTabuada
}
 