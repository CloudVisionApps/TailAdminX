import type { ReactNode } from "react";

export interface SidebarWidgetProps {
  title?: ReactNode;
  description?: ReactNode;
  ctaLabel?: ReactNode;
  ctaHref?: string;
  ctaTarget?: "_self" | "_blank";
  ctaRel?: string;
}

export default function SidebarWidget({
  title = "#1 Tailwind CSS Dashboard",
  description = "Leading Tailwind CSS Admin Template with 400+ UI Component and Pages.",
  ctaLabel = "Purchase Plan",
  ctaHref = "https://tailadmin.com/pricing",
  ctaTarget = "_blank",
  ctaRel = "nofollow",
}: SidebarWidgetProps) {
  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
    >
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
        {description}
      </p>
      <a
        href={ctaHref}
        target={ctaTarget}
        rel={ctaRel}
        className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
      >
        {ctaLabel}
      </a>
    </div>
  );
}
