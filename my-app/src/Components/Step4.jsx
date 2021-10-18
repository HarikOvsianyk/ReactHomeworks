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
    password: yup.string().min(3).required('Password is required'),
    password2: yup.string().min(3).required('Password is required'),
    
})

export const Step4 = () => {
    const [state, dispatch] = useData();
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {password: state.data.password, password2: state.data.password},
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        if (data.password !==data.password2) {
            return alert("Passwords must be identical")
        } else {
            dispatch(setValues(data));
            dispatch(nextStep());
        }   
    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">Step 4</Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input 
                {...register('password')}
                type="password"
                id="password"
                label="Password"
                name="password"
                error={!!errors.password}
                helperText={errors?.password?.message}/>
                <Input 
                {...register('password2')}
                type="password"
                id="password2"
                label="Confirm Password"
                name="password2"
                error={!!errors.password2}
                helperText={errors?.password2?.message}/>
                <PreviousButton onClick={()=> dispatch(prevStep())}>Previous</PreviousButton>
                <PrimaryButton>Submit</PrimaryButton>
            </Form>
        </MainContainer>
    )
} 