import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PrimaryButton from '../UI/Button/PrimaryButton';
import {useDispatch, useSelector} from 'react-redux';
import {showModal, getTimer, updateUsers} from '../../Actions';

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
  const user = useSelector(state => state.users.user);
  const open = showModalState;
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [reset, setReset] = useState(true);
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
    setStart(true);
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
    setStop(false);
    setReset(false);
    setTimes([...times, {hour:hours,minute:minutes,second:seconds}]);
    
  };

  const setClock = () => {
    setHours('00');
    setMinutes('00');
    setSeconds('00');
  }

  const getReset = () => {
    setTimes([]);
    clearInterval(intervalTime);
    setStart(false);
    setClock();
    if (stop) {
        getStop();
        setReset(false);
        setStop(false);

    } else {
        setReset(true);
    }
  };

  const closeModal = () => {
    setStop(false);
    setStart(false);
    setReset(true);
    setClock();
    setTimes([]);
    clearInterval(intervalTime);
    dispatch(showModal(false));
  }

  const saveTime = () => {
      dispatch(getTimer(times));
      dispatch(updateUsers());
      dispatch(showModal(false));
      getReset();
      setClock();
      setTimes([]);
  }


  return (
    <div>
      <Modal
        open={open}
        onClose = {closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ID: {user.id}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Participant: {user.name} {user.second}
          </Typography>
        <div className="App">
            <h2>{hours}:{minutes}:{seconds}</h2>
            <Button onClick={getStart} disabled={start} style={{backgroundColor:"green", color:"white", marginRight:"5px"}}>Start</Button>
            <Button onClick={getStop} disabled={!stop}  style={{backgroundColor: "red",color:"white",marginRight:"5px"}}>Stop</Button>
            <Button onClick={getReset} disabled={reset}  style={{backgroundColor: "orange",color:"white"}}>Reset</Button>
        </div>
        <div style ={{marginTop: "20px", display:'flex', justifyContent: "space-between"}}>
            <PrimaryButton onClick = {closeModal} >Cancel</PrimaryButton>
            <PrimaryButton onClick={saveTime} disabled={reset}>Save</PrimaryButton>
        </div>
        </Box>
      </Modal>
    </div>
  );
}