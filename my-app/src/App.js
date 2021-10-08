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
  let [seconds, setSeconds] = useState("00");
  let [minutes, setMinutes] = useState("00");
  let [hours, setHours] = useState("00");
  let audioFile = new Audio(audio);
  
  useEffect(()=> {
    if (localStorage.getItem('times')) {
        setTimes(JSON.parse(localStorage.getItem('times')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('times', JSON.stringify(times))
  }, [times])

  const getStart = () => {
    setStartBTN(false);
    setStop(false);
    setReset(false);
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
    audioFile.play();
    setStop(true);
    if (reset === false) {
        if (hours==="00" && minutes==="00" && seconds ==="00") {
          return
        } else {
          clearInterval(intervalTime);
          setTimes([...times, {hour:hours,minute:minutes,second:seconds}]);
          localStorage.setItem('times', JSON.stringify(times));
        }
    }
  };

  const getReset = () => {
    audioFile.play();
    if (stop === true) {
        setReset(false);
        setStartBTN(true);
        setHours('00');
        setMinutes('00');
        setSeconds('00');
    } else {
        setStartBTN(true);
        setReset(true);
        getStop();
        setHours('00');
        setMinutes('00');
        setSeconds('00');
    }
  }

  return (
    <div className="App">
      <h2>{hours}:{minutes}:{seconds}</h2>
       {
        startBTN
        ?
        <Button onClick={getStart} style={{backgroundColor:"green"}}>Start</Button>
        :
        <Button onClick={getStart} style={{backgroundColor:"purple"}}>Countinue</Button>
       }
        <Button onClick={getStop} style={{backgroundColor: "red"}}>Stop</Button>
        <Button onClick={getReset} style={{backgroundColor: "orange"}}>Reset</Button>
        <Timer times={times}/>
    </div>
  );
}

export default App;
