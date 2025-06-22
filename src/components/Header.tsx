
import React, { useState } from 'react';
import { Menu, X, Lock } from 'lucide-react';

interface HeaderProps {
  onAdminClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              <img src="logo-canine1.jpg" alt="" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">CANINE ANIMALERIE</h1>
              <p className="text-sm text-gray-600">Votre compagnon idéal vous attend !!</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('nos-chiens')} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Nos Chiens
            </button>
            <button 
              onClick={() => scrollToSection('races')} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Races
            </button>
            <button 
              onClick={() => scrollToSection('conseils')} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Conseils
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </button>
            
            {/* Admin Icon */}
            <button
              onClick={onAdminClick}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
              title="Connexion Admin"
            >
              <Lock className="w-5 h-5 text-gray-600" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-white border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('accueil')} 
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('nos-chiens')} 
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Nos Chiens
              </button>
              <button 
                onClick={() => scrollToSection('races')} 
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Races
              </button>
              <button 
                onClick={() => scrollToSection('conseils')} 
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Conseils
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >
                Contact
              </button>
              <button
                onClick={onAdminClick}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2"
              >
                <Lock className="w-4 h-4" />
                <span>Admin</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
