//Requisito 1
const header = document.createElement('header');
header.setAttribute('id', 'header');
document.body.appendChild(header);

const h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
h1.innerText = 'Minha Lista de Tarefas';
header.appendChild(h1);

//Requisito 2
const main = document.createElement('main');
main.setAttribute('id', 'main');
document.body.appendChild(main);

const paragraph = document.createElement('p');
paragraph.setAttribute('id', 'funcionamento');
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
main.appendChild(paragraph);

//Requisito 3
const input = document.createElement('input');
input.setAttribute('id', 'texto-tarefa');
main.appendChild(input);

//Requisito 4
const listSection = document.createElement('section');
listSection.setAttribute('id', 'listSection');
main.appendChild(listSection);

const list = document.createElement('ol');
list.setAttribute('id', 'lista-tarefas');
listSection.appendChild(list);