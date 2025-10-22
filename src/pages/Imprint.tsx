import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Imprint = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/50 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">tender.match</span>
          </Link>
        </div>
      </nav>

      {/* Imprint Content */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Impressum</h1>

          <div className="space-y-8 text-slate-300">
            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2">
                <p>Moritz Wallner</p>
                <p>Schrammelgasse 79</p>
                <p>1170 Wien</p>
                <p>Austria</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-4">Kontakt</h2>
              <div className="space-y-2">
                <p><strong className="text-white">E-Mail:</strong> moritz.wallner@juhuu.app</p>
                <p><strong className="text-white">Telefon:</strong> +49 176 82095563</p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>Moritz Wallner</p>
              <p>Schrammelgasse 79, 1170 Wien, Austria</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-4">Streitschlichtung</h2>
              <p className="leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 ml-1"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                . Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-4">Haftung für Inhalte</h2>
              <p className="leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-4">Haftung für Links</h2>
              <p className="leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte
                auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-2xl backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-4">Urheberrecht</h2>
              <p className="leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                Autors bzw. Erstellers.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all rounded-lg font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Imprint;
