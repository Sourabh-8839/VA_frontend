import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Adminpage from "./pages/Adminpage";
import DashboardPage from "./pages/DashboardPage";
import FeedPage from "./pages/FeedPage";
import ProtectedRoute from "./components/ProtectedComponent";
import AdminPage from "./pages/Adminpage";


function App() {
  return (
    // <div className='p-4 h-screen flex items-center justify-center'>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        {/* <Route path="/admin" element={<Adminpage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/feed" element={<FeedPage/>}/> */}
        
        <Route
            path="/admin"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <FeedPage />
              </ProtectedRoute>
            }
          />

        
      </Routes>
    </Router>
    // </div>
  );
}

export default App;