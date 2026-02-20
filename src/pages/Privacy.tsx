"use client"

import Navbar from "@/components/NavbarNew"
import Footer from "@/components/Footer"
import AnimatedBackground from "@/components/AnimatedBackground"

const Privacy = () => {
  return (
    <div className="min-h-screen text-slate-900 overflow-x-hidden relative">
      <AnimatedBackground />
      <div className="relative z-10">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Legal</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-500">Last updated: February 2026</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="bg-slate-50 rounded-2xl p-8 mb-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed">
                AlpX Technologies FlexCo ("we", "us", "our") operates tender.match and company.match. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, in compliance with the General Data Protection Regulation (GDPR) and Austrian data protection laws.
              </p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Data Controller</h2>
              <p className="text-slate-600 mb-4">The data controller responsible for your personal data is:</p>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <p className="text-slate-700 font-medium">AlpX Technologies FlexCo</p>
                <p className="text-slate-600">Schrammelgasse 79</p>
                <p className="text-slate-600">1170 Vienna, Austria</p>
                <p className="text-slate-600">Email: privacy@alpxtechnologies.com</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
              <p className="text-slate-600 mb-4">We may collect the following categories of personal data:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                <li><strong>Account Data:</strong> Login credentials, preferences, settings</li>
                <li><strong>Usage Data:</strong> Pages visited, features used, time spent on platform</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information</li>
                <li><strong>Communication Data:</strong> Messages, feedback, support inquiries</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Legal Basis for Processing</h2>
              <p className="text-slate-600 mb-4">We process your personal data based on:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Contract Performance (Art. 6(1)(b) GDPR):</strong> To provide our services</li>
                <li><strong>Legitimate Interest (Art. 6(1)(f) GDPR):</strong> To improve our services and communicate with you</li>
                <li><strong>Consent (Art. 6(1)(a) GDPR):</strong> For marketing communications (where applicable)</li>
                <li><strong>Legal Obligation (Art. 6(1)(c) GDPR):</strong> To comply with legal requirements</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How We Use Your Data</h2>
              <p className="text-slate-600 mb-4">We use your personal data to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your waitlist registration and communicate about early access</li>
                <li>Send service-related notifications</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Sharing</h2>
              <p className="text-slate-600 mb-4">We may share your data with:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Service Providers:</strong> Hosting, analytics, and email service providers</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger or acquisition</li>
              </ul>
              <p className="text-slate-600 mt-4">We do not sell your personal data to third parties.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Retention</h2>
              <p className="text-slate-600">
                We retain your personal data only for as long as necessary for the purposes outlined in this policy, or as required by law. Waitlist data is retained until you request deletion or until the service launches and you decide whether to become a customer.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights (GDPR)</h2>
              <p className="text-slate-600 mb-4">Under GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Request correction of inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
                <li><strong>Restriction:</strong> Request limitation of processing</li>
                <li><strong>Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Object:</strong> Object to processing based on legitimate interest</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="text-slate-600 mt-4">To exercise these rights, contact us at privacy@alpxtechnologies.com</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Cookies</h2>
              <p className="text-slate-600 mb-4">
                We use essential cookies to ensure our website functions properly. We may also use analytics cookies with your consent to understand how visitors interact with our website.
              </p>
              <p className="text-slate-600">
                You can control cookie preferences through your browser settings. Disabling cookies may affect website functionality.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Data Security</h2>
              <p className="text-slate-600">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encryption, access controls, and regular security assessments.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. International Transfers</h2>
              <p className="text-slate-600">
                Your data may be processed in countries outside the EEA. When this occurs, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Supervisory Authority</h2>
              <p className="text-slate-600 mb-4">
                You have the right to lodge a complaint with a supervisory authority. For Austria:
              </p>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <p className="text-slate-700 font-medium">Österreichische Datenschutzbehörde</p>
                <p className="text-slate-600">Barichgasse 40-42</p>
                <p className="text-slate-600">1030 Vienna, Austria</p>
                <p className="text-slate-600">Website: dsb.gv.at</p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Changes to This Policy</h2>
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Contact Us</h2>
              <p className="text-slate-600 mb-4">For questions about this Privacy Policy or our data practices, contact us:</p>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <p className="text-slate-600">Email: privacy@alpxtechnologies.com</p>
                <p className="text-slate-600">Phone: +43 660 9919 009</p>
                <p className="text-slate-600">Address: Schrammelgasse 79, 1170 Vienna, Austria</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </div>
  )
}

export default Privacy
