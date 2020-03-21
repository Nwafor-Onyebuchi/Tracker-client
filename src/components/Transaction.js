import React, {useContext} from "react";
import {GlobalContext} from '../context/GlobalState'


export const Transaction = ({ transaction }) => {
const { deleteTransaction } = useContext(GlobalContext)
  //console.log(transaction)
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.naration}
      <span>
        {sign}N {Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={()=>deleteTransaction(transaction._id)}>X</button>
    </li>
  );
};
