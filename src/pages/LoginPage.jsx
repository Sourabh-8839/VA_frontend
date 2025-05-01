import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../services/api";
import { useData } from "../context/context";

const LoginPage = () => {
  
  const Navigate = useNavigate(); // Assuming you are using react-router-dom for navigation
  const { setAccount } = useData();
  const [email, setEmail] = useState();

  // const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Added for error handling

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    setLoading(true);
    setErrorMessage(""); // Clear previous errors

    if (!email || !password) {
      setLoading(false);
      setErrorMessage("Username and Password are required!"); // Set error message

      // Clear error message after 3 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return;
    }

    try {
      const User = {
        email: email,
        password: password,
      };

      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };


      const user = await LoginUser(User, config);

      if (user.status === 200) {
        setAccount(user.data);
        localStorage.setItem('userInfo', JSON.stringify(user.data.data));

        Navigate('/dashboard');

        return;
      }else{
        setLoading(false);
        setErrorMessage(user.message); // Set error message from API response

        // Clear error message after 3 seconds
        setTimeout(() => {
          setErrorMessage("");
        }, 3000);
      }

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMessage("Login failed, please try again.");

      // Clear error message after 3 seconds
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
  <div className='p-4 h-screen flex items-center justify-center'>
    <div className="flex flex-col items-center justify-center min-w-[24rem] mx-auto px-4 py-10">
      <div className="w-full p-6 rounded-2xl shadow-lg bg-white/5 backdrop-blur border border-zinc-600">
        <h1 className="text-3xl font-semibold text-center text-zinc-400">
          <span className="text-emerald-600 mb-2 block">
            Creator<span className="text-white">Dashboard</span>
          </span>
          Login
        </h1>

        {errorMessage && (
          <div className="text-red-500 text-center mt-4">{errorMessage}</div> // Display error message
        )}

        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-base text-zinc-300 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
             
            />
          </div>

          <div>
            <label className="block text-base text-zinc-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 px-6 py-2 rounded-md bg-emerald-600 text-white hover:bg-white hover:text-emerald-600 border border-zinc-600 transition-colors"
              onClick={submitHandler}
              disabled={loading} // Disable button while loading
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>

          <Link
            to="/signup"
            className="block text-sm text-right text-emerald-600 hover:text-white mt-4"
          >
            Don&apos;t have an account?
          </Link>
        </form>
      </div>
    </div>

  </div>
  );
};

export default LoginPage;
