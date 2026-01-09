"use client"

import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const Imprint = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Legal</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Impressum
            </h1>
            <p className="text-slate-500">Legal Disclosure according to Austrian Law</p>
          </div>

          <div className="space-y-8">
            {/* Company Information */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Informationen gemäß § 5 E-Commerce-Gesetz (ECG)
              </h2>
              <div className="space-y-2 text-slate-600">
                <p className="font-semibold text-slate-900">AlpX Technologies GmbH</p>
                <p>Schrammelgasse 79</p>
                <p>1170 Wien</p>
                <p>Österreich / Austria</p>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Kontakt / Contact</h2>
              <div className="space-y-2 text-slate-600">
                <p>
                  <strong className="text-slate-700">E-Mail:</strong>{" "}
                  <a href="mailto:office@alpx.at" className="text-blue-600 hover:text-blue-700">
                    office@alpx.at
                  </a>
                </p>
                <p>
                  <strong className="text-slate-700">Telefon:</strong>{" "}
                  <a href="tel:+436609919009" className="text-blue-600 hover:text-blue-700">
                    +43 660 9919 009
                  </a>
                </p>
              </div>
            </div>

            {/* Company Register */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Firmenbuchdaten / Company Register</h2>
              <div className="space-y-2 text-slate-600">
                <p><strong className="text-slate-700">Rechtsform:</strong> Gesellschaft mit beschränkter Haftung (GmbH)</p>
                <p><strong className="text-slate-700">Firmenbuchgericht:</strong> Handelsgericht Wien</p>
                <p><strong className="text-slate-700">Firmenbuchnummer:</strong> FN [wird nach Gründung ergänzt]</p>
                <p><strong className="text-slate-700">UID-Nummer:</strong> ATU[wird nach Gründung ergänzt]</p>
              </div>
            </div>

            {/* Managing Directors */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Geschäftsführung / Managing Directors</h2>
              <div className="space-y-1 text-slate-600">
                <p>Ben Müller-Niklas</p>
                <p>Moritz Wallner</p>
              </div>
            </div>

            {/* Regulatory Authority */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Aufsichtsbehörde / Regulatory Authority</h2>
              <div className="space-y-2 text-slate-600">
                <p>Magistratisches Bezirksamt des XVII. Bezirkes</p>
                <p>1170 Wien, Österreich</p>
              </div>
            </div>

            {/* Professional Regulations */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Berufsrecht / Professional Regulations</h2>
              <p className="text-slate-600">
                Gewerbeordnung 1994 (GewO): <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">www.ris.bka.gv.at</a>
              </p>
            </div>

            {/* Media Owner */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Medieninhaber gemäß § 25 Mediengesetz
              </h2>
              <div className="space-y-2 text-slate-600">
                <p className="font-semibold text-slate-900">AlpX Technologies GmbH</p>
                <p>Schrammelgasse 79, 1170 Wien, Österreich</p>
                <p className="mt-4"><strong className="text-slate-700">Unternehmensgegenstand:</strong> Entwicklung und Betrieb von Software für die öffentliche Auftragsvergabe</p>
              </div>
            </div>

            {/* Online Dispute Resolution */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Online-Streitbeilegung / Online Dispute Resolution
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
              </p>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              <p className="text-slate-600 leading-relaxed mt-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            {/* Liability for Content */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Haftung für Inhalte / Liability for Content
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 16 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              </p>
            </div>

            {/* Liability for Links */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Haftung für Links / Liability for Links
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            {/* Copyright */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Urheberrecht / Copyright
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Home
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Imprint
