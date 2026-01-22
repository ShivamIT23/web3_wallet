import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Web3 Wallet Security: A Complete Guide",
    excerpt: "Learn the essential security practices to keep your digital assets safe in the decentralized world.",
    category: "Security",
    date: "Jan 20, 2026",
    readTime: "8 min read",
    image: "/blog/security.webp",
    featured: true
  },
  {
    id: 2,
    title: "The Future of DeFi: Trends to Watch in 2026",
    excerpt: "Explore the emerging trends and innovations shaping the decentralized finance landscape.",
    category: "DeFi",
    date: "Jan 18, 2026",
    readTime: "6 min read",
    image: "/blog/defi.webp",
    featured: false
  },
  {
    id: 3,
    title: "NFTs Beyond Art: Real-World Applications",
    excerpt: "Discover how NFT technology is transforming industries beyond digital art and collectibles.",
    category: "NFTs",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    image: "/blog/nft.webp",
    featured: false
  },
  {
    id: 4,
    title: "Getting Started with Wallet Guardian",
    excerpt: "A step-by-step tutorial to set up and secure your first Web3 wallet with our platform.",
    category: "Tutorial",
    date: "Jan 12, 2026",
    readTime: "10 min read",
    image: "/blog/tutorial.webp",
    featured: false
  },
  {
    id: 5,
    title: "Layer 2 Solutions Explained",
    excerpt: "Understanding scaling solutions and how they improve blockchain performance and reduce fees.",
    category: "Technology",
    date: "Jan 10, 2026",
    readTime: "7 min read",
    image: "/blog/layer2.webp",
    featured: false
  },
  {
    id: 6,
    title: "Smart Contract Auditing Best Practices",
    excerpt: "Essential practices for ensuring your smart contracts are secure and bug-free.",
    category: "Security",
    date: "Jan 8, 2026",
    readTime: "9 min read",
    image: "/blog/audit.webp",
    featured: false
  }
]

const categoryColors: Record<string, string> = {
  Security: "bg-red-500/10 text-red-500 border-red-500/20",
  DeFi: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  NFTs: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  Tutorial: "bg-green-500/10 text-green-500 border-green-500/20",
  Technology: "bg-orange-500/10 text-orange-500 border-orange-500/20"
}

function BlogList() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section className="w-full max-w-6xl mx-auto px-[2vw] py-8">
      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Featured Article
          </h2>
          <Link href={`/blog/${featuredPost.id}`} className="group block">
            <div className="glass-frosted rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-xl hover:shadow-primary/10">
              <div className="flex flex-col md:flex-row">
                {/* Image Placeholder */}
                <div className="w-full md:w-1/2 h-64 md:h-auto bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/30">WG</div>
                </div>
                
                {/* Content */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <span className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[featuredPost.category]}`}>
                    {featuredPost.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-4 mb-3 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Regular Posts Grid */}
      <div>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
          Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group"
            >
              <article className="glass-frosted rounded-2xl overflow-hidden h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10">
                {/* Image Placeholder */}
                <div className="h-40 bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-3xl font-bold text-primary/20">WG</div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium border ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-3 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList
