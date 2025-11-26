import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function Card({ className, children, ...props }) {
    return (
        <div
            className={twMerge(
                "bg-surface/50 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-xl",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({ className, children, ...props }) {
    return (
        <div className={twMerge("mb-4", className)} {...props}>
            {children}
        </div>
    );
}

export function CardTitle({ className, children, ...props }) {
    return (
        <h3 className={twMerge("text-lg font-semibold text-text-main", className)} {...props}>
            {children}
        </h3>
    );
}

export function CardContent({ className, children, ...props }) {
    return (
        <div className={twMerge("", className)} {...props}>
            {children}
        </div>
    );
}
