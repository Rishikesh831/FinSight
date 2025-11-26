import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function Button({ className, variant = "primary", size = "md", ...props }) {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-gradient-to-r from-accent to-primary text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5",
        secondary: "bg-surface border border-white/10 text-text-main hover:bg-white/5",
        ghost: "text-text-muted hover:text-text-main hover:bg-white/5",
        danger: "bg-danger text-white hover:bg-danger/90",
    };

    const sizes = {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-base",
        lg: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        />
    );
}
