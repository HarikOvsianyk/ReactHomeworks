import React from 'react';
import {useSelector} from 'react-redux';
import { MainContainer } from '../MainContainer/MainContainer';
import UserCard from '../Card/UserCard';

export const UserList = () => {
    const users = useSelector((state) => state.users.users);
    return (
        <MainContainer sx={{display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap'}}>
            {
                users.map(elem => <UserCard key={elem.id}  user={elem}/>)
            }
        </MainContainer>
    )
}