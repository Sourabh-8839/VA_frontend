import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Adminpage from "./pages/Adminpage";
import DashboardPage from "./pages/DashboardPage";
import FeedPage from "./pages/FeedPage";


function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
			{/* <div className='absolute z-20 top-2 left-5 flex md:flex-col items-center justify-center rounded-2xl shadow-md mb-2 py-3 px-2 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border-2 border-zinc-600 overflow-auto'>
        <h1 className="text-xl font-semibold text-center text-zinc-400">
          <span className="text-emerald-600 mb-5">
          Creator<span className="text-white ">DASHBOARD</span>
          </span>
        </h1>
      </div> */}
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/admin" element={<Adminpage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/feed" element={<FeedPage/>}/>

        
      </Routes>
    </Router>
    </div>
  );
}

export default App;