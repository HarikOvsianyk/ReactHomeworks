import React from 'react';
import {useSelector} from 'react-redux';
import { MainContainer } from '../UI/MainContainer/MainContainer';
import UserCard from '../Card/UserCard';

export const UserList = () => {
    const users = useSelector((state) => state.users.filteredUsers);
    return (
        <MainContainer sx={{display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap'}}>
            {
                users.map(user => <UserCard key={user.id}  user={user}/>)
            }
        </MainContainer>
    )
}