import { Shield, Zap, Globe, Lock, Smartphone, RefreshCw } from "lucide-react"

function Features() {
  const features = [
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Bank-Grade Security",
      description: "We use top-tier encryption and security protocols to ensure your funds and data remain safe at all times."
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Multi-Chain Support",
      description: "Manage assets across multiple blockchains including Ethereum, Solana, and Bitcoin from a single interface."
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Instant Transactions",
      description: "Experience lightning-fast transaction speeds optimized for high performance and low latency."
    },
    {
      icon: <Lock className="w-10 h-10 text-primary" />,
      title: "Non-Custodial",
      description: "You own your private keys. We never have access to your funds, giving you complete control."
    },
    {
      icon: <Smartphone className="w-10 h-10 text-primary" />,
      title: "Mobile First",
      description: "Designed for a seamless experience on all devices, allowing you to manage your portfolio on the go."
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-primary" />,
      title: "Real-Time Updates",
      description: "Stay updated with live price charts and real-time balance updates for all your connected assets."
    }
  ]

  return (
    <section className="flex flex-col items-center w-full max-w-[calc(1280px+2vw)] px-[2vw] md:mx-auto py-20 gap-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-[#1e1e1e] dark:text-[#e0e0e0]">Why Choose Wallet Guardian?</h2>
        <p className="text-lg text-muted-foreground opacity-70 max-w-2xl mx-auto">
          Experience the next generation of web3 asset management with features designed for both security and ease of use.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-start p-6 rounded-2xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-black/40 transition-all duration-300 gap-4 group hover:-translate-y-1">
            <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-[#1e1e1e] dark:text-[#e0e0e0] group-hover:text-primary transition-colors">{feature.title}</h3>
            <p className="text-muted-foreground opacity-80 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
