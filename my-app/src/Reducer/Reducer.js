import {
DATA,
NEXT_STEP,
PREVIOUS_STEP,
PICTURE,
} from '../Actions/Actions';

export const initialState = {
    data: {},
    step: 1,
    file: [],
};

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case NEXT_STEP:
            return {
                ...state,
                step: state.step + action.payload,
            };
        case PREVIOUS_STEP:
            return {
                ...state,
                step: state.step - action.payload,
            };
        case DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                }
            };
        case PICTURE:	
			return {
                ...state,
                file: action.payload,
                 };
            default:
                return state;
    }
};