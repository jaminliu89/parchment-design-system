import * as React from "react";
import { cn } from "../lib/cn";
export interface SettingsSectionProps extends React.HTMLAttributes<HTMLElement> { heading: React.ReactNode; description?: React.ReactNode; actions?: React.ReactNode; children?: React.ReactNode; }
export function SettingsSection({ heading, description, actions, children, className, ...props }: SettingsSectionProps) { return <section className={cn("p-pattern-settings-section", className)} {...props}><header><div><h2>{heading}</h2>{description ? <p>{description}</p> : null}</div>{actions ? <div className="p-pattern-settings-section-actions">{actions}</div> : null}</header><div className="p-pattern-settings-section-content">{children}</div></section>; }
