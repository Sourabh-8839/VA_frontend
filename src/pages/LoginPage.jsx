import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {

  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  const [email, setEmail] = useState();

  const [username,setUsername] = useState();

  const [password, setPassword] = useState();

  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    setLoading(true);

    if (!email || !password) {
      setLoading(false);
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

      // console.log(user);

      if (user.status === 200) {

        setAccount(user.data);

        localStorage.setItem('userInfo', JSON.stringify(user.data));
        // Navigate('/chats');
        return;
      }

      setLoading(false);
    } catch (error) {
      
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-[24rem] mx-auto px-4 py-10">
      <div className="w-full p-6 rounded-2xl shadow-lg bg-white/5 backdrop-blur border border-zinc-600">
        <h1 className="text-3xl font-semibold text-center text-zinc-400">
          <span className="text-emerald-600 mb-2 block">
            Creator<span className="text-white">Dashboard</span>
          </span>
          Login
        </h1>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-base text-zinc-300 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-3 py-2 rounded-md bg-zinc-900 text-white border border-zinc-600 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            >
              Login
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
  );
};

export default LoginPage;
