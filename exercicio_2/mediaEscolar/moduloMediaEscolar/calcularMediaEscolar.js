/***********************************************************************
  * Objetivo: Aplicação para calcular a media do aluno
  * data: 27/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/
 
// função que recebe as 4 notas e calcula a média
function calcularMedia(nota1, nota2, nota3, nota4) {
 
  // soma todas as notas e divide por 4 para obter a média
  let media = (nota1 + nota2 + nota3 + nota4) / 4
 
  // retorna a média calculada
  return media
 
}
 
// função que calcula a média do exame somando a média anterior com a nota do exame
function calcularMediaExame(media, notaExame) {
 
  // soma a média anterior com a nota do exame e divide por 2
  let mediaExame = (media + notaExame) / 2
 
  // retorna a média do exame
  return mediaExame
 
}
 
// exporta as duas funções para que outros arquivos possam utilizá-las
module.exports = {
  calcularMedia,
  calcularMediaExame
}
 