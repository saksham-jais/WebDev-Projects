"use client";

import { useState } from "react";
import { Users2 } from "lucide-react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: "person" | "building";
}

export default function SafeImage({ src, alt, className, fallbackType = "person" }: SafeImageProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className={`${className} bg-slate-100 flex items-center justify-center overflow-hidden`}>
        {fallbackType === "person" ? (
          <Users2 className="w-1/2 h-1/2 text-slate-300" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200" />
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
