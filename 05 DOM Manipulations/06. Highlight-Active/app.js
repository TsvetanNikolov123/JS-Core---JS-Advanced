function focus() {
    let inputElements = document.getElementsByTagName('input');
    Array.from(inputElements).forEach(i => {
        i.addEventListener('focus', (event) => {
            event.target.parentNode.className = 'focused';
        });

        i.addEventListener('blur', (event) =>{
            event.target.parentNode.removeAttribute('class');
        })
    });
}