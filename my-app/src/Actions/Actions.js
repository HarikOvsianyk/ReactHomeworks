import React, { useContext, useReducer } from 'react';
import {RegContext} from '../Context/DataContext';
import {reducer} from '../Reducer/Reducer';

export const DATA = 'data';
export const NEXT_STEP = 'next step';
export const PREVIOUS_STEP = 'previous step';
export const PICTURE = 'picture';

export const Actions = ({children}) => {
    const initialState = {
		data: {},
		step: 1,
		img: '',
	};

    const [state, dispatch] = useReducer(reducer, initialState);

    const setValues = (values) => {
		dispatch({
			type: DATA,
			payload: values,
		});
	};

	const picture = (pic) => {
		dispatch({
			type: PICTURE,
			payload: pic,
		});
	};

	const nextStep = () => {
		dispatch({
			type: NEXT_STEP,
			payload: 1,
		});
	};
	const prevStep = () => {
		dispatch({
			type: PREVIOUS_STEP,
			payload: 1,
		});
	};

    const value = {
		setValues,
		nextStep,
		prevStep,
		picture,
		state,
	};

    return (
		<RegContext.Provider value={value}>
			{children}
		</RegContext.Provider>
	);
} 

export const useRegContext = () => useContext(RegContext);
