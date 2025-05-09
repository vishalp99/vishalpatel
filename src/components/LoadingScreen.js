import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
      onComplete();  // Notify parent to switch screens
    }, 2000); // 2 seconds
  }, [onComplete]);

  return (
    isVisible && (
        <div className="flex justify-center items-center w-full h-screen bg-gray-900">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
          {/* Animated Glowing Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin-fast"></div>
        </div>
      </div>
    )
  );
}
