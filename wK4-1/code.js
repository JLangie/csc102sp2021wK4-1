//Start function for the start button
function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
//stop() for stop button
function stop() {
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

//This is a more efficient countDown timer using loops and change order request.
function countDownV3() {
    var count = 10;

    for (var i = 1; i <= 11; i++) {

        if (i <= 6) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = count;
                count--;
            }, 1000 * i);
        } else if (i == 11) {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Blast Off!";
                count--;
            }, 1000 * i);
        } else {
            setTimeout(function () {
                document.getElementById("countDownTimer").innerHTML = "Warning Less than ½ way to launch, time left = " + count;
                count--;
            }, 1000 * i);
        }

    }


}
//This is a more efficient countDown timer using loops.
function countDownV2() {
    var count = 10;

    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = count;
            count--;
        }, 1000 * i);
    }

    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!";
        count = count--;
    }, 11000);
}



// countDown timer from 10 to 1, then print Blast Off!!
function countDown() {
    var count = 10;
    // countDown starts at 10
    document.getElementById("countDownTimer").innerHTML = count;
    count = count - 1
    // 9
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 1000);
    //8
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 2000);
    //7
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 3000);
    //6
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 4000);
    //5
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 5000);
    //4
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 6000);
    //3
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 7000);
    //2
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 8000);
    //1
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = count;
        count = count - 1;
    }, 9000);
    //Blast Off!!!
    setTimeout(function () {
        document.getElementById("countDownTimer").innerHTML = "Blast Off!!!";
        count = count - 1;
    }, 10000);
}
//play craps function.
function playCraps() {
    //Creates die1.
    var die1;
    //Creates die2.
    var die2;
    //Creates sum for adding die1 + die2.
    var sum;
    //Random number generator from 1 - 6, rounded to nearest whole number for die1.
    die1 = Math.ceil(Math.random() * 6);
    //Random number generator from 1 - 6, rounded to nearest whole number for die2.
    die2 = Math.ceil(Math.random() * 6);
    //Defines sum as die1 + die2.
    sum = die1 + die2;
    //Display results die1.
    document.getElementById("die1Res").innerHTML = die1;
    //Display results die2.
    document.getElementById("die2Res").innerHTML = die2;
    //Display sum of die1 + die2.
    document.getElementById("sumRes").innerHTML = sum;
//Parameters and conditions determing results of craps round. Lose, Win, Push.
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsReults").innerHTML = "Craps! You Lose!!";
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsReults").innerHTML = "Doubles, You WIN!!";
    } else {
        document.getElementById("crapsReults").innerHTML = "Push, Please roll again.";
    }

}
//Sandbox function for testing code.
function runSandbox() {
    var count = 10;
//Countdown timer 10 - 1. "Blast Off" displays when timer reaches 0.
    for (var i = 1; i <= 10; i++) {
        setTimeout(function () {
            document.getElementById("sandboxDisplay").innerHTML = count;
            count--;
        }, 1000 * i);
    }

    setTimeout(function () {
        document.getElementById("sandboxDisplay").innerHTML = "Blast Off!";
        count = count--;
    }, 11000);

}