import { useEffect, useState } from "react";

export const ShootingStars = () => {
  const [stars, setStars] = useState<{ id: number; top: string; left: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 3}s`
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-shooting-star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow: '0 0 4px 1px rgba(255, 255, 255, 0.4)'
          }}
        />
      ))}
      <style>{`
        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0) rotate(215deg) scale(0); opacity: 0; }
          70% { opacity: 1; }
          100% { transform: translateX(-500px) translateY(500px) rotate(215deg) scale(1); opacity: 0; }
        }
        .animate-shooting-star {
          position: absolute;
          animation-name: shooting-star;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};
