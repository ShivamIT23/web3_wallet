import { Sparkles } from "lucide-react"

function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto px-[2vw] py-16">
      {/* Badge */}
      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary font-medium mb-8">
        <Sparkles className="mr-2 h-4 w-4" />
        <span>About Wallet Guardian</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#1e1e1e] dark:text-[#e0e0e0] leading-[1.1] mb-6">
        Revolutionizing{" "}
        <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
          Web3 Security
        </span>
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-muted-foreground opacity-80 max-w-2xl leading-relaxed">
        We&apos;re on a mission to make cryptocurrency accessible, secure, and intuitive 
        for everyone. Our team of experts is dedicated to building the future of digital asset management.
      </p>
    </section>
  )
}

export default Hero
