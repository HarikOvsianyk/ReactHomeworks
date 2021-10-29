import React from 'react';
import {useSelector} from 'react-redux';
import { MainContainer } from '../../UI/MainContainer/MainContainer';
import Competition from '../Competition/Competition';

export const CompetitionsList = () => {
    const competitions = useSelector((state) => state.competitions.filteredComp);
    console.log(competitions);
    return (
        <MainContainer sx={{display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap'}}>
            {
                competitions.map(competition => <Competition key={competition.id}  competition={competition}/>)
            }
        </MainContainer>
    )
}