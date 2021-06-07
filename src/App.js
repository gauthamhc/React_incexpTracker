import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Balance from "./Components/Balance/Balance";
import AddTransaction from "./Components/Add Transaction/AddTransaction";
import History from "./Components/History/History";

function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <History />
      <AddTransaction />
    </div>
  );
}

export default App;
