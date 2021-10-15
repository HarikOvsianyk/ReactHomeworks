import React from 'react';
import { MainContainer } from './MainContainer';
/* import {Input, Typography} from "@material-ui/core"; */
import { Typography} from "@material-ui/core";
import { useForm } from "react-hook-form";
import {Form} from './Form/Form';
import {PrimaryButton} from './Button/PrimaryButton';
import {PreviousButton} from './Button/PreviousButton';
import {useRegContext} from '../Actions/Actions';
import { FileInput } from './FileInput';

export const Step3 = () => {
  const { prevStep, nextStep, picture, state } = useRegContext();
    const { control, handleSubmit } = useForm({
      defaultValues: {file: state.file}
    });
  
    const onSubmit = (data) => {
    picture(data);
    console.log(data);
		nextStep();
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
