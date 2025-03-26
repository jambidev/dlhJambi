import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  Map,
  BarChart3,
  FileText,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Recycle,
  Trash2,
  ClipboardList,
  UserCog,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { logoutUser } from "../../firebase";
import { useToast } from "@/components/ui/use-toast";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const Sidebar = ({ collapsed = false, onToggle = () => {} }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const navItems = [
    {
      title: "Dasbor",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/",
    },
    {
      title: "Peta Interaktif",
      icon: <Map className="h-5 w-5" />,
      href: "/map",
    },
    {
      title: "Analitik",
      icon: <BarChart3 className="h-5 w-5" />,
      href: "/analytics",
    },
    {
      title: "Sistem Pelaporan",
      icon: <FileText className="h-5 w-5" />,
      href: "/reports",
    },
    {
      title: "Bank Sampah",
      icon: <Recycle className="h-5 w-5" />,
      href: "/bank",
    },
    {
      title: "Master Sampah",
      icon: <Trash2 className="h-5 w-5" />,
      href: "/master",
    },
    {
      title: "Status Sampah",
      icon: <ClipboardList className="h-5 w-5" />,
      href: "/status",
    },
    {
      title: "Preferensi Pengguna",
      icon: <UserCog className="h-5 w-5" />,
      href: "/preferences",
    },
    {
      title: "Pengaturan",
      icon: <Settings className="h-5 w-5" />,
      href: "/settings",
    },
  ];

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast({
        title: "Berhasil keluar",
        description: "Anda telah berhasil keluar dari sistem",
      });
      navigate("/login");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Gagal keluar",
        description: error.message || "Terjadi kesalahan saat keluar",
      });
    }
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <div
      className={cn(
        "flex h-full flex-col border-r bg-white transition-all duration-300 z-50",
        collapsed ? "w-16" : "w-[280px]",
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">DLH</span>
            </div>
            <span className="font-semibold text-lg">Siritase</span>
          </div>
        )}
        {collapsed && (
          <div className="mx-auto h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">DLH</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={onToggle}
          aria-label={collapsed ? "Perluas sidebar" : "Ciutkan sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => (
            <TooltipProvider key={index} delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={isActive(item.href) ? "secondary" : "ghost"}
                    className={cn(
                      "flex h-10 justify-start",
                      collapsed ? "w-10 px-0" : "w-full px-3",
                    )}
                    onClick={() => navigate(item.href)}
                  >
                    <span
                      className={cn(
                        "flex items-center",
                        collapsed ? "justify-center" : "justify-start gap-3",
                      )}
                    >
                      {item.icon}
                      {!collapsed && <span>{item.title}</span>}
                    </span>
                  </Button>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right">{item.title}</TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>
      </ScrollArea>

      <div className="mt-auto border-t p-4">
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "flex h-10 justify-start text-red-500 hover:bg-red-50 hover:text-red-600",
                  collapsed ? "w-10 px-0" : "w-full px-3",
                )}
                onClick={handleLogout}
              >
                <span
                  className={cn(
                    "flex items-center",
                    collapsed ? "justify-center" : "justify-start gap-3",
                  )}
                >
                  <LogOut className="h-5 w-5" />
                  {!collapsed && <span>Keluar</span>}
                </span>
              </Button>
            </TooltipTrigger>
            {collapsed && <TooltipContent side="right">Keluar</TooltipContent>}
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Sidebar;
