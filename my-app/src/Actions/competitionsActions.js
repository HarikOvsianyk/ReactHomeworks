export const SEARCH_COMPETITION = '[competitions] - search competitions';
export const CREATE_COMPETITION = '[competition] - create competition';
export const STATUS_COMPETITION = '[competition] - change status competition';

export const searchCompetition = (data) => ({
    type: SEARCH_COMPETITION,
    payload: data
});

export const createCompetition = (data) => ({
    type: CREATE_COMPETITION,
    payload: data
});

export const statusCompetition = (id, winner) => ({
    type: STATUS_COMPETITION,
    payload: {id, winner}
});