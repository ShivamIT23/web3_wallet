import { Shield, Zap, Users, Lock, Globe, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "Military-grade encryption and multi-layer security protocols protect your assets 24/7."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience instant transactions with our optimized blockchain infrastructure."
  },
  {
    icon: Users,
    title: "User Centric",
    description: "Designed with you in mind. Simple, intuitive, and accessible for everyone."
  },
  {
    icon: Lock,
    title: "Privacy Focused",
    description: "Your data is yours. We never share or sell your personal information."
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Access your wallet from anywhere in the world, anytime you need it."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly evolving with the latest Web3 technologies and best practices."
  }
]

function Mission() {
  return (
    <section className="w-full max-w-6xl mx-auto px-[2vw] py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Our Core Values
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          The principles that guide everything we do at Wallet Guardian
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div
            key={index}
            className="group glass-frosted rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <value.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {value.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Mission
