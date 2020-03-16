import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import {Cashflow} from './components/Cashflow'
import {Transactions} from './components/Transactions' 
import {AddTransaction} from './components/AddTransaction' 
import {GlobalProvider} from './context/GlobalState'

function App() {
  return (
    <GlobalProvider className="app">
      <Header name="Expense Tracker" />
      <div className="container">
        <Balance />
        <Cashflow />
        <Transactions />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
