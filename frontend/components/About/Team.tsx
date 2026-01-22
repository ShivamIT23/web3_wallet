import { Linkedin, Twitter, Github } from "lucide-react"

const team = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "10+ years in blockchain technology and fintech innovation.",
    avatar: "AC"
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    bio: "Former security architect at major crypto exchanges.",
    avatar: "SJ"
  },
  {
    name: "Michael Park",
    role: "Head of Product",
    bio: "UX expert focused on making Web3 accessible.",
    avatar: "MP"
  },
  {
    name: "Emily Davis",
    role: "Lead Engineer",
    bio: "Full-stack developer with deep blockchain expertise.",
    avatar: "ED"
  }
]

function Team() {
  return (
    <section className="w-full max-w-6xl mx-auto px-[2vw] py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Meet Our Team
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A dedicated group of experts passionate about Web3 and security
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="group glass-frosted rounded-2xl p-6 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
          >
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold shadow-lg shadow-primary/25">
              {member.avatar}
            </div>
            
            {/* Info */}
            <h3 className="text-lg font-semibold text-foreground mb-1">
              {member.name}
            </h3>
            <p className="text-primary text-sm font-medium mb-3">
              {member.role}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {member.bio}
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-3">
              <button className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Team
