import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Noor School',
  description: 'Welcome to The Noor School - Education with Values',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
