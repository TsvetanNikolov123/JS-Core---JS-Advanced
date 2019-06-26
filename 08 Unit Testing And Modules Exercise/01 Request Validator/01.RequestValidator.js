function validateRequest(request) {
    const URI_REGEX_PATTERN = /^([\w.]+)$/gm;
    const MESSAGE_REGEX_PATTERN = /^([^<>\\&'"]+)$/gm;

    let validMethod = false;
    let validUrl = false;
    let validVersion = false;
    let validMessage = false;

    if (request.hasOwnProperty('method')) {
        validMethod = methodValidation(request);
        if (!validMethod) {
            printErrorMsg('Method')
        }
    } else {
        printErrorMsg('Method')
    }

    if (request.hasOwnProperty('uri')) {
        validUrl = uriValidation(request);
        if (!validUrl) {
            printErrorMsg('URI')
        }
    } else {
        printErrorMsg('URI')
    }

    if (request.hasOwnProperty('version')) {
        validVersion = versionValidation(request);
        if (!validVersion) {
            printErrorMsg('Version')
        }
    } else {
        printErrorMsg('Version')
    }

    if (request.hasOwnProperty('message')) {
        validMessage = messageValidation(request);
        if (!validMessage) {
            printErrorMsg('Message')
        }
    } else {
        printErrorMsg('Message')
    }

    function messageValidation(request) {
        let validMessage = false;
        if (MESSAGE_REGEX_PATTERN.test(request.message) || request.message === '') {
            validMessage = true;
        }
        return validMessage;
    }

    function versionValidation(request) {
        let validVersion = false;
        if (request.version === 'HTTP/0.9' ||
            request.version === 'HTTP/1.0' ||
            request.version === 'HTTP/1.1' ||
            request.version === 'HTTP/2.0') {

            validVersion = true;
        }
        return validVersion;
    }

    function uriValidation(request) {
        let validUri = false;
        if (request.uri === '*' || URI_REGEX_PATTERN.test(request.uri)) {
            validUri = true;
        }
        return validUri;
    }

    function methodValidation(request) {
        let validMethod = false;
        if (request.method === 'GET' ||
            request.method === 'POST' ||
            request.method === 'DELETE' ||
            request.method === 'CONNECT') {

            validMethod = true;
        }

        return validMethod;
    }

    function printErrorMsg(header) {
        throw new Error(`Invalid request header: Invalid ${header}`)
    }

    if (validMethod && validUrl && validVersion && validMessage) {
        return request;
    }

}

const test0 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

const test1 = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
};

const test2 = {
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
};

console.log(validateRequest(test0));