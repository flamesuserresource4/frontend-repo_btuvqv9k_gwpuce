import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Beranda' },
  { to: '/profil', label: 'Profil' },
  { to: '/visi-misi', label: 'Visi-Misi' },
  { to: '/struktur', label: 'Struktur' },
  { to: '/anggota', label: 'Anggota' },
  { to: '/agenda', label: 'Agenda' },
  { to: '/berita', label: 'Berita' },
  { to: '/kegiatan', label: 'Kegiatan' },
  { to: '/kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'px-3 py-2 rounded-md text-sm font-medium transition-colors'

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded bg-gradient-to-br from-red-600 to-blue-700 flex items-center justify-center text-white font-bold">D</div>
            <div className="leading-tight">
              <p className="text-sm text-gray-500">Sekretariat</p>
              <p className="font-semibold text-gray-900">DPRK Kota Langsa</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? 'bg-red-600 text-white' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
