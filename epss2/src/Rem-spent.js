import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { BalanceContext } from './BalanceContext';
import { ExpenseContext } from './Context';

export const RemSpent = () => {
    
    const [item, setitem] = useState("");
    const [price, setprice] = useState("");
    
    const [expenses, setexpenses] = useContext(ExpenseContext);
    
    
    const [add, setadd] = useState('');
    
    const [spent, setspent] = useState('');
    var add_i = 0;
    var spent_i = 0



    const updateItem = (e) => {
        setitem(e.target.value);
        expenses.map(expense => {
    
            if (parseInt(expense.price) > 0) {
                add_i += parseInt(expense.price);
                setadd(add_i);
               
            }
            else if (parseInt(expense.price) < 0) {
                spent_i += Math.abs(parseInt(expense.price));
                setspent(spent_i);
                
            }
        })
    
        
        
    }

    const updatePrice = (e) => {
        setprice(e.target.value);
        expenses.map(expense => {
    
            if (parseInt(expense.price) > 0) {
                add_i += parseInt(expense.price);
                setadd(add_i);
               
            }
            else if (parseInt(expense.price) < 0) {
                spent_i += Math.abs(parseInt(expense.price));
                setspent(spent_i);
                
            }
        })
    
    }
   ;

    const addItems = (e) =>
    {
        e.preventDefault();
        var length = expenses.length
        expenses.map(expense => {
    
            if (parseInt(expense.price) > 0) {
                add_i += parseInt(expense.price);
                setadd(add_i);
               
            }
            else if (parseInt(expense.price) < 0) {
                spent_i += Math.abs(parseInt(expense.price));
                setspent(spent_i);
                
            }
        })
    
      
                if (item !== "" && price !== "") {
                    
                    setexpenses(prevexpenses => [...prevexpenses, { item: item, price: price, id : length }]);
                    
                    setitem("");
                    setprice("");
                    
                }
    }       
    // addItems()

    {
    
    const problem = () =>
    {
        expenses.map(expense => {
    
            if (parseInt(expense.price) > 0) {
                add_i += parseInt(expense.price);
                setadd(add_i);
               
            }
            else if (parseInt(expense.price) < 0) {
                spent_i += Math.abs(parseInt(expense.price));
                setspent(spent_i);
                
            }
        })
    
    }

    
    return (
        <div className="info">
            <div className="Expense">
                <div className="Rem" >
                    <p>Added</p>
                    <p>$ {add}</p>
                </div>
                <div className="Spent">
                    <p>Spent</p>
                    <p>$ {spent}</p>
                </div>
            </div>


            <form onSubmit = {addItems} >
                <input placeholder="Type" type="text" value={item} onChange={updateItem} onFocus = {problem}>
                </input>
                <input placeholder="Price" type="text" value={price} onChange={updatePrice}>
                </input>
                <button >Add</button>
            </form>

        </div>
    )
}


}