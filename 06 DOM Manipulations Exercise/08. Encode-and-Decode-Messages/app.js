function encodeAndDecodeMessages() {
    let sendAndEncodeButton = document.getElementsByTagName('button')[0];
    let decodeAndReadItButton = document.getElementsByTagName('button')[1];

    let sendTextArea = document.getElementsByTagName('textarea')[0];
    let decodeTextArea = document.getElementsByTagName('textarea')[1];

    sendAndEncodeButton.addEventListener('click', function () {
        let inputInfo = sendTextArea.value;
        let encodedMessage = '';

        for (let i = 0; i < inputInfo.length; i++) {
            encodedMessage += String.fromCharCode(inputInfo.charCodeAt(i) + 1);
        }
        decodeTextArea.value = encodedMessage;
        sendTextArea.value = '';
    });

    decodeAndReadItButton.addEventListener('click', function () {
        let receivedMessage = decodeTextArea.value;
        let decodedMessage = '';

        for (let i = 0; i < receivedMessage.length; i++) {
            decodedMessage += String.fromCharCode(receivedMessage.charCodeAt(i) - 1);
        }

        decodeTextArea.value = decodedMessage;
    })
}