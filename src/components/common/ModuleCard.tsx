interface ModuleCardProps {
  title: React.ReactNode;
  subtitle?: string;
  icon?: React.ReactNode;
  status?: React.ReactNode;
  actions?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  subtitle = "Module",
  icon,
  status,
  actions,
  description,
  children,
  className = "",
}) => {
  return (
    <article
      className={`relative flex min-h-56 flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 ${className}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          {icon && (
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              {icon}
            </span>
          )}
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {status}
          {actions}
        </div>
      </div>

      {children}

      {description && (
        <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
          {description}
        </p>
      )}
    </article>
  );
};

export default ModuleCard;
