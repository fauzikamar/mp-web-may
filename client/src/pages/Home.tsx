import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section - Full Width Dark */}
      <section className="section-full section-dark bg-pattern relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://d36hbw14aib5lz.cloudfront.net/310519663340871301/g9MunMFNJwgBU6YUKfxpQu/pasted_file_UnK5Uw_WhatsAppImage2026-04-21at1.18.26PM_f328bb62.jpeg?Expires=1779248844&Signature=mQoejjfXAbYy9mhzwdNa-w5ygBegxbscrpKSxY8gqgrtHXb1FnrIGF9COAs96AQETIjBk4L~-eirlLFcUHmYco4p89l4WPJ59sZ2N4s1XlHX-GugH7Z~7HOnAPOQ8t2gnYv25EeSLhUNQny4RZ4bTh~-QGGqGEheAHRZJBDdqx4mY0ypHBG1UbO2WQQgyF4NO6fP6KvjtQo6BbFhVUtu2rO1gVgEhzE7n7C7D2kY5IKYeTqiFaRgfVl-JfrbFjrQ39pPpJEZp56GzTiI6x-XXLA5KDw23W233Tnk1Kljxq7iaGig0vKKA1ar~J2ppSdDewf4XNozt5pBPhtg7rgpHw__&Key-Pair-Id=K1MP89RTKNH4J"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-content relative z-10">
          <h1 className="mb-6 leading-tight">
            Powering Reliability.
            <br />
            <span className="text-[#00d4ff]">Delivering Excellence.</span>
          </h1>
          <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Magnitude Power Sdn Bhd provides professional electrical engineering, power system maintenance, and energy solutions for industrial, commercial, and government sectors across Malaysia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-pmx">
              Request a Quotation
            </Link>
            <Link href="/products" className="btn-pmx-light">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Snapshot - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-6 text-slate-900">About Magnitude Power</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            <strong>Incorporated on 1 April 2011</strong>, Magnitude Power Sdn Bhd is an Electrical Equipment Supplier and Services Company specializing in electrical services ranging from Low Voltage (LV) and High Voltage (HV) up to 500kV.
          </p>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            We are successfully registered as a supplier and distributor with the <strong>Ministry of Finance (MOF)</strong> and <strong>Tenaga Nasional Berhad (TNB)</strong>. We serve as an authorized contractor for installation, servicing, testing and commissioning of power transformers for <strong>Malaysia Transformer Manufacturing Sdn Bhd</strong> (a subsidiary of TNB).
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our mission is to provide Malaysia's power industry with quality products and services that are more affordable, efficient, and reliable.
          </p>
        </div>
      </section>

      {/* Core Services Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-6 text-white">Our Products & Services</h2>
          <p className="text-xl text-gray-100 mb-12">
            Comprehensive solutions across services, trading, and construction sectors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Services */}
            <div className="bg-slate-800/50 p-8 border border-[#00d4ff]/30">
              <h3 className="text-2xl font-bold text-[#00d4ff] mb-4">Services</h3>
              <ul className="text-gray-200 space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Power Transformer Repair & Refurbishment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Installation, Testing & Commissioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>High Voltage & Low Voltage Services</span>
                </li>
              </ul>
              <Link href="/products" className="text-[#00d4ff] font-semibold hover:text-white transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Trading */}
            <div className="bg-slate-800/50 p-8 border border-[#00d4ff]/30">
              <h3 className="text-2xl font-bold text-[#00d4ff] mb-4">Trading</h3>
              <ul className="text-gray-200 space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Oil Immersed Power Transformers (up to 500kV)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Distribution Transformers (Oil & Dry type, up to 36kV)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>High Voltage Switchgear (VCB & GIS, up to 275kV)</span>
                </li>
              </ul>
              <Link href="/products" className="text-[#00d4ff] font-semibold hover:text-white transition-colors">
                Learn More →
              </Link>
            </div>

            {/* Construction */}
            <div className="bg-slate-800/50 p-8 border border-[#00d4ff]/30">
              <h3 className="text-2xl font-bold text-[#00d4ff] mb-4">Construction</h3>
              <ul className="text-gray-200 space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Civil works</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Mechanical & electrical (M&E)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>System integration</span>
                </li>
              </ul>
              <Link href="/products" className="text-[#00d4ff] font-semibold hover:text-white transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-12 text-slate-900">Why Choose Magnitude Power</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded">
              <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#1e5a96] text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Experienced Team</h3>
              <p className="text-slate-600">Experienced and qualified engineering team with proven expertise in power systems.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded">
              <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#1e5a96] text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Track Record</h3>
              <p className="text-slate-600">Proven project delivery record across multiple sectors and industries.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded">
              <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#1e5a96] text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance & Safety</h3>
              <p className="text-slate-600">Compliance with safety and regulatory standards in all operations.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded">
              <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#1e5a96] text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Responsive Support</h3>
              <p className="text-slate-600">Fast and responsive technical support when you need it most.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded">
              <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#1e5a96] text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Customized Solutions</h3>
              <p className="text-slate-600">Customized engineering solutions tailored to your specific requirements.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded">
              <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-[#1e5a96] text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Focused</h3>
              <p className="text-slate-600">Quality-focused execution on every project, every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-12 text-white">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Manufacturing', 'Healthcare', 'Government Agencies', 'Commercial Buildings', 'Data Centres', 'Utilities', 'Education Institutions', 'Infrastructure Projects'].map((industry) => (
              <div key={industry} className="bg-slate-800/50 p-6 border border-[#00d4ff]/30 text-center">
                <p className="text-[#00d4ff] font-semibold text-lg">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-6 text-slate-900">Our Clients</h2>
          <p className="text-xl text-slate-600 mb-12">
            Trusted by Malaysia's leading power generation, transmission, and distribution companies.
          </p>
          <div className="bg-white p-12 border border-gray-200 rounded">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663340871301/g9MunMFNJwgBU6YUKfxpQu/client-logos-grid-aB7vrj3YsaMQSgoaj4QyAS.webp"
              alt="Client Logos"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-6 text-white">Need Reliable Power Solutions?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Speak with our engineering team today to discuss your project requirements.
          </p>
          <Link href="/contact" className="btn-pmx inline-block">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
