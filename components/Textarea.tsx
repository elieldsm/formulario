
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, id, ...props }) => {
  return (
    <div className="relative">
      <textarea
        id={id}
        rows={3}
        className="peer w-full bg-slate-700/50 text-white rounded-lg border-2 border-slate-600 px-4 py-3 focus:border-brand-cyan focus:outline-none transition-colors placeholder-transparent"
        placeholder=" " 
        {...props}
      />
      <label
        htmlFor={id}
        className="absolute left-4 -top-2.5 bg-slate-800 px-1 text-sm text-slate-400 transition-all 
                   peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-500
                   peer-focus:-top-2.5 peer-focus:text-brand-cyan peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};
