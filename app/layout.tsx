import type { Metadata } from 'next'
import './globals.css'
import ChatWidget from '@/components/ChatWidget'

export const metadata: Metadata = {
  title: 'Noor Educational System | 25 Years of Excellence',
  description: 'Noor Educational System - A proven, scalable education model trusted by families for 25 years. From early childhood to college, trainings to certifications.',
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
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
