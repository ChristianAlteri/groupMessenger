import type { Metadata } from 'next'
import { Inter, Italiana } from 'next/font/google'
import './globals.css'

import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'

// const inter = Italiana({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Groups Messenger',
  description: 'Groups Messenger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
