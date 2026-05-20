import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'PRODUCTS', href: '/products' },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'INDUSTRIES', href: '/industries' },
    { label: 'CERTIFICATIONS', href: '/certifications' },
    { label: 'CONTACT US', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <img
            src="https://d36hbw14aib5lz.cloudfront.net/310519663340871301/g9MunMFNJwgBU6YUKfxpQu/pasted_file_EPXML3_image_bc1344c4.png?Expires=1779246895&Signature=j~KTxWvMucFEIwdq78vqgHE4nmwbTkCdJqFBRVRhqzbppMG5ugnu4ZkSVZ6OFdZvKnL3o~C9tWWwpSTUcLtByUM0kZ~jwTzzW-GIBfSDSm71DgsOaPozsbR3L-UAegmJxYHL87ZMOGiheOncq8U4QaJ6MJYHQCtPOnlDLbDBDnMkp5hmD3CNbzpMctw0v0MYi8zZzpy7g-yCydreJ3mnwt3BukJ-sH0oSAAo~lOVYyRyB-6pFITbgnpQGpAH9JuBfGtrd3TwGCatHhzZFM6xY~a8yERIe~AE~UEy4XiYdt-I07adwih85PVHwuCNAa97gPEgrZpt42aV9KqR1jCVZg__&Key-Pair-Id=K1MP89RTKNH4J"
            alt="Magnitude Power Logo"
            className="h-12 w-auto"
          />
          <span className="text-[#1e5a96] hidden sm:inline">MAGNITUDE POWER</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="text-sm font-semibold text-slate-700 hover:text-[#00d4ff] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-semibold text-slate-700 hover:text-[#00d4ff] transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
