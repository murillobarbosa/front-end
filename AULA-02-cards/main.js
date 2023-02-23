'use strict'

const adicionar = document.getElementById('add')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML += '<div class="items"></div>'
// }


const adicionarCard = (aluno, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class="aluno__title">${aluno}</h2> <p class = "nota__title">${nota}</p>`
    container.appendChild(novaDiv)

    if ((nota > 5)) {
        novaDiv.classList.add('aprovado')
        novaDiv.classList.remove('reprovado')
    } else {
        novaDiv.classList.add('reprovado')
        novaDiv.classList.remove('aprovado')
    }
}


const handleClick = () => {
    const nomeAluno = prompt("Digite o nome do aluno")
    const notaAluno = prompt("Digite a nota do aluno")

    if (notaAluno > 10) {
        alert("ERRO")
    } else if (isNaN(notaAluno)) {
        alert("ERRO")

    } else if (notaAluno < 0) {
        alert("ERRO")
    } else




        adicionarCard(nomeAluno, notaAluno)

}

adicionar.addEventListener('click', handleClick)

// SOLID - Responsividade unica
// Funções puras