import './App.css';
import React, {useState} from 'react';

const App = () => {

  const [{count, count2}, setCount] = useState({count: 10, count2: 20});

  return (
    <div>
      <div>count1: {count}</div>
      <div>count2: {count2}</div>
      <button onClick={() => 
        setCount(currentState => ({count: currentState.count + 1, count2: currentState.count2 + 1}))}>Add</button>
    </div>
  );
}

export default App;
