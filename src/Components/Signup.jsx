import React from "react";
import notebookImage from "../Image.jpeg"; // Make sure this is correct
import { Link } from "react-router-dom";


const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg max-w-5xl w-full flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="flex-1 flex justify-center items-center">
          <div
            className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] bg-[#d2d2d7] rounded-xl flex flex-col justify-center items-center text-center p-4"
          >
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              Ready to plan your next event?
            </h1>
            <p className="text-gray-700 text-sm mb-4">
              Discover tools that simplify event management!
            </p>
            <img
              src={notebookImage}
              alt="Notebook"
              className="w-32 md:w-36 object-contain mb-4"
            />
            <p className="text-xs text-gray-600">
              Manage projects seamlessly from anywhere!
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-gray-50 p-6 rounded-xl mt-6 md:mt-0">
         <p className="text-right text-sm text-gray-600">
  Already a member?{" "}
  <Link to="/login" className="text-blue-600 hover:underline">
    Sign in
  </Link>
</p>
          <h2 className="text-lg font-semibold text-gray-800 mb-1">
            Get started for free
          </h2>
          <p className="text-xs text-gray-500 mb-4">
            Enjoy 14 days of full access. Cancel anytime.
          </p>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your unique username"
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none"
            />
            <input
              type="password"
              placeholder="Create a password"
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border rounded-md px-4 py-2 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md font-semibold"
            >
              Sign up
            </button>
          </form>

          <div className="text-center text-xs text-gray-500 my-3">or connect with</div>

          <div className="flex justify-between gap-2">
            <button className="bg-black text-white px-4 py-2 w-full rounded-md">Google</button>
            <button className="bg-black text-white px-4 py-2 w-full rounded-md">Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
