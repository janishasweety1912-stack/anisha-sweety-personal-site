
import { useMemo } from "react";

function Stars() {
  const stars = useMemo(() => {
    return Array.from({ length: 90 }, (_, index) => {
      const colors = [
        "#ffffff",
        "#ffffff",
        "#ffffff",
        "#c4b5fd",
        "#d8b4fe",
        "#f9a8d4"
      ];

      const size = Math.random() * 2 + 1;

      return {
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${size}px`,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: (Math.random() * 0.5 + 0.4).toFixed(2),
        duration: `${(Math.random() * 4 + 3).toFixed(2)}s`,
        delay: `${(Math.random() * 5).toFixed(2)}s`,
        driftDuration: `${(Math.random() * 15 + 12).toFixed(2)}s`,
        driftX: `${(Math.random() * 50 - 25).toFixed(0)}px`,
        driftY: `${(Math.random() * 50 - 25).toFixed(0)}px`,
        bright: Math.random() > 0.92,
        tiny: size < 1.5
      };
    });
  }, []);

  return (
    <div className="stars">
      {stars.map((star) => (
        <span
          key={star.id}
          className={`star ${star.bright ? "bright" : ""} ${
            star.tiny ? "tiny" : ""
          }`}
          style={{
            "--star-left": star.left,
            "--star-top": star.top,
            "--star-size": star.size,
            "--star-color": star.color,
            "--star-opacity": star.opacity,
            "--star-duration": star.duration,
            "--star-delay": star.delay,
            "--drift-duration": star.driftDuration,
            "--drift-x": star.driftX,
            "--drift-y": star.driftY
          }}
        />
      ))}
    </div>
  );
}

export default Stars;
