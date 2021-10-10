import React, {useState, useEffect} from 'react';
import './App.css';
import Timer from './Components/Timer';
import Button from './Components/UI/Button/Button';
import audio from './ork.mp3'

function App() {
  const [startBTN, setStartBTN] = useState(true);
  const [stop, setStop] = useState(false);
  const [reset, setReset] = useState(false);
  const [times, setTimes] = useState([]);
  const [intervalTime, setIntervalTime] = useState('');
  const audioFile = new Audio(audio);
  let [seconds, setSeconds] = useState("00");
  let [minutes, setMinutes] = useState("00");
  let [hours, setHours] = useState("00");
  
  useEffect(()=> {
    if (localStorage.getItem('times')) {
        setTimes(JSON.parse(localStorage.getItem('times')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('times', JSON.stringify(times))
  }, [times])

  const getStart = () => {
    setStop(true);
    setReset(true);
    getTime();
    audioFile.play();
  }

  const getTime = () => {
    const time = setInterval(() => {
      seconds++;
      setSeconds(seconds.toString().padStart(2,0));
      if (seconds === 59) {
        seconds = 0;
        minutes++;
        setMinutes(minutes.toString().padStart(2,0));
      }

      if (minutes === 59) {
        minutes = 0;
        hours++;
        setHours(hours.toString().padStart(2,0));
      }
      
      setIntervalTime(time);
    }, 1000);
  };

  const getStop = () => {
    setStartBTN(false);
    audioFile.play();
    setStop(false);
    clearInterval(intervalTime);
    setTimes([...times, {hour:hours,minute:minutes,second:seconds}]);
    localStorage.setItem('times', JSON.stringify(times));
  };

  const getReset = () => {
    
    setHours('00');
    setMinutes('00');
    setSeconds('00');
    if (stop) {
        getStop();
        audioFile.play();
        setReset(false);
        setStartBTN(true);
        setStop(false);

    } else {
        setReset(true);
        setStartBTN(true);
    }
  }

  return (
    <div className="App">
      <h2>{hours}:{minutes}:{seconds}</h2>
       {
        startBTN
        ?
        <Button onClick={getStart} disabled={stop} style={{backgroundColor:"green"}}>Start</Button>
        :
        <Button onClick={getStart} disabled={stop} style={{backgroundColor:"purple"}}>Countinue</Button>
       }
        <Button onClick={getStop} disabled={!stop} style={{backgroundColor: "red"}}>Stop</Button>
        <Button onClick={getReset} disabled={!reset} style={{backgroundColor: "orange"}}>Reset</Button>
        <Timer times={times}/>
    </div>
  );
}

export default App;
