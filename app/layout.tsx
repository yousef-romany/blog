import Header from '@/components/header/Header'
import './globals.css'
import Footer from '@/components/footer/Footer'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " " + "bg-[#1c1917] labtop:pl-[150px] labtop:pr-[150px] tablet:pl-[25px] tablet:pr-[25px] mobile:pl-[15px] mobile:pr-[15px]"}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
