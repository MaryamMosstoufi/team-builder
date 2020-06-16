import React, { useState } from 'react';
import './App.css';
import SwatchForm from './components/SwatchForm.js';
import Swatch from './components/Swatch.js';

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
};

function App() {

  const [swatchList, setSwatchList] = useState(initialSwatchList)

  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const [swatchFormValues, setSwatchFormValues] = useState(initialSwatchFormValues);

  const onInputChange = evt => {
    const { name, value } = evt.target
    setSwatchFormValues({
      ...swatchFormValues,
      [name]: value,
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    if (!swatchFormValues.colorName || !swatchFormValues.colorCode || !swatchFormValues.colorFamily) {
      return ('All fields are mandatory')
    }
    const newSwatch = { ...swatchFormValues };
    setSwatchList([...swatchList, newSwatch])
  }

  return (
    <div className="App">
      <header><h1>Swatch Builder</h1></header>
      <SwatchForm
        values={swatchFormValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      {
        swatchList.map(swatch => {
          return (
            <Swatch key={swatch.id} swatch={swatch} />
          )
        })
      }
    </div>
  );
}

export default App;
