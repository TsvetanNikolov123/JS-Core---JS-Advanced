function dart() {
    let isGameStopped = false;

    const PLAYERS = {
        HOME: 'Home',
        AWAY: 'Away'
    };

    const scores = {
        [PLAYERS.HOME]: 0,
        [PLAYERS.AWAY]: 0
    };

    const points = [3, 5, 7, 11, 13, 15];

    let playerInTurn = PLAYERS.HOME;

    const updatePlayersStyles = () => {
        const turnsElement = document.getElementById('turns');
        const homePlayer = turnsElement.firstElementChild;
        const awayPlayer = turnsElement.lastElementChild;

        if (playerInTurn === PLAYERS.HOME) {
            // reset
            homePlayer.style.textDecoration = '';
            homePlayer.style.fontWeight = '';
            awayPlayer.style.textDecoration = '';
            awayPlayer.style.fontWeight = '';
        } else {
            homePlayer.style.textDecoration = 'none';
            homePlayer.style.fontWeight = 'normal';
            awayPlayer.style.textDecoration = 'underline';
            awayPlayer.style.fontWeight = 'bold';
        }
    };

    const updatePlayer = () => {
        const playerInTurn = playerInTurn === PLAYERS.HOME
            ? PLAYERS.AWAY
            : PLAYERS.HOME;

        const playerNotInTurn = playerInTurn === PLAYERS.HOME
            ? PLAYERS.AWAY
            : PLAYERS.HOME;

        updatePlayersStyles();
    };


    const updatePlayersScores = () => {
        Object.values(PLAYERS)
            .forEach(player => {
                const score = scores[player];
                const playerElement = document.getElementById(player);

                playerElement.firstElementChild.innerHTML = score;

                if (score >= 20 && score < 30) {
                    playerElement.lastElementChild.style.background = 'yellow';
                } else if (score >= 100) {
                    isGameStopped = true;
                    playerElement.lastElementChild.style.background = 'green';
                }

                //todo for other colors
            });
    };

    const handleScore = function (score) {
        return (ev) => {
            if (isGameStopped) {
                return;
            }
            scores[playerInTurn] += score;
            updatePlayer();
            updatePlayersScores();
            ev.stopPropagation();
        };
    };

    [...document.querySelectorAll('#playBoard div')]
        .forEach((layer, index) =>
            layer.addEventListener('click', handleScore(points[index]))
        );
}