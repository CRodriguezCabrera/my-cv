import React from 'react';
import { useState } from 'react';
import './App.css';
import { Education, Experience, Hero, More } from "./components";
import { CV } from "./CV/CV";

const { hero, education, experience, more } = CV;

function App() {
  const [showEducation, setShowEducation] = useState(true);
  return (
    
    <div className="App">
      <Hero hero={hero}/>
      <button className="buttonOne" onClick={() => setShowEducation(true)}> Formación </button>
      <button className="buttonTwo" onClick={() => setShowEducation(false)}> Experiencia </button>
      <div>
        {showEducation ? (
          <Education education={education}/>
        ) : (<Experience experience={experience}/>
        )}
      </div>
      <More more={more}/>
    </div>
  );
}

export default App;
