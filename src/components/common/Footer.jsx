import React from 'react';

const Footer = () => {
  return (
    // Light mode: white, Dark mode: your deep blue
    <footer className="bg-white dark:bg-[#050D1E] border-t border-gray-200 dark:border-white/10 text-gray-900 dark:text-white pt-16 pb-8 font-poppins mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
         
          {/* Column 1: Logo */}
          <div className="flex justify-center lg:justify-start items-start">
            <img 
              src="/Coat_of_arms_of_the_Philippines.png" 
              alt="Republic of the Philippines Coat of Arms" 
              className="w-36 md:w-44 h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Column 2: Republic Info */}
          <div className="space-y-5">
            <h3 className="text-ph-yellow dark:text-ph-yellow font-bold text-[15px] uppercase tracking-wide">
              Republic of the Philippines
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-[13px] leading-relaxed">
              All content is in the public domain unless otherwise stated.
            </p>
            <p className="text-gray-500 dark:text-gray-300 text-[13px]">
              Contact Number:<br />
              <span className="font-medium text-gray-900 dark:text-white">8525-0808</span>
            </p>
          </div>

          {/* Column 3: About GOVPH */}
          <div className="space-y-5">
            <h3 className="text-ph-yellow dark:text-ph-yellow font-bold text-[15px] uppercase tracking-wide">
              About GOVPH
            </h3>
            <p className="text-gray-500 dark:text-gray-300 text-[13px] leading-relaxed">
              Learn more about the Philippine government, its structure, how government works and the people behind it.
            </p>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <a href="https://www.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-ph-yellow transition-colors">
                  GOVPH
                </a>
              </li>
              <li>
                <a href="https://www.officialgazette.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-ph-yellow transition-colors">
                  Official Gazette
                </a>
              </li>
              <li>
                <a href="https://data.gov.ph/index/home" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-ph-yellow transition-colors">
                  Open Data Portal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Government Links */}
          <div className="space-y-5">
            <h3 className="text-ph-yellow dark:text-ph-yellow font-bold text-[15px] uppercase tracking-wide">
              Government Links
            </h3>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <a href="https://op-proper.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-ph-yellow transition-colors">
                  Office of the President
                </a>
              </li>
              <li>
                <a href="https://ovp.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-ph-yellow transition-colors">
                  Office of the Vice President
                </a>
              </li>
              <li>
                <a href="https://legacy.senate.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-ph-yellow transition-colors">
                  Senate of the Philippines
                </a>
              </li>
              <li>
                <a href="https://www.congress.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-ph-yellow transition-colors">
                  House of Representatives
                </a>
              </li>
              <li>
                <a href="https://sc.judiciary.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-ph-yellow transition-colors">
                  Supreme Court
                </a>
              </li>
              <li>
                <a href="https://ca.judiciary.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-ph-yellow transition-colors">
                  Court of Appeals
                </a>
              </li>
              <li>
                <a href="https://sb.judiciary.gov.ph/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-ph-yellow transition-colors">
                  Sandiganbayan
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center pt-8 border-t border-gray-200 dark:border-white/10">
          <p className="text-gray-500 dark:text-gray-400 text-[11px] uppercase tracking-wider">
            ©All rights reserved Philippine Sports Commission 2025- 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;