import { Link } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="flex flex-col items-center justify-center min-w-[24rem] mx-auto px-4 py-10">
      <div className="w-full p-6 rounded-2xl shadow-lg bg-white/5 backdrop-blur border border-zinc-600">
        <h1 className="text-3xl font-semibold text-center text-zinc-400">
          <span className="text-emerald-600 mb-2 block">
          Creator<span className="text-white">DASHBOARD</span>
          </span>
          Sign Up
        </h1>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-base text-zinc-300 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Punit Shinde"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-base text-zinc-300 mb-1">Username</label>
            <input
              type="text"
              placeholder="punits97"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-base text-zinc-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-base text-zinc-300 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>


          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 px-6 py-2 rounded-md bg-emerald-600 text-white hover:bg-white hover:text-emerald-600 border border-zinc-600 transition-colors"
            >
              Sign Up
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
