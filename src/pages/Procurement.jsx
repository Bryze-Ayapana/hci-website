import React, { useState, useCallback, useEffect } from 'react';
import { FiChevronDown, FiFileText, FiDownload } from 'react-icons/fi';
import { BsStars } from 'react-icons/bs';

const Procurement = () => {
  const [sidebarWidth, setSidebarWidth] = useState(350);
  const [isResizing, setIsResizing] = useState(false);
  const [openYear, setOpenYear] = useState('2026');
  const [activeDoc, setActiveDoc] = useState({
    year: '2026',
    title: 'April - Van Rental RFQ',
    file: '/RFQ04012026.pdf'
  });

  const startResizing = useCallback(() => setIsResizing(true), []);
  const stopResizing = useCallback(() => setIsResizing(false), []);
  const resize = useCallback((e) => {
    if (isResizing) {
      const newWidth = e.clientX;
      if (newWidth > 280 && newWidth < 550) setSidebarWidth(newWidth);
    }
  }, [isResizing]);

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  const procurementData = [
    { year: '2026', items: [{ id: 'apr-rfq', title: 'April - Van Rental RFQ', file: '/RFQ04012026.pdf' }] },
    { year: '2025', items: [{ id: 'dec-docs', title: 'December Docs', file: '/sample.pdf' }] },
    { year: '2024', items: [] },
  ];

  return (
    /* PAGE BACKGROUND */
    <div className="min-h-screen bg-gray-50 dark:bg-transparent pt-28 flex font-poppins overflow-hidden select-none transition-colors duration-300">

      {/* ── SIDEBAR ── */}
      <div
        style={{ width: `${sidebarWidth}px` }}
        className="flex-shrink-0 border-r border-gray-200 dark:border-white/10 flex flex-col h-[calc(100vh-7rem)] relative z-20 bg-white dark:bg-transparent shadow-sm dark:shadow-none transition-colors duration-300"
      >
        {/* Header */}
        <div className="p-6 pb-2">
          <h1
            className="font-black leading-[0.9] tracking-tighter uppercase"
            style={{ fontSize: `${Math.min(sidebarWidth / 10, 32)}px` }}
          >
            <span className="bg-gradient-to-r from-ph-blue to-blue-600 dark:from-ph-blue dark:to-blue-400 bg-clip-text text-transparent block">
              Bidding &
            </span>
            <span className="text-ph-red dark:text-ph-yellow block mt-0.5">Procurement</span>
          </h1>

          <div className="mt-5 space-y-2 border-l border-ph-red/40 pl-3">
            <p className="text-[9px] font-bold text-ph-red uppercase tracking-widest">
              Posted February 09, 2026
            </p>
            <ul className="space-y-1 text-gray-500 dark:text-gray-400 font-medium text-[10px] leading-tight">
              <li>PSC-RMSC | Accountant III</li>
              <li>PSC-RMSC | Project Evaluation Officer II</li>
              <li>PSC-RMSC | Administrative Aide (Clerk III)</li>
              <li>PSC-RMSC | Lifeguard</li>
            </ul>
            <button
              onClick={() => setActiveDoc({ year: '2026', title: 'Job Publication - February', file: '/PUBLICATION-FEBRUARY-2026-.pdf' })}
              className="inline-block mt-1 text-[9px] font-bold text-ph-blue dark:text-ph-yellow/70 hover:text-ph-red dark:hover:text-ph-yellow underline underline-offset-4 transition-all uppercase text-left"
            >
              (Click for more Information)
            </button>
          </div>

          <div className="h-[1px] w-full bg-gray-200 dark:bg-white/5 mt-6" />
        </div>

        {/* Accordion */}
        <div className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar">
          {procurementData.map((section) => (
            <div key={section.year} className="mb-1.5">
              <button
                onClick={() => setOpenYear(openYear === section.year ? '' : section.year)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg border transition-all duration-300
                  ${openYear === section.year
                    ? 'bg-ph-blue/10 dark:bg-white/10 border-ph-blue/20 dark:border-white/10 shadow-sm'
                    : 'bg-gray-50 dark:bg-transparent border-gray-200 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
              >
                <span className={`text-[13px] font-bold tracking-tight ${openYear === section.year ? 'text-ph-blue dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>
                  {section.year}
                </span>
                <FiChevronDown className={`text-xs transition-transform duration-300 ${openYear === section.year ? 'rotate-180 text-ph-blue dark:text-white' : 'text-gray-400'}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openYear === section.year ? 'max-h-60 opacity-100 mt-1' : 'max-h-0 opacity-0'}`}>
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveDoc({ ...item, year: section.year })}
                    className={`group w-full flex items-center justify-between py-2 px-3 pl-5 rounded-md transition-all mb-0.5
                      ${activeDoc.title === item.title
                        ? 'bg-gray-100 dark:bg-white/5'
                        : 'hover:bg-gray-100 dark:hover:bg-white/5'
                      }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <BsStars
                        className={`transition-colors ${activeDoc.title === item.title ? 'text-ph-yellow' : 'text-gray-400 group-hover:text-ph-yellow'}`}
                        size={14}
                      />
                      <span className={`text-[12px] font-semibold text-left transition-colors
                        ${activeDoc.title === item.title
                          ? 'text-ph-blue dark:text-ph-yellow'
                          : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200'
                        }`}>
                        {item.title}
                      </span>
                    </div>
                    <span className="text-ph-red text-[9px] font-black tracking-tighter uppercase mr-2 opacity-80 group-hover:opacity-100 transition-opacity">
                      PDF
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Drag Handle */}
        <div
          onMouseDown={startResizing}
          className="absolute top-0 right-0 w-1.5 h-full cursor-col-resize hover:bg-ph-blue/20 dark:hover:bg-ph-yellow/30 z-50 group"
        >
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[1px] h-20 bg-gray-300 dark:bg-white/10 group-hover:bg-ph-blue dark:group-hover:bg-ph-yellow/50" />
        </div>
      </div>

      {/* ── PDF PANEL ── */}
      <div className="flex-1 min-w-0 bg-gray-100 dark:bg-[#030A17] h-[calc(100vh-7rem)] overflow-hidden relative transition-colors duration-300">

        {/* Floating header */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40 w-[92%] bg-white/90 dark:bg-transparent/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-2xl">
          <div className="flex justify-between items-center px-6 py-3">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-ph-red/10 rounded-xl flex items-center justify-center text-ph-red border border-ph-red/20 flex-shrink-0">
                <FiFileText size={16} />
              </div>
              <div className="flex flex-col">
                <h2 className="text-gray-900 dark:text-white text-[11px] font-black leading-none">{activeDoc.year}</h2>
                <p className="text-ph-blue dark:text-ph-yellow text-[9px] font-bold uppercase tracking-widest mt-1">{activeDoc.title}</p>
              </div>
            </div>
            <a
              href={activeDoc.file}
              download
              className="flex items-center gap-2 px-4 py-2 bg-ph-blue hover:bg-blue-800 dark:bg-ph-yellow dark:hover:bg-yellow-400 text-white dark:text-[#030A17] rounded-xl text-[10px] font-black uppercase transition-all shadow-xl"
            >
              <FiDownload size={14} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* PDF iframe */}
        <div className="w-full bg-gray-200 dark:bg-transparent min-h-screen transition-colors duration-300">
          <iframe
            src={`${activeDoc.file}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-[150vh] border-0"
            style={{ display: 'block' }}
            title="PDF Viewer"
          />
        </div>

        <div className="h-20" />
      </div>
    </div>
  );
};

export default Procurement;