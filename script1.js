let timeLeft = 1500; // 25 minutes in seconds
let timer;

function startTimer() {
    timer = setInterval(function () {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("timer").innerText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            alert("Time's up! Take a break.");
        }
    }, 1000);
}
