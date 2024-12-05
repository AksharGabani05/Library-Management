import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4">
       
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
       
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-xl font-semibold">Books-Library</h3>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Your one-stop solution for managing your library with ease.
            </p>
          </div>

         
          <div className="flex flex-col md:flex-row gap-6 text-sm text-center md:text-left">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/browsebook" className="hover:text-blue-500">Browse Books</Link>
            <Link to="/addbooks" className="hover:text-blue-500">Add Books</Link>
            <Link to="/contact" className="hover:text-blue-500">Contact Us</Link>
          </div>

          
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        
        <div className="border-t border-gray-600 mt-6 pt-4 text-center text-xs text-gray-400">
          <p>&copy; 2024 Books-Library. Akshar Gabani - <a href="https://github.com/AksharGabani05" target='_blank' className='text-white'>Github</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
