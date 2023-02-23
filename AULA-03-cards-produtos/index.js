'use strict'

import { produtos } from "./produtos.js"


const criarCard = (produtos) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card__image')
    img.src = `./img/${produtos.image} `

    const titulo = document.createElement('h5')
    titulo.classList.add('card__title')
    titulo.textContent = produtos.name

    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    descricao.textContent = produtos.description

    card.append(img, titulo, descricao)

    return card







}


const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)


}

carregarProdutos()