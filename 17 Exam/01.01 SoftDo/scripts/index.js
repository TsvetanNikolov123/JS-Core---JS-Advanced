function mySolution() {
    let sendBtn = document.querySelector('#inputSection button');
    let textArea = document.querySelector('#inputSection textarea');
    let inputUserName = document.querySelector('#inputSection input');
    let pendingContainer = document.querySelector('#pendingQuestions');
    let button = document.createElement('button');
    let openContainer = document.querySelector('#openQuestions');

    sendBtn.addEventListener('click', () => {
        let div = document.createElement('div');
        div.classList.add('pendingQuestion');
        let image = document.createElement('img');

        image.src = './images/user.png';
        image.setAttribute("width", "32");
        image.setAttribute("height", "32");

        let span = document.createElement('span');
        let username = inputUserName.value;

        if (!username) {
            span.textContent = 'Anonymous';
        } else {
            span.textContent = username;
        }

        let pHolder = document.createElement('p');
        pHolder.textContent = textArea.value;
        let actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');
        let archiveBtn = button.cloneNode(true);
        archiveBtn.textContent = 'Archive';
        archiveBtn.classList.add('archive');

        archiveBtn.addEventListener('click', (ev) => {
            let parentDiv = ev.target.parentNode.parentNode;
            pendingContainer.removeChild(parentDiv);
        });

        let openBtn = button.cloneNode(true);
        openBtn.addEventListener('click', (ev) => {
            let parentDiv = ev.target.parentNode.parentNode;
            pendingContainer.removeChild(parentDiv);
            parentDiv.setAttribute('class', 'openQuestion');

            let actionDiv = parentDiv.querySelector('.actions');
            actionDiv.innerHTML = '';
            let replyBtn = button.cloneNode(true);

            replyBtn.classList.add('reply');
            replyBtn.textContent = 'Reply';
            actionDiv.appendChild(replyBtn);

            let replySection = document.createElement('div');
            replySection.classList.add('replySection');
            replySection.style.display = 'none';

            replyBtn.addEventListener('click', (ev) => {
                if (ev.target.textContent === 'Reply') {
                    replySection.style.display = 'block';
                    ev.target.textContent = 'Back';
                } else {
                    replySection.style.display = 'none';
                    ev.target.textContent = 'Reply';
                }
            });

            let replyInput = document.createElement('input');
            replyInput.classList.add('replyInput');
            replyInput.type = 'text';
            replyInput.placeholder = 'Reply to this question here...';

            replySection.appendChild(replyInput);

            let replySendBtn = button.cloneNode(true);

            replySendBtn.classList.add('replyButton');
            replySendBtn.textContent = 'Send';

            replySection.appendChild(replySendBtn);

            let list = document.createElement('ol');
            list.classList.add('reply');
            list.type = '1';

            replySendBtn.addEventListener('click', () => {
                let inputText = replyInput.value;

                if (inputText) {
                    let newLi = document.createElement('li');
                    newLi.textContent = inputText;
                    list.appendChild(newLi);
                }
            });

            replySection.appendChild(list);

            parentDiv.appendChild(replySection);
            openContainer.appendChild(parentDiv);
        });
        openBtn.textContent = 'Open';
        openBtn.classList.add('open');

        actionsDiv.appendChild(archiveBtn);
        actionsDiv.appendChild(openBtn);

        div.appendChild(image);
        div.appendChild(span);
        div.appendChild(pHolder);
        div.appendChild(actionsDiv);
        pendingContainer.appendChild(div);
    });
}