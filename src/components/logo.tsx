
import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 group">
      <div className="bg-gradient-to-r from-nature-green to-nature-forest w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M6 3C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M13 6L13 10.5C13 11.3284 12.3284 12 11.5 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 15H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight bg-gradient-to-br from-nature-forest via-nature-green to-nature-leaf bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">EquiCorp</span>
    </div>
  );
}
