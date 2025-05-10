
import { navLinks, authLinks } from '../config/navLink.js';
import { useState, useEffect } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, ChevronUpIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import CustomButton from './CustomButton';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full top-0 left-0 z-50 transition-all duration-500 ${
        isSticky
          ? 'fixed bg-white shadow-sm py-3'
          : 'absolute bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-2xl font-semibold flex items-center space-x-2">
          <EnvelopeIcon className="w-6 h-6 md:w-10 md:h-20 text-pink-600" />
          <span className="text-pink-600 font-extrabold text-[calc(1.375rem+1.5vw)] leading-tight">
            Mailler
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((item) => {
            if (item.type === 'link') {
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-base font-normal transition-colors duration-500 ${
                    isSticky ? 'py-2' : 'py-4'
                  } text-gray-800 hover:text-pink-600`}
                >
                  {item.label}
                </Link>
              );
            } else if (item.type === 'dropdown') {
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center text-base font-normal transition-all duration-500 ${
                      isSticky ? 'py-2' : 'py-4'
                    } text-gray-800 hover:text-pink-600`}
                  >
                    {item.label}
                    <ChevronDownIcon className="ml-2 w-3 h-3" />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-md transform transition-all duration-500 origin-top ${
                      dropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                    }`}
                  >
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-pink-600 hover:text-white"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {authLinks.map((link) => (
            <CustomButton
              key={link.label}
              to={link.path}
              label={link.label}
              variant={link.variant === 'outline' ? 'outline' : 'solid'}
              size="medium"
            />
          ))}
        </div>

        {/* Mobile Menu Toggle */}
       <button
  type="button"
  onClick={() => setMobileOpen(!mobileOpen)}
  className="lg:hidden p-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500"
>
  {mobileOpen ? (
    <XMarkIcon className="w-6 h-6" />
  ) : (
    <Bars3Icon className="w-6 h-6" />
  )}
</button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-lg px-4 pb-4 space-y-2">
          {navLinks.map((item) => {
            if (item.type === 'link') {
              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className="block py-3 px-2 text-gray-800 hover:bg-pink-50 rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </NavLink>
              );
            } else if (item.type === 'dropdown') {
              return (
                <div key={item.label} className="mb-2">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex justify-between items-center py-3 px-2 text-gray-800 hover:bg-pink-50 rounded"
                  >
                    <span>{item.label}</span>
                    {dropdownOpen ? (
                      <ChevronUpIcon className="w-3 h-3" />
                    ) : (
                      <ChevronDownIcon className="w-3 h-3" />
                    )}
                  </button>
                  {dropdownOpen && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.path}
                          className="block py-2 px-2 text-gray-600 hover:bg-pink-50 hover:text-pink-600 rounded"
                          onClick={() => {
                            setMobileOpen(false);
                            setDropdownOpen(false);
                          }}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return null;
          })}
          <div className="pt-3 space-y-3 border-t border-gray-100 mt-2">
            {authLinks.map((link) => (
              <CustomButton
                key={link.label}
                to={link.path}
                label={link.label}
                variant={link.variant === 'outline' ? 'outline' : 'solid'}
                size="medium"
                onClick={() => setMobileOpen(false)}
                fullWidth
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
}