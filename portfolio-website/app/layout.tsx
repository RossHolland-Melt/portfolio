
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ross Holland | Personal Portfolio',
  description: 'Ross is a data scientist who holds a computer science degree ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-blue-500 text-gray-100'}>
        <div className='bg-[#e94a4a75] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] '></div>

<Header />
        {children}
        
        </body>
    </html>
  )
}
