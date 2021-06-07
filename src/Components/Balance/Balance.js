import React from "react";
import "./Balance.css";

const Balance = () => {
  return (
    <div className="balance">
      <div className="totalBalance">
        <h3>Your Balance</h3>
        <p>$2356</p>
      </div>
      <div className="income-expense">
        <div className="income">
          <h3>Income</h3>
          <p>$5033</p>
        </div>
        <span></span>
        <div className="expense">
          <h3>Expense</h3>
          <p>$2305</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
