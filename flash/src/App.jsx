import React, { useState } from 'react';
import './App.css';

const Flashcard = ({ card, cardNumber, totalCards  }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-counter">{`Card ${cardNumber} of ${totalCards}`}</div>
      {isFlipped ? card.answer : card.question}
      
    </div>
  );
};

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  const flashcards = [
    { question: 'Cell Theory', answer: 'All living things are composed of one or more cells.' },
    { question: 'Plasma Membrane', answer: 'A special boundary that helps control what enters and leaves the cell.' },
    { question: 'Organelles', answer: 'Specialized structures that carry out specific functions within the cell.' },
    { question: 'Mitochondria', answer: 'Powerhouse of the cell.' },
    { question: 'Vacoule', answer: 'Water sack' },
  ];

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);

  };


  
  const checkAnswer = () => {
    if (userAnswer.toLowerCase() === flashcards[currentCardIndex].answer.toLowerCase()) {
      alert("Correct!");
    } else {
      alert("Incorrect, try again.");
    }
  };

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="app">
      <h1>Biology Flashcards</h1>
      <h2>Click on the flashcard to see the answer</h2>
      <h3>Prepare for your next bio exam!</h3>
      <Flashcard key={currentCardIndex} card={flashcards[currentCardIndex]}  cardNumber={currentCardIndex + 1} 
        totalCards={flashcards.length}  />
     <input type="text" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
      <button onClick={checkAnswer}>Check Answer</button>
      <button onClick={goToPreviousCard}>Previous</button>
<button onClick={goToNextCard}>Next</button>
    </div>
  );
};

export default App;
