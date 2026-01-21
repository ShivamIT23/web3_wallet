import { Button } from "../ui/button"

function CTA() {
  return (
    <section className="w-full py-24 md:py-32 px-[2vw]">
      <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-12 md:p-20 text-center space-y-8 backdrop-blur-sm relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#1e1e1e] dark:text-[#e0e0e0] relative z-10">
          Ready to Secure Your Assets?
        </h2>
        <p className="text-xl text-muted-foreground opacity-80 max-w-2xl mx-auto relative z-10">
          Join thousands of users who trust Wallet Guardian for their crypto security needs. 
          Start your journey today.
        </p>
        <div className="relative z-10 pt-4">
          <Button size="lg" className="text-lg px-10 py-7 font-bold rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105">
            Create Free Account
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTA
