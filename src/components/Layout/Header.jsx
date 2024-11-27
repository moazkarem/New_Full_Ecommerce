import React, { useState } from 'react';
import {  Menu, X, Search, LogOut, Moon, Sun, ChevronDown , ShoppingBasket } from 'lucide-react';
import Logo from '../../assets/header/logo.png'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
<ShoppingBasket />
  const leftLinks = [
    { 
      name: 'Logout', 
      href: '#',
      icon: <LogOut className="w-4 h-4 inline-block mr-1" />
    },
    {
      name: 'En',
      href: '#',
      isDropdown: true,
      icon: <ChevronDown className="w-4 h-4 inline-block ml-1" />
    },
    {
      name: 'Cart',
      href: '#',
     
      icon: <ShoppingBasket className="w-4 h-4 inline-block ml-1" />
    },
    {
      name: 'Search',
      href: '#',
      icon: <Search className="w-4 h-4 inline-block mr-1" />
    },
   
  ];

  const rightLinks = [
    { name: 'Products', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Support', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Login', href: '#' },
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
   
  };

  return (
    <header  className="bg-primary shadow-sm relative  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white "
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>


          <nav className="hidden lg:flex items-center space-x-8">
            {leftLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.isDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsLangOpen(!isLangOpen)}
                      className="flex items-center text-header text-[14px] px-3 py-2  font-medium transition-colors duration-200"
                    >
                      {link.name}{link.icon}
                    </button>
                    {isLangOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5">
                        <div className="py-1" role="menu">
                          <a href="#" className="block px-4 py-2 text-header text-[14px]" role="menuitem">En</a>
                          <a href="#" className="block px-4 py-2 text-header text-[14px]" role="menuitem">Ar</a>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="flex items-center text-header text-[14px] px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {link.icon}{link.name}
                  </a>
                )}
              </div>
            ))}
            <button
              onClick={toggleTheme}
              className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              {isDark ? (
                <Sun className="w-4 h-4 inline-block text-header" />
              ) : (
                <Moon className="w-4 h-4 inline-block text-header" />
              )}
            </button>
          </nav>

          {/* Logo - Centered */}
          <div className="flex-shrink-0 flex items-center">
           <img src={Logo} alt='logo'/>
          </div>

          {/* Right Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {rightLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-header text-[14px] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>


      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
       
          {leftLinks.map((link) => (
            <div key={link.name}>
              {link.isDropdown ? (
                <>
                  <button
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="w-full flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                  >
                    {link.name}{link.icon}
                  </button>
                  {isLangOpen && (
                    <div className="pl-4">
                      <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">English</a>
                      <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md">Arabic</a>
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  {link.icon}{link.name}
                </a>
              )}
            </div>
          ))}
          {/* Theme Toggle - Mobile */}
          <button
            onClick={toggleTheme}
            className="w-full flex items-center px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 mr-2" /> Light Mode
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 mr-2" /> Dark Mode
              </>
            )}
          </button>
          {/* Mobile Right Links */}
          {rightLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;