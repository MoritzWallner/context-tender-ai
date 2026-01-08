import type React from "react"
import FramedCard from "./FramedCard"

const ChatInterfaceSection: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FramedCard variant="default">
          <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-100/30 border border-slate-100 flex flex-col lg:flex-row">
            <div className="p-16 lg:w-1/2 flex flex-col justify-center">
              <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
                Accessibility
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                Bring your marketing everywhere
              </h2>
              <p className="text-slate-500 text-lg mb-12 leading-relaxed">
                AlpX is available anytime, everywhere. Take control, drop ideas, and ask for insights 24/7 through your
                favorite platforms.
              </p>

              <div className="flex flex-wrap gap-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-3.5 hover:border-blue-300 transition-colors">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
                      alt="Slack"
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Slack</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-3.5 hover:border-blue-300 transition-colors">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_Logo.svg"
                      alt="Teams"
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Teams</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center p-3.5 hover:border-blue-300 transition-colors">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">WhatsApp</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-slate-50 p-12 flex items-center justify-center relative overflow-hidden">
              <div className="relative z-10 w-72 md:w-80 aspect-[1/2] bg-slate-950 rounded-[3rem] border-[12px] border-slate-900 shadow-2xl overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-8 bg-slate-900 flex justify-center items-center">
                  <div className="w-24 h-5 bg-black rounded-full"></div>
                </div>
                <div className="h-full bg-slate-50 p-6 pt-12">
                  <div className="space-y-6">
                    <div className="flex justify-end">
                      <div className="bg-blue-600 text-white px-5 py-4 rounded-3xl rounded-tr-none text-xs max-w-[85%] font-medium shadow-lg">
                        Hi AlpX, recreate this ad style for our upcoming winter launch.
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center text-[10px] font-bold text-white">
                          A
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AlpX Bot</span>
                      </div>
                      <div className="bg-white border border-slate-100 text-slate-800 px-5 py-4 rounded-3xl rounded-tl-none text-xs max-w-[85%] font-medium shadow-sm">
                        Style captured. I've generated 4 high-converting variations.
                      </div>
                      <div className="mt-4 w-full aspect-square bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100">
                        <img
                          src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=400"
                          className="w-full h-full object-cover"
                          alt="Phone UI"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative radial gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
            </div>
          </div>
        </FramedCard>
      </div>
    </section>
  )
}

export default ChatInterfaceSection
