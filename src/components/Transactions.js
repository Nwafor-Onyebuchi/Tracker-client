import React, { Fragment, useContext, useEffect } from "react";
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transaction'


export const Transactions = () => {

  const {transactions, getTransactions} = useContext(GlobalContext)
//console.log(transactions)

useEffect(()=>{
  getTransactions()
}, [])

//console.log(transactions)

  return (
    <Fragment>
<h3>History</h3>
{transactions.length === 0 && (<small><i>Once you add a transaction, it will appear here</i></small>)}
{transactions.length === 1 && (<small><i>Great! You can tap a transaction to reveal delete button.</i></small>)}
{transactions.length > 1 && (<small><i>You can tap a transaction to reveal delete button</i></small>)}
      <ul id="list" className="list">
        {transactions.map(transaction =>(<Transaction key={transaction._id} transaction={transaction}/>))}
        
      </ul>
    </Fragment>
  );
};
