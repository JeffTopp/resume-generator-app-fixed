import React, { useState } from 'react';
import './App.css';

function App() {
  const [resume, setResume] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const generateResume = async () => {
    // Add logic to call OpenAI API and generate resume
    setResume('Generated Resume Content');
  };

  const generateCoverLetter = async () => {
    // Add logic to call OpenAI API and generate cover letter
    setCoverLetter('Generated Cover Letter Content');
  };

  return (
    <div className="App">
      <h1>Resume Generator</h1>
      <button onClick={generateResume}>Generate Resume</button>
      <button onClick={generateCoverLetter}>Generate Cover Letter</button>
      <div>
        <h2>Resume:</h2>
        <p>{resume}</p>
      </div>
      <div>
        <h2>Cover Letter:</h2>
        <p>{coverLetter}</p>
      </div>
    </div>
  );
}

export default App;
