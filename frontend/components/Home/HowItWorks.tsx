import { Button } from "../ui/button"
import { UserPlus, Wallet, ArrowRightLeft } from "lucide-react"

function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "1. Create Account",
      description: "Sign up in seconds using your email or social accounts. No complicated KYC required for basic usage."
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "2. Connect or Generate",
      description: "Connect your existing wallets or generate a new secure wallet with a single click."
    },
    {
      icon: <ArrowRightLeft className="w-8 h-8" />,
      title: "3. Start Transacting",
      description: "Send, receive, and swap assets instantly with low fees and high security."
    }
  ]

  return (
    <section className="w-full bg-black/5 dark:bg-white/5 py-24">
      <div className="flex flex-col items-center max-w-[calc(1280px+2vw)] px-[2vw] md:mx-auto gap-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-[#1e1e1e] dark:text-[#e0e0e0]">How It Works</h2>
          <p className="text-lg text-muted-foreground opacity-70 max-w-2xl mx-auto">
            Getting started with Web3 has never been easier. Follow these simple steps to secure your future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10 gap-6">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white dark:bg-[#1e1e1e] border-4 border-primary/20 shadow-lg text-primary">
                {step.icon}
              </div>
              <div className="space-y-3 px-4">
                <h3 className="text-2xl font-bold text-[#1e1e1e] dark:text-[#e0e0e0]">{step.title}</h3>
                <p className="text-muted-foreground opacity-80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <Button className="mt-8 font-bold text-lg px-8 py-6 rounded-full hover:scale-105 transition-transform" size="lg">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}

export default HowItWorks
