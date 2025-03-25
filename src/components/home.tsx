import React, { useState } from "react";
import DashboardLayout from "./layout/DashboardLayout";
import DashboardSummary from "./dashboard/DashboardSummary";
import MapPreview from "./dashboard/MapPreview";
import AnalyticsPreview from "./dashboard/AnalyticsPreview";
import RecentReports from "./dashboard/RecentReports";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Determine title based on current route
  const getTitle = () => {
    const path = location.pathname;
    switch (path) {
      case "/map":
        return "Peta Interaktif";
      case "/analytics":
        return "Analitik";
      case "/reports":
        return "Sistem Pelaporan";
      case "/bank":
        return "Bank Sampah";
      case "/master":
        return "Master Sampah";
      case "/status":
        return "Status Sampah";
      case "/preferences":
        return "Preferensi Pengguna";
      default:
        return "Dasbor DLH Kota Jambi";
    }
  };

  return (
    <DashboardLayout title={getTitle()}>
      <div className="space-y-4 md:space-y-6">
        <DashboardSummary />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <MapPreview />
          <AnalyticsPreview />
        </div>

        <RecentReports />
      </div>
    </DashboardLayout>
  );
}

export default Home;
