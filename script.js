window.onload = function () {
    var  tens= 0;
    var seconds = 0;
    var minutes = 0;
    var hour = 0;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendMinuts = document.getElementById("minutes")
    var appendTime = document.getElementById("hour")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick = function () {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }


    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
        hour = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinuts.innerHTML = minutes;
        appendTime.innerHTML = hour;
    }



    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds === 60) {
            minutes++
            seconds = "00"
            appendMinuts.innerHTML = "0" + minutes
            appendSeconds.innerHTML = "0" + 0
        }
        if (minutes === 60) {
            hour++
            minutes = "00"
            seconds="00"
            tens="00"
            appendTime.innerHTML="0" + hour
            appendMinuts.innerHTML="0" + 0
            appendSeconds.innerHTML="0" + 0

        }

}
}