import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
//React.const [state, dispatch] = (reducer, initialState, init)
const initialState = {
    transactions: [
        {id: 1, narration: 'Bought shoes', amount: -2670},
        {id: 2, narration: 'Bought Books', amount: -590},
        {id: 3, narration: 'Received Cash gift', amount: 15000}
    ]
}

export const GlobalContext = createContext(initialState)

export const  GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (
        <GlobalContext.Provider value = {{
            transactions: state.transactions
        }}>
            {children}
        </GlobalContext.Provider>
    )
} 