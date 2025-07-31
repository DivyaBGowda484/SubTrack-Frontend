import React from "react";

const Subscriptions = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Subscriptions</h1>
        <button className="btn btn-primary">
          Add Subscription
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p className="text-gray-600 text-center py-8">
          No subscriptions found. Add your first subscription to get started.
        </p>
      </div>
    </div>
  );
};

export default Subscriptions;
