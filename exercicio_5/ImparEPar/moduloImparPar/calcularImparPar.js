// função que separa os números pares de um intervalo
function calcularPares(numeroInicial, numeroFinal) {

  // array que guarda os números pares encontrados
  let pares = []

  // loop que percorre todos os números do intervalo
  for (let paresRepeticao = numeroInicial; paresRepeticao <= numeroFinal; paresRepeticao++) {

    // verifica se o número é par (resto da divisão por 2 igual a 0)
    if (paresRepeticao % 2 == 0) {
      // adiciona o número no array de pares
      pares.push(paresRepeticao) 
    }

  }

  // retorna o array com os números pares
  return pares

}

// função que separa os números ímpares de um intervalo
function calcularImpares(numeroInicial, numeroFinal) {

  // array que guarda os números ímpares encontrados
  let impares = []

  // loop que percorre todos os números do intervalo
  for (let imparesRepeticao = numeroInicial; imparesRepeticao <= numeroFinal; imparesRepeticao++) {

    // verifica se o número é ímpar (resto da divisão por 2 diferente de 0)
    if (imparesRepeticao % 2 != 0) {
      // adiciona o número no array de ímpares
      impares.push(imparesRepeticao) 
    }

  }

  // retorna o array com os números ímpares
  return impares

}

// função que exibe a lista de pares no console
function exibirPares(pares) {

  console.log('\nLista de numeros Pares:')

  // loop que percorre o array e imprime cada número par
  for (let paresTotaL = 0; paresTotaL < pares.length; paresTotaL++) {
    console.log(pares[paresTotaL])
  }

  console.log('Quantidade de numeros pares encontrados: ' + pares.length)

}

// função que exibe a lista de ímpares no console
function exibirImpares(impares) {

  console.log('\nLista de numeros Impares:')

  // loop que percorre o array e imprime cada número ímpar
  for (let imparesTotal = 0; imparesTotal < impares.length; imparesTotal++) {
    console.log(impares[imparesTotal])
  }

  console.log('Quantidade de numeros impares encontrados: ' + impares.length)

}

// exporta as funções 
module.exports = {
  calcularPares,
  calcularImpares,
  exibirPares,
  exibirImpares
}

