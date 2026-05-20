import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Certifications() {
  const certifications = [
    {
      name: 'CIDB Registration',
      category: 'Construction Industry',
      description: 'Construction Industry Development Board registration for construction and engineering works.',
    },
    {
      name: 'Suruhanjaya Tenaga Compliance',
      category: 'Energy Sector',
      description: 'Full compliance with Energy Commission (Suruhanjaya Tenaga) regulations and standards.',
    },
    {
      name: 'Safety Certifications',
      category: 'Workplace Safety',
      description: 'Comprehensive safety certifications ensuring safe work practices and employee protection.',
    },
    {
      name: 'OEM Partnerships',
      category: 'Equipment & Technology',
      description: 'Authorized partnerships with leading Original Equipment Manufacturers for quality assurance.',
    },
    {
      name: 'ISO Certifications',
      category: 'Quality Management',
      description: 'ISO standards compliance for quality, safety, and environmental management.',
    },
    {
      name: 'Professional Standards',
      category: 'Engineering Excellence',
      description: 'Adherence to professional engineering standards and industry best practices.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="section-full section-dark bg-pattern relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://d36hbw14aib5lz.cloudfront.net/310519663340871301/g9MunMFNJwgBU6YUKfxpQu/pasted_file_UnK5Uw_WhatsAppImage2026-04-21at1.18.26PM_f328bb62.jpeg?Expires=1779248844&Signature=mQoejjfXAbYy9mhzwdNa-w5ygBegxbscrpKSxY8gqgrtHXb1FnrIGF9COAs96AQETIjBk4L~-eirlLFcUHmYco4p89l4WPJ59sZ2N4s1XlHX-GugH7Z~7HOnAPOQ8t2gnYv25EeSLhUNQny4RZ4bTh~-QGGqGEheAHRZJBDdqx4mY0ypHBG1UbO2WQQgyF4NO6fP6KvjtQo6BbFhVUtu2rO1gVgEhzE7n7C7D2kY5IKYeTqiFaRgfVl-JfrbFjrQ39pPpJEZp56GzTiI6x-XXLA5KDw23W233Tnk1Kljxq7iaGig0vKKA1ar~J2ppSdDewf4XNozt5pBPhtg7rgpHw__&Key-Pair-Id=K1MP89RTKNH4J"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="section-content relative z-10">
          <h1 className="mb-6 leading-tight">
            Quality, Safety &
            <br />
            <span className="text-[#00d4ff]">Compliance</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Committed to maintaining compliance with all relevant regulations and industry best practices.
          </p>
        </div>
      </section>

      {/* Certifications Grid - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 rounded hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-2xl font-bold text-[#1e5a96]">✓</div>
                </div>
                <h3 className="text-xl font-bold text-[#1e5a96] mb-2">{cert.name}</h3>
                <p className="text-[#00d4ff] text-sm font-semibold mb-3">{cert.category}</p>
                <p className="text-slate-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Commitment - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-12 text-white">Our Commitment to Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 border border-[#00d4ff]/30">
              <h3 className="text-2xl font-bold text-[#00d4ff] mb-6">Regulatory Compliance</h3>
              <p className="text-gray-100 mb-6 leading-relaxed">
                We maintain strict compliance with all Malaysian electrical regulations, safety standards, and industry requirements. Our CIDB registration and Suruhanjaya Tenaga compliance ensure that all our work meets the highest regulatory standards.
              </p>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff]">•</span>
                  <span>Full regulatory compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff]">•</span>
                  <span>Regular compliance audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff]">•</span>
                  <span>Updated certifications</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 border border-[#00d4ff]/30">
              <h3 className="text-2xl font-bold text-[#00d4ff] mb-6">Safety & Quality</h3>
              <p className="text-gray-100 mb-6 leading-relaxed">
                Safety is paramount in everything we do. Our comprehensive safety certifications and OEM partnerships ensure that we deliver work of the highest quality using approved equipment and best practices.
              </p>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff]">•</span>
                  <span>Safety-first operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff]">•</span>
                  <span>Quality assurance processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff]">•</span>
                  <span>Continuous improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Gallery - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-12 text-slate-900">Our Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* ISO 9001 */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/manus-storage/cert-iso9001_6234433b.png" 
                alt="ISO 9001:2015 Certificate" 
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1e5a96] mb-1">ISO 9001:2015</h3>
                <p className="text-[#00d4ff] text-sm font-semibold">Quality Management System</p>
              </div>
            </div>

            {/* CIDB */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/manus-storage/cert-cidb_dfe2fc7e.png" 
                alt="CIDB Registration Certificate" 
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1e5a96] mb-1">CIDB Registration</h3>
                <p className="text-[#00d4ff] text-sm font-semibold">Construction Industry Development Board</p>
              </div>
            </div>

            {/* SESB */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/manus-storage/cert-sesb_b9b54f74.png" 
                alt="SESB Certification" 
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1e5a96] mb-1">SESB Certification</h3>
                <p className="text-[#00d4ff] text-sm font-semibold">Electrical Safety Standards</p>
              </div>
            </div>

            {/* TNB Supplier */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/manus-storage/cert-tnb_362b3144.png" 
                alt="TNB Supplier Certificate" 
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1e5a96] mb-1">TNB Supplier</h3>
                <p className="text-[#00d4ff] text-sm font-semibold">Authorized Contractor & Supplier</p>
              </div>
            </div>

            {/* KKM Bumiputera */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/manus-storage/cert-kkm-bumiputera_b3f9544c.png" 
                alt="KKM Bumiputera Certificate" 
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1e5a96] mb-1">KKM Bumiputera</h3>
                <p className="text-[#00d4ff] text-sm font-semibold">Ministry of Works Certification</p>
              </div>
            </div>

            {/* KKM */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/manus-storage/cert-kkm_10b9ec9e.png" 
                alt="KKM Certificate" 
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1e5a96] mb-1">KKM Certification</h3>
                <p className="text-[#00d4ff] text-sm font-semibold">Ministry Approval & Compliance</p>
              </div>
            </div>

            {/* ST */}
            <div className="bg-white border border-gray-200 rounded overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/manus-storage/cert-st_87555580.png" 
                alt="ST Certification" 
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#1e5a96] mb-1">ST Certification</h3>
                <p className="text-[#00d4ff] text-sm font-semibold">Suruhanjaya Tenaga Technical Standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-6 text-white">Trust Our Certified Expertise</h2>
          <p className="text-xl text-gray-100 mb-8">
            Partner with a certified, compliant, and committed engineering firm for your power and electrical solutions.
          </p>
          <Link href="/contact" className="btn-pmx inline-block">
            Request Our Credentials
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
