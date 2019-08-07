function mySolution() {
    document.getElementsByTagName('button')[0].addEventListener('click', sendBtn);

    function sendBtn() {
        //let inputText = document.getElementById('inputSection').children[0].value;
        //let name = document.getElementById('inputSection').children[1].children[1].value;

        let inputText = document.querySelector('#inputSection textarea').value;
        let name = document.querySelector('#inputSection input').value;


        appendMessageInPending(inputText, name);
        clearFields();
    }

    function appendMessageInPending(text, name){
        let outputSection = document.getElementById('pendingQuestions');

        let div = document.createElement('div');
        div.className = "pendingQuestion";

        let image = document.createElement('img');
        image.src = "./images/user.png";
        image.width = 32;
        image.height = 32;

        let span = document.createElement('span');
        if (name) {
            // todo from innerText to innerHtml
            span.innerHTML = name;
        }else{
            // todo from innerText to innerHtml
            span.innerHTML = "Anonymous";
        }

        let parag = document.createElement('p');
        // todo from innerText to innerHtml
        parag.innerHTML = text;

        let actionsDiv = document.createElement('div');
        actionsDiv.className = "actions";

        let archiveBtn = document.createElement('button');
        archiveBtn.className = "archive";
        archiveBtn.textContent = "Archive";
        archiveBtn.addEventListener('click', archiveConversation);

        let openBtn = document.createElement('button');
        openBtn.className = "open";
        openBtn.textContent = "Open";
        openBtn.addEventListener('click', openConversation);

        actionsDiv.appendChild(archiveBtn);
        actionsDiv.appendChild(openBtn);

        div.appendChild(image);
        div.appendChild(span);
        div.appendChild(parag);
        div.appendChild(actionsDiv);

        outputSection.appendChild(div);
    }

    function archiveConversation(e){
        let itemForRemoval = e.target.parentNode.parentNode;

        let pendingQuestionsList = document.getElementById('pendingQuestions');

        pendingQuestionsList.removeChild(itemForRemoval);
    }

    function openConversation(e){
        let aprovedElement = e.target.parentNode.parentNode;

        aprovedElement.className = "openQuestion";

        let actionsDivRemoval = aprovedElement.children[3];

        aprovedElement.removeChild(actionsDivRemoval);

        let actionsDiv = document.createElement('div');
        actionsDiv.className = "actions";

        let replyBtn = document.createElement('button');
        replyBtn.className = "reply";
        replyBtn.textContent = "Reply";
        replyBtn.addEventListener('click', openReplySection);


        actionsDiv.appendChild(replyBtn);
        aprovedElement.appendChild(actionsDiv);

        document.getElementById('openQuestions').appendChild(aprovedElement);

        createReplyArea(aprovedElement);
    }

    function openReplySection(e){
        if (e.target.textContent === "Reply") {
            e.target.textContent = "Back";
            e.target.parentNode.parentNode.children[4].style.display = "block";
        }else{
            e.target.parentNode.parentNode.children[4].style.display = "none";
            e.target.textContent = "Reply";
        }
    }

    function createReplyArea(parent){
        let replySectionDiv = document.createElement('div');
        replySectionDiv.className = "replySection";
        replySectionDiv.style.display = "none";

        let input = document.createElement('input');
        input.className = "replyInput";
        input.type = "text";
        input.placeholder = "Reply to this question here...";

        let replyBtn = document.createElement('button');
        replyBtn.className = "replyButton";
        replyBtn.textContent = "Send";
        replyBtn.addEventListener('click', appendReplyMessage);

        let olList = document.createElement('ol');
        olList.className = "reply";
        olList.type = 1;

        replySectionDiv.appendChild(input);
        replySectionDiv.appendChild(replyBtn);
        replySectionDiv.appendChild(olList);

        parent.appendChild(replySectionDiv);
    }

    function appendReplyMessage(e){
        let replySection = e.target.parentNode.children;
        let inputText = replySection[0].value;

        let olList = replySection[2];

        let liItem = document.createElement('li');
        liItem.textContent = inputText;

        olList.appendChild(liItem);

        e.target.parentNode.children[0].value = '';
    }

    function clearFields(){
        document.getElementById('inputSection').children[0].value = "";
        document.getElementById('inputSection').children[1].children[1].value = "";
    }
}