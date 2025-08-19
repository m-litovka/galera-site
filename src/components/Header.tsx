import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Header = ({ currentPage = 'home', onNavigate }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (page: string, sectionId?: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
    if (sectionId && currentPage === 'home') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => handleNavigation('home')}
              >
                <img src="/public/logo-img.png" className="h-[35px] w-auto" />
              </button>
              <button 
                onClick={() => handleNavigation('home')}
                className="font-semibold text-gray-900 hover:text-neon-cyan-500 transition-colors"
              >
                GALERA
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/*<button 
              onClick={() => handleNavigation('home', 'what-we-do')}
              className="text-gray-700 hover:text-neon-cyan-500 transition-colors"
            >
              What we do
            </button>
            <button 
              onClick={() => handleNavigation('home', 'faq')}
              className="text-gray-700 hover:text-neon-cyan-500 transition-colors"
            >
              FAQ
            </button>*/}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Contact Us →
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            
            <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
                className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors w-fit"
              >
                Contact Us →
              </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {/*<button 
                onClick={() => {
                  handleNavigation('home', 'what-we-do');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-neon-cyan-500 text-left"
              >
                What we do
              </button>
              <button 
                onClick={() => {
                  handleNavigation('home', 'faq');
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-neon-cyan-500 text-left"
              >
                FAQ
              </button>*/}
              
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;