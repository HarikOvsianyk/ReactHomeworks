import React from 'react';
import { Input } from '../../UI/Input/Input';
import { searchCompetition } from '../../../Actions';
import {useDispatch} from 'react-redux';

export const SearchCompetition = () => {
  const dispatch = useDispatch();
    return (
        <Input
        id="searchInput"
        type="text"
        label="Enter contest name or id..."
        onChange = {(e) => dispatch(searchCompetition(e.target.value))}
      />
    )
}