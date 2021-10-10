import React, { Children, createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'

export const BalanceContext = createContext();

export const BalanceProvider = (props) => {

    const [balance, setBalance] = useState(0);

 
    return (
        <BalanceContext.Provider value = {[balance,setBalance]} >
            {props.children}
        </BalanceContext.Provider>
    )
}



