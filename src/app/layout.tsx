import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Me contrate`,
  description: 'Clique aqui e veja se é capaz de não me contratar!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
          >
        {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
