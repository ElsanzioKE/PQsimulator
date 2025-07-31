import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">PQsimulator</h1>
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
          <Link href="/docs" className="text-gray-700 hover:text-blue-500">Docs</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

