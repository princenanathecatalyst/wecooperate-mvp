import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WeCooperate - Building Collective Prosperity for Nigerians',
  description: 'WeCooperate is a premium digital membership network connecting Nigerian professionals, entrepreneurs, and communities for structured collaboration and shared growth.',
  keywords: 'Nigeria, cooperation, membership, digital network, collaboration, financial literacy, bulk buying, investment education',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
