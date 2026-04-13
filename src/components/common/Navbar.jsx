import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiChevronDown, FiFileText, FiTarget, FiAward, FiLayers, FiUsers, FiInfo } from 'react-icons/fi';
import useDarkMode from '../../hooks/useDarkMode';

const MoonIcon = ({ size = 18 }) => (
  <svg 
    stroke="currentColor" 
    fill="none" 
    strokeWidth="2" 
    viewBox="0 0 24 24" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    height={size} 
    width={size} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const Navbar = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  const aboutLinks = [
    { name: 'RA6847', desc: 'PSC Law', icon: <FiFileText className="text-blue-600" />, color: 'bg-blue-50' },
    { name: 'Mission & Vision', desc: 'Our Goals', icon: <FiTarget className="text-red-600" />, color: 'bg-red-50' },
    { name: 'Hall of Fame', desc: 'Legends', icon: <FiAward className="text-yellow-600" />, color: 'bg-yellow-50' },
    { name: 'Procurement', desc: 'Logistics', icon: <FiLayers className="text-gray-600" />, color: 'bg-gray-50' },
    { name: 'Structure', desc: 'Leadership', icon: <FiUsers className="text-indigo-600" />, color: 'bg-indigo-50' },
    { name: 'PSC Profile', desc: 'History', icon: <FiInfo className="text-emerald-600" />, color: 'bg-emerald-50' },
  ];

  const isActive = (path) => location.pathname === path;

  // Added transition to text color for light mode support
  const navItemClass = (path) => `
    relative px-5 py-2 uppercase font-bold tracking-tight transition-colors duration-200 text-[10px]
    ${isActive(path) ? 'text-ph-blue dark:text-ph-yellow' : 'text-gray-700 dark:text-white hover:text-ph-blue dark:hover:text-ph-yellow'}
  `;

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 font-poppins">
      
      {/* 1. TOP BAR */}
      {/* Changed background and text colors to adapt to light/dark mode */}
      <div className="bg-gray-100/80 dark:bg-[#0a0a0a]/40 backdrop-blur-lg text-gray-800 dark:text-white text-[10px] py-0.5 px-4 md:px-10 flex justify-between items-center font-sans tracking-tight border-b border-gray-300 dark:border-white/10 relative z-30"> 
        <div className="flex items-center">
            <a 
              href="https://www.gov.ph" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold hover:text-ph-blue dark:hover:text-ph-yellow transition-colors pr-4"
            >
              GOVPH
            </a>
          
          <nav className="hidden xl:flex items-center border-l border-gray-300 dark:border-white/20">
            {/* HOME LINK */}
            <div className="relative flex flex-col items-center border-r border-gray-300 dark:border-white/20 h-full">
              <Link className={navItemClass('/')} to="/">Home</Link>
              {isActive('/') && <div className="absolute -bottom-[6px] w-full h-[2.5px] bg-ph-blue dark:bg-ph-yellow" />}
            </div>
            
            {/* ABOUT US - HOVER DROPDOWN */}
            <div className="relative group border-r border-gray-300 dark:border-white/20 h-full flex items-center">
              <button className={`flex items-center px-5 gap-1 uppercase font-bold text-[10px] transition-all group-hover:text-ph-blue dark:group-hover:text-ph-yellow ${location.pathname.includes('/about') ? 'text-ph-blue dark:text-ph-yellow' : ''}`}>
                About Us <FiChevronDown className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              {location.pathname.includes('/about') && <div className="absolute -bottom-[6px] left-0 w-full h-[2.5px] bg-ph-blue dark:bg-ph-yellow" />}
              
              {/* COMPACT DARK GLASS DROPDOWN CARD */}
              <div className="absolute top-[100%] left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out translate-y-2 group-hover:translate-y-0 z-50">
                <div className="w-[380px] bg-white/70 dark:bg-[#0a0a0a]/80 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden p-4 border border-gray-200 dark:border-white/10">
                  
                  <div className="mb-3">
                    <h3 className="text-ph-blue dark:text-ph-yellow font-bold text-[12px] tracking-tight border-b border-gray-200 dark:border-white/5 pb-2">
                      About the Commission
                    </h3>
                  </div>

                  {/* Grid Layout */}
                  <div className="grid grid-cols-2 gap-2">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={`/about/${link.name.toLowerCase().replace(/ /g, '-')}`}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all border border-transparent hover:border-gray-200 dark:hover:border-white/10 group/item"
                      >
                        <div className={`p-2 rounded-lg ${link.color.replace('bg-', 'bg-opacity-20 dark:bg-opacity-20 bg-')} transition-transform group-hover/item:scale-105`}>
                          {React.cloneElement(link.icon, { size: 14, className: link.icon.props.className.replace('text-', 'text-opacity-90 text-') })}
                        </div>
                        
                        <div className="overflow-hidden">
                          <p className="text-gray-800 dark:text-gray-100 font-bold text-[10px] leading-none mb-1 truncate">
                            {link.name}
                          </p>
                          <p className="text-gray-500 text-[8px] font-medium truncate uppercase tracking-tighter">
                            {link.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>        
                </div>
              </div>
            </div>

            {/* OTHER NAV LINKS */}
            {['Transparency Seal', 'The Podium', 'Careers', 'Contact Us'].map((item) => {
              
              // FIX: If the item is Transparency Seal, force the path to '/transparency'
              const path = item === 'Transparency Seal' 
                ? '/transparency' 
                : `/${item.toLowerCase().replace(/ /g, '-')}`;
              
              return (
                <div key={item} className="relative flex flex-col items-center border-r border-gray-300 dark:border-white/20 last:border-r-0">
                  <Link className={navItemClass(path)} to={path}>{item}</Link>
                  {isActive(path) && <div className="absolute -bottom-[6px] w-full h-[2.5px] bg-ph-blue dark:bg-ph-yellow" />}
                </div>
              );
              
            })}
          </nav>
        </div>

        <div className="hidden sm:block opacity-80 uppercase font-medium">
          Philippine Standard Time: <span className="font-bold text-ph-blue dark:text-ph-yellow ml-1">{formatDate(currentTime)} | {formatTime(currentTime)}</span>
        </div>
      </div>

      {/* 2. MAIN BRANDING BAR */}
      <div className="relative z-10 bg-white/50 dark:bg-gray-900/40 backdrop-blur-2xl py-2 px-4 md:px-10 flex justify-between items-center border-b border-gray-200 dark:border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"> 
        <div className="flex items-center gap-3">
          <Link to="/">
            <img alt="PSC Favicon" className="h-10 md:h-12 w-auto object-contain block" src="/favicon.svg" />
          </Link>
          <Link to="/">
            <img alt="PSC Banner Text" className="h-6 md:h-8 w-auto object-contain block" style={{ filter: theme === 'light' ? 'brightness(0)' : 'none' }} src="/logo_banner_text.png" />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-gray-100/30 dark:bg-gray-800/30 backdrop-blur-md border border-gray-200/50 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-ph-blue dark:hover:text-ph-yellow transition-all shadow-sm hover:shadow-md"
          >
            {/* Shows the Moon in light mode. Shows Sun in dark mode. */}
            {theme === 'light' ? <MoonIcon size={18} /> : <FiSun size={18} />}
          </button>
        </div>
      </div>

      <div className="h-[2px] bg-gradient-to-r from-ph-blue via-ph-red to-ph-yellow w-full" />
    </header>
  );
};

export default Navbar;