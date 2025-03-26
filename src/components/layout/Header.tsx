import React, { useState } from "react";
import {
  Bell,
  Search,
  User,
  ChevronDown,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../firebase";
import { useToast } from "@/components/ui/use-toast";

interface HeaderProps {
  title?: string;
  onSearch?: (query: string) => void;
  userProfile?: {
    name: string;
    avatar: string;
    role: string;
  };
}

const Header = ({
  title = "Dasbor",
  onSearch = () => {},
  userProfile = {
    name: "John Doe",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    role: "Administrator",
  },
}: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationCount, setNotificationCount] = useState(3);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

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

  return (
    <header className="bg-white border-b border-gray-200 h-[72px] w-full px-4 md:px-6 flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
          {title}
        </h1>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">
        <form onSubmit={handleSearch} className="relative hidden md:block">
          <Input
            type="search"
            placeholder="Cari..."
            className="w-48 md:w-64 pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </form>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {notificationCount > 0 && (
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Notifikasi</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2 p-1">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200">
                  <img
                    src={userProfile.avatar}
                    alt={userProfile.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-2 text-left hidden md:block">
                  <p className="text-sm font-medium">{userProfile.name}</p>
                  <p className="text-xs text-gray-500">{userProfile.role}</p>
                </div>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex items-center p-2 md:hidden">
              <div className="ml-2">
                <p className="font-medium">{userProfile.name}</p>
                <p className="text-xs text-gray-500">{userProfile.role}</p>
              </div>
            </div>
            <DropdownMenuSeparator className="md:hidden" />
            <DropdownMenuItem onClick={() => navigate("/profile")}>
              <User className="mr-2 h-4 w-4" />
              <span>Profil</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/settings")}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Pengaturan</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Keluar</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
