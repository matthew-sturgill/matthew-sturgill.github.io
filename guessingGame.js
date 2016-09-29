$(function () {

    //declaring randoms variables
    var randomOne = '';
    var randomTwo = '';
    var randomThree = '';
    var guessOne = '';
    var guessTwo = '';
    var guessThree = '';

    $(function (ev) {
        randomOne = Math.floor((Math.random() * 9) + 1);
        randomTwo = Math.floor((Math.random() * 9) + 1);
        randomThree = Math.floor((Math.random() * 9) + 1);
        console.log(randomOne);
        console.log(randomTwo);
        console.log(randomThree);
    });
    $("#submitNumbers").click(function (ev) {
        guessOne = $("#boxOne").val();
        guessTwo = $("#boxTwo").val();
        guessThree = $("#boxThree").val();
        console.log(guessOne);
        console.log(guessTwo);
        console.log(guessThree);
        // Below is for the colors of box one. 
        if (guessOne == randomOne) {
            $("#boxOne").css("background-color","green");
        } else if (guessOne == randomTwo) {
            $("#boxOne").css("background-color","yellow");
        } else if (guessOne == randomThree) {
            $("#boxOne").css("background-color","yellow");
        } else if (guessOne ) {
            $("#boxOne").css("background-color","red");
        }
        // Below is for the colors of box two.
        if (guessTwo == randomTwo) {
            $("#boxTwo").css("background-color","green");
        } else if (guessTwo == randomOne) {
            $("#boxTwo").css("background-color","yellow");
        } else if (guessTwo == randomThree) {
            $("#boxTwo").css("background-color","yellow");
        } else {
            $("#boxTwo").css("background-color","red");
        }
             // Below is for the colors of box three.
        if (guessThree == randomThree) {
            $("#boxThree").css("background-color","green");
        } else if (guessThree == randomOne) {
            $("#boxThree").css("background-color","yellow");
        } else if (guessThree == randomTwo) {
            $("#boxThree").css("background-color","yellow");
        } else {
            $("#boxThree").css("background-color","red");
        }

        //random numb
    })


});
