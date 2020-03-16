import React, { Fragment, useContext } from "react";
import {GlobalContext} from '../context/GlobalState'
import Transaction from './Transaction'


export const Transactions = () => {

  const {transactions} = useContext(GlobalContext)
console.log(transactions)

  return (
    <Fragment>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction =>(<Transaction key ={id}/>))}
        
      </ul>
    </Fragment>
  );
};
