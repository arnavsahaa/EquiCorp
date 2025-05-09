
import React from 'react';

export function Logo({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "h-12 w-auto", // Increased from h-10 to h-12
    medium: "h-20 w-auto", // Increased from h-16 to h-20
    large: "h-32 w-auto"  // Increased from h-28 to h-32
  };
  
  return (
    <div className="flex items-center gap-3 group">
      <div className="flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
        <img 
          src="/lovable-uploads/bfc1c3ae-f9a8-46c7-8434-ec3590e453bd.png" 
          alt="EquiCorp Logo" 
          className={sizeClasses[size]}
        />
      </div>
      {size === "large" && (
        <span className="text-xl font-semibold text-foreground">by team Eastside</span>
      )}
    </div>
  );
}
