import './globals.css'
import Navbar from '@/components/Navbar'  // <-- Correct import based on alias

export const metadata = {
  title: 'PQsimulator',
  description: 'Power Quality Monitoring Simulator',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* 👈 Include the navbar */}
        {children}
      </body>
    </html>
  )
}

