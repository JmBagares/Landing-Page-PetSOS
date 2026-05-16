import { useState } from "react";
import { PawPrint, Menu, X, LogIn } from "lucide-react";

const ADMIN_URL = "https://admin-petsos-frontend-jmb.vercel.app/";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Download", href: "#download" },
  { label: "Volunteers", href: "#community" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto mt-3 max-w-7xl px-4">
        <nav className="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-white/80 backdrop-blur-xl px-5 py-3 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.08)]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white shadow-sm">
              <PawPrint className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Pet<span className="text-blue-600">SOS</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="relative py-1 transition-colors hover:text-blue-600 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-blue-600 after:rounded-full after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={ADMIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 hover:border-slate-300"
            >
              <LogIn className="h-4 w-4" />
              Admin Login
            </a>
            <a
              href="#download"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25"
            >
              Get the App
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden grid h-9 w-9 place-items-center rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden mt-2 rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-xl p-4 shadow-lg animate-[fade-up_0.3s_ease-out_both]">
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={ADMIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <LogIn className="h-4 w-4" />
                Admin Login
              </a>
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Get the App
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
