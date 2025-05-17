import { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { navLinks, authLinks } from '../config/navLink.js';
import CustomButton from './CustomButton';
import { logo } from '../assets/index.js';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full top-0 left-0 z-50 transition-all duration-500 ${
          isSticky ? 'fixed bg-white shadow-sm py-3' : 'absolute bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className=" font-semibold flex items-center space-x-2">
            <img src={logo} alt="company logo" height={10} width={250} />
          </Link>

          <div className="hidden lg:flex items-center space-x-6 ml-auto">
            {navLinks.map((item) => {
              if (item.type === 'link') {
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) =>
                      `text-base font-normal transition-colors duration-500 ${
                        isSticky ? 'py-2' : 'py-4'
                      } ${isActive ? 'text-blue-900' : 'text-gray-800 hover:text-blue-900'}`
                    }
                  >
                    {item.label}
                  </NavLink>
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
                      } text-gray-800 hover:text-blue-900`}
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
                        <NavLink
                          key={subItem.label}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm ${
                              isActive
                                ? 'bg-blue-900 text-white'
                                : 'text-gray-700 hover:bg-blue-900 hover:text-white'
                            }`
                          }
                          onClick={() => setDropdownOpen(false)}
                        >
                          {subItem.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}

            {authLinks.map((link) => {
              const isRegister = link.label.toLowerCase() === 'register';
              return isRegister ? (
                <button
                  key={link.label}
                  onClick={() => setShowRegisterModal(true)}
                  className="px-4 py-2 text-base rounded-full font-medium cursor-pointer border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white transition-all duration-300"
                >
                  {link.label}
                </button>
              ) : (
                <CustomButton
                  key={link.label}
                  to={link.path}
                  label={link.label}
                  variant={link.variant === 'outline' ? 'outline' : 'solid'}
                  size="medium"
                />
              );
            })}
          </div>

          {/* Hamburger Menu */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white shadow-lg px-4 pb-4 space-y-2">
            {navLinks.map((item) => {
              if (item.type === 'link') {
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    className="block py-3 px-2 text-gray-800 hover:bg-blue-50 rounded"
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
                      className="w-full flex justify-between items-center py-3 px-2 text-gray-800 hover:bg-blue-50 rounded"
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
                            className="block py-2 px-2 text-gray-600 hover:bg-blue-50 hover:text-blue-900 rounded"
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
              {authLinks.map((link) => {
                const isRegister = link.label.toLowerCase() === 'register';
                return isRegister ? (
                  <button
                    key={link.label}
                    onClick={() => setShowRegisterModal(true)}
                    className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-700"
                  >
                    {link.label}
                  </button>
                ) : (
                  <CustomButton
                    key={link.label}
                    to={link.path}
                    label={link.label}
                    variant={link.variant === 'outline' ? 'outline' : 'solid'}
                    size="medium"
                    onClick={() => setMobileOpen(false)}
                    fullWidth
                  />
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Register Modal */}
      <Transition appear show={showRegisterModal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setShowRegisterModal(false)}>
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-white/10 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-100 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-lg text-center font-medium leading-6 text-blue-900">
                    Register With Us
                  </Dialog.Title>
                  <form className="mt-4 space-y-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 text-blue-900 placeholder-blue-900"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 text-blue-900 placeholder-blue-900"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 text-blue-900 placeholder-blue-900"
                    />
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full border border-gray-300 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900 text-blue-900 placeholder-blue-900"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-1000 cursor-pointer"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="w-full border border-gray-300 text-gray-600 py-2 rounded-md hover:bg-gray-100 cursor-pointer"
                      onClick={() => setShowRegisterModal(false)}
                    >
                      Cancel
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
