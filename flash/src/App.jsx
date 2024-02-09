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
  const flashcards = [
    { question: 'Cell Theory', answer: 'All living things are composed of one or more cells.' },
    { question: 'Plasma Membrane', answer: 'A special boundary that helps control what enters and leaves the cell.' },
    { question: 'Organelles', answer: 'Specialized structures that carry out specific functions within the cell.' },
    { question: 'Mitochondria', answer: 'Powerhouse of the cell.' },
    { question: 'Vacoule', answer: 'Water sack' },
  ];

  const goToNextCard = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * flashcards.length);
    } while (flashcards.length > 1 && nextIndex === currentCardIndex); // Avoid repeating the same card if possible
    setCurrentCardIndex(nextIndex);
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
    
      <button onClick={goToNextCard}>Next</button>
    </div>
  );
};

export default App;
