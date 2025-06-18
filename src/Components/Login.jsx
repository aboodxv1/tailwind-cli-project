import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Optional: add authentication logic here
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">EventSphere Login</h2>

        <div className="flex gap-4 justify-center mb-6">
          <div className="border border-gray-300 rounded-lg px-4 py-3 w-1/2 text-center cursor-pointer hover:shadow-md">
            <h2 className="font-semibold text-lg">Client Access</h2>
            <p className="text-xs text-gray-500 mt-1">
              Access to event schedules, guest lists, and RSVP functionalities.
            </p>
          </div>

          <div className="border border-gray-300 rounded-lg px-4 py-3 w-1/2 text-center cursor-pointer hover:shadow-md">
            <h2 className="font-semibold text-lg">Admin Access</h2>
            <p className="text-xs text-gray-500 mt-1">
              Manage events, modify user roles, and oversee the entire EventSphere platform.
            </p>
          </div>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-3 px-3 py-2 border rounded-md focus:outline-none focus:ring"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 px-3 py-2 border rounded-md focus:outline-none focus:ring"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-right mt-2 text-gray-500 hover:underline cursor-pointer">
          Forgot Password?
        </p>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
