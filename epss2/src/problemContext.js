import React, { Children, createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'

export const ProblemContext = createContext();

export const ProblemProvider = (props) => {
    const [add, setadd] = useState('');
    
    const [spent, setspent] = useState('');
    var add_i = 0;
    var spent_i = 0

    expenses.map(expense => {
        if (parseInt(expense.price) > 0) {
            add_i = add_i + parseInt(expense.price);
            setadd(add_i);
           
        }
        else if (parseInt(expense.price) < 0) {
            spent_i = spent_i + Math.abs(parseInt(expense.price));
            setspent(spent_i);
            
        }
    })

    return (
        <ProblemContext.Provider value = {[expenses,setexpenses]} >
            {props.children}
        </ProblemContext.Provider>
    )
}




