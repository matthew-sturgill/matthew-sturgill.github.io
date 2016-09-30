$(function () {

    //declaring randoms variables
    var randomOne = '';
    var randomTwo = '';
    var randomThree = '';
    var guessOne = '';
    var guessTwo = '';
    var guessThree = '';
    var clicks = 0;
    //Random numbers to variable on load.
    $(function (ev) {
        var arr = []
        while (arr.length < 3) {
            var randomnumber = Math.ceil(Math.random() * 9)
            var found = false;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == randomnumber) { found = true; break }
            }
            if (!found) arr[arr.length] = randomnumber;
        }
        randomOne = arr[0];
        randomTwo = arr[1];
        randomThree = arr[2];
    });
    $("#submitNumbers").click(function (ev) {
        clicks++
        guessOne = $("#boxOne").val();
        guessTwo = $("#boxTwo").val();
        guessThree = $("#boxThree").val();
        console.log(guessOne);
        console.log(guessTwo);
        console.log(guessThree);
        //If alert for winning numbers and ten tries.
        if (guessOne == randomOne && guessTwo == randomTwo && guessThree == randomThree) {
            alert(" You Win! Click ok to play again.") ? "" : location.reload();
        } else if (clicks == 10) {
            alert(" You lose.The numbers were " + randomOne + "," + randomTwo + "," + randomThree + ".Click ok to play again") ? "" : location.reload();
        }
        // Below is for the colors of box one that works.
        if (guessOne == randomOne) {
            $("#boxOne").css("background-color", "green");
        } else if (guessOne == randomTwo) {
            $("#boxOne").css("background-color", "yellow");
        } else if (guessOne == randomThree) {
            $("#boxOne").css("background-color", "yellow");
        } else if (guessOne) {
            $("#boxOne").css("background-color", "red");
        }
        // Below is for the colors of box two that works.
        if (guessTwo == randomTwo) {
            $("#boxTwo").css("background-color", "green");
        } else if (guessTwo == randomOne) {
            $("#boxTwo").css("background-color", "yellow");
        } else if (guessTwo == randomThree) {
            $("#boxTwo").css("background-color", "yellow");
        } else {
            $("#boxTwo").css("background-color", "red");
        }
        // Below is for the colors of box three that works.
        if (guessThree == randomThree) {
            $("#boxThree").css("background-color", "green");
        } else if (guessThree == randomOne) {
            $("#boxThree").css("background-color", "yellow");
        } else if (guessThree == randomTwo) {
            $("#boxThree").css("background-color", "yellow");
        } else {
            $("#boxThree").css("background-color", "red");
        }
    });

});
