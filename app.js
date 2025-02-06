'use strict'

const categorias = [
    {nome:'celulares', icon: 'iphone.png', cor: 'red'},
    {nome: 'informatica', icon: 'pc.png', cor: 'white'},
    {nome: 'games', icon: 'controle.png', cor: 'purple'},
    {nome: 'moveis', icon: 'sofa.png', cor: 'purple'}
    
]

function criarmenu(categoria) {
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')


    novaImagem.src = `./img/${celular.png}`
     novoSpan.textContent = categoria.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover:${categoria.cor}`

    lista.appendChild(novoItem)

}
categorias.forEach(criarmenu)
