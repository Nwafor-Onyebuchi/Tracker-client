import React, { Fragment, useState } from "react";

export const AddTransaction = () => {

        const [state, setstate] = useState({
            transaction: 0,
            amount: 0
        })
const handleTransactionInput = (e) =>{
    setstate({...state, transaction:e.target.value})
}

const handleAmountInput = (e) =>{
    setstate({...state, amount:e.target.value})
}
 
const show = (e) =>{
    e.preventDefault()
    console.log(state.amount)
    console.log(state.transaction)
  }
    
  return (
    <Fragment>
      <h3>Add transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="Transaction">Transaction</label>
          <input type="text" placeholder="Enter a transaction..." onChange={handleTransactionInput} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={state.amount} placeholder="Enter amount..." onChange={handleAmountInput}/>
        </div>
        <button className='btn' onClick={show}>Add Transaction</button>
      </form>
    </Fragment>
  );
};
