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

//Requisito 9
function lineThrough(event) {
    const e = event.target;
    if (e.classList.contains('completed') === false) {
        e.classList.add('completed');
    } else {
        e.classList.remove('completed');
    }
}
  
list.addEventListener('dblclick', lineThrough);

//Requisito 10
// let li = document.getElementsByClassName('itens');  

// Apaga o primeiro da lista
// eraseButton.addEventListener('click', function () {
//    for (let i = 0; i < li.length; i +=1) {
//        li[i].remove();
//    }
// });

const footer = document.createElement('footer');
footer.setAttribute('id', 'footer');
document.body.appendChild(footer);

const eraseButton = document.createElement('button');
eraseButton.setAttribute('id', 'apaga-tudo');
eraseButton.innerText = 'Apagar Tudo';
footer.appendChild(eraseButton);

function eraseList() {
    const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i += 1) {
      li[i].parentNode.removeChild(li[i]);
    }
}
  
eraseButton.addEventListener('click', eraseList);
//Alguns trechos foram retirado do código de Geovani Moura = https://github.com/tryber/sd-019-c-project-todo-list/pull/47/files

//Requisito 11
const finishButton = document.createElement('button');
finishButton.setAttribute('id', 'remover-finalizados');
finishButton.innerText = "Remover Finalizadas";
footer.appendChild(finishButton);

function eraseFinished() {
    const finished = document.querySelectorAll('.completed');
    for (let i = 0; i < finished.length; i += 1) {
      finished[i].parentNode.removeChild(finished[i]);
    }
}

finishButton.addEventListener('click', eraseFinished);

//Bonus 12
const saveButton = document.createElement('button');
saveButton.setAttribute('id', 'salvar-tarefas');
saveButton.innerText = 'Salvar Tarefas';
footer.appendChild(saveButton);

saveButton.addEventListener('click',function () {
  const saveList = document.querySelector('ol').innerHTML;
  localStorage.setItem('savedList', saveList);
});

list.value = localStorage.getItem('savedList');


if (localStorage.getItem('savedList') !== null) {
  const saveList = localStorage.getItem('savedList');
  document.querySelector('ol').innerHTML = saveList;
}
//Alguns trechos foram retirado do código de Geovani Moura = https://github.com/tryber/sd-019-c-project-todo-list/pull/47/files

//Bonus 13
const upButton = document.createElement('button');
upButton.setAttribute('id', 'mover-cima');
upButton.innerText = 'Up';
footer.appendChild(upButton);

function goUp () {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem !== null && selectedItem !== selectedItem.parentNode.firstElementChild) {
    const previous = selectedItem.previousElementSibling.innerText;
    //Se usar a const 'previous' aqui a funcao não funciona, por isso tem de ser selectedItem.previousElementSibling.innerText
    selectedItem.previousElementSibling.innerText = selectedItem.innerText;
    selectedItem.innerText = previous;
    if (selectedItem.previousElementSibling.classList.contains('selected') === false) {
      selectedItem.previousElementSibling.classList.add('selected');
      selectedItem.classList.remove('selected')
    }
  }
}

upButton.addEventListener('click', goUp);

const downButton = document.createElement('button');
downButton.setAttribute('id', 'mover-baixo');
downButton.innerText = 'Down';
footer.appendChild(downButton);

function goDown () {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem !== null && selectedItem !== selectedItem.parentNode.lastElementChild) {
    const next = selectedItem.nextElementSibling.innerText;
    selectedItem.nextElementSibling.innerText = selectedItem.innerText;
    selectedItem.innerText = next;
    if (selectedItem.nextElementSibling.classList.contains('selected') === false) {
      selectedItem.nextElementSibling.classList.add('selected');
      selectedItem.classList.remove('selected')
    }
  }
}

downButton.addEventListener('click', goDown);
//Trecho retirado do código de Geovani Moura = https://github.com/tryber/sd-019-c-project-todo-list/pull/47/files

//Bonus 14
const removeSelectedButton = document.createElement('button');
removeSelectedButton.setAttribute('id', 'remover-selecionado');
removeSelectedButton.innerText = 'Remover Selecionado';
footer.appendChild(removeSelectedButton);

removeSelectedButton.addEventListener('click', function () {
  const removeItem = document.querySelector('.selected');
  removeItem.parentNode.removeChild(removeItem);
});