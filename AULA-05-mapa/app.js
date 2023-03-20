'use strict'

const mapa = document.querySelector('#map');
const sigla = document.querySelector('#sigla');

// Esta função esta clicando em alguma parte do mapa e gerando as informções no console
const getEstado = ( {target} ) =>{
   const estado = target.id.replace('BR-', '')
    sigla.innerHTML = estado
   console.log(estado);
   
};

mapa.addEventListener('click', getEstado);



