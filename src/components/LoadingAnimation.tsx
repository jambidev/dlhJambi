import { useEffect, useState } from "react";

interface LoadingAnimationProps {
  onFinish: () => void;
  duration?: number;
}

const LoadingAnimation = ({
  onFinish,
  duration = 3000,
}: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, duration / 20);

    const timer = setTimeout(() => {
      onFinish();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [duration, onFinish]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-green-700 text-white z-50">
      <div className="mb-8 animate-bounce">
        <img
          src="https://images.unsplash.com/photo-1580820267682-426da823b514?w=400&q=80"
          alt="Logo Kota Jambi"
          className="w-32 h-32 rounded-full bg-white p-2 object-cover"
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">Dinas Lingkungan Hidup</h1>
      <h2 className="text-2xl font-bold mb-8">KOTA JAMBI</h2>

      <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden">
        <div
          className="h-full bg-white rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-white/80">{progress}%</p>
    </div>
  );
};

export default LoadingAnimation;
