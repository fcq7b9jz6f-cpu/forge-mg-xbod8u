import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            أم كلثوم
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              الصفحة الرئيسية
            </Link>
            <Link to="/biography" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              السيرة الذاتية
            </Link>
            <Link to="/songs" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              أشهر الأغاني
            </Link>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                الصفحة الرئيسية
              </Link>
              <Link to="/biography" className="text-gray-700 hover:text-gray-900 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                السيرة الذاتية
              </Link>
              <Link to="/songs" className="text-gray-700 hover:text-gray-900 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                أشهر الأغاني
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;