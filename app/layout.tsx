// app/layout.tsx
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Zappit',
  description: 'Zappit by Imad',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">
        <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-lg">
          <nav className="mx-auto  max-w-7xl flex items-center justify-between py-7">
            {/* Logo */}
            <Link href="/" className="font-bold text-6xl">
              <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Zapp
              </span>
              it
            </Link>

            {/* Center Navigation ||/#is full link so that i can navigate to it from waitlist page too.|| */}
            <div className="hidden md:flex gap-10 text-gray-200 text-lg font-medium">
              <Link href="/#benefits" className="hover:text-white transition">Benefits</Link>
              <Link href="/#features" className="hover:text-white transition">Features</Link>
              <Link href="/#pricing" className="hover:text-white transition">Pricing</Link>
              <Link href="/#testimonials" className="hover:text-white transition">Testimonials</Link>
              <Link href="/#faq" className="hover:text-white transition">FAQ’s</Link>
            </div>

            {/* Right Button */}
            <a
              href="/waitlist"
              className="px-4 py-2 bg-white text-black rounded-lg text-base font-semibold hover:bg-gray-200 transition cursor-pointer"
            >
              Join Waitlist
            </a>
          </nav>
        </header>

        <main>{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-4">
            <p className="text-sm">Empower Your Social Connections<br />with <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-red-600 bg-clip-text text-transparent">
              Zapp
            </span>
            it</p>
            <a className="text-sm underline" href="mailto:alamimad2112@gmail.com@appit.com">imad@zappit.com</a>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/#benefits">Benefits</Link>
              <Link href="/#features">Features</Link>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/#testimonials">Testimonials</Link>
              <Link href="/#faq">FAQ’s</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
