import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const Space = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rahul Portfolio',
  description: 'A brief introduction to my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Space.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
