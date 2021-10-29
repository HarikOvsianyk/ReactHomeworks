import React from 'react';
import { MainContainer } from '../../UI/MainContainer/MainContainer';
import Typography from '@mui/material/Typography';
import { Input } from '../../UI/Input/Input';
import PrimaryButton from '../../UI/Button/PrimaryButton';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useDispatch} from 'react-redux';

export const NewCompetition = () => {
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        name: yup
        .string()
        .matches(/^([^0-9]*)$/, "Contest name should not contain numbers")
        .required("Contest name is required field"),
    });

    const {register, handleSubmit,reset, formState: {errors}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        reset();
    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">Create contest</Typography>
            <form noValidate>
            <Input
                {...register('contestName')}
                id="contestName"
                type="text"
                label="Contest name"
                placeholder = "Enter contest name.."
                error={!!errors.contestName}
                helperText={errors?.contestName?.message}
            />
            </form>
            <PrimaryButton onClick={handleSubmit(onSubmit)}>Create</PrimaryButton>
        </MainContainer>
    )
}