import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })
const metadataTitle = 'SSW Dory'
const metadataDescription = 'A low-code solution to automatically remind users to check-in their SharePoint pages or merge their open GitHub Pull Requests'

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: 'https://www.sswdory.com/',
    siteName: metadataTitle,
    images: '/dory-architecture-diagram.webp',
    type: 'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
