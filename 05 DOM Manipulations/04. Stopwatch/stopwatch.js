function stopwatch() {
    let startButton = document.getElementById('startBtn');
    startButton.addEventListener('click', timer);

    let stopButton = document.getElementById('stopBtn');
    stopButton.addEventListener('click', timer);

    let sec = 1;
    let funcInterval = null;

    function timer(event) {
        if (event.target.id === 'startBtn') {
            document.getElementById('time').textContent = '00:00';
            startButton.disabled = true;
            stopButton.disabled = false;

            funcInterval = setInterval(() => {
                let minutes = Math.floor(sec / 60);
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                let seconds = sec % 60;
                if (seconds < 10) {
                    seconds = '0' + seconds;
                }
                document.getElementById('time').innerHTML = minutes + ":" + seconds;
                sec++;
            }, 1000);
        } else {
            startButton.disabled = false;
            stopButton.disabled = true;
            clearInterval(funcInterval);
            sec = 0;
            // document.getElementById('time').textContent = '00:00';
        }
    }
}