import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ArrowUpIcon,
  ArrowDownIcon,
  TruckIcon,
  RecycleIcon,
  AlertCircleIcon,
  PercentIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  description?: string;
}

const MetricCard = ({
  title = "Metrik",
  value = "0",
  change = 0,
  icon = <PercentIcon className="h-4 w-4" />,
  description = "Dibandingkan bulan lalu",
}: MetricCardProps) => {
  const isPositive = change >= 0;

  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-muted/20 p-1.5 text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center text-xs mt-1">
          <span
            className={cn(
              "flex items-center",
              isPositive ? "text-green-600" : "text-red-600",
            )}
          >
            {isPositive ? (
              <ArrowUpIcon className="h-3 w-3 mr-1" />
            ) : (
              <ArrowDownIcon className="h-3 w-3 mr-1" />
            )}
            {Math.abs(change)}%
          </span>
          <span className="text-muted-foreground ml-1">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
};

interface DashboardSummaryProps {
  metrics?: {
    collectionRate: {
      value: string;
      change: number;
    };
    wasteVolume: {
      value: string;
      change: number;
    };
    operationalEfficiency: {
      value: string;
      change: number;
    };
    activeReports: {
      value: string;
      change: number;
    };
  };
}

const DashboardSummary = ({
  metrics = {
    collectionRate: {
      value: "87,5%",
      change: 2.5,
    },
    wasteVolume: {
      value: "1.240 ton",
      change: -3.2,
    },
    operationalEfficiency: {
      value: "92,1%",
      change: 1.8,
    },
    activeReports: {
      value: "24",
      change: 12.5,
    },
  },
}: DashboardSummaryProps) => {
  return (
    <div className="w-full bg-white rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Ringkasan Dasbor</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Tingkat Pengumpulan"
          value={metrics.collectionRate.value}
          change={metrics.collectionRate.change}
          icon={<TruckIcon className="h-4 w-4" />}
        />
        <MetricCard
          title="Volume Sampah"
          value={metrics.wasteVolume.value}
          change={metrics.wasteVolume.change}
          icon={<RecycleIcon className="h-4 w-4" />}
        />
        <MetricCard
          title="Efisiensi Operasional"
          value={metrics.operationalEfficiency.value}
          change={metrics.operationalEfficiency.change}
          icon={<PercentIcon className="h-4 w-4" />}
        />
        <MetricCard
          title="Laporan Aktif"
          value={metrics.activeReports.value}
          change={metrics.activeReports.change}
          icon={<AlertCircleIcon className="h-4 w-4" />}
        />
      </div>
    </div>
  );
};

export default DashboardSummary;
