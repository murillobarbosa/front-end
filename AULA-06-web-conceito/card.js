'use strict'
class card extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' });
        this.nome = 'Nome Aluno'
        this.cor = '#800000'
    }
    static get observedAttributes() {
        return ['nome', 'foto', 'cor']
    }
    attributeChangedCallback(nameAttr, oldValue, newValue){
        this[nameAttr] = newValue
    }
    connectedCallback() {
        this.shadow.appendChild(this.component())
        this.shadow.appendChild(this.styles())
    }
    styles() {
        const css = document.createElement('style')
        css.textContent = `
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            .card{
                width: 200px;
                height: 300px;
                display: grid;
                grid-templates-rows: 20% 60% 20%;
                place-items: center;
                background: rgb(2,0,36);
                background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,0.9808298319327731) 82%, rgba(0,0,0,1) 97%, rgba(99,15,95,1) 100%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%);
                border-radius: 20%;
                transition: all 400ms ease-in-out;
                cursor: pointer;
                background-color: ${this.cor};
            }
            .card:hover {
                transform: scale(1.1);
                color: black;
                background: black;
            }
            .card__text{
                color: #5d5c5c;
                font-size: 1.5em;
                font-weight: 600;
            }
            .card__image{
                height: 100px;
                width: 100px;
                border-radius: 50%;
                background-color: #403f3f;
                background-image: url(${this.foto});
                background-size: cover;

            }
        `
        return css
    }
    component() {
        const card = document.createElement('div')
        card.classList.add('card')
        const nome = document.createElement('div')
        nome.classList.add('card__text')
        nome.textContent = this.nome
        const imagem = document.createElement('div')
        imagem.classList.add('card__image')
        const turma = document.createElement('div')
        turma.classList.add('card__text')
        turma.textContent = 'DS2M'
        card.append(nome, imagem, turma)

        return card
    }
}

customElements.define('card-murillo', card)