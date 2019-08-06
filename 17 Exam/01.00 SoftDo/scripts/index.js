function mySolution() {
    const sendButton = document.querySelector('button');
    sendButton.addEventListener('click', getTextAndSender);

    function getTextAndSender() {
        const inputMessageAreaText = document.querySelector('#inputSection textarea').value;
        const senderName = document.querySelector('#inputSection input').value || 'Anonymous';
        if (!inputMessageAreaText) {
            return;
        }
        const mainElement = createHtmlElement('div', 'pendingQuestion');
        let element = `<img src="./images/user.png" width="32" height="32" /><span>${senderName}</span><p>${inputMessageAreaText}</p><div class="actions"><button class="archive">Archive</button><button class="open">Open</button></div>`;

        mainElement.innerHTML = element;
        document.querySelector('#inputSection textarea').value = '';
        document.querySelector('#inputSection input').value = '';
        document.querySelector('#pendingQuestions').appendChild(mainElement);
        mainElement.querySelector('.open').addEventListener('click', moveToOpenQuestions);
        mainElement.querySelector('.archive').addEventListener('click', () => mainElement.remove());
    }

    function moveToOpenQuestions(ev) {
        const parentDiv = ev.target.parentNode.parentNode;
        document.querySelector('#pendingQuestions').removeChild(parentDiv);

        parentDiv.setAttribute('class', 'openQuestion');
        parentDiv.querySelector('.actions').innerHTML = '';
        parentDiv.querySelector('.actions')
            .appendChild(createHtmlElement('button', 'reply', false, false, false, false, 'Reply'));

        const hiddenDivReplay = createHtmlElement('div', 'replySection');
        hiddenDivReplay.style.display = 'none';
        hiddenDivReplay.innerHTML = `<input class="replyInput" type="text" placeholder="Reply to this question here..."><button class="replyButton">Send</button><ol class="reply" type="1"></ol></div>`;
        parentDiv.appendChild(hiddenDivReplay);

        parentDiv.querySelector('button').addEventListener('click', (ev) => {
            if (ev.target.textContent === 'Reply') {
                hiddenDivReplay.style.display = 'block';
                ev.target.textContent = 'Back';
            } else {
                hiddenDivReplay.style.display = 'none';
                ev.target.textContent = 'Reply';
            }
        });

        hiddenDivReplay.querySelector('.replyButton').addEventListener('click', () => {
            const replyText = hiddenDivReplay.querySelector('.replyInput').value;

            if (replyText) {
                const liElement = createHtmlElement('li', false, false, false, false, false, replyText);
                hiddenDivReplay.querySelector('.reply')
                    .appendChild(liElement);
            }
        });

        document.querySelector('#openQuestions').appendChild(parentDiv);
    }

    function createHtmlElement(tagName, className, id, type, value, textContext, innerHTML) {
        const element = document.createElement(tagName);

        if (className) {
            element.classList.add(className);
        }

        if (type) {
            element.setAttribute(type.name, type.value);
        }

        if (value) {
            element.setAttribute(value.name, value.value);
        }

        if (textContext) {
            element.textContext = textContext;
        }

        if (id) {
            element.setAttribute(id.name, id.value);
        }

        if (innerHTML) {
            element.innerHTML = innerHTML;
        }

        return element;
    }
}


