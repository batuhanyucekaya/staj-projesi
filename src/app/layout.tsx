import './globals.css'
import type { ReactNode } from 'react'
import Navbar from '../app/components/navbar'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
