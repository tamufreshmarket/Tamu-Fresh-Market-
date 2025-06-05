// src/components/ui/input.tsx import * as React from "react" import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => { return ( <input type={type} className={cn( "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className )} ref={ref} {...props} /> ) }) Input.displayName = "Input"

export { Input }

// src/components/ui/badge.tsx import * as React from "react" import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> { variant?: "default" | "secondary" | "destructive" }

const badgeVariants = { default: "bg-green-100 text-green-800", secondary: "bg-gray-100 text-gray-800", destructive: "bg-red-100 text-red-800", }

const Badge = React

