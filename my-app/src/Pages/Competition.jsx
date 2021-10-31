import React from 'react';
import { Typography } from '@mui/material';
import { MainContainer } from '../Components/UI/MainContainer/MainContainer';
import {Form} from '../Components/Form/Form';
import {UserList} from '../Components/UserList/UserList';
import {Search} from '../Components/SearchBar/Search';
import {Winner} from '../Components/Winnerinfo/Winner';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';


function Competition() {
  const {winner,isWinner} = useSelector((state) => state.users);
  const {competitions} = useSelector((state) => state.competitions);
  const {id} = useParams();
  const getCompetitionName = () => {
      let name = ''
      competitions.map(el => {
          if(el.id === id) {
              name = el.name;
              console.log(el.id);
          }
          return el
      })
      return name
  }
  return (
    <MainContainer sx={{display: "flex"}}>
      <MainContainer sx={{width: "100%"}}>
      {
        isWinner
        ?
        <div>
          <Typography>ID: {id}</Typography>
          <Typography>Name: {getCompetitionName()}</Typography>
          <Typography>Name: {winner.name} {winner.second}</Typography>
          <Typography>Time: {winner.time}</Typography>
        </div>
        :
        ''
      }
      <Search />
      <UserList />
      </MainContainer>
      <MainContainer sx ={{mt:3}}>
        <Form/>
        <Winner competitionId={id}/>
      </MainContainer>
    </MainContainer>
  );
}

export default Competition;