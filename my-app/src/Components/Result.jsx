import React from 'react';
import {useRegContext} from '../Actions/Actions';
import { MainContainer } from './MainContainer';
import Typography from "@material-ui/core/Typography";

export const Result = () => {
    const { state } = useRegContext();
    const { firstName, lastName, email, city, street, build } =
		state.data;
    return (
        <MainContainer>
        <Typography component="h2" variant="h5">
          Thanks for registration
        </Typography>
        <div>
				<div>
					<img src={state.img.result} alt="card" />
				</div>
				<div>
					<div className="block">
						<p>Name: </p>
						<p className="data">{firstName}</p>
					</div>
					<div className="block">
						<p>Last Name: </p>
						<p className="data">{lastName}</p>
					</div>
					<div className="block">
						<p>Email: </p>
						<p className="data">{email}</p>
					</div>
					<div className="block">
						<p>City: </p>
						<p className="data">{city}</p>
					</div>
					<div className="block">
						<p>Street: </p>
						<p className="data">{street}</p>
					</div>
					<div className="block">
						<p>Build: </p>
						<p className="data">{build}</p>
					</div>
				</div>
			</div>
      </MainContainer>
    )
}