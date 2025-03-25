import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../firebase";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "../ui/use-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await loginUser(email, password);
      toast({
        title: "Login berhasil",
        description:
          "Selamat datang di Sistem Informasi Retribusi Sampah Terintegrasi",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Login gagal",
        description: error.message || "Terjadi kesalahan saat login",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="w-full max-w-md">
        <div
          className={`bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 ${isActive ? "scale-105" : "scale-100"}`}
        >
          <div className="bg-green-600 p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">SIRITASE</h2>
            <p className="text-green-100">
              Sistem Informasi Retribusi Sampah Terintegrasi
            </p>
            <p className="text-green-100 text-sm">
              Dinas Lingkungan Hidup Kota Jambi
            </p>
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              Login
            </h3>

            <form onSubmit={handleLogin}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div
                    className={`relative ${isActive ? "transform -translate-y-1 transition-transform duration-300" : ""}`}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                  >
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nama@email.com"
                      required
                      className="pr-10 border-green-300 focus:border-green-500 focus:ring-green-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div
                    className={`relative ${isActive ? "transform -translate-y-1 transition-transform duration-300" : ""}`}
                    onFocus={() => setIsActive(true)}
                    onBlur={() => setIsActive(false)}
                  >
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="pr-10 border-green-300 focus:border-green-500 focus:ring-green-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-600"
                    >
                      Ingat saya
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-green-600 hover:text-green-500"
                    >
                      Lupa password?
                    </a>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-105"
                  disabled={isLoading}
                >
                  {isLoading ? "Memproses..." : "Login"}
                </Button>

                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Belum punya akun?{" "}
                    <button
                      type="button"
                      onClick={handleSignupClick}
                      className="font-medium text-green-600 hover:text-green-500"
                    >
                      Daftar sekarang
                    </button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-600">
          © 2023 Dinas Lingkungan Hidup Kota Jambi. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
