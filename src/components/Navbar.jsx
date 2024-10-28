import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 border-b border-[#f3be26]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <span className="text-[#f3be26] text-xl font-bold">Пиво да Пиво</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-[#f3be26] px-3 py-2 rounded-md">
                Главная
              </Link>
              <Link to="/catalog" className="text-gray-300 hover:text-[#f3be26] px-3 py-2 rounded-md">
                Каталог
              </Link>
              <Link to="/franchise" className="text-gray-300 hover:text-[#f3be26] px-3 py-2 rounded-md">
                Франшиза
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-gray-300 hover:text-[#f3be26] block px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/catalog"
              className="text-gray-300 hover:text-[#f3be26] block px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Каталог
            </Link>
            <Link
              to="/franchise"
              className="text-gray-300 hover:text-[#f3be26] block px-3 py-2 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Франшиза
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;