import React, { useState } from 'react';
import './App.css';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error('Error:', error);
    }
  };

   return (
    <div className="App">
      <header className="header">
        Competitor Research - Ask me anything about ChurnZero
      </header>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label className="question-label">
            Question:
            <input
              className="question-input"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </label>
          <button className="ask-button" type="submit">
            Ask
          </button>
        </form>
      </div>
      {answer && (
        <div className="answer-container">
          <h2 className="answer-title">Answer:</h2>
          <p className="answer-text">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
