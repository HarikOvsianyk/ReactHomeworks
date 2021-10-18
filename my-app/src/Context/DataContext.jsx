import React, { useReducer, createContext, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({children,reducer, initialState}) => {
    const [state, disptach] = useReducer(reducer, initialState);
    return (
        <DataContext.Provider value={[state, disptach]}>
            {children}
        </DataContext.Provider>
    )
};


export const useData = () => useContext(DataContext);