const header = document.createElement('header');
header.setAttribute('id', 'title');
document.body.appendChild(header);
header.innerText = 'Minha Lista de Tarefas';

const main = document.createElement('main');
main.setAttribute('id', 'main');
document.body.appendChild(main);

const funcionamento = document.createElement('p');
funcionamento.setAttribute('id', 'funcionamento');
document.main.appendChild(funcionamento);
funcionamento.innerText = 'Clique duas vezes em um item para marcá-lo como completo';