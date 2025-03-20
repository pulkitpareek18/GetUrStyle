import React from 'react';
import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <NavLink to="/" className="bg-black px-4 py-2">
              <span className="text-2xl font-bold text-white">GetUrStyle</span>
            </NavLink>
          </div>
          <div className="flex space-x-6">
            <NavLink 
              to="/privacy" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white font-semibold' : 'text-gray-300'}`
              }
            >
              Privacy Policy
            </NavLink>
            <NavLink 
              to="/terms"
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white font-semibold' : 'text-gray-300'}`
              }
            >
              Terms of Service
            </NavLink>
            <NavLink 
              to="/contact"
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white font-semibold' : 'text-gray-300'}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2025 GetUrStyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}