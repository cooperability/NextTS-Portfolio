import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <div className="space-x-4">
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-300 hover:underline"
        >
          Home
        </Link>
        <Link
          href="/demos/"
          className="text-blue-600 dark:text-blue-300 hover:underline"
        >
          Demos
        </Link>
        <Link
          href="/resources/"
          className="text-blue-600 dark:text-blue-300 hover:underline"
        >
          Resources
        </Link>
      </div>
    </nav>
  )
}
