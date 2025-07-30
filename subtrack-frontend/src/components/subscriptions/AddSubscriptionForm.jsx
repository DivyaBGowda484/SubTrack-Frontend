// src/components/subscriptions/AddSubscriptionForm.jsx
import React, { useState } from 'react';

const AddSubscriptionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', amount: '', frequency: '', nextPayment: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', amount: '', frequency: '', nextPayment: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded space-y-3">
      <input name="name" placeholder="Name" className="w-full border p-2 rounded" value={formData.name} onChange={handleChange} required />
      <input name="amount" type="number" placeholder="Amount" className="w-full border p-2 rounded" value={formData.amount} onChange={handleChange} required />
      <select name="frequency" className="w-full border p-2 rounded" value={formData.frequency} onChange={handleChange} required>
        <option value="">Frequency</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
      <input name="nextPayment" type="date" className="w-full border p-2 rounded" value={formData.nextPayment} onChange={handleChange} required />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Add Subscription</button>
    </form>
  );
};

export default AddSubscriptionForm;
