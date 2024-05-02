
      //side bar navigation for home page 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }

  //button
  function showAlert() {
    alert("JavaScript function example");
}

const quizData = [
  {
      question: 'Which is a type of CSS?',
      options: ['External', 'Outside', 'HTML', 'Overline'],
      answer: 'External'
  },
  {
      question: 'What does HTML stand for?',
      options: ['Hyper Touch Markup Language', 'Hypo Text Markdown Language', 'Hyper Text Markup Language', 'Hyper Text Mode Language'],
      answer: 'Hyper Text Markup Language'
  },
  {
    question: 'Which of these is part of The Big 3?',
    options: ['CSS', 'Javascript', 'Specificity', 'Interactivity'],
    answer: 'Specificity'
},
{
  question: 'What does CSS do?',
  options: ['Call functions', 'Style the Webpage', 'Structure the page'],
  answer: 'Style the Webpage'
},
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionElements = document.querySelectorAll('#options li span');

    questionElement.innerText = quizData[currentQuestion].question;
    optionElements.forEach((option, index) => {
        option.innerText = quizData[currentQuestion].options[index];
    });
}

function nextQuestion() {
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedOption) {
      alert('Please select an option!');
      return;
  }

  if (selectedOption.value === quizData[currentQuestion].answer) {
      score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
      loadQuestion();
  } else {
      const resultElement = document.getElementById('result');
      resultElement.innerText = `You scored ${score} out of ${quizData.length}!`;
      document.getElementById('next-btn').style.display = 'none';
  }
}

// Load the first question when the page loads
window.onload = loadQuestion;