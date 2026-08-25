import * as React from "react";
import { cn } from "../lib/cn";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt: string;
  fallback?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export function Avatar({ src, alt, fallback, size = "md", className, ...props }: AvatarProps) {
  return (
    <span className={cn("p-avatar", `p-avatar-${size}`, className)} {...props}>
      {src ? <img className="p-avatar-image" src={src} alt={alt} /> : <span className="p-avatar-fallback" aria-label={alt}>{fallback ?? alt.slice(0, 1)}</span>}
    </span>
  );
}
