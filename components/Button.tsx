
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  const baseClasses = `
    w-full px-6 py-3 text-lg font-semibold text-white rounded-lg
    bg-gradient-to-r from-brand-sky to-brand-cyan 
    hover:from-brand-sky/90 hover:to-brand-cyan/90
    focus:outline-none focus:ring-4 focus:ring-cyan-500/50
    transition-all duration-300 ease-in-out
    shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30
    transform hover:-translate-y-0.5
  `;
  
  return (
    <button className={`${baseClasses} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};
