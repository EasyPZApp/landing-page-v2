import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="EasyPZ"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>
          {/* For mobile, let's show a simple navigation menu */}
          <nav className="flex space-x-6">
          </nav>
        </div>
      </div>
    </nav>
  )
}