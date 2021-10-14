import {
DATA,
NEXT_STEP,
PREVIOUS_STEP,
PICTURE,
} from '../Actions/Actions';


export const reducer = (state, action) => {
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
            if (action.payload.file.length === 0) {
				return {
					...state,
					img: state.img,
				};
			}
			let reader = new FileReader();
			reader.readAsDataURL(action.payload.file[0]);
			return { ...state, img: reader };
            default:
                return state;
    }
};