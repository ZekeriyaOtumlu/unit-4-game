$(document).ready(function () {

    var first = Math.floor(Math.random() * 12) + 1;
    // console.log(first);
    var second = Math.floor(Math.random() * 12) + 1;
    // console.log(second);
    var third = Math.floor(Math.random() * 12) + 1;
    // console.log(third);
    var fourth = Math.floor(Math.random() * 12) + 1;
    // console.log(fourth);

    var wins = 0;
    var losses = 0;
    var counter = 0;
    $("#starting-point").text(counter);
    
    var randomNumber = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(randomNumber);

    function resetGame() {
        counter = 0;
        $("#starting-point").text(counter);
        
        randomNumber = Math.floor(Math.random() * 101) + 19;
        $("#random-number").text(randomNumber);

        first = Math.floor(Math.random() * 12) + 1;
        second = Math.floor(Math.random() * 12) + 1;
        third = Math.floor(Math.random() * 12) + 1;
        fourth = Math.floor(Math.random() * 12) + 1;

    }

        
    $("#first").on("click", function () {
        $("#starting-point").text(first);
        counter += first;
        $("#starting-point").text(counter);

        if (counter === randomNumber) {
            wins++;
            $("#wins").text("Wins:" + wins);
            // winner();
            resetGame();

        } else if (counter > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            // losser();
            resetGame();
      
        }
        console.log(counter)

        // winsLoss();

    });

    $("#second").on("click", function () {

        $("#starting-point").html(second);

        counter += second;

        $("#starting-point").text(counter);

        if (counter === randomNumber) {
            wins++;
            $("#wins").text("Wins:" + wins);
            resetGame();
        } else if (counter > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            resetGame();
        }
        // resetGame();

        console.log(counter);

    });

    $("#third").on("click", function () {
        $("#starting-point").html(third);
        counter += third;
        $("#starting-point").text(counter);

        if (counter === randomNumber) {
            wins++;
            $("#wins").text("Wins:" + wins);
            resetGame();
        } else if (counter > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            resetGame();
        }
        // winsLoss();
    });

    $("#fourth").on("click", function () {
        $("#starting-point").html(fourth);
        counter += fourth;
        $("#starting-point").text(counter);

        if (counter === randomNumber) {
            wins++;
            $("#wins").text("Wins:" + wins);
            resetGame();
        } else if (counter > randomNumber) {
            losses++;
            $("#losses").text("Losses: " + losses);
            resetGame();
        }
        // winsLoss();

    });

});



