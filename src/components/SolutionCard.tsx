// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ArrowRight, ChevronRight } from 'lucide-react';
// import { useTheme } from '../contexts/ThemeContext'; 

// interface SolutionCardProps {
//   title: string;
//   summary: string;
//   slug: string;
//   heroAccent: 'violet' | 'teal' | 'amber';
//   index: number;
// }

// const SolutionCard: React.FC<SolutionCardProps> = ({
//   title,
//   summary,
//   slug,
//   heroAccent,
//   index,
// }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const { theme } = useTheme();

//   const accentClasses = {
//     violet: 'from-accent-violet to-accent-violet/80',
//     teal: 'from-accent-teal to-accent-teal/80',
//     amber: 'from-accent-amber to-accent-amber/80',
//   };

//   const borderClasses = {
//     violet: 'border-accent-violet/20 hover:border-accent-violet/40',
//     teal: 'border-accent-teal/20 hover:border-accent-teal/40',
//     amber: 'border-accent-amber/20 hover:border-accent-amber/40',
//   };

//   const buttonClasses = {
//     violet: 'bg-accent-violet hover:bg-accent-violet/90',
//     teal: 'bg-accent-teal hover:bg-accent-teal/90',
//     amber: 'bg-accent-amber hover:bg-accent-amber/90',
//   };

//   // Default theme - clean, professional cards
//   if (theme === 'default') {
//     return (
//       <div 
//         className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${borderClasses[heroAccent]}`}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="p-8 h-full flex flex-col">
//           {/* Icon/Badge */}
//           <div className="mb-6">
//             <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-r ${accentClasses[heroAccent]}`}>
//               <div className="w-8 h-8 text-white">
//                 <div className="w-full h-full bg-current opacity-80 rounded" />
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="flex-1">
//             <h3 className="text-xl font-bold font-heading text-gray-900 mb-4 leading-tight">
//               {title}
//             </h3>
//             <p className="text-gray-600 leading-relaxed mb-6">
//               {summary}
//             </p>
//           </div>

//           {/* Button */}
//           <div className="mt-auto">
//             <Link
//               to={`/solutions/${slug}`}
//               className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${buttonClasses[heroAccent]}`}
//             >
//               Learn More
//               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Modern/Creative themes - enhanced visual design
//   return (
//     <div
//       className={`relative overflow-hidden rounded-2xl bg-white shadow-lg border-2 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${borderClasses[heroAccent]}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Gradient overlay - subtle */}
//       <div className={`absolute inset-0 bg-gradient-to-br ${accentClasses[heroAccent]} opacity-5`} />

//       <div className="relative p-8 h-full flex flex-col">
//         {/* Icon */}
//         <div className="mb-6">
//           <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${accentClasses[heroAccent]} shadow-lg`}>
//             <div className="w-8 h-8 text-white">
//               <div className="w-full h-full bg-current opacity-90 rounded" />
//             </div>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="flex-1">
//           <h3 className="text-xl font-bold font-heading text-gray-900 mb-4 leading-tight">
//             {title}
//           </h3>
          
//           <p className="text-gray-700 leading-relaxed mb-6">
//             {summary}
//           </p>
//         </div>

//         {/* Button */}
//         <div className="mt-auto">
//           <Link
//             to={`/solutions/${slug}`}
//             className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${buttonClasses[heroAccent]}`}
//           >
//             Learn More
//             <ChevronRight size={16} />
//           </Link>
//         </div>

//         {/* Hover indicator */}
//         <div 
//           className={`absolute top-4 right-4 transition-all duration-300 ${
//             isHovered ? 'opacity-100 scale-110' : 'opacity-30'
//           }`}
//         >
//           <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${accentClasses[heroAccent]}`} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SolutionCard;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { X, ChevronRight } from 'lucide-react';

// interface SolutionCardProps {
//   title: string;
//   summary: string;
//   slug: string;
//   heroAccent: 'violet' | 'teal' | 'amber';
//   index: number;
// }

// const SolutionCard: React.FC<SolutionCardProps> = ({
//   title,
//   summary,
//   slug,
//   heroAccent,
// }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Accent classes for styling
//   const accentColors = {
//     violet: 'bg-accent-violet text-white hover:bg-accent-violet/90',
//     teal: 'bg-accent-teal text-white hover:bg-accent-teal/90',
//     amber: 'bg-accent-amber text-white hover:bg-accent-amber/90',
//   };

//   return (
//     <>
//       {/* Small Rectangle Card */}
//       <div
//         onClick={() => setIsOpen(true)}
//         className={`cursor-pointer bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
//       >
//         <h3 className="text-lg font-bold text-gray-900">{title}</h3>
//       </div>

//   {/* Popup Modal */}
//       {isOpen && (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center"
//       role="dialog"
//       aria-modal="true"
//     >
//     {/* Backdrop */}
//     <div
//       className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
//       onClick={() => setIsOpen(false)}
//     />

//     {/* Modal */}
//     <div className="relative z-[10000] w-full max-w-lg px-4">
//       <div
//         className="bg-white rounded-2xl shadow-2xl w-full p-8 relative pointer-events-auto"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* Close Button */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
//         >
//           <X size={24} />
//         </button>

//         {/* Content */}
//         <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
//         <p className="text-gray-700 mb-6">{summary}</p>

//         {/* Learn More Button */}
//         <Link
//           to={`/solutions/${slug}`}
//           className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${accentColors[heroAccent]}`}
//           onClick={() => setIsOpen(false)}
//         >
//           Learn More
//           <ChevronRight size={18} />
//         </Link>
//       </div>
//     </div>
//   </div>
//   )}
//   </>
//   );
// };

// export default SolutionCard;

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";

interface SolutionCardProps {
  title: string;
  summary: string;
  slug: string;
  heroAccent: "violet" | "teal" | "amber";
  index: number; // keeping this since your props include it (even if unused)
}

const accentColors: Record<SolutionCardProps["heroAccent"], string> = {
  violet: "bg-accent-violet text-white hover:bg-accent-violet/90",
  teal: "bg-accent-teal text-white hover:bg-accent-teal/90",
  amber: "bg-accent-amber text-white hover:bg-accent-amber/90",
};

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  summary,
  slug,
  heroAccent,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure document is available (SSR safety)
  useEffect(() => setMounted(true), []);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const modal = isOpen ? (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal container */}
      <div className="relative z-[1000000] w-full max-w-lg px-4 pointer-events-auto">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full p-8 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            aria-label="Close"
            type="button"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-700 mb-6">{summary}</p>

          {/* Learn More Button */}
          <Link
            to={`/solutions/${slug}`}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${accentColors[heroAccent]}`}
            onClick={() => setIsOpen(false)}
          >
            Learn More
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Small Rectangle Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(true)}
      >
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>

      {/* Portal Modal */}
      {mounted && createPortal(modal, document.body)}
    </>
  );
};

export default SolutionCard;
