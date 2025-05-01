import { Navigate } from "react-router-dom";
import { useData } from "../context/UserContext";
 // Import user context

// ProtectedRoute component
const ProtectedRoute = ({ children, requiredRole }) => {
  const { account } = useData(); // Get user from context

  console.log(account);
  
  // If the user is not logged in, redirect them to the login page
  if (!account) {
    return <Navigate to="/" />;
  }

  // If a role is required and the user's role does not match, redirect to a default page (e.g., /dashboard)
  if (requiredRole && account.role !== requiredRole) {
    return <Navigate to="/dashboard" />;
  }

  // If the user passes the authentication checks, render the children (the protected route)
  return children;
};

export default ProtectedRoute;