import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">PetroPulse</h3>
          <p className="mt-2 text-sm text-slate-600">
            The modern way to discover nearby fuel stations, prices, and peak hours.
          </p>
        </div>
        <nav className="grid gap-2" aria-label="Footer">
          <a href="#" className="text-sm text-slate-600 hover:text-slate-900">Home</a>
          <a href="#nearby" className="text-sm text-slate-600 hover:text-slate-900">Nearby</a>
          <a href="#dashboard" className="text-sm text-slate-600 hover:text-slate-900">Dashboard</a>
          <a href="#contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</a>
        </nav>
        <div className="flex items-start gap-3">
          <a href="#" aria-label="Facebook" className="p-2 rounded hover:bg-slate-100"><Facebook className="h-5 w-5" /></a>
          <a href="#" aria-label="Twitter" className="p-2 rounded hover:bg-slate-100"><Twitter className="h-5 w-5" /></a>
          <a href="#" aria-label="Instagram" className="p-2 rounded hover:bg-slate-100"><Instagram className="h-5 w-5" /></a>
          <a href="#" aria-label="Email" className="p-2 rounded hover:bg-slate-100"><Mail className="h-5 w-5" /></a>
        </div>
      </div>
      <div className="border-t border-slate-200 text-center text-xs text-slate-500 py-4">
        © {new Date().getFullYear()} PetroPulse. All rights reserved.
      </div>
    </footer>
  );
}
