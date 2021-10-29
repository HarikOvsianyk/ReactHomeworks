import {SEARCH_COMPETITION, CREATE_COMPETITION} from '../../Actions';
import {id} from '../../utils';
import {competitions} from '../../Data/competitions';

export const initialState = {
    competitions: competitions,
    filteredComp: competitions,
} ;

export function competitionReducer  (state = initialState, action) {
    switch (action.type) {
        case SEARCH_COMPETITION: 
        const search = action.payload;
        if (search) {
            return {
                ...state,
                filteredComp: [...state.competitions.filter(competition=> competition.name.toLowerCase().includes(search.toLowerCase()) || competition.id.toLowerCase().includes(search.toLowerCase()))]}
            
        } else {
            return {
                ...state,
                filteredComp: state.competitions
            }
        };
        case CREATE_COMPETITION:
            return {
                ...state,
                competitions:[...state.competitions,{id:id(),status: false,...action.payload} ],
                filteredComp:[...state.filteredComp,{id:id(),status: false,...action.payload} ]
            };
        default:
            return state;
    }
};