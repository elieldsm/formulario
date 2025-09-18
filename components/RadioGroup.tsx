
import React from 'react';

interface RadioGroupProps {
  legend: string;
  name: string;
  options: readonly string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ legend, name, options, value, onChange }) => {
  return (
    <fieldset>
      <legend className="text-base font-medium text-slate-300 mb-3">{legend}</legend>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={onChange}
              className="h-4 w-4 text-brand-cyan bg-slate-600 border-slate-500 focus:ring-2 focus:ring-brand-cyan focus:ring-offset-2 focus:ring-offset-slate-800"
            />
            <span className="text-slate-300">{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};
