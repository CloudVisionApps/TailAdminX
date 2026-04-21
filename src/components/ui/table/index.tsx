import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// Props for Table
interface TableProps {
  children: ReactNode; // Table content (thead, tbody, etc.)
  className?: string; // Optional className for styling
}

// Props for TableHeader
interface TableHeaderProps {
  children: ReactNode; // Header row(s)
  className?: string; // Optional className for styling
}

// Props for TableBody
interface TableBodyProps {
  children: ReactNode; // Body row(s)
  className?: string; // Optional className for styling
}

// Props for TableRow
interface TableRowProps {
  children: ReactNode; // Cells (th or td)
  className?: string; // Optional className for styling
}

// Props for TableCell
interface TableCellProps {
  children: ReactNode; // Cell content
  isHeader?: boolean; // If true, renders as <th>, otherwise <td>
  className?: string; // Optional className for styling
  colSpan?: number;
  rowSpan?: number;
  title?: string;
}

// Table Component
const Table: React.FC<TableProps> = ({ children, className }) => {
  return (
    <table
      className={twMerge(
        "min-w-full overflow-hidden rounded-lg border border-separate border-spacing-0 border-gray-200 bg-white text-sm text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100",
        className,
      )}
    >
      {children}
    </table>
  );
};

// TableHeader Component
const TableHeader: React.FC<TableHeaderProps> = ({ children, className }) => {
  return (
    <thead
      className={twMerge("border-b border-gray-200 dark:border-gray-800", className)}
    >
      {children}
    </thead>
  );
};

// TableBody Component
const TableBody: React.FC<TableBodyProps> = ({ children, className }) => {
  return (
    <tbody
      className={twMerge(
        "[&>tr]:border-b [&>tr]:border-gray-200 [&>tr]:transition-colors [&>tr:last-child]:border-b-0 [&>tr:hover]:bg-gray-50 dark:[&>tr]:border-gray-800 dark:[&>tr:hover]:bg-gray-800/45",
        className,
      )}
    >
      {children}
    </tbody>
  );
};

// TableRow Component
const TableRow: React.FC<TableRowProps> = ({ children, className }) => {
  return <tr className={twMerge(className)}>{children}</tr>;
};

// TableCell Component
const TableCell: React.FC<TableCellProps> = ({
  children,
  isHeader = false,
  className,
  ...rest
}) => {
  const CellTag = isHeader ? "th" : "td";
  const cellClasses = isHeader
    ? "bg-gray-50 px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-700 dark:bg-gray-900/80 dark:text-gray-200"
    : "px-4 py-3 align-middle text-left text-gray-900 dark:text-gray-100";
  return (
    <CellTag className={twMerge(cellClasses, className)} {...rest}>
      {children}
    </CellTag>
  );
};

export { Table, TableHeader, TableBody, TableRow, TableCell };
