// src/components/MobileMenuButton.js
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

export default function MobileMenuButton({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 rounded-md text-gray-800 hover:text-pink-600 focus:outline-none transition-colors"
      aria-label={open ? "Close menu" : "Open menu"}
    >
      {open ? (
        <XMarkIcon className="h-6 w-6" />
      ) : (
        <Bars3Icon className="h-6 w-6" />
      )}
    </button>
  );
}