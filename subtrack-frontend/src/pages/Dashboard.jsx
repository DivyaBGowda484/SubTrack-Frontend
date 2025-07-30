import React from "react";
import DashboardOverview from "../components/dashboard/DashboardOverview";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <DashboardOverview />
    </div>
  );
};

export default Dashboard;
