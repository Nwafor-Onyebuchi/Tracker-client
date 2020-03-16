import React from 'react'

export const Transaction = () => {
    return (
        <li className="minus">
          {transaction.narration}<span>{transaction.amount}</span>
          <button className="delete-btn">X</button>
        </li>
    )
}
