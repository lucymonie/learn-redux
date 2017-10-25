import { createStore } from 'redux';
import list from '../lib/list';
import css from './css/style.css';

const store = createStore(list);
var getAddButton = document.querySelector('button');
var getListItem = document.querySelector('.listItem');

const render = function () {
  var getUl = document.querySelector('ul');
  var items = store.getState();
  getUl.innerHTML = items.map(function (item) {
    let html = `${item.text}<i id=${item.id} class="fa fa-times delete" aria-hidden="true"></i><i id=${item.id} class="fa fa-check toggle" aria-hidden="true"></i></li>`;
    return item.completed === false
      ? `<li>${html}`
      : `<li style="text-decoration:line-through;">${html}`
  }).join('');
}

store.subscribe(render);
render();

getAddButton.addEventListener('click', function () {
  handleNewListItem();
});

document.querySelector('ul').addEventListener('click', function (e) {
  var id = parseInt(e.target.id);
  if (e.target.className.includes('delete')) {
    store.dispatch({ type: 'REMOVE', id: id });
  } else if (e.target.className.includes('toggle')) {
    store.dispatch({ type: 'TOGGLE', id: id });
  }
})

document.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      handleNewListItem();
    }
});

function handleNewListItem () {
  var item = getListItem.value;
  if (item.length) {
    getListItem.value = '';
    store.dispatch({ text: item, type:'ADD', id: store.getState().length })
  }
}
