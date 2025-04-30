import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../services/api"; // Assuming you have an API function for registration

const RegisterPage = () => {

  const Navigate = useNavigate(); // Assuming you are using react-router-dom for navigation
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // For error handling
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page

    setLoading(true);
    setErrorMessage(""); // Clear previous errors

    // Validate inputs
    if (!inputs.fullName || !inputs.email || !inputs.password || !inputs.confirmPassword) {
      setLoading(false);
      setErrorMessage("All fields are required.");

      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
      return;
    }

    if (inputs.password !== inputs.confirmPassword) {
      setLoading(false);
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const newUser = {
        fullName: inputs.fullName,
        email: inputs.email,
        password: inputs.password,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Assuming `RegisterUser` is an API function that sends data to the backend
      const response = await registerUser(newUser, config);
      
      console.log(response);
    
      if (response.status === 200) {
        // If successful, navigate or show success message
        alert("Registration successful! Please log in.");
        // Navigate to login page
        Navigate("/");
      } else{
        setLoading(false);
        setErrorMessage(response?.message ||"Registration failed. Please try again.");
      }

    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrorMessage(error?.message||"Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-[24rem] mx-auto px-4 py-10">
      <div className="w-full p-6 rounded-2xl shadow-lg bg-white/5 backdrop-blur border border-zinc-600">
        <h1 className="text-3xl font-semibold text-center text-zinc-400">
          <span className="text-emerald-600 mb-2 block">
            Creator<span className="text-white">DASHBOARD</span>
          </span>
          Sign Up
        </h1>

        {errorMessage && <div className="text-red-500 text-center mt-4">{errorMessage}</div>}

        <form className="mt-6 space-y-4" onSubmit={handleRegister}>
          <div>
            <label className="block text-base text-zinc-300 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-base text-zinc-300 mb-1">Email</label>
            <input
              type="text"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-base text-zinc-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-base text-zinc-300 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 px-6 py-2 rounded-md bg-emerald-600 text-white hover:bg-white hover:text-emerald-600 border border-zinc-600 transition-colors"
              disabled={loading}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </div>

          <Link
            to="/"
            className="block text-sm text-right text-emerald-600 hover:text-white mt-4"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
