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

const creationSection = document.createElement('section');
creationSection.setAttribute('id', 'creation');
main.appendChild(creationSection);

const paragraph = document.createElement('p');
paragraph.setAttribute('id', 'funcionamento');
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
creationSection.appendChild(paragraph);

//Requisito 3
const input = document.createElement('input');
input.setAttribute('id', 'texto-tarefa');
creationSection.appendChild(input);

//Requisito 4
const listSection = document.createElement('section');
listSection.setAttribute('id', 'list');
main.appendChild(listSection);

const list = document.createElement('ol');
list.setAttribute('id', 'lista-tarefas');
listSection.appendChild(list);

//Requisito 5
const button = document.createElement('button');
button.setAttribute('id', 'criar-tarefa');
button.innerText = 'Adicionar';
creationSection.appendChild(button);

button.addEventListener('click', function () {
    let item = document.createElement('li');
    item.setAttribute('class', 'itens');
    item.innerText = input.value;
    list.appendChild(item);
    input.value = '';
});

//Requisito 6
//Já é feito automaticamente

//Requisito 7
function linethrough(event) {
  for (let i = 0; i < document.querySelectorAll('.selected').length; i += 1) {
    document.querySelectorAll('.selected')[i].classList.remove('selected');
  }
  const e = event.target;
  e.classList.add('selected');
}

list.addEventListener('click', linethrough);
//Trecho retirado do código de Geovani Moura = https://github.com/tryber/sd-019-c-project-todo-list/pull/47/files

//Requisito 8
//Já é feito automaticamente
function lineThrough(event) {
    const e = event.target;
    if (e.classList.contains('completed') === false) {
        e.classList.add('completed');
    } else {
        e.classList.remove('completed');
    }
}
  
list.addEventListener('dblclick', lineThrough);