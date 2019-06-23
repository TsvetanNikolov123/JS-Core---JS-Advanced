function lockedProfile() {
    let profileDivs = document.querySelectorAll('.profile');

    for (const divElement of profileDivs) {
        let hiddenDivElement = divElement.getElementsByTagName('div')[0];
        let radioElements = divElement.getElementsByTagName('input');
        let currentButtonElement = divElement.getElementsByTagName('button')[0];

        currentButtonElement.addEventListener('click', (f) => {
            let buttonText = currentButtonElement.textContent;
            if (radioElements[1].checked) {
                if (buttonText === 'Show more'){

                    hiddenDivElement.style.display = 'block';
                    currentButtonElement.textContent = 'Hide it';
                } else {
                    hiddenDivElement.style.display = 'none';
                    currentButtonElement.textContent = 'Show more';
                }
            }
        });
    }
}