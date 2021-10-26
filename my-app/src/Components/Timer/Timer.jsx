import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PrimaryButton from '../UI/Button/PrimaryButton';
import {useDispatch, useSelector} from 'react-redux';
import {showModal} from '../../Actions';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #0000FF',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export function Timer() {
  const dispatch = useDispatch();
  const showModalState = useSelector(state=> state.users.showModal);
  const open = showModalState;
  const [startBTN, setStartBTN] = useState(true);
  const [stop, setStop] = useState(false);
  const [reset, setReset] = useState(false);
  const [times, setTimes] = useState([]);
  const [intervalTime, setIntervalTime] = useState('');
  let [seconds, setSeconds] = useState("00");
  let [minutes, setMinutes] = useState("00");
  let [hours, setHours] = useState("00");

  useEffect(()=> {
    if (!stop) {
      clearInterval(intervalTime);
    }
  });

  const getStart = () => {
    setStop(true);
    setReset(true);
    getTime();
  }

  const getTime = () => {
    const timer = setInterval(() => {
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
      
      setIntervalTime(timer);
    }, 1000);
  };

  const getStop = () => {
    setStartBTN(false);
    setStop(false);
    setTimes([...times, {hour:hours,minute:minutes,second:seconds}]);
    localStorage.setItem('times', JSON.stringify(times));
  };

  const getReset = () => {
    setHours('00');
    setMinutes('00');
    setSeconds('00');
    if (stop) {
        getStop();
        setReset(false);
        setStartBTN(true);
        setStop(false);

    } else {
        setReset(true);
        setStartBTN(true);
    }
  };

  const closeModal = () => {
    dispatch(showModal(false));
  }


  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ID:
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Participant:
          </Typography>
        <div className="App">
            <h2>{hours}:{minutes}:{seconds}</h2>
            {
            startBTN
            ?
            <Button onClick={getStart} disabled={stop} style={{backgroundColor:"green", color:"white", marginRight:"5px"}}>Start</Button>
            :
            <Button onClick={getStart} disabled={stop} style={{backgroundColor:"purple",color:"white", marginRight:"5px"}}>Countinue</Button>
            }
            <Button onClick={getStop} disabled={!stop}  style={{backgroundColor: "red",color:"white",marginRight:"5px"}}>Stop</Button>
            <Button onClick={getReset} disabled={!reset}  style={{backgroundColor: "orange",color:"white"}}>Reset</Button>
        </div>
        <div style ={{marginTop: "20px", display:'flex', justifyContent: "space-between"}}>
            <PrimaryButton onClick = {closeModal}>Cancel</PrimaryButton>
            <PrimaryButton>Save</PrimaryButton>
        </div>
        </Box>
      </Modal>
    </div>
  );
}