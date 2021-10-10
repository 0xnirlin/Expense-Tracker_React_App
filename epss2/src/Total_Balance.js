import React, { useState } from 'react'
import { useContext } from 'react'
import { BalanceContext } from './BalanceContext'
import { ExpenseContext } from './Context'


export const Total_Balance = () => {
    

        
    var add = 0;

    const [balance,setBalance] = useContext(BalanceContext)
    const [expenses,setexpenses] = useContext(ExpenseContext)
    expenses.map(expense => add = add + parseInt(expense.price) )
    setBalance(add)
    // const [expenses,se]
    // console.log(balance);
    return (
     
        <div className = "totalBalance">
        <h1>$ {balance}</h1>
    </div>
    )
}
