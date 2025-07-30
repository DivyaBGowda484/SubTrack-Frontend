// src/routes/index.jsx
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Expenses from "../pages/Expenses";
import Subscriptions from "../pages/Subscriptions";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import RootLayout from "../components/layout/RootLayout";
import ProtectedRoute from "../components/ui/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Dashboard /> },
      { path: "expenses", element: <Expenses /> },
      { path: "subscriptions", element: <Subscriptions /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default router;
