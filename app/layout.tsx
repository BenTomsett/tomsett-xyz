import React from "react";
import {Metadata} from "next";
import {Work_Sans} from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google'

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Home - Ben Tomsett',
  description: 'Full-stack Software Engineer',
  twitter: {
    card: 'summary',
    creator: '@benjitomsett'
  },
  openGraph: {
    url: 'https://tomsett.xyz',
    images: {
      url: 'https://tomsett.xyz/img/og.png',
    },
    siteName: 'Full-stack Software Engineer',
    title: 'Ben Tomsett',
    type: 'profile',
    description: 'Full-stack Software Engineer'
  }
}

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bt'
})

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className={workSans.variable}>
      <body className="flex flex-col flex-nowrap p-0">
        {children}
      </body>
      <GoogleAnalytics gaId="G-6GVR4M2YJB" />
    </html>
  )
}