import type { ReactNode } from "react";
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader, { type AppHeaderProps } from "./AppHeader";
import Backdrop, { type BackdropProps } from "./Backdrop";
import AppSidebar, { type AppSidebarProps } from "./AppSidebar";

export interface AppLayoutProps {
  headerProps?: AppHeaderProps;
  sidebarProps?: AppSidebarProps;
  backdropProps?: BackdropProps;
  contentClassName?: string;
  children?: ReactNode;
}

const LayoutContent: React.FC<AppLayoutProps> = ({
  headerProps,
  sidebarProps,
  backdropProps,
  contentClassName = "p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6",
  children,
}) => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <AppSidebar {...sidebarProps} />
        <Backdrop {...backdropProps} />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader {...headerProps} />
        <div className={contentClassName}>
          {children ?? <Outlet />}
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC<AppLayoutProps> = (props) => {
  return (
    <SidebarProvider>
      <LayoutContent {...props} />
    </SidebarProvider>
  );
};

export default AppLayout;
