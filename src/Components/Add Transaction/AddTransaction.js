import React from "react";
import "./Transaction.css";

const AddTransaction = () => {
  return (
    <div className="addTransaction">
      <h4>Add new transaction</h4>
      <form>
        <div className="form-control">
          <label>Income/Expense</label>
          <input type="text" placeholder="Enter text" />
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input type="number" placeholder="Enter Amount" />
        </div>
        <button>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
