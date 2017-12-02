var triviaGame = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    unanswered: 0,
    userAnswers: [],
    triviaQuestions: [
        {
            q_Number: 1,
            q_Group: "q1",
            q_Text: "What type of race if the Tour de France?",
            q_Answer: "a",
            q_Options: [
                { o_Value: "a", o_Text: "Bicycle race" },
                { o_Value: "b", o_Text: "Swimming race" },
                { o_Value: "c", o_Text: "Triathlon race" },
                { o_Value: "d", o_Text: "Auto race" }
            ]
        },
        {
            q_Number: 2,
            q_Group: "q2",
            q_Text: "Which three sports form a triathlon?",
            q_Answer: "c",
            q_Options: [
                { o_Value: "a", o_Text: "Cycling, running, and shooting" },
                { o_Value: "b", o_Text: "Swimming, shooting, and eating" },
                { o_Value: "c", o_Text: "Swimming, cycling, and running" },
                { o_Value: "d", o_Text: "Jogging, cycling, and skiing" }
            ]
        },
        {
            q_Number: 3,
            q_Group: "q3",
            q_Text: "How often is the football world cup held?",
            q_Answer: "d",
            q_Options: [
                { o_Value: "a", o_Text: "Every 2 years" },
                { o_Value: "b", o_Text: "Every year" },
                { o_Value: "c", o_Text: "Every 5 years" },
                { o_Value: "d", o_Text: "Every 4 years" }
            ]
        },
        {
            q_Number: 4,
            q_Group: "q4",
            q_Text: "As of 2016, who is the fastest man in the world at 100 meter sprint?",
            q_Answer: "a",
            q_Options: [
                { o_Value: "a", o_Text: "Usain Bolt" },
                { o_Value: "b", o_Text: "Ronald Miller" },
                { o_Value: "c", o_Text: "Jennifer Smith" },
                { o_Value: "d", o_Text: "Stewie Griffin" }
            ]
        },
        {
            q_Number: 5,
            q_Group: "q5",
            q_Text: "Which sport uses the lightest ball?",
            q_Answer: "c",
            q_Options: [
                { o_Value: "a", o_Text: "Tennis" },
                { o_Value: "b", o_Text: "Golf" },
                { o_Value: "c", o_Text: "Table tennis" },
                { o_Value: "d", o_Text: "Soccer" }
            ]
        },
        {
            q_Number: 6,
            q_Group: "q6",
            q_Text: "In which sport can you score a bullseye?",
            q_Answer: "b",
            q_Options: [
                { o_Value: "a", o_Text: "Shooting" },
                { o_Value: "b", o_Text: "Darts" },
                { o_Value: "c", o_Text: "Tennis" },
                { o_Value: "d", o_Text: "Curling" }
            ]
        },
        {
            q_Number: 7,
            q_Group: "q7",
            q_Text: "What city hosts the Wimbledon Tennis Championships?",
            q_Answer: "d",
            q_Options: [
                { o_Value: "a", o_Text: "Los Angeles" },
                { o_Value: "b", o_Text: "Sydney" },
                { o_Value: "c", o_Text: "Tokyo" },
                { o_Value: "d", o_Text: "London" }
            ]
        },
        {
            q_Number: 8,
            q_Group: "q8",
            q_Text: "How many athletic events form a decathlon?",
            q_Answer: "b",
            q_Options: [
                { o_Value: "a", o_Text: "5" },
                { o_Value: "b", o_Text: "10" },
                { o_Value: "c", o_Text: "100" },
                { o_Value: "d", o_Text: "20" }
            ]
        },
        {
            q_Number: 9,
            q_Group: "q9",
            q_Text: "How many rings form the Olympic logo?",
            q_Answer: "a",
            q_Options: [
                { o_Value: "a", o_Text: "5" },
                { o_Value: "b", o_Text: "6" },
                { o_Value: "c", o_Text: "4" },
                { o_Value: "d", o_Text: "7" }
            ]
        },
        {
            q_Number: 10,
            q_Group: "q10",
            q_Text: "In what game is the word 'love' used?",
            q_Answer: "a",
            q_Options: [
                { o_Value: "a", o_Text: "Tennis" },
                { o_Value: "b", o_Text: "Swimming" },
                { o_Value: "c", o_Text: "Skiing" },
                { o_Value: "d", o_Text: "Table tennis" }
            ]
        }
    ],
    initializeGame: function(){
        this.correctAnswers = 0;
        this.incorrectAnswers = 0;
        this.unanswered = 0;
        this.userAnswers = [];
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
    }
};

triviaGame.initializeGame();

$("#btn-start-game").on("click", function(){
    $("#game-intro").hide();
    $("#game-timer").show();
    $("#game-content").show();

    triviaGame.renderTriviaQuestions();
});

$("#btn-submit").on("click", function(){

});