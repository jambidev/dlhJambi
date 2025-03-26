import React from "react";
import DashboardLayout from "../layout/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Avatar } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { Recycle, Coins, TrendingUp, Plus, Search } from "lucide-react";
import { Input } from "../ui/input";

const BankSampahPage = () => {
  return (
    <DashboardLayout title="Bank Sampah">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Sampah Terkumpul
              </CardTitle>
              <div className="h-8 w-8 rounded-full bg-green-100 p-1.5 text-green-600">
                <Recycle className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.540 kg</div>
              <div className="flex items-center text-xs mt-1">
                <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                <span className="text-green-600">12,5%</span>
                <span className="text-muted-foreground ml-1">
                  dibanding bulan lalu
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Poin Terkumpul
              </CardTitle>
              <div className="h-8 w-8 rounded-full bg-yellow-100 p-1.5 text-yellow-600">
                <Coins className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.350</div>
              <div className="flex items-center text-xs mt-1">
                <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                <span className="text-green-600">8,2%</span>
                <span className="text-muted-foreground ml-1">
                  dibanding bulan lalu
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Nilai Tukar
              </CardTitle>
              <div className="h-8 w-8 rounded-full bg-blue-100 p-1.5 text-blue-600">
                <Coins className="h-5 w-5" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rp 1.235.000</div>
              <div className="flex items-center text-xs mt-1">
                <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
                <span className="text-green-600">5,7%</span>
                <span className="text-muted-foreground ml-1">
                  dibanding bulan lalu
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>Bank Sampah</CardTitle>
                <CardDescription>
                  Kelola setoran dan penukaran sampah Anda
                </CardDescription>
              </div>
              <Button className="w-full md:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Setor Sampah
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="history" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="history">Riwayat Setoran</TabsTrigger>
                <TabsTrigger value="exchange">Penukaran Poin</TabsTrigger>
                <TabsTrigger value="locations">Lokasi Bank Sampah</TabsTrigger>
              </TabsList>

              <TabsContent value="history" className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Cari riwayat..." className="pl-10" />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      Unduh
                    </Button>
                  </div>
                </div>

                <div className="rounded-md border">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 border-b">
                          <th className="py-3 px-4 text-left font-medium">
                            Tanggal
                          </th>
                          <th className="py-3 px-4 text-left font-medium">
                            Jenis Sampah
                          </th>
                          <th className="py-3 px-4 text-left font-medium">
                            Berat (kg)
                          </th>
                          <th className="py-3 px-4 text-left font-medium">
                            Poin
                          </th>
                          <th className="py-3 px-4 text-left font-medium">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            date: "15 Jun 2023",
                            type: "Plastik",
                            weight: "5.2",
                            points: "520",
                            status: "Selesai",
                          },
                          {
                            date: "10 Jun 2023",
                            type: "Kertas",
                            weight: "3.8",
                            points: "380",
                            status: "Selesai",
                          },
                          {
                            date: "05 Jun 2023",
                            type: "Logam",
                            weight: "2.1",
                            points: "630",
                            status: "Selesai",
                          },
                          {
                            date: "28 Mei 2023",
                            type: "Plastik",
                            weight: "4.5",
                            points: "450",
                            status: "Selesai",
                          },
                          {
                            date: "20 Mei 2023",
                            type: "Kaca",
                            weight: "3.0",
                            points: "300",
                            status: "Selesai",
                          },
                        ].map((item, index) => (
                          <tr
                            key={index}
                            className="border-b last:border-0 hover:bg-gray-50"
                          >
                            <td className="py-3 px-4">{item.date}</td>
                            <td className="py-3 px-4">{item.type}</td>
                            <td className="py-3 px-4">{item.weight}</td>
                            <td className="py-3 px-4">{item.points}</td>
                            <td className="py-3 px-4">
                              <Badge
                                variant="outline"
                                className="bg-green-100 text-green-800"
                              >
                                {item.status}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button variant="outline" size="sm">
                    Muat Lebih Banyak
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="exchange" className="space-y-4">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-medium">
                      Poin Tersedia: 12.350
                    </h3>
                    <p className="text-sm text-gray-500">
                      Tukarkan poin Anda dengan berbagai hadiah menarik
                    </p>
                  </div>
                  <Button>Tukar Poin</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Voucher Belanja",
                      points: "5.000",
                      image:
                        "https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=300&q=80",
                    },
                    {
                      title: "Pulsa Telepon",
                      points: "2.500",
                      image:
                        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&q=80",
                    },
                    {
                      title: "Bibit Tanaman",
                      points: "1.000",
                      image:
                        "https://images.unsplash.com/photo-1462530260150-162092dbf011?w=300&q=80",
                    },
                    {
                      title: "Tas Belanja",
                      points: "750",
                      image:
                        "https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=300&q=80",
                    },
                    {
                      title: "Botol Minum",
                      points: "1.200",
                      image:
                        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300&q=80",
                    },
                    {
                      title: "Donasi",
                      points: "500",
                      image:
                        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=300&q=80",
                    },
                  ].map((item, index) => (
                    <Card key={index}>
                      <div className="h-40 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-medium">{item.title}</h4>
                        <div className="flex justify-between items-center mt-2">
                          <Badge
                            variant="outline"
                            className="bg-yellow-100 text-yellow-800"
                          >
                            {item.points} Poin
                          </Badge>
                          <Button size="sm" variant="outline">
                            Tukar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="locations" className="space-y-4">
                <div className="relative w-full h-[300px] bg-gray-100 rounded-md overflow-hidden mb-4">
                  {/* Map placeholder */}
                  <div className="absolute inset-0 bg-[#e8f4f8]">
                    {/* Simulated roads */}
                    <div className="absolute top-[30%] left-0 right-0 h-1 bg-gray-300"></div>
                    <div className="absolute top-[60%] left-0 right-0 h-1 bg-gray-300"></div>
                    <div className="absolute left-[25%] top-0 bottom-0 w-1 bg-gray-300"></div>
                    <div className="absolute left-[75%] top-0 bottom-0 w-1 bg-gray-300"></div>

                    {/* Bank Sampah locations */}
                    <div className="absolute top-[20%] left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                      <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="absolute top-[45%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
                      <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="absolute top-[75%] left-[80%] transform -translate-x-1/2 -translate-y-1/2">
                      <div className="h-4 w-4 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">
                    Lokasi Bank Sampah Terdekat
                  </h3>
                  <Separator />

                  {[
                    {
                      name: "Bank Sampah Telanaipura",
                      address: "Jl. Pattimura No. 15, Telanaipura",
                      distance: "1.2 km",
                      status: "Buka",
                    },
                    {
                      name: "Bank Sampah Selamat",
                      address: "Jl. Gatot Subroto No. 45, Sungai Asam",
                      distance: "2.5 km",
                      status: "Buka",
                    },
                    {
                      name: "Bank Sampah Mandiri",
                      address: "Jl. Kapten Pattimura No. 10, Kebun Handil",
                      distance: "3.8 km",
                      status: "Tutup",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start p-4 border rounded-lg hover:bg-gray-50"
                    >
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                        <Recycle className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                          <h4 className="text-sm font-medium text-gray-900">
                            {item.name}
                          </h4>
                          <Badge
                            variant="outline"
                            className={
                              item.status === "Buka"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500">{item.address}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-xs text-gray-500">
                            Jarak: {item.distance}
                          </span>
                          <Button size="sm" variant="outline">
                            Lihat Rute
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default BankSampahPage;
