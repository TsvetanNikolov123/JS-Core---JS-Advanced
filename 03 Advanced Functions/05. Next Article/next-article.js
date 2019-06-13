function getArticleGenerator(input) {
    const div = document.getElementById('content');

    let i = 0;

    function nextArticle() {
        if (i >= input.length) return;
        let html = `<article>
                            <p>
                                ${input[i++]}
                            </p>
                        </article>`;

        div.innerHTML += html;
    }

    return nextArticle;
}