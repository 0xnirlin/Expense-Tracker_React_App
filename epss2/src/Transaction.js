import React from 'react'

export const Transaction = ({item,price,id}) => {
    return (
        <div className = "tr">
            <h3>{item}</h3>
            <p>$ {price}</p>
            
        </div>
    )
}
