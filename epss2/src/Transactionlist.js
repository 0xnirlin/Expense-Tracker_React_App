import React, { useContext } from 'react'
import { ExpenseContext } from './Context'
import { Transaction } from './Transaction'
export const Transactionlist = () => {
    const [expenses,setexpenses] = useContext(ExpenseContext);
    return (
        <div className = "trl">
            {
            
                expenses.map(expense => 
                <Transaction item = {expense.item} price = {expense.price} key = {expense.id} />    
                
            )}
     
        </div>
    )
}

{/* <div className = "movieComp">
       
       {
           movies.map(movie=>
            (
                
                <Movie name = {movie.name} price = {movie.price} key = {movie.id}  />
            
            ))
       }
    
</div>
) */}