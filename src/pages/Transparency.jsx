import React, { useState } from 'react';
import { FiSearch, FiChevronDown, FiAward, FiFileText, FiExternalLink } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';

const Transparency = () => {
  const [openSection, setOpenSection] = useState('I');
  const [activeSub, setActiveSub] = useState('mandate');

  const sections = [
    {
      id: 'I',
      title: "I. AGENCY'S MANDATE AND FUNCTIONS; CONTACT INFORMATION AND ITS OFFICIALS",
      items: [
        { id: 'mandate', name: 'AGENCY MANDATE AND FUNCTION' },
        { id: 'contact', name: 'CONTACT INFORMATION AND ITS OFFICIALS' },
        { id: 'mission', name: 'MISSION AND VISION' }
      ]
    },
    { id: 'II', title: 'II. ANNUAL FINANCIAL REPORTS', items: [] },
    { id: 'III', title: 'III. DBM APPROVED BUDGET AND CORRESPONDING TARGETS', items: [] },
    { id: 'IV', title: 'IV. PROJECTS, PROGRAMS AND ACTIVITIES, BENEFICIARIES, AND STATUS OF IMPLEMENTATION', items: [] },
    { id: 'V', title: 'V. ANNUAL PROCUREMENT PLAN', items: [] },
  ];

  const legalMandates = [
    { text: 'The 1987 Constitution', isSub: false },
    { text: 'Republic Act 6847', isSub: false },
    { text: 'Implementing Rules and Regulations of RA 6847', isSub: true },
    { text: 'Republic Act 7160', isSub: false },
    { text: 'Republic Act 7549', isSub: false },
    { text: 'Republic Act 9064', isSub: false },
    { text: 'Republic Act 9155', isSub: false },
    { text: 'Implementing Rules and Regulations of RA 9155', isSub: true },
    { text: 'Executive Order No.44', isSub: false },
    { text: 'Executive Order No.63', isSub: false },
    { text: 'Executive Order No.79', isSub: false },
    { text: 'Executive Order No.81', isSub: false },
    { text: 'Implementing Rules and Regulations of Executive Order No. 81', isSub: true },
    { text: 'Executive Order No.535', isSub: false },
    { text: 'The UNESCO Charter', isSub: false },
  ];

  return (
    /* PAGE BACKGROUND */
    <div className="min-h-screen bg-gray-50 dark:bg-transparent pt-28 flex font-poppins overflow-hidden transition-colors duration-300">

      {/* ── LEFT SIDEBAR ── */}
      {/* Changed bg-white to bg-[#fafafa] for a very subtle contrast against the main content */}
      <div className="w-[380px] flex-shrink-0 border-r border-gray-200 dark:border-white/10 flex flex-col h-[calc(100vh-7rem)] relative z-20 bg-white dark:bg-transparent p-6 shadow-sm dark:shadow-none transition-colors duration-300">
        <h1 className="text-3xl font-black tracking-tighter uppercase mb-6">
          <span className="bg-gradient-to-r from-ph-blue to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            Transparency
          </span>
          <span className="text-gray-900 dark:text-white block text-4xl">Seal</span>
        </h1>

        {/* Search bar */}
        <div className="relative mb-8">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg py-2.5 pl-11 pr-4 text-sm text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none focus:border-ph-blue dark:focus:border-cyan-500/50 transition-all"
          />
        </div>

        <p className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4 pl-1">Dashboard</p>

        {/* Accordion */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {sections.map((section) => (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => setOpenSection(openSection === section.id ? '' : section.id)}
                // Made the hover states lighter and cleaner
                className={`w-full flex items-start gap-3 p-3 rounded-xl border transition-all text-left
                  ${openSection === section.id
                    ? 'bg-blue-50 dark:bg-white/10 border-blue-100 dark:border-white/10 shadow-sm'
                    : 'bg-transparent border-transparent hover:bg-gray-50 dark:hover:bg-white/5'
                  }`}
              >
                <span className={`text-[11px] font-black mt-0.5 ${openSection === section.id ? 'text-ph-blue dark:text-cyan-400' : 'text-gray-400'}`}>
                  {section.id}.
                </span>
                <span className={`text-[11px] font-bold leading-tight ${openSection === section.id ? 'text-ph-blue dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                  {section.title}
                </span>
                <FiChevronDown
                  className={`ml-auto mt-1 flex-shrink-0 transition-transform ${openSection === section.id ? 'rotate-180 text-ph-blue dark:text-cyan-400' : 'text-gray-400'}`}
                  size={14}
                />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openSection === section.id ? 'max-h-60 mt-2 ml-4' : 'max-h-0'}`}>
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSub(item.id)}
                    className={`group w-full flex items-center gap-3 py-2.5 px-4 rounded-lg transition-all mb-1
                      ${activeSub === item.id
                        ? 'bg-ph-blue/10 dark:bg-cyan-500/10 border border-ph-blue/20 dark:border-cyan-500/20'
                        : 'hover:bg-gray-100 dark:hover:bg-white/5'
                      }`}
                  >
                    <BsStars
                      size={12}
                      className={activeSub === item.id ? 'text-ph-yellow' : 'text-gray-400 group-hover:text-ph-yellow'}
                    />
                    <span className={`text-[10px] font-black uppercase tracking-wider text-left leading-tight
                      ${activeSub === item.id
                        ? 'text-ph-blue dark:text-yellow-400'
                        : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200'
                      }`}>
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT CONTENT ── */}
      {/* Changed to crisp white for maximum readability */}
      <div className="flex-1 h-[calc(100vh-7rem)] overflow-y-auto p-12 lg:p-20 custom-scrollbar bg-white dark:bg-transparent transition-colors duration-300">
        <div className="max-w-4xl mx-auto">

          {/* MANDATE */}
          {activeSub === 'mandate' && (
            <div>
              <header className="mb-12">
                <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 leading-[0.9]">
                  <span className="bg-gradient-to-r from-ph-blue to-blue-700 dark:from-yellow-200 dark:to-yellow-500 bg-clip-text text-transparent block">
                    PSC Legal Mandate
                  </span>
                  <span className="text-ph-red dark:text-cyan-400 block">And Functions</span>
                </h2>
                <p className="text-gray-500 font-medium">Click on the documents below to view the respective files.</p>
              </header>

              {/* Card */}
              <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-8 shadow-md dark:shadow-none">
                <ul className="flex flex-col gap-1">
                  {legalMandates.map((item, idx) => (
                    <li key={idx} className={`${item.isSub ? 'ml-10 mt-1 mb-3' : 'mt-2'}`}>
                      <a
                        href="#"
                        className="group flex items-center gap-4 w-fit py-1.5 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                      >
                        {item.isSub ? (
                          <div className="w-1.5 h-1.5 rounded-full bg-ph-yellow group-hover:bg-ph-blue dark:group-hover:bg-cyan-400 transition-colors" />
                        ) : (
                          <FiFileText size={16} className="text-gray-400 group-hover:text-ph-blue dark:group-hover:text-cyan-400 transition-colors" />
                        )}
                        <span className={`text-sm font-medium tracking-wide transition-colors
                          ${item.isSub
                            ? 'text-gray-500 group-hover:text-ph-blue dark:group-hover:text-cyan-300'
                            : 'text-gray-700 dark:text-gray-200 group-hover:text-ph-blue dark:group-hover:text-cyan-400'
                          }`}>
                          {item.text}
                        </span>
                        <FiExternalLink size={12} className="text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-ph-blue dark:group-hover:text-cyan-400 transition-all -ml-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* MISSION & VISION */}
          {activeSub === 'mission' && (
            <div>
              <header className="mb-16">
                <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                  <span className="bg-gradient-to-r from-ph-blue to-blue-700 dark:from-yellow-200 dark:to-yellow-500 bg-clip-text text-transparent block">
                    Vision And
                  </span>
                  <span className="text-ph-red dark:text-cyan-400 block">Mission</span>
                </h2>

                {/* Quote card */}
                <div className="flex items-center gap-8 p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-12 shadow-md dark:shadow-none">
                  <div className="w-20 h-20 rounded-full bg-ph-yellow/10 border border-ph-yellow/20 flex items-center justify-center flex-shrink-0">
                    <FiAward size={32} className="text-ph-yellow" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-[15px] font-medium leading-relaxed italic border-l-2 border-gray-200 dark:border-white/10 pl-6">
                    "A pearl buried inside a tightly-shut shell is practically worthless. Government information is a pearl, meant to be shared with the public in order to maximize its inherent value."
                  </p>
                </div>
              </header>

              <section className="space-y-16">
                <div>
                  <h3 className="text-2xl font-black text-ph-blue dark:text-yellow-400 uppercase tracking-tight mb-4">Vision</h3>
                  <p className="text-xl text-gray-800 dark:text-gray-200 font-bold leading-snug">
                    Solidifying the position of the Philippines as the Pearl of the Orient – a shining example for democratic virtue in the region.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-ph-blue dark:text-yellow-400 uppercase tracking-tight mb-4">Mission</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                    To inspire Filipinos in the civil service to be more open to citizen engagement; on the other hand, to invite the Filipino citizenry to exercise their right to participate in governance.
                  </p>
                </div>
              </section>
            </div>
          )}

          {/* Placeholder */}
          {activeSub !== 'mandate' && activeSub !== 'mission' && (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <FiFileText size={48} className="mb-4 opacity-20" />
              <p className="font-medium uppercase tracking-widest text-sm">Content Updating...</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Transparency;