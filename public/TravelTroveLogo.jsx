import React from "react";

export function TravelTroveLogo({
  size = "md",
  variant = "horizontal", // "horizontal" | "stacked"
  showIcon = true,
  className = "",
}) {
  // Tailwind size mappings
  const sizeClasses = {
    sm: "w-32 h-8",
    md: "w-48 h-12",
    lg: "w-64 h-16",
    xl: "w-80 h-20",
  };

  const iconSizes = {
    sm: 24,
    md: 36,
    lg: 48,
    xl: 60,
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  const iconSize = iconSizes[size];
  const textSize = textSizes[size];

  // Reusable Icon (compass + plane)
  const LogoIcon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      {/* Compass background circle */}
      <circle
        cx="24"
        cy="24"
        r="20"
        fill="url(#blueGradient)"
        stroke="#0284c7"
        strokeWidth="2"
      />
      {/* Compass inner circle */}
      <circle cx="24" cy="24" r="16" fill="#ffffff" fillOpacity="0.08" />

      {/* Compass directions */}
      <g stroke="#ffffff" strokeWidth="2" strokeLinecap="round">
        <line x1="24" y1="8" x2="24" y2="12" />
        <line x1="24" y1="36" x2="24" y2="40" />
        <line x1="40" y1="24" x2="36" y2="24" />
        <line x1="12" y1="24" x2="8" y2="24" />
      </g>

      {/* Compass needle */}
      <g>
        <path d="M24 10 L28 24 L24 26 L20 24 Z" fill="#ef4444" />
        <path d="M24 38 L20 24 L24 22 L28 24 Z" fill="#ffffff" />
      </g>

      {/* Center dot */}
      <circle cx="24" cy="24" r="2" fill="#1f2937" />

      {/* Airplane icon overlay */}
      <g transform="translate(32, 8)">
        <path
          d="M2 6 L8 2 L12 6 L8 8 L6 10 L4 8 Z"
          fill="#ffffff"
          stroke="#0284c7"
          strokeWidth="1"
        />
      </g>

      <defs>
        <linearGradient id="blueGradient" x1="0" x2="1">
          <stop offset="0" stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
      </defs>
    </svg>
  );

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        {showIcon && <div>{LogoIcon}</div>}
        <div className="text-center">
          <h1 className={`${textSize} font-bold tracking-tight text-white`}>
            Travel<span className="text-sky-400">Trove</span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Discover Your Next Adventure
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-2 ${sizeClasses[size]} ${className}`}
    >
      {showIcon && <div className="flex-shrink-0">{LogoIcon}</div>}
      <h1
        className={`${textSize} font-bold tracking-tight leading-none text-white`}
      >
        Travel<span className="text-sky-400">Trove</span>
      </h1>
    </div>
  );
}
