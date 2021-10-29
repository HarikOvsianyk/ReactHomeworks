export const SEARCH_COMPETITION = '[competitions] - search competitions';

export const searchCompetition = (data) => ({
    type: SEARCH_COMPETITION,
    payload: data
});