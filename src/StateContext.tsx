import React, { createContext, useContext, useReducer } from 'react';
import { initialState, reducer } from './contextapi';

const StateContext = createContext<any[]>([]);

interface StateProviderProps {
    children: JSX.Element | JSX.Element[];
            //type of 'children' in React TYPESCRIPT
}

export function StateProvider({ children }: StateProviderProps) {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <StateContext.Provider
            value={[ state, dispatch ]}            //sending useReducer's value as an object
        >
            { children }
        </StateContext.Provider>
    )
}

//** CUSTOM HOOKS
export const useStateValue = () => useContext<any[]>(StateContext);