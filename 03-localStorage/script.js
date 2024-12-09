const itemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('shopping-list__button');
const shoppingListContainer = document.getElementById('item-list');

document.addEventListener('DOMContentLoaded', loadItems);

function addItem(e) {
  e.preventDefault();
  const item = itemInput.value.trim();

  if (item) {
    createItem(item);
    saveItemToLocalStorage(item);
    itemInput.value = '';
  }
}

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
  span.textContent = `Remove ${item}`;
  span.classList.add('visually-hidden');

  button.appendChild(i);
  button.appendChild(span);

  liItem.appendChild(button);
  shoppingListContainer.appendChild(liItem);
}

function removeItem(item) {
  if (
    item.target.parentElement.classList.contains('shopping-list__remove-button')
  ) {
    const liItem = item.target.parentElement.parentElement;
    const itemText = liItem.firstChild.textContent.trim(); 
    liItem.remove();
    removeItemFromLocalStorage(itemText);
  }
}


function saveItemToLocalStorage(item) {
  const items = getItemsFromLocalStorage();
  items.push(item);
  localStorage.setItem('shoppingList', JSON.stringify(items));
}

function removeItemFromLocalStorage(item) {
  const items = getItemsFromLocalStorage();
  const updatedItems = items.filter((i) => i !== item);
  localStorage.setItem('shoppingList', JSON.stringify(updatedItems));
}

function getItemsFromLocalStorage() {
  return JSON.parse(localStorage.getItem('shoppingList')) || [];
}

function loadItems() {
  const items = getItemsFromLocalStorage();
  items.forEach((item) => createItem(item));
}

addItemButton.addEventListener('click', addItem);
shoppingListContainer.addEventListener('click', removeItem);
