import React from "react";

export function TravelTroveLogo({
  size = "md",
  variant = "horizontal",
  showIcon = true,
  className = "",
}) {
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

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        {showIcon && (
          <div className="relative">
            <svg
              width={iconSize}
              height={iconSize}
              viewBox="0 0 48 48"
              fill="none"
            >
              {/* Compass background circle */}
              <circle
                cx="24"
                cy="24"
                r="20"
                fill="#0ea5e9"
                stroke="#0284c7"
                strokeWidth="2"
              />

              {/* Compass inner circle */}
              <circle cx="24" cy="24" r="16" fill="#ffffff" fillOpacity="0.1" />

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
            </svg>
          </div>
        )}
        <div className="text-center">
          <h1 className={`${textSize} font-bold text-white tracking-tight`}>
            Travel<span className="text-regal-blue">Trove</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Discover Your Next Adventure
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-1 ${sizeClasses[size]} ${className}`}
    >
      {showIcon && (
        <div className="relative flex-shrink-0">
          <svg
            width={iconSize}
            height={iconSize}
            viewBox="0 0 48 48"
            fill="none"
          >
            {/* Compass background circle */}
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="#0ea5e9"
              stroke="#0284c7"
              strokeWidth="2"
            />

            {/* Compass inner circle */}
            <circle cx="24" cy="24" r="16" fill="#ffffff" fillOpacity="0.1" />

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
          </svg>
        </div>
      )}
      <div>
        <h1
          className={`${textSize} font-bold text-primary tracking-tight leading-none`}
        >
          Travel<span className="text-sky-500">Trove</span>
        </h1>
      </div>
    </div>
  );
}
