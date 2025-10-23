import { useState, useEffect } from "react";
import { Zap, Target, Users, Clock, TrendingUp, Shield, CheckCircle, ArrowRight, Sparkles, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    position: "",
    size: "",
    canMention: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [dashboardAnimated, setDashboardAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDashboardAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    if (formData.email && formData.company && formData.name) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/50 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold">{t('nav.brandName')}</span>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
              className="flex items-center gap-2"
            >
              <Languages className="w-4 h-4" />
              {i18n.language === 'en' ? 'DE' : 'EN'}
            </Button>
            <Button
              onClick={() => scrollToSection("waitlist")}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all"
            >
              {t('nav.joinWaitlist')}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
            {t('hero.badge')}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('hero.title1')}
            </span>
            <br />
            <span className="text-white">{t('hero.title2')}</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("waitlist")}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("how-it-works")}
              variant="outline"
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all"
            >
              {t('hero.ctaSecondary')}
            </Button>
          </div>

          {/* Floating Preview Cards */}
          <div className="relative max-w-4xl mx-auto mb-12 h-64 md:h-80">
            {/* Card 1 - Left */}
            <div className="absolute left-0 top-10 md:top-20 w-48 md:w-64 p-4 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-white/20 rounded-2xl backdrop-blur-xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-xs font-bold">
                  94%
                </div>
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-[94%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/30 rounded w-full"></div>
                <div className="h-2 bg-white/20 rounded w-3/4"></div>
                <div className="h-2 bg-white/10 rounded w-1/2"></div>
              </div>
              <div className="mt-3 flex gap-1">
                <div className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300">EU Project</div>
                <div className="px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-300">Tech</div>
              </div>
            </div>

            {/* Card 2 - Center */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-56 md:w-72 p-5 bg-gradient-to-br from-slate-800/95 to-slate-900/95 border border-blue-500/30 rounded-2xl backdrop-blur-xl shadow-2xl z-30 hover:scale-105 transition-all duration-500">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-sm font-bold">
                  97%
                </div>
                <div className="flex-1">
                  <div className="text-xs text-green-400 font-semibold mb-1">Perfect Match</div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-[97%]"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2.5 bg-white/40 rounded w-full"></div>
                <div className="h-2 bg-white/30 rounded w-4/5"></div>
                <div className="h-2 bg-white/20 rounded w-3/5"></div>
              </div>
              <div className="mt-4 flex gap-1.5">
                <div className="px-2 py-1 bg-green-500/20 border border-green-500/30 rounded text-xs text-green-300">
                  Main Contractor
                </div>
                <div className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300">Infrastructure</div>
              </div>
            </div>

            {/* Card 3 - Right */}
            <div className="absolute right-0 top-16 md:top-24 w-48 md:w-64 p-4 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-white/20 rounded-2xl backdrop-blur-xl shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500 hover:scale-105 z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-xs font-bold">
                  88%
                </div>
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[88%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/30 rounded w-full"></div>
                <div className="h-2 bg-white/20 rounded w-2/3"></div>
                <div className="h-2 bg-white/10 rounded w-1/3"></div>
              </div>
              <div className="mt-3 flex gap-1">
                <div className="px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-300">Partner</div>
                <div className="px-2 py-1 bg-orange-500/20 rounded text-xs text-orange-300">Energy</div>
              </div>
            </div>

            {/* Glow Effects */}
            <div className="absolute left-1/4 top-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute right-1/4 top-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>{t('hero.benefit1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>{t('hero.benefit2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>{t('hero.benefit3')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('problem.title')}</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t('problem.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Clock,
                title: t('problem.timeDrain.title'),
                desc: t('problem.timeDrain.desc'),
                color: "from-red-500 to-orange-500",
                stat: t('problem.timeDrain.stat'),
                statLabel: t('problem.timeDrain.statLabel'),
                visual: (
                  <div className="flex items-end justify-center gap-1 h-12">
                    {[30, 50, 70, 60, 80, 90, 85].map((h, i) => (
                      <div
                        key={i}
                        className="w-1.5 bg-gradient-to-t from-red-500 to-orange-400 rounded-t"
                        style={{ height: `${h}%` }}
                      ></div>
                    ))}
                  </div>
                ),
              },
              {
                icon: Target,
                title: t('problem.fragmented.title'),
                desc: t('problem.fragmented.desc'),
                color: "from-orange-500 to-yellow-500",
                stat: t('problem.fragmented.stat'),
                statLabel: t('problem.fragmented.statLabel'),
                visual: (
                  <div className="flex items-center justify-center gap-2 h-12">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <div className="text-slate-400 text-xs">...</div>
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  </div>
                ),
              },
              {
                icon: TrendingUp,
                title: t('problem.missed.title'),
                desc: t('problem.missed.desc'),
                color: "from-yellow-500 to-green-500",
                stat: t('problem.missed.stat'),
                statLabel: t('problem.missed.statLabel'),
                visual: (
                  <div className="flex items-center justify-center h-12">
                    <div className="relative w-full">
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-500 to-green-500 w-[30%]"></div>
                      </div>
                      <div className="text-xs text-slate-400 mt-2 text-center">{t('problem.missed.visual')}</div>
                    </div>
                  </div>
                ),
              },
            ].map((problem, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden p-6 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-white/10"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${problem.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <problem.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-2xl font-bold bg-gradient-to-r ${problem.color} bg-clip-text text-transparent`}
                      >
                        {problem.stat}
                      </div>
                      <div className="text-xs text-slate-400">{problem.statLabel}</div>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/5">{problem.visual}</div>

                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{problem.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 border border-white/10 rounded-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <p className="text-slate-200 font-medium">
                <span className="text-red-300 font-bold">{t('problem.result')}</span> {t('problem.resultText')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('solution.title1')}
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t('solution.title2')}
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {t('solution.subtitle')}
            </p>
          </div>

          {/* Visual Dashboard Mockup */}
          <div className="mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
            <div className="relative p-8 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-white/20 rounded-3xl backdrop-blur-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 mx-4 px-4 py-1 bg-white/5 rounded-lg text-xs text-slate-400 text-center">
                  {t('solution.dashboard.url')}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="h-3 w-32 bg-gradient-to-r from-blue-400 to-blue-600 rounded"></div>
                    <div className="h-2 w-48 bg-white/10 rounded"></div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className={`bg-blue-500 hover:bg-blue-600 text-xs transition-all ${
                        dashboardAnimated ? "scale-95 opacity-70" : "scale-100 opacity-100"
                      }`}
                    >
                      {t('solution.dashboard.search')}
                    </Button>
                    <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-300">
                      {t('solution.dashboard.live')}
                    </div>
                    <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300">
                      {t('solution.dashboard.aiActive')}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { score: 95, color: "from-green-500 to-emerald-600", label: t('solution.dashboard.perfectMatch') },
                    { score: 87, color: "from-blue-500 to-cyan-600", label: t('solution.dashboard.highMatch') },
                    { score: 78, color: "from-purple-500 to-pink-600", label: t('solution.dashboard.goodMatch') },
                  ].map((match, idx) => (
                    <div
                      key={idx}
                      className={`p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group transform ${
                        dashboardAnimated ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}
                      style={{
                        transitionProperty: "all",
                        transitionDuration: "0.5s",
                        transitionTimingFunction: "ease-out",
                        transitionDelay: dashboardAnimated ? `${(idx + 1) * 150}ms` : "0ms",
                      }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="h-2 w-3/4 bg-white/30 rounded mb-2"></div>
                          <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                        </div>
                        <div
                          className={`px-3 py-1 bg-gradient-to-r ${match.color} rounded-full text-xs font-bold text-white`}
                        >
                          {match.score}% Match
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="h-1.5 flex-1 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${match.color}`}
                            style={{ width: `${match.score}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-20 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-20 -left-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - tender.match and company.match cards */}
            <div className="space-y-6">
              {/* tender.match card */}
              <div className="relative p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-blue-500/30 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">tender.match</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Our AI understands your complete business context: products, services, locations, references, and formal requirements. It analyzes full tender descriptions and calculates precise matching scores showing whether you're suited as main contractor, subcontractor, or consortium partner.
                </p>
              </div>

              {/* company.match card */}
              <div className="relative p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-purple-500/30 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">company.match</h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">
                  Automatically identifies potential partners for consortiums or subcontracts. Data-driven recommendations help you find the missing pieces to win larger projects you couldn't tackle alone.
                </p>
              </div>
            </div>

            {/* Right Column - Why Both Matter */}
            <div className="relative p-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-3xl font-bold mb-8 text-white">Why Both Matter</h3>
              <div className="space-y-6">
                {[
                  "Deep context understanding of your capabilities",
                  "Full tender description analysis (not just titles)",
                  "Precise matching scores for every opportunity",
                  "Automatic partner recommendations",
                  "Continuous monitoring across all portals",
                  "Real-time consortium opportunity alerts",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-green-500/30">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-200 text-lg group-hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('benefits.title')}</h2>
            <p className="text-xl text-slate-300">{t('benefits.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                label: t('benefits.advantages.timeEfficiency.label'),
                desc: t('benefits.advantages.timeEfficiency.desc'),
                gradient: "from-blue-500 to-cyan-500",
                visual: (
                  <div className="relative h-32 flex items-end justify-center gap-1.5 px-4">
                    {[25, 45, 65, 80, 95, 85, 90].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg transition-all duration-300 hover:scale-110 shadow-lg shadow-blue-500/30"
                        style={{ height: `${height}%`, maxWidth: "16px" }}
                      ></div>
                    ))}
                  </div>
                ),
              },
              {
                label: t('benefits.advantages.moreOpportunities.label'),
                desc: t('benefits.advantages.moreOpportunities.desc'),
                gradient: "from-green-500 to-emerald-500",
                visual: (
                  <div className="relative h-32 flex items-center justify-center gap-4">
                    <div className="space-y-2">
                      <div className="w-12 h-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg shadow-green-500/30"></div>
                      <div className="w-16 h-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg shadow-green-500/30"></div>
                      <div className="w-20 h-2.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg shadow-green-500/30"></div>
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                      3x
                    </div>
                  </div>
                ),
              },
              {
                label: t('benefits.advantages.expandIndustry.label'),
                desc: t('benefits.advantages.expandIndustry.desc'),
                gradient: "from-purple-500 to-pink-500",
                visual: (
                  <div className="relative h-32 flex items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold shadow-lg shadow-purple-500/40 border-2 border-white/20">
                      A
                    </div>
                    <div className="text-2xl text-slate-400">→</div>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-xs font-bold shadow-lg shadow-blue-500/40 border-2 border-white/20">
                      B
                    </div>
                    <div className="text-2xl text-slate-400">→</div>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-xs font-bold shadow-lg shadow-green-500/40 border-2 border-white/20">
                      C
                    </div>
                  </div>
                ),
              },
            ].map((advantage, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl transition-all duration-500">
                <div className="relative p-8 bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-md border border-white/15 rounded-3xl hover:from-white/12 hover:to-white/5 hover:border-white/30 transition-all duration-500 h-full shadow-xl hover:shadow-2xl hover:shadow-white/5 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-8 p-6 rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors duration-300 bg-gradient-to-br from-white/5 to-white/0 shadow-lg">
                      {advantage.visual}
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors duration-300">
                      {advantage.label}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed flex-1 group-hover:text-slate-200 transition-colors duration-300">
                      {advantage.desc}
                    </p>

                    <div
                      className={`mt-8 h-1.5 bg-gradient-to-r ${advantage.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-current/50`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: t('benefits.cards.saveTime.title'),
                desc: t('benefits.cards.saveTime.desc'),
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Target,
                title: t('benefits.cards.precision.title'),
                desc: t('benefits.cards.precision.desc'),
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Users,
                title: t('benefits.cards.partnerships.title'),
                desc: t('benefits.cards.partnerships.desc'),
                gradient: "from-green-500 to-emerald-500",
              },
              {
                icon: TrendingUp,
                title: t('benefits.cards.expansion.title'),
                desc: t('benefits.cards.expansion.desc'),
                gradient: "from-orange-500 to-red-500",
              },
              {
                icon: Shield,
                title: t('benefits.cards.deadlines.title'),
                desc: t('benefits.cards.deadlines.desc'),
                gradient: "from-indigo-500 to-blue-500",
              },
              {
                icon: Sparkles,
                title: t('benefits.cards.intelligence.title'),
                desc: t('benefits.cards.intelligence.desc'),
                gradient: "from-pink-500 to-rose-500",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl transition-all duration-500">
                <div className="relative p-6 bg-gradient-to-br from-white/6 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/25 transition-all duration-500 h-full shadow-lg hover:shadow-xl hover:shadow-white/5 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-125 transition-all duration-300 shadow-lg`}
                    >
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold mb-3 group-hover:text-white transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {benefit.desc}
                    </p>

                    <div
                      className={`mt-4 h-0.5 bg-gradient-to-r ${benefit.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-950">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('waitlist.title')}</h2>
            <p className="text-xl text-slate-300">{t('waitlist.subtitle')}</p>
          </div>

          <div className="p-8 md:p-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-3xl backdrop-blur-sm">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{t('waitlist.success.title')}</h3>
                <p className="text-slate-300">{t('waitlist.success.message')}</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-base">{t('waitlist.form.company')} {t('waitlist.form.required')}</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder={t('waitlist.form.companyPlaceholder')}
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-slate-900/50 border-white/10 h-12 text-base placeholder:text-slate-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">{t('waitlist.form.name')} {t('waitlist.form.required')}</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t('waitlist.form.namePlaceholder')}
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-900/50 border-white/10 h-12 text-base placeholder:text-slate-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">{t('waitlist.form.email')} {t('waitlist.form.required')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('waitlist.form.emailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-900/50 border-white/10 h-12 text-base placeholder:text-slate-500"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="position" className="text-base">{t('waitlist.form.position')}</Label>
                    <Input
                      id="position"
                      name="position"
                      placeholder={t('waitlist.form.positionPlaceholder')}
                      value={formData.position}
                      onChange={handleChange}
                      className="bg-slate-900/50 border-white/10 h-12 text-base placeholder:text-slate-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="size" className="text-base">{t('waitlist.form.size')}</Label>
                    <select
                      id="size"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      className="flex h-12 w-full rounded-md border border-white/10 bg-slate-900/50 px-3 py-2 text-base text-white"
                    >
                      <option value="">{t('waitlist.form.sizeOptions.default')}</option>
                      <option value="1-10">{t('waitlist.form.sizeOptions.1-10')}</option>
                      <option value="11-50">{t('waitlist.form.sizeOptions.11-50')}</option>
                      <option value="51-200">{t('waitlist.form.sizeOptions.51-200')}</option>
                      <option value="201-500">{t('waitlist.form.sizeOptions.201-500')}</option>
                      <option value="500+">{t('waitlist.form.sizeOptions.500+')}</option>
                    </select>
                  </div>
                </div>

                {/* Info box */}
                <div className="p-6 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{t('waitlist.info.title')}</h4>
                      <p className="text-sm text-slate-300">
                        {t('waitlist.info.desc')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Checkbox with enhanced benefits */}
                <div className="p-6 bg-slate-900/50 border border-white/10 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="canMention"
                      checked={formData.canMention}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({ ...prev, canMention: checked as boolean }))
                      }
                      className="mt-1"
                    />
                    <label htmlFor="canMention" className="text-sm text-slate-300 cursor-pointer flex-1">
                      <span className="font-medium text-white">{t('waitlist.checkbox.label')}</span>
                      <br />
                      <span className="text-blue-400">{t('waitlist.checkbox.benefit')}</span>
                    </label>
                  </div>
                </div>

                {/* Early Access Benefits */}
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-white">Early Access Benefits</h4>
                  <div className="space-y-3">
                    {[
                      "2-5 months free access to both platforms",
                      "Priority support during beta phase",
                      "Influence product development with your feedback",
                      "Lock in special early adopter pricing",
                    ].map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all text-lg font-semibold flex items-center justify-center gap-2"
                >
                  {t('waitlist.submitButton')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
