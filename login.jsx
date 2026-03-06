import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">

      <div className="bg-zinc-900 p-8 rounded-xl shadow-lg w-80">

        <h2 className="text-white text-2xl font-bold text-center mb-6">
          QuickTV Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded-md bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-red-500"/>

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-md bg-zinc-800 text-white outline-none focus:ring-2 focus:ring-red-500"/>

        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold transition">
          Login
        </button>

        <p className="text-gray-400 text-sm text-center mt-4">
          Don't have an account? 
          <span className="text-red-500 cursor-pointer ml-1">Register</span>
        </p>

      </div>

    </div>
  );
};

export default Login;
