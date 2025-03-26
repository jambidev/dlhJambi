import React, { useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Trash2, Plus, Search, Filter, ArrowUpDown, Edit, Trash } from "lucide-react";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const MasterSampahPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"name" | "category" | "price">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (column: "name" | "category" | "price") => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  return (
    <DashboardLayout title="Master Sampah">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <CardTitle>Master Data Sampah</CardTitle>
                <CardDescription>
                  Kelola data jenis sampah dan harga per kilogram
                </CardDescription>
              </div>
              <Button className="w-full md:w-auto">
                <Plus className="h-4 w-4 mr-2" />
                Tambah Jenis Sampah
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Cari jenis sampah..." 
                  className="pl-10" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  Ekspor
                </Button>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b">
                      <th className="py-3 px-4 text-left font-medium">No</th>
                      <th className="py-3 px-4 text-left font-medium">
                        <button 
                          className="flex items-center" 
                          onClick={() => handleSort("name")}
                        >
                          Nama Sampah
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </button>
                      </th>
                      <th className="py-3 px-4 text-left font-medium">
                        <button 
                          className="flex items-center" 
                          onClick={() => handleSort("category")}
                        >
                          Kategori
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </button>
                      </th>
                      <th className="py-3 px-4 text-left font-medium">
                        <button 
                          className="flex items-center" 
                          onClick={() => handleSort("price")}
                        >
                          Harga/Kg
                          <ArrowUpDown className="ml-2 h-4 w-4" />
                        </button>
                      </th>
                      <th className="py-3 px-4 text-left font-medium">Poin/Kg</th>
                      <th className="py-3 px-4 text-left font-medium">Status</th>
                      <th className="py-3 px-4 text-center font-medium">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: 1, name: "Botol Plastik", category: "Plastik", price: "Rp 5.000", points: "50", status: "Aktif" },
                      { id: 2, name: "Kardus", category: "Kertas", price: "Rp 3.000", points: "30", status: "Aktif" },
                      { id: 3, name: "Kaleng Aluminium", category: "Logam", price: "Rp 15.000", points: "150", status: "Aktif" },
                      { id: 4, name: "Botol Kaca", category: "Kaca", price: "Rp 2.000", points: "20", status: "Aktif" },
                      { id: 5, name: "Kertas HVS", category: "Kertas", price: "Rp 4.000", points: "40", status: "Aktif" },
                      { id: 6, name: "Styrofoam", category: "Plastik", price: "Rp 1.000", points: "10", status: "Tidak Aktif" },
                      { id: 7, name: "Besi", category: "Logam", price: "Rp 8.000", points: "80", status: "Aktif" },
                      { id: 8, name: "Koran Bekas", category: "Kertas", price: "Rp 2.500", points: "25", status: "Aktif" },
                      { id: 9, name: "Gelas Plastik", category: "Plastik", price: "Rp 4.500", points: "45", status: "Aktif" },
                      { id: 10, name: "Elektronik Bekas", category: "Elektronik", price: "Rp 20.000", points: "200", status: "Aktif" },
                    ].map((item) => (
                      <tr key={item.id} className="border-b last:border-0 hover:bg-gray-50">
                        <td className="py-3 px-4">{item.id}</td>
                        <td className="py-3 px-4">{item.name}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline" className="bg-blue-100 text-blue-800">
                            {item.category}
                          </Badge>
                        </td>
                        <td className="py-3 px-4">{item.price}</td>
                        <td className="py-3 px-4">{item.points}</td>
                        <td className="py-3 px-4">
                          <Badge variant="outline" className={item.status === "Aktif" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                            {item.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <span className="sr-only">Buka menu</span>
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
                                  className="h-4 w-4"
                                >
                                  <circle cx="12" cy="12" r="1" />
                                  <circle cx="12" cy="5" r="1" />
                                  <circle cx="12" cy="19" r="1" />
                                </svg>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Edit className="mr-2 h-4 w-4" />
                                <span