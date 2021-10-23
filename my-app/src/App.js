import React from 'react';
import './App.css';
import { MainContainer } from './Components/MainContainer/MainContainer';
import { Input } from './Components/Input/Input';
import {UserCard} from './Components/Card/UserCard';
import {Form} from './Components/Form/Form';

function App() {
  return (
    <MainContainer sx={{display: "flex"}}>
      <MainContainer sx={{width: "100%"}}>
      <Input
        id="searchInput"
        type="text"
        label="Enter participant name..."
      />
      <MainContainer sx={{display: "flex",
                          flexDirection: 'row',
                          flexWrap: 'wrap'}}>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </MainContainer>
      </MainContainer>
      <MainContainer>
        <Form/>
      </MainContainer>
    </MainContainer>
  );
}

export default App;
