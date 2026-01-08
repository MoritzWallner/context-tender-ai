import React from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Digital Marketing",
    excerpt: "Discover how generative AI is transforming how brands connect with their audiences and what it means for the next decade of growth.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    category: "AI & Technology",
    date: "May 12, 2025"
  },
  {
    id: 2,
    title: "Scaling Your Ad Campaigns Without Burning Cash",
    excerpt: "Manual budget management is a relic of the past. Learn how automated optimization ensures every dollar works harder.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800",
    category: "Performance",
    date: "May 10, 2025"
  },
  {
    id: 3,
    title: "High-Converting Landing Pages: A Data-Driven Guide",
    excerpt: "What makes a user click? We analyzed 5,000 top-performing landers to find the common patterns of success.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "Design",
    date: "May 08, 2025"
  },
  {
    id: 4,
    title: "Market Intelligence: The Secret Weapon of Top Brands",
    excerpt: "Why the most successful companies spend more time researching their competitors than looking at their own data.",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800",
    category: "Strategy",
    date: "May 05, 2025"
  },
  {
    id: 5,
    title: "Creative Automation: Human Ideas, Machine Speed",
    excerpt: "The perfect synergy between human creativity and AI execution. How to 10x your output without losing brand soul.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    category: "Creative",
    date: "May 01, 2025"
  },
  {
    id: 6,
    title: "The Death of the Tracking Pixel?",
    excerpt: "How server-side tracking and first-party data are saving marketing in a privacy-first world.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    category: "Privacy",
    date: "April 28, 2025"
  }
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <div className="group flex flex-col h-full bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500">
    <div className="aspect-[16/10] overflow-hidden relative">
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
      />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-widest shadow-sm">
          {post.category}
        </span>
      </div>
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <span className="text-[11px] font-semibold text-slate-400 mb-3">{post.date}</span>
      <h3 className="text-xl font-bold text-slate-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
        {post.title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
        {post.excerpt}
      </p>
      <button className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:gap-3 transition-all duration-300">
        Read More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
);

const BlogPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Blog Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20">
        <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">AlpX Blog</span>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight max-w-4xl mx-auto">
          Insights from the future of marketing
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          The latest trends, research, and strategies from our team of AI experts and performance marketers.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
