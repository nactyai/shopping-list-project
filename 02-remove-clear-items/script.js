const itemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('shopping-list__button');
const shoppingListContainer = document.getElementById('item-list');

// const form = document.getElementById('item-form');

function addItem(e) {

  e.preventDefault();
  createItem(itemInput.value);

  itemInput.value = '';
}

addItemButton.addEventListener('click', addItem);


function createItem(item) {
  const liItem = document.createElement('li');
  liItem.textContent = item;
  liItem.classList.add('shopping-list__item');

  const button = document.createElement('button');
  button.classList.add('shopping-list__remove-button');

  const i = document.createElement('i');
  i.classList.add('fa-solid', 'fa-xmark');
  i.setAttribute('aria-hidden', 'true');

  const span = document.createElement('span');
  span.textContent = `Remove ${item.value}`;
  span.classList.add('visually-hidden');

  button.appendChild(i);
  button.appendChild(span);

  liItem.appendChild(button);

  shoppingListContainer.appendChild(liItem);
}


function removeItem(item) {
  if (item.target.parentElement.classList.contains('shopping-list__remove-button')) {
    item.target.parentElement.parentElement.remove();
  }
}

shoppingListContainer.addEventListener('click', removeItem);
