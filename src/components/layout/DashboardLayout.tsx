import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const DashboardLayout = ({
  children,
  title = "Dashboard",
}: DashboardLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden bg-gray-50">
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="ml-2 text-xl font-semibold">{title}</h1>
        </div>
        <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
          <span className="text-white font-bold text-sm">DLH</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - hidden on mobile unless toggled */}
        <div
          className={`${mobileMenuOpen ? "block" : "hidden"} md:block fixed md:relative z-40 h-full md:h-auto`}
        >
          <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
          {/* Overlay for mobile */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
              onClick={toggleMobileMenu}
            ></div>
          )}
        </div>

        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Desktop Header */}
          <div className="hidden md:block">
            <Header title={title} />
          </div>

          {/* Secondary Navigation Bar */}
          <div className="bg-white border-b px-4 py-2 overflow-x-auto">
            <div className="flex space-x-1 md:space-x-4 min-w-max">
              <NavButton
                label="Bank Sampah"
                active={isActive("/bank")}
                onClick={() => handleNavClick("/bank")}
              />
              <NavButton
                label="Master Sampah"
                active={isActive("/master")}
                onClick={() => handleNavClick("/master")}
              />
              <NavButton
                label="Status Sampah"
                active={isActive("/status")}
                onClick={() => handleNavClick("/status")}
              />
            </div>
          </div>

          <main className="flex-1 overflow-auto p-4 md:p-6">
            <div className="mx-auto max-w-7xl">{children}</div>
          </main>

          <footer className="border-t bg-white py-3 px-4 md:py-4 md:px-6 text-center text-xs md:text-sm text-gray-500">
            <p>
              © 2023 Siritase - Dinas Lingkungan Hidup Kota Jambi. Hak Cipta
              Dilindungi.
            </p>
            <p className="mt-1">
              Dikembangkan oleh Mardianto Eka Saputra | WA: 082275552225
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

const NavButton = ({
  label,
  active = false,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
      active
        ? "bg-green-100 text-green-800"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`}
  >
    {label}
  </button>
);

export default DashboardLayout;
