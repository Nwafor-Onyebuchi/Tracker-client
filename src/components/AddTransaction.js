import React, { Fragment, useState, useContext } from "react";
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
        const [state, setstate] = useState({
            transaction: '',
            amount: ''
        })
const handleTransactionInput = (e) =>{
    setstate({...state, transaction:e.target.value})
}

const handleAmountInput = (e) =>{
    setstate({...state, amount:e.target.value})
}
 
const { addTransaction } = useContext(GlobalContext)
 
const show = (e) =>{
    e.preventDefault()

     const newTransaction = {
       id: Math.floor(Math.random() * 1000000000),
       naration: state.transaction,
       amount: +state.amount
     }

    addTransaction(newTransaction)
    // console.log(state.amount)
    // console.log(state.transaction)
  }
    
  return (
    <Fragment>
      <h3>Add transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="Transaction">Transaction</label>
          <input type="text" placeholder="Tap to add a transaction..." onChange={handleTransactionInput} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            <small></small>
          </label>
          <input type="number" value={state.amount} placeholder="Enter +value for income and -value for expense" onChange={handleAmountInput}/>
        </div>
        <button className='btn' onClick={show}>Add Transaction</button>
      </form>
    </Fragment>
  );
};
