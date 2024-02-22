const questions = [
    {
      question: "What is the capital of India?",
      options: ["Paris", "London", "Delhi", "Rome"],
      answer: "Delhi"
    },
    {
      question: "What is 8 + 2?",
      options: ["3", "10", "5", "6"],
      answer: "10"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
      answer: "William Shakespeare"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["\<a>", "\<link>", "\<href>", "\<url>"],
        answer: "\<a>"
      },
      {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
      },
      {
        question: "What is the latest version of HTML?",
        options: ["HTML3", "HTML4", "XHTML", "HTML5"],
        answer: "HTML5"
      },
      {
        question: "Which of the following is used to add JavaScript to a webpage?",
        options: ["<js>", "<script>", "<javascript>", "<code>"],
        answer: "<script>"
      },
      {
        question: "What is the purpose of the 'viewport' meta tag in HTML?",
        options: ["To control the layout and scaling of the viewport on mobile devices", "To define the character encoding of the document", "To specify the author of the document", "To set the background color of the document"],
        answer: "To control the layout and scaling of the viewport on mobile devices"
      },
      {
        question: "Which of the following is NOT a valid value for the display property in CSS?",
        options: ["block", "inline", "flex", "table-layout"],
        answer: "table-layout"
      },
      {
        question: "What does the 'box-sizing' property in CSS control?",
        options: ["The size of the box model", "The position of the box within its container", "The color of the box's border", "The spacing between elements"],
        answer: "The size of the box model"
      }
  ];
let quesdisplay= document.getElementById("question");
let answerdisplay=document.getElementById("result");
let restart=document.getElementById("resetBtn");
let res=document.getElementById('final');

let quesindex=0;
let score=0;

function display(){
    const current=questions[quesindex];
    quesdisplay.textContent=current.question;
    answerdisplay.innerHTML="";
    current.options.forEach((x)=>{
    const button = document.createElement('button');
    button.textContent = x;
    button.onclick = () => checkAnswer(x);
    button.classList.add('answer')
    answerdisplay.appendChild(button);
    });

}
function checkAnswer(y) {
    const current=questions[quesindex];
    if(y === current.answer){
        score++;
    }
    quesindex++;
    if(quesindex < questions.length){
        display(); 
       }
    else{
        displayresult();
    }
}

function displayresult(){
   
    res.innerHTML = `Your Score: ${score} out of ${questions.length}`;
    restart.style.display = 'block';

}

function resetQuiz(){
    score=0;
    quesindex=0;
    display();
    res.innerHTML='';
    restart.style.display='none';
}

display();



