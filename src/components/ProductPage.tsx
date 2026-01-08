import type React from "react"
import FramedCard from "./FramedCard"

const ProductFeature: React.FC<{
  title: string
  category: string
  description: string
  image: string
  reverse?: boolean
}> = ({ title, category, description, image, reverse }) => (
  <div className={`flex flex-col lg:flex-row items-center gap-16 py-20 ${reverse ? "lg:flex-row-reverse" : ""}`}>
    <div className="lg:w-1/2 space-y-6">
      <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">{category}</span>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">{title}</h2>
      <p className="text-lg text-slate-600 leading-relaxed">{description}</p>
    </div>
    <div className="lg:w-1/2 w-full">
      <FramedCard variant="compact">
        <div className="aspect-[16/10] bg-slate-50 rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-xl">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        </div>
      </FramedCard>
    </div>
  </div>
)

const ProductPage: React.FC = () => {
  return (
    <div className="pt-32 bg-white">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">
          Explore the Platform
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight max-w-4xl mx-auto">
          Every feature built for real performance
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          From research to reporting, everything you need to automate, scale, and optimize performance marketing.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-bold">Talk to Founders</button>
          <button className="px-8 py-3 bg-white border border-slate-200 rounded-lg font-bold">Why AlpX</button>
        </div>
      </section>

      {/* Features List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <ProductFeature
          category="Market Research"
          title="Start with real-time market intelligence"
          description="Analyze top-performing ads, trending topics, and competitor strategies to guide your creative direction with data. AlpX gives you instant access to insights no human team could process. Every campaign starts with an edge."
          image="https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800"
        />
        <ProductFeature
          category="Ad Creation"
          title="Create, iterate, and scale high-performing ads"
          description="Quickly generate ad variations tailored to your brand, product, and goals. AlpX helps you test broad concepts, discover winners fast, and scale them with hyper-personalized creatives to reduce conversion costs."
          image="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=800"
          reverse
        />
        <ProductFeature
          category="Landing Pages & Lead Capture"
          title="Build landing pages that convert faster"
          description="Deploy custom landing pages that match each ad in seconds. Run automated A/B tests, track every interaction, and sync leads directly to your CRM. Never lose momentum in the funnel."
          image="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
        />
        <ProductFeature
          category="Campaign Launch & Management"
          title="Launch and manage campaigns with ease"
          description="Effortlessly go live across multiple channels with brand-safe, compliant ads. AlpX adjusts your budget in real time to maximize ROI. Your money always works where it performs best."
          image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
          reverse
        />
        <ProductFeature
          category="Optimization & Learning Engine"
          title="Campaigns that learn and grow daily"
          description="AlpX continuously improves your targeting and creatives using performance data. It automatically builds new ads, tests variations, and expands high-performing segments, all while cutting what doesn't work."
          image="https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800"
        />
      </section>
    </div>
  )
}

export default ProductPage
