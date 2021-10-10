import React, { Children, createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'

export const ExpenseContext = createContext();

export const ExpenseProvider = (props) => {
    const [expenses,setexpenses] = useState([
      
    ])
    const [balance, setBalance] = useState(0);
    return (
        <ExpenseContext.Provider value = {[expenses,setexpenses]} >
            {props.children}
        </ExpenseContext.Provider>
    )
}





