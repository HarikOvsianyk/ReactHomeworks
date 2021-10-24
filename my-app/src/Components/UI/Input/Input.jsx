import React from 'react';
import TextField from '@mui/material/TextField';

export const Input = ({props, ref}) => {
    return (
        <TextField 
        inputRef={ref} 
        variant="outlined"
        margin="normal"
        fullWidth
        {...props} />
    );
}; 