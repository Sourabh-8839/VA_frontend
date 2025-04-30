import { Navigate } from "react-router-dom";
import { useUser } from "./context/UserContext"; // Import user context

// ProtectedRoute component
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useUser(); // Get user from context

  // If the user is not logged in, redirect them to the login page
  if (!user) {
    return <Navigate to="/" />;
  }

  // If a role is required and the user's role does not match, redirect to a default page (e.g., /dashboard)
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/dashboard" />;
  }

  // If the user passes the authentication checks, render the children (the protected route)
  return children;
};

export default ProtectedRoute;