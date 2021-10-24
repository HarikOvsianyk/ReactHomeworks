import React from 'react';
import { MainContainer } from '../MainContainer/MainContainer';
import Typography from '@mui/material/Typography';
import { Input } from '../UI/Input/Input';
import PrimaryButton from '../UI/Button/PrimaryButton';
import yup from 'yup';

export const Form = () => {
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">Registration user</Typography>
            <form>
            <Input
                id="firstName"
                type="text"
                label="Enter fisrt name..."
            />
            <Input
                id="secondName"
                type="text"
                label="Enter second name..."
            />
            </form>
            <PrimaryButton>Register participant</PrimaryButton>
        </MainContainer>
    )
}