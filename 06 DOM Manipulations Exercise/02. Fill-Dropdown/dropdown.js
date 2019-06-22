function addItem() {
    let textItem = document.querySelector('#newItemText').value;
    let valueItem = document.querySelector('#newItemValue').value;
    let dropDownMenu = document.querySelector('#menu');

    let newOptionElement = document.createElement('option');
    newOptionElement.textContent = textItem;
    newOptionElement.value = valueItem;

    dropDownMenu.appendChild(newOptionElement);

    document.querySelector('#newItemText').value = '';
    document.querySelector('#newItemValue').value = '';
}