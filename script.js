let Interval;
let Button = document.querySelector("button");
let timeCounter = document.querySelector("h3");

Button.addEventListener("click", startTimer);

function startTimer() {
    let Duration = 60;
    Interval = setInterval(updateTimer, 1000);
Button.style.display = "none";
    function updateTimer() {
        let Minutes = Math.floor(Duration / 60);
        let Seconds = Duration % 60;
        let Timer = `${Minutes.toString().padStart(2, '0')}:${Seconds.toString().padStart(2, '0')}`;
        timeCounter.innerHTML = Timer;

        if (Duration > 0) {
            Duration--;
        } else {
            timeCounter.innerHTML = "Time's Up";
           
            clearInterval(Interval);
        }
    }

    // Call updateTimer immediately to set the initial display
    updateTimer();
}
