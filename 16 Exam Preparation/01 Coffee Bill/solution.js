/*      JS Advanced Retake - 18 April 2019
https://judge.softuni.bg/Contests/Practice/Index/1624#0 */

function addProduct() {
    const product = document.getElementsByTagName('input')[0].value;
    const price = document.getElementsByTagName('input')[1].value;
    const table = document.getElementById('product-list');

    if (product && Number(price) > 0) {
        const totalSum = document
            .querySelector('tfoot tr td:last-child');
        // .querySelector('tfoot');
        // .getElementsByTagName('tr')[0]
        // .getElementsByTagName('td')[1];

        const tr = document.createElement('tr');
        const tdProduct = document.createElement('td');
        const tdPrice = document.createElement('td');

        tdProduct.textContent = product;
        tdPrice.textContent = price;

        tr.appendChild(tdProduct);
        tr.appendChild(tdPrice);

        table.appendChild(tr);

        let convertSum = Number(totalSum.textContent);
        convertSum += Number(price);

        totalSum.textContent = convertSum;
    }

    document.getElementsByTagName('input')[0].value = '';
    document.getElementsByTagName('input')[1].value = '';
}