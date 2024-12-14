import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Your Vision, My Code | Fullstack Web Developer',
  description: 'Explore the innovative projects and solutions crafted by a passionate fullstack web developer. Bringing your ideas to life with cutting-edge technologies and seamless user experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
