import React from 'react';
import {useData} from '../Context/DataContext';
import { MainContainer } from './MainContainer';
import Typography from "@material-ui/core/Typography";

export const Result = () => {
    const [state] = useData();
	console.log(state);
    return (
        <MainContainer>
        <Typography component="h2" variant="h5">
          Thanks for registration
        </Typography>
        <div>
				<div>
					<img src={state.file.result} alt="card" />
				</div>
				<div>
					<div className="block">
						<p>Name: </p>
						<p className="data">{state.data.firstName}</p>
					</div>
					<div className="block">
						<p>Last Name: </p>
						<p className="data">{state.data.lastName}</p>
					</div>
					<div className="block">
						<p>Email: </p>
						<p className="data">{state.data.email}</p>
					</div>
					<div className="block">
						<p>City: </p>
						<p className="data">{state.data.city}</p>
					</div>
					<div className="block">
						<p>Street: </p>
						<p className="data">{state.data.street}</p>
					</div>
					<div className="block">
						<p>Build: </p>
						<p className="data">{state.data.build}</p>
					</div>
				</div>
			</div>
      </MainContainer>
    )
}