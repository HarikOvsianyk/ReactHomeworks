import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { MainContainer } from '../MainContainer/MainContainer';
import UserCard from '../Card/UserCard';
import { getUsers } from '../../Actions';
import {users} from '../../Data/users';

export const UserList = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getUsers(users))
    },[dispatch])

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