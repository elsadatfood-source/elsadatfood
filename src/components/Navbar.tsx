import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react'
import { navLinks, siteInfo } from '../data/siteData'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'glass-effect shadow-lg shadow-black/30 py-2' : 'py-4'
        }`}
      style={{ borderBottom: scrolled ? '1px solid rgb(144, 21, 34)' : 'none' }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div
            className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-110"
            style={{
              background: 'var(--black)',
              boxShadow: '0 0 20px rgba(200,0,26,0.4)',
              border: '1px solid rgba(200,0,26,0.2)'
            }}
          >
            <img
              src="/images/logo.png"
              alt={siteInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback في حال لم يتم العثور على مسار الصورة بعد
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-lg" style={{ color: 'var(--cream)', fontFamily: 'Tajawal, sans-serif' }}>
              {siteInfo.name}
            </div>
            <div className="text-xs" style={{ color: 'var(--copper-light)', fontFamily: 'Cairo, sans-serif' }}>
              عمدة الأكل
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 relative"
                style={{
                  fontFamily: 'Cairo, sans-serif',
                  color: isActive ? 'var(--white)' : 'var(--cream-muted)',
                  background: isActive ? 'var(--red)' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--cream)'
                    e.currentTarget.style.background = 'rgba(244,239,229,0.06)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--cream-muted)'
                    e.currentTarget.style.background = 'transparent'
                  }
                }}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteInfo.phone}`}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300"
            style={{
              background: 'rgba(166,90,42,0.15)',
              border: '1px solid rgba(166,90,42,0.3)',
              color: 'var(--copper-light)',
              fontFamily: 'Cairo, sans-serif',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--copper)'
              e.currentTarget.style.color = 'var(--white)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(166,90,42,0.15)'
              e.currentTarget.style.color = 'var(--copper-light)'
            }}
          >
            <Phone size={14} />
            {siteInfo.phoneDisplay}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: 'var(--cream)' }}
          onClick={() => setOpen(!open)}
          aria-label="القائمة"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden glass-effect mt-2 mx-4 rounded-2xl overflow-hidden"
          style={{ border: '1px solid rgba(244,239,229,0.08)' }}
        >
          <div className="p-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-4 py-3 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    fontFamily: 'Cairo, sans-serif',
                    color: isActive ? 'var(--white)' : 'var(--cream-muted)',
                    background: isActive ? 'var(--red)' : 'transparent',
                  }}
                >
                  {link.name}
                </Link>
              )
            })}
            <a
              href={`tel:${siteInfo.phone}`}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold"
              style={{ background: 'var(--copper)', color: 'var(--white)', fontFamily: 'Cairo, sans-serif' }}
            >
              <Phone size={14} />
              {siteInfo.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
