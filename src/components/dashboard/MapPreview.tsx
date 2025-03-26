import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MapPin, Navigation, Layers, Filter, Check } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";

interface MapPreviewProps {
  className?: string;
}

const MapPreview = ({ className }: MapPreviewProps) => {
  const [showIllegalDumping, setShowIllegalDumping] = useState(true);
  const [showSmartBins, setShowSmartBins] = useState(true);
  const [showCollectionPoints, setShowCollectionPoints] = useState(true);
  const [mapType, setMapType] = useState<"satellite" | "street">("street");

  return (
    <Card className={`w-full h-full bg-white ${className}`}>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold flex items-center">
          <MapPin className="h-5 w-5 mr-2 text-green-600" />
          Peta Interaktif
        </CardTitle>
        <div className="flex space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 px-2">
                <Layers className="h-4 w-4 mr-1" />
                <span className="text-xs">Lapisan</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Jenis Peta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={mapType === "street"}
                onCheckedChange={() => setMapType("street")}
              >
                Peta Jalan
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={mapType === "satellite"}
                onCheckedChange={() => setMapType("satellite")}
              >
                Satelit
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-8 px-2">
                <Filter className="h-4 w-4 mr-1" />
                <span className="text-xs">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Tampilkan Lokasi</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showIllegalDumping}
                onCheckedChange={setShowIllegalDumping}
              >
                Pembuangan Ilegal
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showSmartBins}
                onCheckedChange={setShowSmartBins}
              >
                Tempat Sampah Pintar
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showCollectionPoints}
                onCheckedChange={setShowCollectionPoints}
              >
                Titik Pengumpulan
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[300px] bg-gray-100 rounded-md overflow-hidden">
          {/* Map placeholder with styling to look like a map */}
          <div
            className={`absolute inset-0 ${mapType === "satellite" ? "bg-[#2d3748] bg-opacity-80" : "bg-[#e8f4f8]"}`}
          >
            {/* Simulated roads */}
            {mapType === "street" && (
              <>
                <div className="absolute top-[30%] left-0 right-0 h-1 bg-gray-300"></div>
                <div className="absolute top-[60%] left-0 right-0 h-1 bg-gray-300"></div>
                <div className="absolute left-[25%] top-0 bottom-0 w-1 bg-gray-300"></div>
                <div className="absolute left-[75%] top-0 bottom-0 w-1 bg-gray-300"></div>
              </>
            )}

            {/* Simulated areas */}
            <div className="absolute top-[10%] left-[10%] w-[15%] h-[15%] bg-green-200 rounded-sm opacity-70"></div>
            <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-blue-200 rounded-sm opacity-70"></div>
            <div className="absolute top-[70%] left-[20%] w-[25%] h-[15%] bg-yellow-200 rounded-sm opacity-70"></div>

            {/* Map pins */}
            {showIllegalDumping && (
              <div className="absolute top-[20%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="h-4 w-4 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            )}
            {showSmartBins && (
              <div className="absolute top-[45%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="h-4 w-4 bg-blue-500 rounded-full"></div>
              </div>
            )}
            {showCollectionPoints && (
              <div className="absolute top-[75%] left-[80%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="h-4 w-4 bg-green-500 rounded-full"></div>
              </div>
            )}

            {/* Current location indicator */}
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
              <div className="h-6 w-6 bg-white rounded-full border-2 border-blue-500 flex items-center justify-center">
                <Navigation className="h-3 w-3 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Map overlay with legend */}
          <div className="absolute bottom-3 left-3 bg-white p-2 rounded-md shadow-sm text-xs">
            {showIllegalDumping && (
              <div className="flex items-center mb-1">
                <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                <span>Lokasi Pembuangan Ilegal</span>
              </div>
            )}
            {showSmartBins && (
              <div className="flex items-center mb-1">
                <div className="h-3 w-3 bg-blue-500 rounded-full mr-2"></div>
                <span>Lokasi Tempat Sampah Pintar</span>
              </div>
            )}
            {showCollectionPoints && (
              <div className="flex items-center">
                <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                <span>Titik Pengumpulan</span>
              </div>
            )}
          </div>

          {/* Map controls */}
          <div className="absolute top-3 right-3 bg-white rounded-md shadow-sm">
            <button className="p-2 hover:bg-gray-100 rounded-t-md border-b border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-b-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap justify-between items-center">
          <div className="text-sm text-gray-500">
            <span className="font-medium">Kota Jambi</span> • Terakhir
            diperbarui: Hari ini, 10:30
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium mt-2 sm:mt-0">
            Buka Peta Lengkap
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapPreview;
