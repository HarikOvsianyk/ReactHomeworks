import React, {useState} from 'react';
import './App.css';
import Timer from './Components/Timer';
import Button from './Components/UI/Button/Button';

function App() {
  let data = new Date();
  const [start, setStart] = useState(true);
  const [time, setTime] = useState([]);
  const getStart = () => {
    setStart(false);
    setTime([...time,{time:data.toLocaleTimeString()}]);
  }

  const getContinue = () => {
    setStart(true);
    localStorage.setItem('times', JSON.stringify(time));
  }

  return (
    <div className="App">
      <h2>{setTime}</h2>
      {
        start
        ?
        <Button onClick={getStart} style={{backgroundColor:"green"}}>Start</Button>
        :
        <Button onClick={getContinue}  style={{backgroundColor:"purple"}}>Countinue</Button>
      }
      <Button style={{backgroundColor: "red"}}>Stop</Button>
      <Button style={{backgroundColor: "orange"}}>Reset</Button>
      <Timer time={time}/>
    </div>
  );
}

export default App;
