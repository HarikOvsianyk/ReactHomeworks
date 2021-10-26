import React from "react";
import {MainContainer} from '../UI/MainContainer/MainContainer';
import {PrimaryButton} from '../UI/Button/PrimaryButton';
import Typography from '@mui/material/Typography';
import {useSelector} from 'react-redux';
 
export const Winner = () => {
    const users = useSelector(state => state.users.users);
    console.log(users);
    return ( 
        <MainContainer sx={{mt: 5}}>
            <Typography component="h2" variant="h5" sx={{textAlign: 'center',
                                                        mb:5}}>Total participants {users.length}</Typography>
            <PrimaryButton>Show winners</PrimaryButton>
        </MainContainer>
     );
}

export default Winner;