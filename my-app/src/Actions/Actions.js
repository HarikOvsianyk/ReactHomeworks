export const DATA = 'data';
export const NEXT_STEP = 'next step';
export const PREVIOUS_STEP = 'previous step';
export const PICTURE = 'picture';

export const setValues = (values) => (
	{
		type: DATA,
		payload: values,
	}
);

export const picture = (pic) => ({
	type: PICTURE,
	payload: pic,
});

export const nextStep = () => ({
	type: NEXT_STEP,
	payload: 1,
});

export const prevStep = () => ({
	type: PREVIOUS_STEP,
	payload: 1,
});

