import { useSidebar } from "../context/SidebarContext";

export interface BackdropProps {
  className?: string;
  onClick?: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({
  className = "fixed inset-0 z-40 bg-gray-900/50 lg:hidden",
  onClick,
}) => {
  const { isMobileOpen, toggleMobileSidebar } = useSidebar();

  if (!isMobileOpen) return null;

  return (
    <div className={className} onClick={onClick ?? toggleMobileSidebar} />
  );
};

export default Backdrop;
