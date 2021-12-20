const header = document.createElement('header');
header.setAttribute('id', 'header');
document.body.appendChild(header);

const h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
h1.innerText = 'Minha Lista de Tarefas';
header.appendChild(h1);

const main = document.createElement('main');
main.setAttribute('id', 'main');
document.body.appendChild(main);

const funcionamento = document.createElement('p');
funcionamento.setAttribute('id', 'funcionamento');
funcionamento.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
main.appendChild(funcionamento);