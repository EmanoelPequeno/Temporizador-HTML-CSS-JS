window.addEventListener("load", () => {

    let sec = 10;
    const countDiv = document.getElementById("timer");

    const secPass = () => {

        let min = Math.floor(sec / 60);
        let secRem = sec % 60;

        if (secRem < 10) {
            secRem = "0" + secRem;
        }
        if (min < 10) {
            min = "0" + min;
        }

        countDiv.innerHTML = min + ":" + secRem;

        if (sec > 0) {
            sec = sec - 1;
        }
        else {
            countDiv.innerHTML = "AGORA!";
        }
    };

    const countDown = setInterval(() => secPass(), 1000);
});