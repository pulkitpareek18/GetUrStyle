import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <NavLink to="/" className="bg-black px-4 py-2">
              <span className="text-2xl font-bold text-white">GetUrStyle</span>
            </NavLink>
            <div className={`hidden md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'text-white font-semibold' : 'text-gray-300'}`
                }
              >
                Services
              </NavLink>
              <NavLink 
                to="/about"
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'text-white font-semibold' : 'text-gray-300'}`
                }
              >
                About
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
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 px-4">
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white font-semibold' : 'text-gray-300'}`
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/about"
              className={({ isActive }) => 
                `nav-link ${isActive ? 'text-white font-semibold' : 'text-gray-300'}`
              }
            >
              About
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
        )}
      </div>
    </nav>
  );
}