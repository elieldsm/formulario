
import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ label, id, children, ...props }) => {
  return (
    <div className="relative">
      <select
        id={id}
        className="peer w-full bg-slate-700/50 text-white rounded-lg border-2 border-slate-600 px-4 py-3 focus:border-brand-cyan focus:outline-none transition-colors appearance-none"
        {...props}
      >
        {children}
      </select>
      <label
        htmlFor={id}
        className="absolute left-4 -top-2.5 bg-slate-800 px-1 text-sm text-slate-400"
      >
        {label}
      </label>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
        <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  );
};
