import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar } from "../ui/avatar";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { cn } from "../../lib/utils";
import { AlertCircle, CheckCircle2, Clock, MapPin } from "lucide-react";

type ReportStatus = "pending" | "in-progress" | "resolved";
type ReportType =
  | "illegal-dumping"
  | "missed-collection"
  | "bin-damage"
  | "other";

interface Report {
  id: string;
  title: string;
  description: string;
  location: string;
  timestamp: string;
  status: ReportStatus;
  type: ReportType;
  reportedBy: {
    name: string;
    avatar: string;
  };
}

interface RecentReportsProps {
  reports?: Report[];
  className?: string;
}

const getStatusIcon = (status: ReportStatus) => {
  switch (status) {
    case "pending":
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case "in-progress":
      return <AlertCircle className="h-4 w-4 text-blue-500" />;
    case "resolved":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />;
    default:
      return <Clock className="h-4 w-4 text-yellow-500" />;
  }
};

const getStatusColor = (status: ReportStatus) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
    case "in-progress":
      return "bg-blue-100 text-blue-800 hover:bg-blue-200";
    case "resolved":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

const getTypeColor = (type: ReportType) => {
  switch (type) {
    case "illegal-dumping":
      return "bg-red-100 text-red-800";
    case "missed-collection":
      return "bg-purple-100 text-purple-800";
    case "bin-damage":
      return "bg-orange-100 text-orange-800";
    case "other":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusText = (status: ReportStatus) => {
  switch (status) {
    case "pending":
      return "Tertunda";
    case "in-progress":
      return "Dalam Proses";
    case "resolved":
      return "Selesai";
    default:
      return status.replace("-", " ");
  }
};

const getTypeText = (type: ReportType) => {
  switch (type) {
    case "illegal-dumping":
      return "Pembuangan Ilegal";
    case "missed-collection":
      return "Pengumpulan Terlewat";
    case "bin-damage":
      return "Kerusakan Tempat Sampah";
    case "other":
      return "Lainnya";
    default:
      return type.replace("-", " ");
  }
};

const RecentReports = ({
  reports = defaultReports,
  className,
}: RecentReportsProps) => {
  return (
    <Card className={cn("w-full bg-white", className)}>
      <CardHeader>
        <CardTitle>Laporan Terbaru</CardTitle>
        <CardDescription>
          Lihat dan kelola laporan pengelolaan sampah terbaru
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-4">
            <TabsTrigger value="all">Semua Laporan</TabsTrigger>
            <TabsTrigger value="pending">Tertunda</TabsTrigger>
            <TabsTrigger value="in-progress">Dalam Proses</TabsTrigger>
            <TabsTrigger value="resolved">Selesai</TabsTrigger>
          </TabsList>

          {["all", "pending", "in-progress", "resolved"].map((tab) => (
            <TabsContent key={tab} value={tab} className="space-y-4">
              {reports
                .filter((report) => tab === "all" || report.status === tab)
                .map((report) => (
                  <div
                    key={report.id}
                    className="flex flex-col sm:flex-row items-start p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <Avatar className="h-10 w-10 mb-3 sm:mb-0 sm:mr-4">
                      <img
                        src={report.reportedBy.avatar}
                        alt={report.reportedBy.name}
                      />
                    </Avatar>

                    <div className="flex-1 min-w-0 w-full">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                        <h4 className="text-sm font-medium text-gray-900 truncate mb-2 sm:mb-0">
                          {report.title}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant="outline"
                            className={getTypeColor(report.type)}
                          >
                            {getTypeText(report.type)}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={getStatusColor(report.status)}
                          >
                            <span className="flex items-center">
                              {getStatusIcon(report.status)}
                              <span className="ml-1 capitalize">
                                {getStatusText(report.status)}
                              </span>
                            </span>
                          </Badge>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                        {report.description}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500 mb-2 sm:mb-0">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span className="truncate">{report.location}</span>
                          <span className="mx-2">•</span>
                          <span>{report.timestamp}</span>
                        </div>

                        <Button variant="outline" size="sm" className="text-xs">
                          Lihat Detail
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

const defaultReports: Report[] = [
  {
    id: "1",
    title: "Pembuangan Sampah Ilegal di Jalan Merdeka",
    description:
      "Tumpukan besar sampah konstruksi dibuang di dekat sungai. Potensi bahaya lingkungan.",
    location: "Jalan Merdeka, Jambi",
    timestamp: "2 jam yang lalu",
    status: "pending",
    type: "illegal-dumping",
    reportedBy: {
      name: "Budi Santoso",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=budi",
    },
  },
  {
    id: "2",
    title: "Pengumpulan Sampah Terlewat Sesuai Jadwal",
    description:
      "Kendaraan pengumpul sampah tidak datang sesuai jadwal untuk ketiga kalinya bulan ini.",
    location: "Perumahan Citra Garden, Jambi",
    timestamp: "1 hari yang lalu",
    status: "in-progress",
    type: "missed-collection",
    reportedBy: {
      name: "Siti Rahayu",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=siti",
    },
  },
  {
    id: "3",
    title: "Tempat Sampah Pintar Rusak di Taman Pusat",
    description:
      "Tempat sampah pintar di Taman Pusat memiliki tutup yang rusak dan sensor tampaknya tidak berfungsi.",
    location: "Taman Pusat, Jambi",
    timestamp: "3 hari yang lalu",
    status: "resolved",
    type: "bin-damage",
    reportedBy: {
      name: "Ahmad Hidayat",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ahmad",
    },
  },
  {
    id: "4",
    title: "Tempat Sampah Meluap",
    description:
      "Tempat sampah di sudut Jalan Sudirman meluap dan menyebabkan masalah bau bagi penduduk sekitar.",
    location: "Jalan Sudirman, Jambi",
    timestamp: "4 hari yang lalu",
    status: "in-progress",
    type: "other",
    reportedBy: {
      name: "Dewi Lestari",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dewi",
    },
  },
  {
    id: "5",
    title: "Masalah Pemilahan Sampah di Kompleks Apartemen",
    description:
      "Penghuni di Apartemen Gading tidak mengikuti pedoman pemilahan sampah. Perlu intervensi edukasi.",
    location: "Apartemen Gading, Jambi",
    timestamp: "1 minggu yang lalu",
    status: "pending",
    type: "other",
    reportedBy: {
      name: "Rudi Hartono",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rudi",
    },
  },
];

export default RecentReports;
