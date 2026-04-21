import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  description?: string;
  eyebrow?: ReactNode;
  actions?: ReactNode;
  className?: string;
};

export default function PageHeader({
  title,
  description,
  eyebrow,
  actions,
  className = "mb-7",
}: PageHeaderProps) {
  return (
    <header className={className}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-600 dark:text-gray-400">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h1>
          {description ? (
            <p className="mt-2 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? <div className="flex flex-wrap gap-2">{actions}</div> : null}
      </div>
    </header>
  );
}
