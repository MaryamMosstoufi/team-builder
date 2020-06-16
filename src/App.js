import React from 'react';
import './App.css';
import SwatchForm from './components/SwatchForm.js';
import SwatchList from './components/SwatchList.js';
function App() {
  const initialSwatchList = [
    {
      colorName: 'Teal',
      colorCode: '#06BCC2',
      colorFamily: 'Blue',
    },
  ];
  const initialSwatchFormValues = {
    colorName: '',
    colorCode: '',
    colorFamily: '',
  }
  return (
    <div className="App">
      <header><h1>Swatch Builder</h1></header>
      <SwatchForm />
      <SwatchList />
    </div>
  );
}

export default App;
