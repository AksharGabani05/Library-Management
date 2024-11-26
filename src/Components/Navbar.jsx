import { Link } from "react-router-dom";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [isSignupOpen, setIsSignupOpen] = useState(false); // For signup modal
  const [isSignedUp, setIsSignedUp] = useState(false); // For signup status
  const [username, setUsername] = useState(""); // Username input state
  const [password, setPassword] = useState(""); // Password input state

  const handleSignup = () => {
    if (!username || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Store signup data in localStorage
    localStorage.setItem(
      "signupData",
      JSON.stringify({ username, password })
    );

    // Simulate successful signup
    setIsSignedUp(true);
    setIsSignupOpen(false);

    // Show toast notification
    toast.success("Signup successful! Welcome to Books-Library!");
  };

  return (
    <>
      <nav className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 sticky top-0 z-20 shadow-md transition-shadow">
        <div className="container mx-auto flex justify-between items-center p-5">
          {/* Logo */}
          <h2 className="text-3xl font-bold text-white cursor-pointer">Books-Library</h2>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <input
              type="text"
              placeholder="Search Books..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md placeholder-gray-400 transition duration-200 ease-in-out w-72"
            />
            <ul className="flex items-center gap-6 text-lg font-medium text-white">
              <li className="hover:text-blue-200 transition-colors">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-blue-200 transition-colors">
                <Link to="/browsebook">Browse Books</Link>
              </li>
              {isSignedUp && (
                <li className="hover:text-blue-200 transition-colors">
                  <Link to="/addbooks">Add Books</Link>
                </li>
              )}
            </ul>
            {/* Signup Button */}
            {!isSignedUp && (
              <button
                onClick={() => setIsSignupOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Signup
              </button>
            )}
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <HiOutlineMenu
              className="w-8 h-8 text-white cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-0 left-0 w-full bg-gradient-to-r from-indigo-700 to-blue-600 text-white p-5 transform transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-white">Books-Library</h2>
            <HiOutlineX
              className="w-8 h-8 text-white cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
          <ul className="flex flex-col gap-4 mt-6">
            <li className="hover:text-blue-300 transition-colors">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-300 transition-colors">
              <Link to="/browsebook">Browse Books</Link>
            </li>
            {isSignedUp && (
              <li className="hover:text-blue-300 transition-colors">
                <Link to="/addbooks">Add Books</Link>
              </li>
            )}
          </ul>
          {/* Signup Button for Mobile */}
          {!isSignedUp && (
            <button
              onClick={() => setIsSignupOpen(true)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Signup
            </button>
          )}
        </div>

        {/* Signup Modal */}
        {isSignupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-lg font-semibold mb-4">Signup</h3>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
              />
              <button
                onClick={handleSignup}
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
              >
                Signup
              </button>
              <button
                onClick={() => setIsSignupOpen(false)}
                className="mt-4 w-full py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Toast Notification Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default Navbar;
