'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { Logo } from '@/components/shared/Logo'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-surface-base/95 backdrop-blur-md border-b border-border py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="section-container flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  'flex items-center gap-1 px-4 py-2 text-sm font-body font-medium transition-colors rounded-md',
                  pathname.startsWith(link.href) && link.href !== '/'
                    ? 'text-gold'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {link.label}
                {link.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>

              <AnimatePresence>
                {link.children && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-surface-card border border-border-gold rounded-card p-2 shadow-xl"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-text-secondary hover:text-gold hover:bg-[rgba(201,168,76,0.05)] rounded-md transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-gold text-surface-base text-sm font-medium font-body rounded-md hover:bg-gold-light transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(201,168,76,0.2)]"
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-text-primary p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-surface-card border-t border-border overflow-hidden"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 px-4 text-text-secondary hover:text-gold transition-colors rounded-md hover:bg-[rgba(201,168,76,0.05)] font-body"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 py-3 px-4 bg-gold text-surface-base text-center rounded-md font-medium font-body"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
