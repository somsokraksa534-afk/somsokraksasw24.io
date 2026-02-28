var result = document.getElementById("result");
var intervalId = null;
var isRunnig = false;

function generateNumber() {
    if (!isRunnig) {
        intervalId = setInterval(() => {
            for (let i = 1; i <= 5; i++) {
                var num = Math.floor(Math.random() * 100) + 1;
                document.getElementById("n" + i).innerHTML = num; // innerText kr ban innerHTML kr ban
            }
        }, 80);
        document.getElementById("btn1").innerHTML = "Stop";
        isRunnig = true;
    } else {
        //stop loop
        clearInterval(intervalId);
        document.getElementById("btn1").innerHTML = "Start";
        isRunnig = false;
    }
}