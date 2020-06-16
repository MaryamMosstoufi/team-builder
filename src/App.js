import React from 'react';
import './App.css';
import TeamForm from './components/TeamForm.js';
import Team from './components/Team.js';
function App() {
  return (
    <div className="App">
      <header><h1>Team Builder</h1></header>
      <TeamForm />
      <Team />
    </div>
  );
}

export default App;
