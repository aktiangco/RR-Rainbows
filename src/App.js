import './App.css';
// Importing React and useState
import React, { useState } from 'react';
// Importing colorBlock Component
import ColorBlock from './components/ColorBlock';
import ColorForm from './components/ColorForm';

function App() {
  // Static data (default content)
  // using useState
  let [colors, setColors] = useState(['violet', 'blue',
    'lightblue', 'green',
    'greenyellow', 'yellow',
    'orange', 'red'])
  // Creating a .map
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />
    )
  })
  // Adding new 
  const addColor = (newColor) => {
    setColors([...colors, newColor])
  }
  return (
    <div className="App">
      {colorMap}
      {/* invoking ColorForm and line#21 */}
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;

