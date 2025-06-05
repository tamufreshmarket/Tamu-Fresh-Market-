// src/app/layout.tsx
import "@/styles/globals.css"
import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Tamu Fresh Market",
  description: "Fresh produce delivered to your door",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        {children}
      </body>
    </html>
  )
                          }
