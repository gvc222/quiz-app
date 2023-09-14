import React, {useState} from 'react'
import './App.css';

function App() {
  const [questionCount, setQuestionCount] = useState(1)
  
  const [score, setScore] = useState(0)

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }
    
    if (questionCount <= questions.length){
    setQuestionCount(questionCount + 1)
  } else {
    alert(`You have reached the end of the quiz and your score is: ${score} out of ${questions.length}!`)
  }
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
      questionText: "Is it The Flinstones or The Flintstones?",
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
    {(questionCount <= 8) ? <div className="question-section">
      <div className="question-count">
        <h1>Question: {questionCount}/{questions.length}</h1>
      </div>
      <div className="question-text">{questions[questionCount].questionText}</div>
      <div className="answer-section">
        {questions[questionCount-1].answerOptions.map((answerOption) => <button onClick={() =>handleClick(answerOption.isCorrect)}>{answerOption.answerText}</button>)}
        <div className='score'>Your current score is: {score}</div>
      </div>
    </div>
    :
    <div>You have reached the end of the quiz and your score is: {score} out of {questions.length}!</div>
}
   </div>  
  )
}

export default App;
