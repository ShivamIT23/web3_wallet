import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight, ShieldCheck } from "lucide-react"

function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-20 pb-32 md:pt-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-50"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] opacity-50"></div>
        </div>

        <div className="container px-4 md:px-6 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-24">
            
            {/* Text Content */}
            <div className="flex flex-col items-start space-y-8 flex-1">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                    <ShieldCheck className="mr-2 h-4 w-4" />
                    <span>Secure. Fast. Reliable.</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#1e1e1e] dark:text-[#e0e0e0] leading-[1.1]">
                    The Future of <br className="hidden md:block" />
                    <span className="bg-linear-to-r from-primary to-blue-600 bg-clip-text text-transparent">Digital Assets</span>
                </h1>
                
                <p className="text-xl text-muted-foreground opacity-80 max-w-lg leading-relaxed">
                    Wallet Guardian provides the most secure and intuitive way to manage your crypto portfolio. 
                    Your security is our top priority.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Button size="lg" className="rounded-full px-8 py-6 text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all">
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg font-bold hover:bg-secondary/50 backdrop-blur-sm">
                        Learn More
                    </Button>
                </div>

                <div className="pt-4 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                                <span className="text-[10px]">U{i}</span>
                            </div>
                        ))}
                    </div>
                    <span>Trusted by 50,000+ users</span>
                </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 relative w-full flex justify-center md:justify-end">
                <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
                    {/* Glowing effect behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-full blur-[60px] animate-pulse"></div>
                    
                    <Image 
                        alt="Wallet Guardian Interface" 
                        src={"/logo_main.png"} 
                        width={500} 
                        height={500}
                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero