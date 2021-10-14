import React from 'react';
import { MainContainer } from './MainContainer';
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import {Form} from './Form/Form';
import {Input} from './Input/Input';
import {PrimaryButton} from './Button/PrimaryButton';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRegContext} from '../Actions/Actions';

const schema = yup.object().shape({
    firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is required field"),
    lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is required field"),
    email:yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
})

export const Step1 = () => {
    const {nextStep, setValues, state} = useRegContext();
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {fistName:state.firstName, lastName:state.lastName, email: state.email },
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
		setValues(data);
		nextStep();
    }
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">Step 1</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                {...register('firstName')} 
                id="firstName"
                type="text"
                label="First Name"
                name="firstName"
                error={!!errors.firstName}
                helperText={errors?.firstName?.message}/>
                <Input 
                {...register('lastName')} 
                id="lastName" 
                type="text" 
                label="Last Name" 
                name="lastName"
                error={!!errors.lastName}
                helperText={errors?.lastName?.message}/>
                <Input 
                {...register('email')} 
                id="email" 
                type="email" 
                label="Email" 
                name="email"
                required
                error={!!errors.email}
                helperText={errors?.email?.message}/>
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    )
} 