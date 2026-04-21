import { useEffect, useState } from "react";
import type React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  value?: string;
  defaultValue?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  required?: boolean;
}

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
  className = "",
  value,
  defaultValue = "",
  id,
  name,
  disabled = false,
  required = false,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const isControlled = value !== undefined;

  useEffect(() => {
    if (!isControlled) {
      setSelectedValue(defaultValue);
    }
  }, [defaultValue, isControlled]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextValue = e.target.value;
    if (!isControlled) {
      setSelectedValue(nextValue);
    }
    onChange?.(nextValue);
  };

  const currentValue = isControlled ? value ?? "" : selectedValue;

  return (
    <select
      id={id}
      name={name}
      className={`h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 ${
        currentValue
          ? "text-gray-800 dark:text-white/90"
          : "text-gray-400 dark:text-gray-400"
      } ${className}`}
      value={currentValue}
      onChange={handleChange}
      disabled={disabled}
      required={required}
    >
      <option
        value=""
        disabled
        className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
      >
        {placeholder}
      </option>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
