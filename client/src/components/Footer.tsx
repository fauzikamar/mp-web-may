import { Link } from 'wouter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">MAGNITUDE POWER</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Engineering and power solutions for Malaysia's industrial sector. Powering reliability. Delivering excellence.
            </p>
            <p className="text-gray-400 text-xs">Company Reg: 938838 M</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#00d4ff]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#00d4ff]">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                  Trading
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#00d4ff] transition-colors">
                  Get Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#00d4ff]">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#00d4ff] mt-0.5">📞</span>
                <a href="tel:+60198833981" className="text-gray-300 hover:text-[#00d4ff] transition-colors">019-8833981</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00d4ff] mt-0.5">✉️</span>
                <a href="mailto:magnitudepower@gmail.com" className="text-gray-300 hover:text-[#00d4ff] transition-colors">magnitudepower@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00d4ff] mt-0.5">📍</span>
                <span className="text-gray-300 text-xs leading-relaxed">18, Jalan Seksyen 2/17, Taman Kajang Utama, 43000 Kajang, Selangor</span>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <span className="text-[#00d4ff] mt-0.5">f</span>
                <a href="https://facebook.com/magnitude.power.9" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#00d4ff] transition-colors">Facebook</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Magnitude Power Sdn Bhd. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-[#00d4ff] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
