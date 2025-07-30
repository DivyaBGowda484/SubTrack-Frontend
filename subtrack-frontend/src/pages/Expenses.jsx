import React from "react";
import ExpenseList from "../components/dashboard/ExpenseList";

const Expenses = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Expenses</h1>
      <ExpenseList />
    </div>
  );
};

export default Expenses;
