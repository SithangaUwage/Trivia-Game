$(document).ready(function() {

var audio = new Audio("../Audio/Lovely-Day.mp3");
audio.play();

function loop() {
  $('#michael-jordan').animate({'top': '40px'}, {
      duration: 400,
      complete: function() {
          $('#michael-jordan').animate({top: '50px'}, {
              duration: 400,
              complete: loop});
      }
    });
}
loop();

function loop1() {
  $('#kanye-west').animate({'top': '40px'}, {
      duration: 400,
      complete: function() {
          $('#kanye-west').animate({top: '50px'}, {
              duration: 400,
              complete: loop1});
      }
    });
}
loop1();

function loop2() {
  $('#donald-trump').animate({'top': '40px'}, {
      duration: 400,
      complete: function() {
          $('#donald-trump').animate({top: '50px'}, {
              duration: 400,
              complete: loop2});
      }
    });
}
loop2();

function loop3() {
  $('#mario').animate({'top': '40px'}, {
      duration: 400,
      complete: function() {
          $('#mario').animate({top: '50px'}, {
              duration: 400,
              complete: loop3});
      }
    });
}
loop3();

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
      var sounds = [ "../Audio/Ta-Da.mp3",
                     "../Audio/Good-bell.mp3"];

      var soundFile = sounds[Math.floor(Math.random()*sounds.length)];
      var audio11 = new Audio(soundFile);
      audio11.play();
        this.score++;
        document.getElementById('scoreboard-top').innerHTML = "Score: " + quiz.score;
    } else {

      var sounds = [ "../Audio/Wrong-answer.mp3",
                     "../Audio/Nope.mp3",
                     "../Audio/oh-hell-no.mp3",
                     "../Audio/the-boo.mp3",
                     "../Audio/Bye-Have.mp3"];

      var soundFile = sounds[Math.floor(Math.random()*sounds.length)];
      var audio11 = new Audio(soundFile);
      audio11.play();
    }
    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function populate() {
  document.getElementById('scoreboard-top').innerHTML = "Score: " + quiz.score;
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
  var gameOverHTML = "";
    if (quiz.score < 12) {
        var y = document.getElementById("Loser");
        var z = document.getElementById("Restart-div");
        var mainMenu = document.getElementById("Main-div");
        var element = document.getElementById("quiz");
        y.style.display = "block";
        z.style.display = "block";
        mainMenu.style.display = "block";
        var audio12 = new Audio("../Audio/You-lose.mp3");
        audio12.play();
        element.innerHTML = gameOverHTML;
    } else {
        var x = document.getElementById("Winner");
        var z = document.getElementById("Restart-div");
        var mainMenu = document.getElementById("Main-div");
        var element = document.getElementById("quiz");
        x.style.display = "block";
        z.style.display = "block";
        mainMenu.style.display = "block";
        var audio11 = new Audio("../Audio/Quiz-correct.mp3");
        audio11.play();
        element.innerHTML = gameOverHTML;
    }
};

// create questions
var questions = [
    new Question("Who said this? 'My greatest pain in life is that I will never be able to see myself perform live.'", ["Kanye West", "Jay Z","Kim Kardashian", "Ice Cube"], "Kanye West"),
    new Question("Which player made Liverpool lose the Champions League Final?", ["Mohamed Salah", "Sadio Mane","Loris Karius", "James Milner"], "Loris Karius"),
    new Question("Which was the first ever Super Mario to be released?", ["Super Mario Bros", "Super Mario Galaxy", "Super Mario Odyssey", "Super Mario 64"], "Super Mario Bros"),
    new Question("Who said this? 'He's a smart cookie'", ["Kim Jong-un", "Donald Trump", "Boris Johnson", "Theresa May"], "Donald Trump"),
    new Question("Which actor played the main character in Galdiator (2000)?", ["Russell Crowe", "Bruce Willis", "Chuck Norris", "Bruce Lee"], "Russell Crowe"),

    new Question("Which team won the 2018 NBA Championship?", ["Spurs", "Lakers", "Cavaliers", "Golden State"], "Golden State"),
    new Question("What is the name of the main character in Grand Theft Auto: San Andreas?", ["Frank Tenpenny", "Carl Johnson", "Trevor Philips", "Niko Bellic"], "Carl Johnson"),
    new Question("How many Championships has Michael Jordan won?", ["7", "8", "10", "6"], "6"),
    new Question("Which artist did Kanye West interrupt at the MTV VMA awards?", ["Beyonce", "Taylor Swift", "Adele", "Rihanna"], "Talyor Swift"),
    new Question("What is the latest Final Fantasy Series?", ["12", "13", "15", "17"], "15"),

    new Question("Which Tv Series has the highest rating?", ["Game of Thrones", "The Simpsons", "Breaking Bad", "Friends"], "Breaking Bad"),
    new Question("Which one of these names are not a real Pokemon?", ["Jigglypuff", "Pikachu", "Charmander", "Bakura"], "Bakura"),
    new Question("Which actor played Queen Elsa in Frozen (2013)?", ["Kristen Bell", "Idina Menzel", "Josh Gad", "Edie McClurg"], "Idina Menzel"),
    new Question("What is the latest Battlefield Game?", ["Battlefield 1", "Battlefield 4", "Battlefield 2", "Battlefield Hardline"], "Battlefield 1"),
    new Question("Which host announced the wrong Miss Universe Winner at the Miss Universe 2015 contest?", ["Jimmy Kimmel", "Kevin Hart", "James Corden", "Steve Harvey"], "Steve Harvey")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();

});
