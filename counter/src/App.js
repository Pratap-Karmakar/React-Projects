
import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {


  const [color,setColor]=useState('red')

  return (
    <div width={'300px'} height={'300px'}>
      <Counter color={color}/>
    </div>
  );
}

export default App;
