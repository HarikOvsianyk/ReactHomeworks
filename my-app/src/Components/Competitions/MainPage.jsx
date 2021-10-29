
import React from 'react';
import { MainContainer } from './../UI/MainContainer/MainContainer';
import {CompetitionsList} from './CompetitionsList/CompetitionsList';
import {SearchCompetition} from './SearchCompetition/SearchCompetition';
import { NewCompetition } from './NewCompetition/NewCompetition';


export const MainPage = () => {
  return (
    <MainContainer sx={{display: "flex"}}>
      <MainContainer sx={{width: "100%"}}>
      <SearchCompetition />
      <CompetitionsList />
      </MainContainer>
      <MainContainer sx ={{mt:20}}>
          <NewCompetition />
      </MainContainer>
    </MainContainer>
  );
};