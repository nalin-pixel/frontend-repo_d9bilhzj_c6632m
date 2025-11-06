import { useState } from 'react';
import { Fuel, Search, Menu, X, User } from 'lucide-react';

function NavLink({ children, href = '#' }) {
  return (
    <a
      href={href}
      className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
    >
      {children}
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <Fuel className="h-6 w-6 text-blue-600" aria-hidden="true" />
            <span>PetroPulse</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            <NavLink>Home</NavLink>
            <NavLink>Nearby Pumps</NavLink>
            <NavLink>Dashboard</NavLink>
            <NavLink>Showcase</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
          </nav>

          {/* Search + User */}
          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search pumps..."
                className="pl-9 pr-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                aria-label="Search pumps"
              />
            </div>
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded bg-slate-900 text-white text-sm hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              <User className="h-4 w-4" />
              Sign in
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden pb-4" role="dialog" aria-modal="true">
            <div className="flex flex-col gap-1" onClick={() => setOpen(false)}>
              <NavLink>Home</NavLink>
              <NavLink>Nearby Pumps</NavLink>
              <NavLink>Dashboard</NavLink>
              <NavLink>Showcase</NavLink>
              <NavLink>About</NavLink>
              <NavLink>Contact</NavLink>
              <div className="mt-2">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" aria-hidden="true" />
                  <input
                    type="search"
                    placeholder="Search pumps..."
                    className="w-full pl-9 pr-3 py-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    aria-label="Search pumps"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
