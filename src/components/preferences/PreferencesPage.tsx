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
import { Slider } from "../ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Truck, Bell, Clock, CreditCard, MapPin } from "lucide-react";

const PreferencesPage = () => {
  return (
    <DashboardLayout title="Preferensi Pengguna">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Preferensi Pengguna</CardTitle>
            <CardDescription>
              Sesuaikan pengaturan pengelolaan sampah sesuai kebutuhan Anda
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="collection" className="w-full">
              <TabsList className="grid w-full grid-cols-3 md:grid-cols-4 lg:w-auto">
                <TabsTrigger
                  value="collection"
                  className="flex items-center gap-2"
                >
                  <Truck className="h-4 w-4" />
                  <span className="hidden md:inline">Pengumpulan</span>
                </TabsTrigger>
                <TabsTrigger
                  value="notifications"
                  className="flex items-center gap-2"
                >
                  <Bell className="h-4 w-4" />
                  <span className="hidden md:inline">Notifikasi</span>
                </TabsTrigger>
                <TabsTrigger
                  value="payment"
                  className="flex items-center gap-2"
                >
                  <CreditCard className="h-4 w-4" />
                  <span className="hidden md:inline">Pembayaran</span>
                </TabsTrigger>
                <TabsTrigger
                  value="location"
                  className="flex items-center gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  <span className="hidden md:inline">Lokasi</span>
                </TabsTrigger>
              </TabsList>

              <div className="mt-6">
                <TabsContent value="collection" className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">
                      Preferensi Pengumpulan Sampah
                    </h3>
                    <Separator />

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Frekuensi Pengumpulan</Label>
                        <Select defaultValue="twice-week">
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih frekuensi" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Setiap Hari</SelectItem>
                            <SelectItem value="twice-week">
                              Dua Kali Seminggu
                            </SelectItem>
                            <SelectItem value="weekly">
                              Sekali Seminggu
                            </SelectItem>
                            <SelectItem value="biweekly">
                              Dua Minggu Sekali
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <Label>Waktu Pengumpulan</Label>
                          <span className="text-sm text-gray-500">
                            07:00 - 09:00
                          </span>
                        </div>
                        <div className="pt-2">
                          <Slider defaultValue={[7]} max={24} step={1} />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Pengingat Pengumpulan</p>
                          <p className="text-sm text-gray-500">
                            Dapatkan pengingat sebelum jadwal pengumpulan
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="space-y-2">
                        <Label>Hari Pengumpulan</Label>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Senin",
                            "Selasa",
                            "Rabu",
                            "Kamis",
                            "Jumat",
                            "Sabtu",
                            "Minggu",
                          ].map((day) => (
                            <Button
                              key={day}
                              variant={
                                day === "Senin" || day === "Kamis"
                                  ? "default"
                                  : "outline"
                              }
                              className="h-8"
                            >
                              {day}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Simpan Preferensi</Button>
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
                        <Switch defaultChecked />
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

                      <div className="space-y-2">
                        <Label>Waktu Pengingat</Label>
                        <Select defaultValue="1-day">
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih waktu pengingat" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-hour">
                              1 Jam Sebelumnya
                            </SelectItem>
                            <SelectItem value="3-hours">
                              3 Jam Sebelumnya
                            </SelectItem>
                            <SelectItem value="1-day">
                              1 Hari Sebelumnya
                            </SelectItem>
                            <SelectItem value="2-days">
                              2 Hari Sebelumnya
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Simpan Preferensi</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="payment" className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Metode Pembayaran</h3>
                    <Separator />

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>Metode Pembayaran Utama</Label>
                        <Select defaultValue="bank-transfer">
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih metode pembayaran" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bank-transfer">
                              Transfer Bank
                            </SelectItem>
                            <SelectItem value="e-wallet">E-Wallet</SelectItem>
                            <SelectItem value="credit-card">
                              Kartu Kredit
                            </SelectItem>
                            <SelectItem value="cash">Tunai</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label>Frekuensi Pembayaran</Label>
                        <Select defaultValue="monthly">
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih frekuensi pembayaran" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monthly">Bulanan</SelectItem>
                            <SelectItem value="quarterly">
                              Tiga Bulanan
                            </SelectItem>
                            <SelectItem value="biannually">
                              Enam Bulanan
                            </SelectItem>
                            <SelectItem value="annually">Tahunan</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Pengingat Pembayaran</p>
                          <p className="text-sm text-gray-500">
                            Dapatkan pengingat sebelum jatuh tempo
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Auto-Debit</p>
                          <p className="text-sm text-gray-500">
                            Aktifkan pembayaran otomatis
                          </p>
                        </div>
                        <Switch />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button>Simpan Preferensi</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="location" className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Pengaturan Lokasi</h3>
                    <Separator />

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Alamat Lengkap</Label>
                        <Input
                          id="address"
                          defaultValue="Jl. Sudirman No. 123, Jambi"
                        />
                      </div>

                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-1/2 space-y-2">
                          <Label htmlFor="district">Kecamatan</Label>
                          <Input id="district" defaultValue="Telanaipura" />
                        </div>
                        <div className="w-full md:w-1/2 space-y-2">
                          <Label htmlFor="postal-code">Kode Pos</Label>
                          <Input id="postal-code" defaultValue="36122" />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Lokasi Otomatis</p>
                          <p className="text-sm text-gray-500">
                            Izinkan aplikasi mengakses lokasi Anda
                          </p>
                        </div>
                        <Switch defaultChecked />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">
                            Tampilkan Lokasi di Peta
                          </p>
                          <p className="text-sm text-gray-500">
                            Tampilkan lokasi Anda di peta publik
                          </p>
                        </div>
                        <Switch />
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

export default PreferencesPage;
