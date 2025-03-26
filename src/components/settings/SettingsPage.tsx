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
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { Separator } from "../ui/separator";
import { Bell, Lock, User, Globe, Shield, Moon, Sun } from "lucide-react";

const SettingsPage = () => {
  return (
    <DashboardLayout title="Pengaturan">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Pengaturan Akun</CardTitle>
            <CardDescription>
              Kelola pengaturan akun dan preferensi Anda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4 md:grid-cols-5 lg:w-auto">
                <TabsTrigger
                  value="profile"
                  className="flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  <span className="hidden md:inline">Profil</span>
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="flex items-center gap-2"
                >
                  <Bell className="h-4 w-4" />
                  <span className="hidden md:inline">Notifikasi</span>
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="flex items-center gap-2"
                >
                  <Lock className="h-4 w-4" />
                  <span className="hidden md:inline">Keamanan</span>
                </TabsTrigger>
                <TabsTrigger
                  value="appearance"
                  className="flex items-center gap-2"
                >
                  <Sun className="h-4 w-4" />
                  <span className="hidden md:inline">Tampilan</span>
                </TabsTrigger>
                <TabsTrigger
                  value="language"
                  className="flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden md:inline">Bahasa</span>
                </TabsTrigger>
              </TabsList>

              <div className="mt-6">
                <TabsContent value="profile" className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="w-full md:w-1/2 space-y-2">
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input id="name" defaultValue="John Doe" />
                      </div>
                      <div className="w-full md:w-1/2 space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          defaultValue="john.doe@example.com"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="w-full md:w-1/2 space-y-2">
                        <Label htmlFor="phone">Nomor Telepon</Label>
                        <Input
                          id="phone"
                          type="tel"
                          defaultValue="+62 812 3456 7890"
                        />
                      </div>
                      <div className="w-full md:w-1/2 space-y-2">
                        <Label htmlFor="role">Jabatan</Label>
                        <Input
                          id="role"
                          defaultValue="Administrator"
                          disabled
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <textarea
                        id="bio"
                        className="w-full min-h-[100px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        defaultValue="Administrator sistem pengelolaan sampah di Dinas Lingkungan Hidup Kota Jambi."
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button>Simpan Perubahan</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="notifications" className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Preferensi Notifikasi
                    </h3>
                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Notifikasi Email</p>
                          <p className="text-sm text-gray-500">
                            Terima notifikasi melalui email
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Notifikasi SMS</p>
                          <p className="text-sm text-gray-500">
                            Terima notifikasi melalui SMS
                          </p>
                        </div>
                        <Switch />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Notifikasi Aplikasi</p>
                          <p className="text-sm text-gray-500">
                            Terima notifikasi dalam aplikasi
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Laporan Mingguan</p>
                          <p className="text-sm text-gray-500">
                            Terima laporan mingguan melalui email
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Simpan Preferensi</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="security" className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Keamanan Akun</h3>
                    <Separator />

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">
                          Password Saat Ini
                        </Label>
                        <Input id="current-password" type="password" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="new-password">Password Baru</Label>
                        <Input id="new-password" type="password" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">
                          Konfirmasi Password Baru
                        </Label>
                        <Input id="confirm-password" type="password" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Autentikasi Dua Faktor</p>
                          <p className="text-sm text-gray-500">
                            Tingkatkan keamanan akun Anda
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Perbarui Password</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="appearance" className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Tampilan</h3>
                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Mode Gelap</p>
                          <p className="text-sm text-gray-500">
                            Beralih antara mode terang dan gelap
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Sun className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <Moon className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Ukuran Font</p>
                          <p className="text-sm text-gray-500">
                            Sesuaikan ukuran teks
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            Kecil
                          </Button>
                          <Button variant="outline" size="sm">
                            Sedang
                          </Button>
                          <Button variant="outline" size="sm">
                            Besar
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Simpan Preferensi</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="language" className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Bahasa</h3>
                    <Separator />

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Pilih Bahasa</Label>
                        <select
                          id="language"
                          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          defaultValue="id"
                        >
                          <option value="id">Bahasa Indonesia</option>
                          <option value="en">English</option>
                          <option value="jv">Basa Jawa</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Format Tanggal</p>
                          <p className="text-sm text-gray-500">
                            Pilih format tanggal yang diinginkan
                          </p>
                        </div>
                        <select
                          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                          defaultValue="dd-mm-yyyy"
                        >
                          <option value="dd-mm-yyyy">DD-MM-YYYY</option>
                          <option value="mm-dd-yyyy">MM-DD-YYYY</option>
                          <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Simpan Preferensi</Button>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
