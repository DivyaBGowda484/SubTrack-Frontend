import React from "react";

const Expenses = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Expenses</h1>
        <button className="btn btn-primary">
          Add Expense
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p className="text-gray-600 text-center py-8">
          No expenses found. Add your first expense to get started.
        </p>
      </div>
    </div>
  );
};

export default Expenses;
