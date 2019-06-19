let result = (function () {
    const commands = {
        upvote: (object) => object['upvotes'] += 1,
        downvote: (object) => object['downvotes'] += 1,
        score: (object) => {
            "use strict";
            const upVotes = object['upvotes'];
            let downVotes = object['downvotes'];
            const result = [];
            let obfuscationNumber = 0;
            let maxVotes;
            if ((upVotes + downVotes) > 50) {
                maxVotes = Math.max(upVotes, downVotes);
                obfuscationNumber = Math.ceil(0.25 * maxVotes);
            }
            result.push(upVotes + obfuscationNumber);
            result.push(downVotes + obfuscationNumber);
            result.push(upVotes - downVotes);
            const rating = getRating(object);
            result.push(rating);
            return result;
        },
        call: (object, args) => {
            return commands[args](object);
        }
    };
    return commands;

    function getRating(object) {
        const upVotes = object['upvotes'];
        const downVotes = object['downvotes'];
        const totalVotes = upVotes + downVotes;
        const balance = upVotes - downVotes;

        if (totalVotes < 10) {
            return 'new';
        }
        if ((upVotes / totalVotes) > 0.66) {
            return 'hot';
        }
        if ((downVotes / totalVotes <= 0.66) && balance >= 0 && (upVotes > 100 || downVotes > 100)) {
            return 'controversial';
        }
        if (balance < 0 && totalVotes >= 10) {
            return 'unpopular';
        }
        return 'new';
    }
})();

const forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};


result.call(forumPost, 'upvote');
console.log(result.call(forumPost, 'score'));