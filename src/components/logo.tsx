
import React from 'react';

export function Logo() {
  return (
    <div className="flex items-center gap-2 group">
      <div className="flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
        <img 
          src="/lovable-uploads/c17f2094-e991-41e0-823a-bb7b3e5da0ec.png" 
          alt="EquiCorp Logo" 
          className="h-10 w-auto"
        />
      </div>
    </div>
  );
}
