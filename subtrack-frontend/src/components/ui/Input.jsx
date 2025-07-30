// src/components/ui/Input.jsx
import React from "react";

const Input = ({ label, type = "text", value, onChange, placeholder, name, ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        {...props}
      />
    </div>
  );
};

export default Input;
