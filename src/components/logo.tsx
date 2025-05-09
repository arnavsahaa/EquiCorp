
import React from 'react';

export function Logo({ size = "medium" }: { size?: "small" | "medium" | "large" }) {
  const sizeClasses = {
    small: "h-10 w-auto",
    medium: "h-16 w-auto",
    large: "h-24 w-auto"
  };
  
  return (
    <div className="flex items-center gap-3 group">
      <div className="flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
        <img 
          src="/lovable-uploads/611957ff-f465-4baa-95ef-3c29788be9dc.png" 
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
