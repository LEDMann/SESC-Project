import { VariantProps, cva } from "class-variance-authority"
import React, { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

const buttonStyles = cva([], {
    variants: {
        background: {
            default: ["hover:bg-secondary", "dark:hover:bg-slate-700", "text-slate-800", "dark:text-slate-200", "transition-colors"],
            gradient: ["icon-button", "text-slate-200"]
        },
        size: {
            default: ["rounded-lg", "p-2"],
            icon: ["rounded-xl", "w-10", "h-10", "flex", "items-center", "justify-center", "p-2.5"]
        }
    }
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export function Button({ size, background, className, ...props }: ButtonProps) {
    return <button { ...props } className={twMerge(className, buttonStyles({ size, background }))}/>
}