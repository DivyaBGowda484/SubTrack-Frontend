import React from "react";
import SubscriptionList from "../components/subscriptions/SubscriptionList";

const Subscriptions = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Subscriptions</h1>
      <SubscriptionList />
    </div>
  );
};

export default Subscriptions;
