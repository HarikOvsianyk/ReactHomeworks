import React from 'react';
import { Input } from '../UI/Input/Input';
import { searchUser } from '../../Actions';
import {useDispatch} from 'react-redux';

export const Search = () => {
  const dispatch = useDispatch();
    return (
        <Input
        id="searchInput"
        type="text"
        label="Enter participant name..."
        onChange = {(e) => dispatch(searchUser(e.target.value))}
      />
    )
}