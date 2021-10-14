import React from 'react';
import { MainContainer } from './MainContainer';
import {Input, Typography} from "@material-ui/core";
import { useForm } from "react-hook-form";
import {Form} from './Form/Form';
import {PrimaryButton} from './Button/PrimaryButton';
import {PreviousButton} from './Button/PreviousButton';
import {useRegContext} from '../Actions/Actions';

export const Step3 = () => {
  const { prevStep, nextStep, picture } = useRegContext();
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data) => {
    picture(data);
		nextStep();
    };

/*     const handleFileChange = (event) => {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        console.log(reader.result);
      }   
    }; */
  
    return (
      <MainContainer>
        <Typography component="h2" variant="h5">
          Step 3
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
					{...register('file')}
					type="file"
					name="file"
          /* onChange = {handleFileChange} */
				/>
          <PreviousButton onClick={prevStep}>Previous</PreviousButton>
          <PrimaryButton>Next</PrimaryButton>
        </Form>
      </MainContainer>
    );
  };
