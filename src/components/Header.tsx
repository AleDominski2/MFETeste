import React from 'react';
import { Building2, Search, Heart, User, Menu } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-blue-700" />
            <span className="text-xl font-bold text-gray-900">GalpãoMax</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-blue-700' 
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Início
            </a>
            <a 
              href="#listings" 
              className={`text-sm font-medium transition-colors ${
                currentPage === 'listings' 
                  ? 'text-blue-700' 
                  : 'text-gray-700 hover:text-blue-700'
              }`}
            >
              Galpões
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
              Anunciar
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors">
              Contato
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-colors">
              <Heart className="h-5 w-5" />
              <span className="text-sm">Favoritos</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-colors">
              <User className="h-5 w-5" />
              <span className="hidden md:inline text-sm">Entrar</span>
            </button>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};