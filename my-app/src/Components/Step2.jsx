import React from 'react';
import { MainContainer } from './MainContainer';
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import {Form} from './Form/Form';
import {Input} from './Input/Input';
import {PrimaryButton} from './Button/PrimaryButton';
import {PreviousButton} from './Button/PreviousButton';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useData} from '../Context/DataContext';
import { setValues, nextStep, prevStep } from '../Actions/Actions'; 

const schema = yup.object().shape({
    city: yup
    .string()
    .required(),
    street: yup
    .string()
    .required(),
    build:yup
    .string()
    .required(),
})

export const Step2 = () => {
    const [state, dispatch] = useData();
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {city: state.data.city, street: state.data.street, build: state.data.build},
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
		dispatch(setValues(data));
		dispatch(nextStep());
    }

    return (
        <MainContainer>
        <Typography component="h2" variant="h5">Step 2</Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input 
            {...register('city')} 
            id="city"
            type="text"
            label="City"
            name="city"
            error={!!errors.city}
            helperText={errors?.city?.message}/>
            <Input 
            {...register('street')} 
            id="street" 
            type="text" 
            label="Street" 
            name="street"
            error={!!errors.street}
            helperText={errors?.street?.message}/>
            <Input 
            {...register('build')} 
            id="build" 
            type="text" 
            label="Build" 
            name="build"
            error={!!errors.build}
            helperText={errors?.build?.message}/>
            <PreviousButton onClick={prevStep}>Previous</PreviousButton>
            <PrimaryButton>Next</PrimaryButton>
        </Form>
    </MainContainer>
    )
}