import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Footer = () => {
  const { user } = useContext(AuthContext)
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm">
            We offer a comprehensive product experience with advanced features for browsing, searching, and filtering products efficiently.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <Link to="/" className="hover:text-white transition-colors duration-300">Home</Link>
            </li>
            {
              user && <>
                <li className="mb-2">
                  <Link to="/products" className="hover:text-white transition-colors duration-300">Products</Link>
                </li>
                <li className="mb-2">
                  <Link to="/profile" className="hover:text-white transition-colors duration-300">Profile</Link>
                </li>
              </>
            }
            {
              !user && <>
                <li className="mb-2">
                  <Link to="/login" className="hover:text-white transition-colors duration-300">Login</Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-white transition-colors duration-300">Register</Link>
                </li>
              </>
            }
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm mb-2">Email: theashrafislam@gmail.com</p>
          <p className="text-gray-400 text-sm mb-2">Phone: +880 1639-568198</p>
          <p className="text-gray-400 text-sm">Address: Nawabgonj, Dhaka, Bangladesh</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="www.facebook.com/theashrafislam" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaFacebook className='text-2xl' />
            </a>
            <a href="www.github.com/theashrafislam" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaGithub className='text-2xl' />
            </a>
            <a href="https://www.linkedin.com/in/theashrafislam/" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedin className='text-2xl' />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-500 text-sm mb-2">
          &copy; {new Date().getFullYear()} Search Craft. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Developed by Ashraful Islam
        </p>
      </div>
    </footer>
  );
};

export default Footer;