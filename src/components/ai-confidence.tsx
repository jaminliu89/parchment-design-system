import * as React from "react";
import { cn } from "../lib/cn";

export interface AIConfidenceProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  label?: React.ReactNode;
}

export function AIConfidence({ value, label = "Confidence", className, ...props }: AIConfidenceProps) {
  const normalized = Math.max(0, Math.min(100, value));
  return <div className={cn("p-ai-confidence", className)} {...props}><div className="p-ai-confidence-copy"><span>{label}</span><span>{Math.round(normalized)}%</span></div><div className="p-ai-confidence-track" role="meter" aria-valuemin={0} aria-valuemax={100} aria-valuenow={normalized}><span className="p-ai-confidence-fill" style={{ "--p-ai-confidence": `${normalized}%` } as React.CSSProperties} /></div></div>;
}
