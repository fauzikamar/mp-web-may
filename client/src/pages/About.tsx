import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
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
            About
            <br />
            <span className="text-[#00d4ff]">Magnitude Power</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            A trusted Malaysian engineering solutions provider delivering reliable electrical and power systems.
          </p>
        </div>
      </section>

      {/* Company Profile - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-6 text-slate-900">Company Profile</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            <strong>Incorporated on 1 April 2011</strong>, Magnitude Power Sdn Bhd is an Electrical Equipment Supplier and Services Company specializing in comprehensive electrical services ranging from Low Voltage (LV) and High Voltage (HV) up to 500kV.
          </p>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            We are successfully registered as a <strong>supplier and distributor with the Ministry of Finance (MOF)</strong> and <strong>Tenaga Nasional Berhad (TNB)</strong>. We serve as an <strong>authorized contractor for installation, servicing, testing and commissioning of power transformers</strong> for Malaysia Transformer Manufacturing Sdn Bhd (a subsidiary of TNB).
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our team combines technical expertise, practical field experience, and a commitment to safety to ensure every project is completed to the highest standards. We are dedicated to providing Malaysia's power industry with quality products and services that are more affordable, efficient, and reliable.
          </p>
        </div>
      </section>

      {/* Vision & Mission - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6 text-white">Our Vision</h2>
              <p className="text-xl text-gray-100 leading-relaxed">
                To be among the leading Electrical Services Provider in the country, delivering innovative and reliable power solutions.
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-white">Our Mission</h2>
              <p className="text-xl text-gray-100 mb-4 leading-relaxed">
                To provide Malaysia's Power Industry with quality products and servicing that are more affordable, efficient and reliable.
              </p>
              <ul className="text-lg text-gray-100 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Deliver high-quality electrical equipment and services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Maintain highest standards of safety and technical excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00d4ff] mt-1">•</span>
                  <span>Build long-term partnerships with clients and stakeholders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-12 text-slate-900">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <h3 className="text-2xl font-bold text-[#1e5a96] mb-4">Integrity</h3>
              <p className="text-slate-600">We conduct our business with honesty and professionalism.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <h3 className="text-2xl font-bold text-[#1e5a96] mb-4">Safety</h3>
              <p className="text-slate-600">We prioritize the well-being of our employees, clients, and stakeholders.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <h3 className="text-2xl font-bold text-[#1e5a96] mb-4">Quality</h3>
              <p className="text-slate-600">We deliver solutions that meet stringent technical standards.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <h3 className="text-2xl font-bold text-[#1e5a96] mb-4">Reliability</h3>
              <p className="text-slate-600">We provide dependable services and responsive support.</p>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <h3 className="text-2xl font-bold text-[#1e5a96] mb-4">Innovation</h3>
              <p className="text-slate-600">We continuously seek better and more efficient solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-6 text-white">Ready to Work With Us?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Let's discuss how we can support your engineering and power system requirements.
          </p>
          <Link href="/contact" className="btn-pmx inline-block">
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
