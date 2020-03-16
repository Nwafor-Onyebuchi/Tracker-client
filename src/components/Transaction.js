import React from "react";

export const Transaction = ({ transaction }) => {
  //console.log(transaction)
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.narration}
      <span>
        {sign}N {Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn">X</button>
    </li>
  );
};
