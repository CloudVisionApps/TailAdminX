import { type Radius, useTheme } from "../../context/ThemeContext";

const radiusOptions = [
  { label: "Zero", value: "zero" },
  { label: "Sharp", value: "sharp" },
  { label: "Default", value: "default" },
  { label: "Rounded", value: "rounded" },
] as const;

export default function RadiusSelector() {
  const { radius, setRadius } = useTheme();

  return (
    <label className="relative">
      <span className="sr-only">Border radius</span>
      <select
        value={radius}
        onChange={(event) => setRadius(event.target.value as Radius)}
        className="h-11 rounded-lg border border-gray-200 bg-white px-3 text-sm text-gray-700 shadow-theme-xs outline-hidden transition hover:bg-gray-50 focus:border-brand-300 focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
      >
        {radiusOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
