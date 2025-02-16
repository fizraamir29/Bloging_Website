"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Trending News", href: "/trending-news" },
    { name: "Recent News", href: "/recent-news" },
    { name: "Clubs Ranking", href: "/clubs-ranking" },
    { name: "Sports Articles", href: "/sports-articles" },
  ]

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold">
          Sport News
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm hover:text-gray-600 ${pathname === item.href ? "text-primary font-medium" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Login/Logout Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsLoggedIn(!isLoggedIn)}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Button>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block py-2 px-4 text-sm hover:text-gray-600 ${pathname === item.href ? "text-primary font-medium" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
