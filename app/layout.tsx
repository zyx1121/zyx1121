import { WebNav } from "@/components/web/WebNav"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const font = localFont({ src: "./font.woff2", variable: "--font-mono" })

export const metadata: Metadata = {
  title: "localhost",
  description: "3000",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("min-h-[100dvh] bg-background font-mono antialiased dark", font.variable)}>
        <WebNav />
        {children}
      </body>
    </html>
  )
}
