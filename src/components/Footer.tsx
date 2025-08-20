import React from 'react';
import { Dribbble, Bean as Behance } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Company Info */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 sm:mr-8">
              <img src="/logo-img.png" className="h-[35px] w-auto" />
              <span className="font-semibold">Galera IT</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              {/*<div className="flex items-center space-x-2">
                <Dribbble className="w-4 h-4" />
                <span>UI/UX Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <Behance className="w-4 h-4" />
                <span>UI/UX Design</span>
              </div>*/}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-sm">
            <button 
              onClick={() => window.location.href = '#privacy'}
              className="hover:text-neon-cyan-400 transition-colors"
            >
              Privacy Policy
            </button>
            {/*<a href="#" className="hover:text-neon-cyan-400 transition-colors flex items-center whitespace-nowrap">
              <Behance className="w-4 h-4 mr-1" />
              Behance
            </a>
            <a href="#" className="hover:text-neon-cyan-400 transition-colors">X</a>
            <a href="#" className="hover:text-neon-cyan-400 transition-colors">YouTube</a>
            <a href="#" className="hover:text-neon-cyan-400 transition-colors">Clutch</a>*/}
            <a href="#" className="hover:text-neon-cyan-400 transition-colors">© 2025 Galera IT. All Rights Reserved</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;