/***********************************************************************
  * Objetivo: Aplicação para obter os dados do aluno
  * data: 27/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/


 
// importa o arquivo que contém as funções de calcular a média
const calcularMedia = require('./calcularMediaEscolar')
 
// importa o módulo nativo do Node.js para leitura de dados no terminal
const readline = require('readline')
 
// função responsável por obter e tratar os dados do aluno
function obterDados() {

  let media
  let alune
  let professore
  let statusExame
  let mediaExame
 
  // cria a interface de leitura conectando a entrada (teclado) e saída (console)
  const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
 
  // solicita o nome do aluno
  entradaDeDados.question('Digite o nome do aluno: ', function (nomeAluno) {
 
    // condicional: verifica se o nome do aluno está vazio
    if (nomeAluno == '') {
      console.log('O "nome do aluno" nao pode ser vazio')
      entradaDeDados.close()
      return
    }
 
    // solicita o sexo do aluno
    entradaDeDados.question('Digite o sexo do aluno (M/F): ', function (sexoAluno) {
 
      // condicional: verifica se o sexo do aluno está vazio
      if (sexoAluno == '') {
        console.log('O campo "sexo do aluno" nao pode ser vazio')
        entradaDeDados.close()
        return
      }
 
      // solicita o nome do professor
      entradaDeDados.question('Digite o nome do professor: ', function (nomeProfessor) {
 
        // condicional: verifica se o nome do professor está vazio
        if (nomeProfessor == '') {
          console.log('O campo "nome do professor" nao pode ser vazio')
          entradaDeDados.close()
          return
        }
 
        // solicita o sexo do professor
        entradaDeDados.question('Digite o sexo do professor (M/F): ', function (sexoProfessor) {
 
          // Condicional: verifica se o sexo do professor está vazio
          if (sexoProfessor == '') {
            console.log('O campo "sexo do professor" nao pode ser vazio')
            entradaDeDados.close()
            return
          }
 
          // solicita o nome do curso
          entradaDeDados.question('Digite o nome do curso: ', function (nomeCurso) {
 
            // Condicional: verifica se o nome do curso está vazio
            if (nomeCurso == '') {
              console.log('O campo "nome do curso" nao pode ser vazio')
              entradaDeDados.close()
              return
            }
 
            // solicita o nome da disciplina
            entradaDeDados.question('Digite o nome da disciplina: ', function (nomeDisciplina) {
 
              // Condicional: verifica se o nome da disciplina está vazio
              if (nomeDisciplina == '') {
                console.log('O campo "nome da disciplina" nao pode ser vazio')
                entradaDeDados.close()
                return
              }
 
              // solicita a nota 1
              entradaDeDados.question('Digite a nota 1 (0 a 100): ', function (entradaNota1) {
                // Garante que a nota 1 não seja uma String
                let nota1 = Number(entradaNota1)

                // Condicional: verifica se a nota 1 está vazia
                if (entradaNota1 == '') {
                  console.log('O campo "nota 1" nao pode ser vazia')
                  entradaDeDados.close()
                  return
                }
 
                // Condicional: verifica se a nota 1 é um número
                if (isNaN(entradaNota1)) {
                  console.log('Digite apenas numeros na nota 1')
                  entradaDeDados.close()
                  return
                }
 
                
 
                // Condicional: nota 1 deve estar entre 0 e 100
                if (nota1 < 0 || nota1 > 100) {
                  console.log('A nota 1 deve estar entre 0 e 100')
                  entradaDeDados.close()
                  return
                }
 
                // solicita a nota 2
                entradaDeDados.question('Digite a nota 2 (0 a 100): ', function (entradaNota2) {                 
                  // Garante que a nota 2 não seja uma String
                  let nota2 = Number(entradaNota2)
 

                  // Condicional: verifica se a nota 2 está vazia
                  if (entradaNota2 == '') {
                    console.log('O campo "nota 2" nao pode ser vazio')
                    entradaDeDados.close()
                    return
                  }
 
                  // Condicional: verifica se a nota 2 é um número
                  else if (isNaN(entradaNota2)) {
                    console.log('Digite apenas numeros na nota 2')
                    entradaDeDados.close()
                    return
                  }
 
                  // Condicional: nota 2 deve estar entre 0 e 100
                  else if (nota2 < 0 || nota2 > 100) {
                    console.log('A nota 2 deve estar entre 0 e 100')
                    entradaDeDados.close()
                    return
                  }
 
                  // solicita a nota 3
                  entradaDeDados.question('Digite a nota 3 (0 a 100): ', function (entradaNota3) {
                     // Garante que a nota 3 não seja uma String
                    let nota3 = Number(entradaNota3)
 
                    // Condicional: verifica se a nota 3 está vazia
                    if (entradaNota3 == '') {
                      console.log('O campo "nota 3" nao pode ser vazio')
                      entradaDeDados.close()
                      return
                    }
 
                    // Condicional: verifica se a nota 3 é um número
                    else if (isNaN(entradaNota3)) {
                      console.log('Digite apenas numeros na nota 3')
                      entradaDeDados.close()
                      return
                    }
 
                  
                    // Condicional: nota 3 deve estar entre 0 e 100
                    else if (nota3 < 0 || nota3 > 100) {
                      console.log('A nota 3 deve estar entre 0 e 100')
                      entradaDeDados.close()
                      return
                    }
 
                    // solicita a nota 4
                    entradaDeDados.question('Digite a nota 4 (0 a 100): ', function (entradaNota4) {
                      // Garante que a nota 4 não seja uma String
                      let nota4 = Number(entradaNota4)

                      // Condicional: verifica se a nota 4 está vazia
                      if (entradaNota4 == '') {
                        console.log('O campo "nota 4" nao pode ser vazio')
                        entradaDeDados.close()
                        return
                      }
 
                      // Condicional: verifica se a nota 4 é um número
                      else if (isNaN(entradaNota4)) {
                        console.log('Digite apenas numeros na nota 4')
                        entradaDeDados.close()
                        return
                      }
 
                      // Condicional: nota 4 deve estar entre 0 e 100
                     else if (nota4 < 0 || nota4 > 100) {
                        console.log('A nota 4 deve estar entre 0 e 100')
                        entradaDeDados.close()
                        return
                      }
 
                     
                      
                      // calcula a média das 4 notas
                       media = calcularMedia.calcularMedia(nota1, nota2, nota3, nota4)
 
                      // define o tratamento do sexo do aluno para exibição no relatório
                       alune = sexoAluno.toUpperCase() == 'F' ? 'aluna' : 'aluno'
 
                      // define o tratamento do sexo do professor para exibição no relatório
                      professore = sexoProfessor.toUpperCase() == 'F' ? 'professora' : 'professor'
 
                      // verifica se a média está acima de 70 (aprovado)
                      if (media > 70) {
 
                        // exibe o relatório com status aprovado
                        console.log('\n****** Relatorio do aluno ******')
                        console.log('O ' + alune + '  ' + nomeAluno + '  foi aprovado na disciplina  ' + nomeDisciplina + ' .')
                        console.log('Curso: ' + nomeCurso)
                        console.log(professore + ': ' + nomeProfessor)
                        console.log('Notas do ' + alune + ': ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4)
                        console.log('Media Final: ' + media.toFixed(2))
                        console.log('********************************\n')
 
                        entradaDeDados.close()
 
                      // verifica se a média está abaixo de 50 (reprovado)
                      } else if (media < 50) {
 
                        // exibe o relatório com status reprovado
                        console.log('\n****** Relatorio do aluno ******')
                        console.log('O ' + alune + ' [ ' + nomeAluno + ' ] foi [reprovado] na disciplina [ ' + nomeDisciplina + ' ].')
                        console.log('Curso: ' + nomeCurso)
                        console.log(professore  + ': ' + nomeProfessor)
                        console.log('Notas do ' + alune + ': ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4)
                        console.log('Media Final: ' + media.toFixed(2))
                        console.log('********************************\n')
 
                        entradaDeDados.close()

 
                      // se a média estiver entre 50 e 69 o aluno vai para exame
                      } else {
                       console.log('\nMedia entre 50 e 69 - O ' + alune + ' vai para exame!')

 
                        // solicita a nota do exame
                        entradaDeDados.question('Digite a nota do exame (0 a 100): ', function (entradaNotaExame) {
                          // Garante que a variavel não seja uma String
                          let notaExame = Number(entradaNotaExame)

                          // Condicional: verifica se a nota do exame está vazia
                          if (entradaNotaExame == '') {
                            console.log('O campo "nota do exame" nao pode ser vazia')
                            entradaDeDados.close()
                            return
                          }
 
                          // Condicional: verifica se a nota do exame é um número
                          else if (isNaN(entradaNotaExame)) {
                            console.log('Digite apenas numeros na nota do exame')
                            entradaDeDados.close()
                      condicional
                          }
 
                          // Condicional: nota do exame deve estar entre 0 e 100
                          else if (notaExame < 0 || notaExame > 100) {
                            console.log('A nota do exame deve estar entre 0 e 100')
                            entradaDeDados.close()
                            return
                          }
 
                          // calcula a média final do exame
                          mediaExame = calcularMedia.calcularMediaExame(media, notaExame)
 
                          // define o status baseado na média do exame
                          statusExame = mediaExame > 60 ? 'aprovado no exame' : 'reprovado no exame'
 
                          // exibe o relatório com o resultado do exame
                          console.log('\n****** Relatorio do aluno ******')
                          console.log('O ' + alune + '  ' + nomeAluno + '  foi ' + statusExame + ' na disciplina  ' + nomeDisciplina + ' .')
                          console.log('Curso: ' + nomeCurso)
                          console.log(professore  + ': ' + nomeProfessor)
                          console.log('Notas do ' + alune + ': ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + ', ' + notaExame)
                          console.log('Media Final: ' + media.toFixed(2))
                          console.log('Media Final do Exame: ' + mediaExame.toFixed(2))
                          console.log('********************************\n')
 
                          entradaDeDados.close()
 
                        }) // Fecha a entrada de dados nota do exame
 
                      } // fim do else do exame
 
                    }) // Fecha a entrada de dados da nota 4
 
                  }) // Fecha a entrada de dados da nota 3
 
                }) // Fecha a entrada de dados da nota 2
 
              }) // Fecha a entrada de dados da nota 1
 
            }) // Fecha a entrada de dados da disciplina
 
          }) // Fecha a entrada de dados do curso
 
        }) // Fecha a entrada de dados do sexo professor
 
      }) // Fecha a entrada de dados do nome professor
 
    }) // Fecha a entrada de dados do sexo aluno
 
  }) // Fecha a entrada de dados do nome aluno
 
} // fim da função obterDados

 
// exporta a função para que o app.js possa utilizá-la
module.exports = {
  obterDados
}