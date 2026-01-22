import { BookOpen } from "lucide-react"

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto px-[2vw] py-16">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent font-medium mb-8">
        <BookOpen className="mr-2 h-4 w-4" />
        <span>Latest Insights</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1e1e1e] dark:text-[#e0e0e0] leading-[1.1] mb-6">
        Our{" "}
        <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">
          Blog
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-muted-foreground opacity-80 max-w-2xl leading-relaxed">
        Stay updated with the latest news, tutorials, and insights about Web3, 
        cryptocurrency security, and blockchain technology.
      </p>
    </section>
  )
}

export default Hero
