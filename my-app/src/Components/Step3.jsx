import React from 'react';
import { MainContainer } from './MainContainer';
/* import {Input, Typography} from "@material-ui/core"; */
import { Typography} from "@material-ui/core";
import { useForm } from "react-hook-form";
import {Form} from './Form/Form';
import {PrimaryButton} from './Button/PrimaryButton';
import {PreviousButton} from './Button/PreviousButton';
import {useData} from '../Context/DataContext';
import { FileInput } from './FileInput';
import { picture, nextStep, prevStep } from '../Actions/Actions';

export const Step3 = () => {
  const [state, dispatch] = useData();
    const { control, handleSubmit } = useForm({
      defaultValues: {file: state.data.file}
    });
    
    const onSubmit = (data) => {
    dispatch(picture(data));
		dispatch(nextStep());
    };
  
    return (
      <MainContainer>
        <Typography component="h2" variant="h5">
          Step 3
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FileInput name="file" control={control}/>
          <PreviousButton onClick={prevStep}>Previous</PreviousButton>
          <PrimaryButton>Next</PrimaryButton>
        </Form>
      </MainContainer>
    );
  };
