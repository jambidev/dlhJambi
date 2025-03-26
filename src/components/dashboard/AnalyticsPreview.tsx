import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  BarChart3,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Download,
} from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar as CalendarComponent } from "../ui/calendar";
import { format } from "date-fns";
import { id } from "date-fns/locale";

interface AnalyticsPreviewProps {
  className?: string;
}

const AnalyticsPreview = ({ className }: AnalyticsPreviewProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      alert("Laporan berhasil diunduh!");
    }, 1500);
  };

  return (
    <Card className={`w-full h-full bg-white ${className}`}>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center">
          <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
          Ikhtisar Analitik
        </CardTitle>
        <div className="flex space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 px-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="text-xs">
                  {date ? format(date, "MMM yyyy", { locale: id }) : "Periode"}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>

          <Button
            variant="outline"
            size="sm"
            className="h-8 px-2"
            onClick={handleDownload}
            disabled={isDownloading}
          >
            <Download className="h-4 w-4 mr-1" />
            <span className="text-xs">
              {isDownloading ? "Mengunduh..." : "Unduh"}
            </span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Chart visualization placeholder */}
          <div className="w-full h-[180px] bg-gray-50 rounded-md p-4 relative">
            {/* Simulated chart bars */}
            <div className="absolute bottom-4 left-0 right-0 flex items-end justify-around h-[120px]">
              <div
                className="w-6 bg-blue-500 rounded-t-sm"
                style={{ height: "60%" }}
              ></div>
              <div
                className="w-6 bg-blue-500 rounded-t-sm"
                style={{ height: "80%" }}
              ></div>
              <div
                className="w-6 bg-blue-500 rounded-t-sm"
                style={{ height: "40%" }}
              ></div>
              <div
                className="w-6 bg-blue-500 rounded-t-sm"
                style={{ height: "90%" }}
              ></div>
              <div
                className="w-6 bg-blue-500 rounded-t-sm"
                style={{ height: "70%" }}
              ></div>
              <div
                className="w-6 bg-blue-500 rounded-t-sm"
                style={{ height: "50%" }}
              ></div>
              <div
                className="w-6 bg-blue-500 rounded-t-sm"
                style={{ height: "75%" }}
              ></div>
            </div>

            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-around text-xs text-gray-500">
              <div>Sen</div>
              <div>Sel</div>
              <div>Rab</div>
              <div>Kam</div>
              <div>Jum</div>
              <div>Sab</div>
              <div>Min</div>
            </div>

            {/* Chart title */}
            <div className="absolute top-2 left-2 text-xs font-medium text-gray-700">
              Volume Sampah Mingguan (ton)
            </div>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-gray-500">Total Sampah</p>
                  <p className="text-lg font-bold">1.240 ton</p>
                </div>
                <div className="flex items-center text-green-600 text-xs font-medium">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  <span>2,5%</span>
                </div>
              </div>
              <div className="mt-2">
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-md">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-gray-500">Efisiensi Operasional</p>
                  <p className="text-lg font-bold">92,1%</p>
                </div>
                <div className="flex items-center text-red-600 text-xs font-medium">
                  <ArrowDownRight className="h-3 w-3 mr-1" />
                  <span>1,2%</span>
                </div>
              </div>
              <div className="mt-2">
                <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center pt-2">
            <div className="flex items-center text-xs text-gray-500">
              <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
              <span>Tren positif dibandingkan bulan lalu</span>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-2 sm:mt-0">
              Laporan Lengkap
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsPreview;
