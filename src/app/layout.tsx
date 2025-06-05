// src/app/layout.tsx
import React from "react";

export const metadata = {
  title: "Tamu Fresh Market",
  description: "Fresh produce from farm to table",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
