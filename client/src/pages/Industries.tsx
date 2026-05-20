import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Industries() {
  const industries = [
    {
      name: 'Manufacturing',
      description: 'Reliable power systems to support uninterrupted production.',
      icon: '⚙️',
    },
    {
      name: 'Healthcare',
      description: 'Critical electrical infrastructure for hospitals and medical facilities.',
      icon: '🏥',
    },
    {
      name: 'Government',
      description: 'Secure and compliant engineering services for public agencies.',
      icon: '🏛️',
    },
    {
      name: 'Commercial Buildings',
      description: 'Efficient systems for offices, malls, and mixed developments.',
      icon: '🏢',
    },
    {
      name: 'Data Centres',
      description: 'High-availability power and backup solutions.',
      icon: '🖥️',
    },
    {
      name: 'Utilities',
      description: 'Specialized support for power distribution and infrastructure.',
      icon: '⚡',
    },
    {
      name: 'Education Institutions',
      description: 'Reliable power systems for schools, colleges, and universities.',
      icon: '🎓',
    },
    {
      name: 'Infrastructure Projects',
      description: 'Comprehensive electrical solutions for large-scale infrastructure.',
      icon: '🏗️',
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
            Industries We
            <br />
            <span className="text-[#00d4ff]">Serve</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Solutions tailored to your industry's unique requirements and challenges.
          </p>
        </div>
      </section>

      {/* Industries Grid - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-8 border border-gray-200 rounded hover:shadow-lg transition-shadow text-center">
                <p className="text-5xl mb-4">{industry.icon}</p>
                <h3 className="text-xl font-bold text-[#1e5a96] mb-3">{industry.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Excel - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-12 text-white">Why We Excel in These Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 border border-[#00d4ff]/30">
              <h3 className="text-2xl font-bold text-[#00d4ff] mb-4">Deep Sector Knowledge</h3>
              <p className="text-gray-200 mb-4">
                With 15+ years of experience across multiple industries, we understand the unique challenges and requirements of each sector.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff]">•</span>
                  <span>Industry-specific compliance expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff]">•</span>
                  <span>Proven best practices and standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff]">•</span>
                  <span>Customized solutions for each sector</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-8 border border-[#00d4ff]/30">
              <h3 className="text-2xl font-bold text-[#00d4ff] mb-4">Proven Track Record</h3>
              <p className="text-gray-200 mb-4">
                Our portfolio demonstrates successful project delivery across diverse industries with measurable results.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff]">•</span>
                  <span>200+ completed projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff]">•</span>
                  <span>50+ satisfied industry clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff]">•</span>
                  <span>High project success rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Stats - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-12 text-slate-900">Our Industry Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-[#00d4ff] mb-2">8+</p>
              <p className="text-slate-600 font-semibold">Industries Served</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#00d4ff] mb-2">200+</p>
              <p className="text-slate-600 font-semibold">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#00d4ff] mb-2">50+</p>
              <p className="text-slate-600 font-semibold">Industry Clients</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-[#00d4ff] mb-2">15+</p>
              <p className="text-slate-600 font-semibold">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-6 text-white">Let's Discuss Your Industry Needs</h2>
          <p className="text-xl text-gray-100 mb-8">
            Contact our team to explore how Magnitude Power can support your sector-specific requirements.
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
