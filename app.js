'use strict';

const categorias = [
    { nome: 'Cuidados com o Cabelo', icon: 'cabelos.png', cor: 'violet' },
    { nome: 'Cuidados com a Pele', icon: 'pele1.png', cor: 'lightblue' },
    { nome: 'Cuidados com as Unhas', icon: 'unhas.png', cor: 'pink' },
    { nome: 'Perfumaria', icon: 'perfume.png', cor: 'tomato' }
];

function criarMenu(categoria) {
    const lista = document.getElementById('menu');
    
    const novoItem = document.createElement('li');
    const novaImagem = document.createElement('img');
    const novoSpan = document.createElement('span');

    novaImagem.src = `./img/${categoria.icon}`;
    novoSpan.textContent = categoria.nome;

    novoItem.appendChild(novaImagem);
    novoItem.appendChild(novoSpan);
    novoItem.style = `--cor-hover:${categoria.cor}`;

    lista.appendChild(novoItem);
}

categorias.forEach(criarMenu);

const produtos = [
    {
        nome: "Wella Professionals",
        details: "Kit Oil Reflections Light (4 Produtos).",
        img: "./img/wella.webp",
        valor: "R$ 481,60 9x de R$ 53,51"
    },
    {
        nome: "ISDIN",
        details: "Kit Acniben Rotina de Skincare (4 Produtos).",
        img: "./img/skincare.webp",
        valor: "R$ 391,60"
    },
    {
        nome: "Anita",
        details: "Kit 4 Tratamentos Fortalecedor de Unhas Esmaltes.",
        img: "./img/anita.unha.webp",
        valor: "R$ 33,40"
    },
    {
        nome: "O.U.I",
        details: "Conjunto Madeleine 862 Feminino - Eau de Parfum 75ml + Creme Hidratante Desodorante Corporal 200g.",
        img: "./img/oui.1.webp",
        valor: "R$ 507,90 10x de R$ 50,79"
    }
];

function criarCards() {
    const container = document.querySelector('main');

    // Criando um único wrapper para os cards
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    produtos.forEach(produto => {
        const card = document.createElement('figure');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${produto.img}" alt="${produto.nome}">
            <figcaption>
                <h2>${produto.nome}</h2>
                <div class="details">
                    <p>${produto.details}</p>
                    <h3>${produto.valor}</h3>
                </div>
                <button class="compre">COMPRE</button>
            </figcaption>
        `;

        wrapper.appendChild(card);
    });

    container.innerHTML = ''; // Evita duplicação limpando o conteúdo antes de adicionar os cards
    container.appendChild(wrapper);
}

criarCards();