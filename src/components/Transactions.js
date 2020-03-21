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
      <ul id="list" className="list">
        {transactions.map(transaction =>(<Transaction key={transaction._id} transaction={transaction}/>))}
        
      </ul>
    </Fragment>
  );
};
