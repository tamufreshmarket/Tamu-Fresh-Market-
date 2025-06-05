// src/components/ui/input.tsx import * as React from "react" import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => { return ( <input type={type} className={cn( "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className )} ref={ref} {...props} /> ) }) Input.displayName = "Input"

export { Input }

// src/components/ui/badge.tsx import * as React from "react" import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> { variant?: "default" | "secondary" | "destructive" }

const badgeVariants = { default: "bg-green-100 text-green-800", secondary: "bg-gray-100 text-gray-800", destructive: "bg-red-100 text-red-800", }

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(({ className, variant = "default", ...props }, ref) => { return ( <div ref={ref} className={cn( "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", badgeVariants[variant], className )} {...props} /> ) }) Badge.displayName = "Badge"

export { Badge }

// src/components/ui/modal.tsx import * as React from "react" import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog" import { Button } from "@/components/ui/button"

interface ModalProps { open: boolean onOpenChange: (open: boolean) => void title: string description?: string children: React.ReactNode footer?: React.ReactNode }

export function Modal({ open, onOpenChange, title, description, children, footer }: ModalProps) { return ( <Dialog open={open} onOpenChange={onOpenChange}> <DialogContent> <DialogHeader> <DialogTitle>{title}</DialogTitle> {description && <DialogDescription>{description}</DialogDescription>} </DialogHeader> <div>{children}</div> {footer && <DialogFooter>{footer}</DialogFooter>} </DialogContent> </Dialog> ) }

