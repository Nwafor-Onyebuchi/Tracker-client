import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios, { get, post } from "axios";

// date = new Date()
//console.log(date)
const initialState = {
  transactions: [],
  error: null,
  loading: true
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  const getTransactions = async () => {
    try {
      const res = await get("/api/v1/transactions");
      //console.log(res.data.data)
      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: error.response.data.error
      });
    }
  };
  //console.log(state.transactions)
  const deleteTransaction = async _id => {
    try {
      await axios.delete(`/api/v1/transactions/${_id}`);

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: _id
      });
    } catch (error) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: error.response.data.error
      });
    }
  };

  const addTransaction = async (transaction) => {
   const config = {
      headers: {
        "Content-type": "application/json"
      }
    };

    try {
      const res = await post("/api/v1/transactions", transaction, config);
     
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data
      });
    } catch (error) {
        console.log(error.response)
        console.log(transaction)
        dispatch({
            type: "TRANSACTIONS_ERROR",
            payload: error.response.data.error
          });
    }
    
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
