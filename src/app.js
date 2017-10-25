import { createStore } from 'redux';
import list from '../lib/list';
import css from './css/style.css';

const store = createStore(list);
var getAddButton = document.querySelector('button');
var getListItem = document.querySelector('.listItem');

const render = function () {
  var ul = document.querySelector('ul');
  var items = store.getState();
  let newList = items.map(function (item) {
    return `<li>${item.text}<span id=${item.id} class="delete">Delete</span></li>`;
  });
  ul.innerHTML = newList.join('');
}

store.subscribe(render);
render();

getAddButton.addEventListener('click', function () {
  handleNewListItem();
});

document.querySelector('ul').addEventListener('click', function (e) {
  var id = parseInt(e.target.id);
  store.dispatch({ type: 'REMOVE', id: id });
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
