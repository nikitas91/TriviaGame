var triviaGame = {
    intervalId: undefined,
    timerRunning: false,
    timerInSeconds: 120,
    correctAnswers: 0,
    incorrectAnswers: 0,
    unanswered: 0,
    triviaQuestions: [
        {
            q_Number: 1,
            q_Group: "q1",
            q_Text: "What type of race if the Tour de France?",
            q_Answer: "0",
            q_Options: [
                { o_Value: "0", o_Text: "Bicycle race" },
                { o_Value: "1", o_Text: "Swimming race" },
                { o_Value: "2", o_Text: "Triathlon race" },
                { o_Value: "3", o_Text: "Auto race" }
            ]
        },
        {
            q_Number: 2,
            q_Group: "q2",
            q_Text: "Which three sports form a triathlon?",
            q_Answer: "2",
            q_Options: [
                { o_Value: "0", o_Text: "Cycling, running, and shooting" },
                { o_Value: "1", o_Text: "Swimming, shooting, and eating" },
                { o_Value: "2", o_Text: "Swimming, cycling, and running" },
                { o_Value: "3", o_Text: "Jogging, cycling, and skiing" }
            ]
        },
        {
            q_Number: 3,
            q_Group: "q3",
            q_Text: "How often is the football world cup held?",
            q_Answer: "3",
            q_Options: [
                { o_Value: "0", o_Text: "Every 2 years" },
                { o_Value: "1", o_Text: "Every year" },
                { o_Value: "2", o_Text: "Every 5 years" },
                { o_Value: "3", o_Text: "Every 4 years" }
            ]
        },
        {
            q_Number: 4,
            q_Group: "q4",
            q_Text: "As of 2016, who is the fastest man in the world at 100 meter sprint?",
            q_Answer: "0",
            q_Options: [
                { o_Value: "0", o_Text: "Usain Bolt" },
                { o_Value: "1", o_Text: "Ronald Miller" },
                { o_Value: "2", o_Text: "Jennifer Smith" },
                { o_Value: "3", o_Text: "Stewie Griffin" }
            ]
        },
        {
            q_Number: 5,
            q_Group: "q5",
            q_Text: "Which sport uses the lightest ball?",
            q_Answer: "2",
            q_Options: [
                { o_Value: "0", o_Text: "Tennis" },
                { o_Value: "1", o_Text: "Golf" },
                { o_Value: "2", o_Text: "Table tennis" },
                { o_Value: "3", o_Text: "Soccer" }
            ]
        },
        {
            q_Number: 6,
            q_Group: "q6",
            q_Text: "In which sport can you score a bullseye?",
            q_Answer: "1",
            q_Options: [
                { o_Value: "0", o_Text: "Shooting" },
                { o_Value: "1", o_Text: "Darts" },
                { o_Value: "2", o_Text: "Tennis" },
                { o_Value: "3", o_Text: "Curling" }
            ]
        },
        {
            q_Number: 7,
            q_Group: "q7",
            q_Text: "What city hosts the Wimbledon Tennis Championships?",
            q_Answer: "3",
            q_Options: [
                { o_Value: "0", o_Text: "Los Angeles" },
                { o_Value: "1", o_Text: "Sydney" },
                { o_Value: "2", o_Text: "Tokyo" },
                { o_Value: "3", o_Text: "London" }
            ]
        },
        {
            q_Number: 8,
            q_Group: "q8",
            q_Text: "How many athletic events form a decathlon?",
            q_Answer: "1",
            q_Options: [
                { o_Value: "0", o_Text: "5" },
                { o_Value: "1", o_Text: "10" },
                { o_Value: "2", o_Text: "100" },
                { o_Value: "3", o_Text: "20" }
            ]
        },
        {
            q_Number: 9,
            q_Group: "q9",
            q_Text: "How many rings form the Olympic logo?",
            q_Answer: "0",
            q_Options: [
                { o_Value: "0", o_Text: "5" },
                { o_Value: "1", o_Text: "6" },
                { o_Value: "2", o_Text: "4" },
                { o_Value: "3", o_Text: "7" }
            ]
        },
        {
            q_Number: 10,
            q_Group: "q10",
            q_Text: "In what game is the word 'love' used?",
            q_Answer: "0",
            q_Options: [
                { o_Value: "0", o_Text: "Tennis" },
                { o_Value: "1", o_Text: "Swimming" },
                { o_Value: "2", o_Text: "Skiing" },
                { o_Value: "3", o_Text: "Table tennis" }
            ]
        }
    ],
    initializeGame: function(){
        this.intervalId = undefined;
        this.timerRunning = false;
        this.timerInSeconds = 120;
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.unanswered = 0;
        $("#game-intro").show();
        $("#game-timer").hide();
        $("#game-content").hide();
        $("#game-results").hide();
    },
    renderTriviaQuestions: function(){
        $("#trivia-content").empty();
        for(var i = 0; i < this.triviaQuestions.length; i++){
            //  Create the trivia item container
            var item = $("<div>");
            item.addClass("trivia-item");

            //  Create the trivia question
            var questionText = $("<p>");
            questionText.addClass("trivia-question");
            questionText.text(this.triviaQuestions[i].q_Text);
            item.append(questionText);

            //  Create the answer options
            for(var j = 0; j < this.triviaQuestions[i].q_Options.length; j++){
                //  Create the radio button container
                var answerOption = $("<div>");
                answerOption.addClass("form-check");
                answerOption.addClass("form-check-inline");

                //  Create the label
                var optionLabel = $("<label>");
                optionLabel.addClass("form-check-label");

                //  Create the radio button
                var optionInput = $("<input>");
                optionInput.addClass("form-check-input");
                optionInput.attr("type", "radio");
                optionInput.attr("name", this.triviaQuestions[i].q_Group);
                optionInput.attr("value", this.triviaQuestions[i].q_Options[j].o_Value);

                //  Append html elements to container
                optionLabel.append(optionInput);
                optionLabel.append(this.triviaQuestions[i].q_Options[j].o_Text);
                answerOption.append(optionLabel);
                item.append(answerOption);
            }

            //  Append the trivia item to the trivia content
            $("#trivia-content").append(item);
        }
    },
    processUserAnswers: function(checkedItemsArray){
        $("#game-timer").hide();
        $("#game-content").hide();

        for(var i = 0; i < checkedItemsArray.length; i++){
            var currentItem = checkedItemsArray[i];
            for(var j = 0; j < this.triviaQuestions.length; j++){
                if($(currentItem).attr("name") === this.triviaQuestions[j].q_Group){
                    if($(currentItem).attr("value") === this.triviaQuestions[j].q_Answer){
                        this.correctAnswers++;
                        break;
                    }
                    else{
                        this.incorrectAnswers++;
                        break;
                    }
                }
            }
        }

        this.unanswered = this.triviaQuestions.length - checkedItemsArray.length;
        $("#results-correct").text("Correct Answers: " + this.correctAnswers);
        $("#results-incorrect").text("Incorrect Answers: " + this.incorrectAnswers);
        $("#results-unanswered").text("Unanswered: " + this.unanswered);
        $("#game-results").show();
    },
    updateTimer: function(){
        triviaGame.timerInSeconds--;
        if(triviaGame.timerInSeconds === 0){
            clearInterval(this.intervalId);
            this.timerRunning = false;
            var checkedItems = $("input:radio[class=form-check-input]:checked");
            triviaGame.processUserAnswers(checkedItems);
        }
        else if(triviaGame.timerInSeconds < 10){
            $("#timer").addClass("red");
        }
        else{
            var timeLeft = triviaGame.timeConverter(triviaGame.timerInSeconds);
            $("#timer").text("Time Remaining: " + timeLeft);
        }
    },
    timeConverter: function(t){
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
          seconds = "0" + seconds;
        }

        if (minutes === 0) {
          minutes = "00";
        }

        else if (minutes < 10) {
          minutes = "0" + minutes;
        }

        return minutes + "m " + seconds + "s";
    }
};

triviaGame.initializeGame();

$("#btn-start-game").on("click", function(){
    $("#game-intro").hide();
    $("#timer").text("Time Remaining: " + triviaGame.timeConverter(triviaGame.timerInSeconds));
    $("#game-timer").show();
    $("#game-content").show();

    triviaGame.intervalId = setInterval(triviaGame.updateTimer, 1000);
    triviaGame.timerRunning = true;

    triviaGame.renderTriviaQuestions();
});

$("#btn-submit").on("click", function(){
    clearInterval(triviaGame.intervalId);
    triviaGame.timerRunning = false;
    var checkedItems = $("input:radio[class=form-check-input]:checked");
    triviaGame.processUserAnswers(checkedItems);
});