import Image from "next/image"
import { Button } from "../ui/button"

function Hero() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center w-full md:mx-auto px-[2vw] gap-20">
        <div className="flex flex-col items-start justify-center h-fit gap-4">
            <h1 className="text-6xl font-bold text-[#1e1e1e] dark:text-[#e0e0e0] tracking-[-1px] leading-[0.8em]">Welcome to <span className="text-primary">Wallet Guardian</span></h1>
            <p className="text-2xl text-muted-foreground opacity-70 pl-1">Your security is our priority</p>
            <Button variant={"outline"} className="glass-frosted font-heading font-bold hover:scale-105 transition-all origin-top duration-300">Get Started</Button>
        </div>
        <div>
            <Image alt="Logo" src={"/logo_main.png"} width={400} height={400}></Image>
        </div>
    </section>
  )
}

export default Hero