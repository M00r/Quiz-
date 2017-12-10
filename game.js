if (jQuery) {
    var checkAnswers = function () {
        var answerString = "Iwo";
        var answers = $(":checked");
        answers.each(function (i) {
            answerString = answerString + answers[i].value;
        });
        $(":checked").each(function (i) {
            var answerString = answerString + answers[i].value;
        });
        checkIfCorrect(answerString);
    };
    var checkIfCorrect = function (theString) {
        if (parseInt(theString, 16) === 213699786) {
            $("body").addClass("correct");
            $("h1").text("You won!");
            $("canvas").show();
        }
    };
    $("#question1").show();
};
if (impress) {
    var checkAnswers = function () {
        var answerString = "23";
        var answers = $(":checked");
    }
    $("#question2").show();
};
if (atom) {
    var checkAnswers = function () {
        var answerString = "Febos";
        var answers = $(":checked");
    }
    $("#question3").show();
};
if (createjs) {
    var checkAnswers = function () {
        var answerString = "?";
        var answers = $(":checked");
    }
    $("#question4").show();
};
if (me) {
    var checkAnswers = function () {
        var answerString = "Kielce";
        var answers = $(":checked");
    }
    $("#question5").show();
};
if (require) {
    var checkAnswers = function () {
        var answerString = "Male";
        var answers = $(":checked");
    }
    $("#question6").show();
};