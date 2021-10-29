import React from "react";
import {MainContainer} from '../UI/MainContainer/MainContainer';
import {PrimaryButton} from '../UI/Button/PrimaryButton';
import Typography from '@mui/material/Typography';
import {useSelector, useDispatch} from 'react-redux';
import {getWinner, backTo} from '../../Actions/userActions';
 
export const Winner = () => {
    const {users, winner, isWinner} = useSelector(state => state.users);
    const dispatch = useDispatch();
    let empty = false; 
    if (!users.length) {
        empty = true;
    };
    return ( 
        <MainContainer sx={{mt: 5}}>
            {
                isWinner
                ?
                <div>
                    {
                        empty
                        ?
                        <h1>Users array is empty</h1>
                        :
                         <div>
                        <Typography component="h2" variant="h5" sx={{textAlign: 'center',mb:5}}>The Winner</Typography>
                        <Typography component="h2" variant="h5" sx={{textAlign: 'center',mb:5}}>ID: {winner.id}</Typography>
                        <Typography component="h2" variant="h5" sx={{textAlign: 'center',mb:5}}>Name: {winner.name}</Typography>
                        <Typography component="h2" variant="h5" sx={{textAlign: 'center',mb:5}}>Surname: {winner.second}</Typography>
                        <Typography component="h2" variant="h5" sx={{textAlign: 'center',mb:5}}>Time: {winner.time}</Typography>
                        <PrimaryButton onClick = {()=> dispatch(backTo())}>Back to initial state</PrimaryButton>
                         </div>
                    }
                </div>
                :
                <div>
                    
                    <Typography component="h2" variant="h5" sx={{textAlign: 'center',mb:5}}>Total participants {users.length}</Typography>
                    <PrimaryButton onClick = {() => dispatch(getWinner())}>Show winners</PrimaryButton>
                </div>
            }
        </MainContainer>
     );
}

export default Winner;