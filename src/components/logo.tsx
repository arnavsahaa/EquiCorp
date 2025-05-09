
import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 group">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
          <path d="M12 3L20 8.5V15.5L12 21L4 15.5V8.5L12 3Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2"/>
          <path d="M7 13.5L12 16.5L17 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 10.5L12 13.5L17 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 3L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="text-xl font-bold tracking-tight bg-gradient-to-br from-blue-700 via-blue-600 to-green-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">EquiCorp</span>
    </div>
  );
}
