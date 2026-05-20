import { Link } from 'wouter';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    serviceType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you soon!');
    setFormData({ name: '', email: '', phone: '', company: '', industry: '', serviceType: '', message: '' });
  };

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
            Get in
            <br />
            <span className="text-[#00d4ff]">Touch</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Contact our team to discuss your engineering and power solution needs.
          </p>
        </div>
      </section>

      {/* Contact Information - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e5a96] mb-2">Address</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                MAGNITUDE POWER SDN. BHD.<br />
                (938838 M)<br />
                18, Jalan Seksyen 2/17,<br />
                Taman Kajang Utama,<br />
                43000 Kajang, Selangor
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e5a96] mb-2">Phone</h3>
              <p className="text-slate-600">
                <a href="tel:+60198833981" className="hover:text-[#00d4ff] transition-colors">019-8833981</a><br />
                Available 24/7
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e5a96] mb-2">Email</h3>
              <p className="text-slate-600">
                <a href="mailto:magnitudepower@gmail.com" className="hover:text-[#00d4ff] transition-colors">magnitudepower@gmail.com</a><br />
                Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-12 text-white text-center">Send us a Message</h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#00d4ff]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#00d4ff]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#00d4ff]"
                    placeholder="+60 XXX XXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#00d4ff]"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Industry
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#00d4ff]"
                  >
                    <option value="">Select your industry</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Government">Government</option>
                    <option value="Commercial">Commercial Buildings</option>
                    <option value="DataCentre">Data Centre</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Education">Education</option>
                    <option value="Infrastructure">Infrastructure</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#00d4ff]"
                  >
                    <option value="">Select service type</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Maintenance Services">Maintenance Services</option>
                    <option value="Testing & Commissioning">Testing & Commissioning</option>
                    <option value="Power Solutions">Power Solutions</option>
                    <option value="Transformer Services">Transformer Services</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#00d4ff]"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-pmx"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Service Hours Section - Light */}
      <section className="section-full section-light">
        <div className="section-content">
          <h2 className="mb-12 text-slate-900 text-center">Service Hours & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <h3 className="text-lg font-bold text-[#1e5a96] mb-4">Business Hours</h3>
              <p className="text-slate-600 mb-2">Monday - Friday</p>
              <p className="text-2xl font-bold text-[#00d4ff] mb-4">8:00 AM - 6:00 PM</p>
              <p className="text-slate-600 text-sm">Malaysia Standard Time (MST)</p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <h3 className="text-lg font-bold text-[#1e5a96] mb-4">Emergency Support</h3>
              <p className="text-slate-600 mb-2">Available 24/7</p>
              <p className="text-2xl font-bold text-[#00d4ff] mb-4">Round the Clock</p>
              <p className="text-slate-600 text-sm">For critical issues and emergencies</p>
            </div>
            <div className="bg-white p-8 border border-gray-200 rounded text-center">
              <h3 className="text-lg font-bold text-[#1e5a96] mb-4">Response Time</h3>
              <p className="text-slate-600 mb-2">Standard Inquiries</p>
              <p className="text-2xl font-bold text-[#00d4ff] mb-4">Within 24 Hours</p>
              <p className="text-slate-600 text-sm">We prioritize urgent matters</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="section-full section-dark">
        <div className="section-content">
          <h2 className="mb-6 text-white">Ready to Get Started?</h2>
          <p className="text-lg text-gray-100 mb-8">
            Our team is ready to discuss your project and provide tailored solutions for your needs.
          </p>
          <Link href="/" className="btn-pmx inline-block">
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
