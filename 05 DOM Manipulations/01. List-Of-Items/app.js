function addItem() {
    const inputText = document.getElementById('newItemText').value;
    const ulList = document.getElementById('items');

    const liElement = document.createElement('li');
    liElement.textContent = inputText;
    ulList.appendChild(liElement);
}