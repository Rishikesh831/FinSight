import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function Input({ className, ...props }) {
    return (
        <input
            className={twMerge(
                "flex h-11 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-text-main placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50 transition-all",
                className
            )}
            {...props}
        />
    );
}

export function Label({ className, children, ...props }) {
    return (
        <label
            className={twMerge(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-text-muted mb-2 block",
                className
            )}
            {...props}
        >
            {children}
        </label>
    );
}
