import React, {useState} from 'react'
import './App.css';

function App() {
  const [questionCount, setQuestionCount] = useState(0)
  
  handleClick = () => {
    setQuestionCount += 1
  }
  const questions = [
    {
      questionText: "Is it Berenstein Bears or Berenstain Bears?",
      answerOptions: [
        {answerText: "Berenstein Bears", isCorrect: false},
        {answerText: "Berenstain Bears", isCorrect: true}
      ]
    },
    {
      questionText: "Is it The Flinsstones or The Flintstones?",
      answerOptions: [
        {answerText: "The Flinstones", isCorrect: false},
        {answerText: "The Flintstones", isCorrect: true}
      ]
    },
    {
      questionText: "Is it Looney Tunes or Looney Toons?",
      answerOptions: [
        {answerText: "Looney Tunes", isCorrect: true},
        {answerText: "Looney Toons", isCorrect: false}
      ]
    },
    {
      questionText: "Is it Febreze or Febreeze?",
      answerOptions: [
        {answerText: "Febreze", isCorrect: true},
        {answerText: "Febreeze", isCorrect: false}
      ]
    },
    {
      questionText: "Is it Sketchers or Skechers?",
      answerOptions: [
        {answerText: "Sketchers", isCorrect: false},
        {answerText: "Skechers", isCorrect: true}
      ]
    },
    {
      questionText: "Is it Chic-Fil-A or Chick-Fil-A?",
      answerOptions: [
        {answerText: "Chic-Fil-A", isCorrect: false},
        {answerText: "Chick-Fil-A", isCorrect: true}
      ]
    },
    {
      questionText: "Is it Froot Loops or Fruit Loops?",
      answerOptions: [
        {answerText: "Froot Loops", isCorrect: false},
        {answerText: "Fruit Loops", isCorrect: true}
      ]
    },
    {
      questionText: "Is it Cheez-It or Cheez-Itz?",
      answerOptions: [
        {answerText: "Cheez-It", isCorrect: true},
        {answerText: "Cheez-Itz", isCorrect: false}
      ]
    }
  ];
  return (
   <div className="app">
    <div className="question-section">
      <div className="question-count">
        <span>Questions1</span>/{questions.length}
      </div>
      <div className="question-text">{questions[questionCount].questionText}</div>
      <div className="answer-section">
        <button onClick={null}>{questions[questionCount].answerOptions[0].answerText}</button>
        <button onClick={null}>{questions[questionCount].answerOptions[1].answerText}</button>  
      </div>
    </div>
   </div>  
  )
}

export default App;
