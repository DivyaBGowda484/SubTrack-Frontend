// src/components/subscriptions/SubscriptionList.jsx
import React from 'react';
import SubscriptionCard from './SubscriptionCard';

const SubscriptionList = ({ subscriptions, onEdit, onDelete }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {subscriptions.map((sub) => (
      <SubscriptionCard
        key={sub.id}
        sub={sub}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
  </div>
);

export default SubscriptionList;
