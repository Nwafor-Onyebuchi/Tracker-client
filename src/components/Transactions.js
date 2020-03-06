import React, { Fragment } from "react";

export const Transactions = () => {
  return (
    <Fragment>
      <h3>History</h3>
      <ul id="list" className="list">
        <li className="minus">
          Cash<span>N40, 058 </span>
          <button className="delete-btn">X</button>
        </li>
      </ul>
    </Fragment>
  );
};
