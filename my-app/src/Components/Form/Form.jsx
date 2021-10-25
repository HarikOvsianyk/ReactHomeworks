import React from 'react';
import { MainContainer } from '../MainContainer/MainContainer';
import Typography from '@mui/material/Typography';
import { Input } from '../UI/Input/Input';
import PrimaryButton from '../UI/Button/PrimaryButton';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useDispatch} from 'react-redux';
import { createUser } from '../../Actions';

export const Form = () => {
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is required field"),
        secondName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Second name should not contain numbers")
        .required("Second name is required field"),
    });

    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        dispatch(createUser(data));
    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">Registration user</Typography>
            <form noValidate>
            <Input
                {...register('firstName')}
                id="firstName"
                type="text"
                label="First name"
                placeholder = "Enter fisrt name.."
                error={!!errors.firstName}
                helperText={errors?.firstName?.message}
            />
            <Input
                {...register('secondName')}
                id="secondName"
                type="text"
                label="Second name"
                placeholder = "Enter second name.."
                error={!!errors.secondName}
                helperText={errors?.secondName?.message}
            />
            </form>
            <PrimaryButton onClick={handleSubmit(onSubmit)}>Register participant</PrimaryButton>
        </MainContainer>
    )
}