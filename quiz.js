const quizContainer = document.getElementById("quiz");

const resultsContainer = document.getElementById("results");

const submitButton = document.getElementById("submit");

const quizQuestions = [
    {
        question: "Rose Ann Franco is currently completing a PhD in:",
        answers: {
            a: "Microbiology",
            b: "Tissue Engineering",
            c: "Biomaterials",
            d: "Cell and Molecular Biology",
        },
        correctAnswer: "b"
    },
    {
        question: "Rose Ann Franco works at:",
        answers: {
            a: "Queensland Health",
            b: "Queensland University of Technology",
            c: "University of Queensland",
            d: "University of Southern Queensland",
        },
        correctAnswer: "b"
    },
    {
        question: "Rose Ann was recognized as a Young Scientist in the Philippines.",
        answers: {
            a: "True",
            b: "False",
            c: "Not yet",
        },
        correctAnswer: "a"
    },
    {
        question: "Rose Ann has a publication on a biomaterial for skin tissue engineering.",
        answers: {
            a: "True",
            b: "False",
            c: "Not yet",
        },
        correctAnswer: "a"
    },
];
function buildQuiz() {
    const output = [];
    for (i=0; i<quizQuestions.length; i++){
        const answers = [];
        for (letter in quizQuestions[i].answers){
            answers.push(
                '<label>'
         + '<input type="radio" name="question'+i+'" value="'+letter+'">'
         + letter + ': '
         + quizQuestions[i].answers[letter]
         + '</label>'
         );
      }
      output.push(
        '<div class="question">' + quizQuestions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
      );
        }
        quizContainer.innerHTML = output.join('');
    }

function showResults() {
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var numCorrect = 0;
    var userAnswer = [];
    var questionContainer = document.getElementsByClassName('question')
        
        for(var a = 0; a < questionContainer.length; a++){
            var questionChoices = document.getElementsByName('question'+a);
            if(questionChoices[a] && questionChoices[a].checked){
                userAnswer.push(questionChoices[a].value)
            }
        }

        for (var i = 0; i < answerContainers.length; i++) {

            if(userAnswer[i]===quizQuestions[i].correctAnswer){
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }
            else {
                answerContainers[i].style.color = 'red';
            }
        }
        
        if (numCorrect === 0) { 
            resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";
            }
        if (numCorrect === 1) {
            resultsContainer.innerHTM = "There's room for improvement there! You only got one correct answer.";
        }
        if (numCorrect === 2) {
            resultsContainer.innerHTM = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
        }
        if (numCorrect === 3) {
            resultsContainer.innerHTM = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Rose Ann pretty well!";
        }
        if (numCorrect === 4) {
            resultsContainer.innerHTM = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Rose Ann so well!";
        }
    }

buildQuiz ();
submitButton.onclick = function() {
    showResults();
  }

